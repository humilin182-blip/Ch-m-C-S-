import {
  db,
  auth,
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  limit,
  handleFirestoreError,
  OperationType
} from './firebase';
import { CommunityMessage } from '../types/football';

export interface MatchPredictionDoc {
  id: string;
  userId: string;
  userName: string;
  matchId: string;
  predictedHome: number;
  predictedAway: number;
  submittedAt: string;
}

/**
 * Real-time listener for community match chatter & fan comments
 */
export function subscribeCommunityMessages(
  onUpdate: (messages: CommunityMessage[]) => void,
  maxItems = 50
): () => void {
  const collectionRef = collection(db, 'communityMessages');
  const q = query(collectionRef, limit(maxItems));

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const msgs: CommunityMessage[] = [];
      snapshot.forEach((d) => {
        const data = d.data();
        msgs.push({
          id: data.id || d.id,
          matchId: data.matchId || '',
          user: data.user || 'Fan',
          avatar: data.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=64&q=80',
          fanOf: data.fanOf || '',
          content: data.content || '',
          timestamp: data.timestamp || 'Vừa xong',
          reactionCount: typeof data.likesCount === 'number' ? data.likesCount : (data.reactionCount || 0),
          userLiked: false
        });
      });
      if (msgs.length > 0) {
        onUpdate(msgs);
      }
    },
    (error) => {
      // Catch and report per skill guideline
      try {
        handleFirestoreError(error, OperationType.GET, 'communityMessages');
      } catch (e) {
        console.warn('Realtime listener fallback:', e);
      }
    }
  );

  return unsubscribe;
}

/**
 * Publish a new community message to Firestore
 */
export async function addCommunityMessageToFirestore(msg: CommunityMessage): Promise<void> {
  const currentUid = auth.currentUser?.uid || 'guest-user';
  const currentUser = auth.currentUser;

  // Defensive constraints as enforced by schema
  const payload = {
    id: msg.id.slice(0, 128),
    matchId: (msg.matchId || 'general').slice(0, 80),
    userId: currentUid.slice(0, 128),
    user: (currentUser?.displayName || msg.user || 'Fan Việt Nam').slice(0, 80),
    avatar: (currentUser?.photoURL || msg.avatar || '').slice(0, 500),
    fanOf: (msg.fanOf || '').slice(0, 80),
    content: msg.content.trim().slice(0, 500),
    timestamp: msg.timestamp.slice(0, 50),
    likesCount: Math.max(0, msg.reactionCount || 1)
  };

  try {
    const docRef = doc(db, 'communityMessages', payload.id);
    await setDoc(docRef, payload);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `communityMessages/${payload.id}`);
  }
}

/**
 * Increment like count for a community message in Firestore
 */
export async function likeCommunityMessageInFirestore(
  messageId: string,
  currentLikes: number
): Promise<void> {
  const path = `communityMessages/${messageId}`;
  try {
    const docRef = doc(db, 'communityMessages', messageId);
    await updateDoc(docRef, {
      likesCount: currentLikes + 1
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

/**
 * Save match score prediction to Firestore
 */
export async function savePredictionToFirestore(
  matchId: string,
  homeScore: number,
  awayScore: number
): Promise<void> {
  const currentUid = auth.currentUser?.uid || `fan-${Date.now()}`;
  const userName = auth.currentUser?.displayName || 'Fan Bóng Đá';
  const predictionId = `pred-${currentUid}-${matchId}`.slice(0, 128);

  const payload: MatchPredictionDoc = {
    id: predictionId,
    userId: currentUid.slice(0, 128),
    userName: userName.slice(0, 80),
    matchId: matchId.slice(0, 80),
    predictedHome: Math.min(50, Math.max(0, Number(homeScore) || 0)),
    predictedAway: Math.min(50, Math.max(0, Number(awayScore) || 0)),
    submittedAt: new Date().toISOString()
  };

  const path = `predictions/${predictionId}`;
  try {
    const docRef = doc(db, 'predictions', predictionId);
    await setDoc(docRef, payload);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}
