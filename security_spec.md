# Football Live & Results Platform Security Specification

## 1. Data Invariants
1. **User Identity & Isolation**: A user profile document `/users/{userId}` can only be created or modified by the authenticated user whose `request.auth.uid == userId`.
2. **PII Protection**: Standard user profile reads are restricted to the owner (`request.auth.uid == userId`) or an admin (`humilin182@gmail.com`).
3. **Immutability of Author & CreatedAt**: On update of any message or prediction, `userId` and `createdAt` / `submittedAt` cannot be modified.
4. **Community Message Integrity**: A user can only author a `/communityMessages/{messageId}` with `userId == request.auth.uid`. Content must be non-empty and under 500 characters.
5. **Like Action Isolation**: A user updating a message can only increment `likesCount` by 1 and cannot modify `content`, `userId`, or `matchId`.
6. **Prediction Identity Binding**: A user can only submit predictions for themselves (`userId == request.auth.uid`) with valid non-negative goal predictions.
7. **Role Escalation Defense**: Users cannot elevate their own role to `admin`. The role `admin` is strictly reserved for `humilin182@gmail.com` with `email_verified == true`.
8. **Catch-All Default Deny**: All unmapped paths are closed by default with `allow read, write: if false;`.

---

## 2. The Dirty Dozen Payloads (Designed to Break Identity, Integrity, & State)

1. **Payload 1 (Identity Spoofing - Message Author):**
   Unauthenticated user attempts to create a community message with spoofed `userId: "admin-uid"`.
   *Expected: PERMISSION_DENIED*

2. **Payload 2 (Ghost Field Injection - Shadow Update):**
   User updates their profile adding `isAdmin: true` or ghost field `_hacked: true`.
   *Expected: PERMISSION_DENIED*

3. **Payload 3 (ID Poisoning Attack):**
   User attempts to write to `/communityMessages/` with a 2KB junk string ID containing illegal characters.
   *Expected: PERMISSION_DENIED*

4. **Payload 4 (Denial of Wallet - 1MB Message Content):**
   Authenticated user creates a community message with 1MB string exceeding `maxLength: 500`.
   *Expected: PERMISSION_DENIED*

5. **Payload 5 (Author Tampering on Update):**
   User tries to update an existing message changing `userId` to someone else's UID.
   *Expected: PERMISSION_DENIED*

6. **Payload 6 (PII Siphoning Blanket Query):**
   Non-admin user attempts to query the entire `/users` collection without scoping to their own `auth.uid`.
   *Expected: PERMISSION_DENIED*

7. **Payload 7 (Unverified Email Admin Spoofing):**
   Attacker creates an account with email `humilin182@gmail.com` but `email_verified == false` attempting admin write.
   *Expected: PERMISSION_DENIED*

8. **Payload 8 (Negative Goals Prediction):**
   User creates a prediction with `predictedHome: -5` or invalid type.
   *Expected: PERMISSION_DENIED*

9. **Payload 9 (Cross-User Prediction Tampering):**
   User A attempts to update or delete User B's prediction record.
   *Expected: PERMISSION_DENIED*

10. **Payload 10 (Like Manipulation - Tampering Message Content):**
    User claims to "like" a message but alters the `content` field in the same update.
    *Expected: PERMISSION_DENIED*

11. **Payload 11 (Empty Message Injection):**
    User submits a message with `content: ""` violating `minLength: 1`.
    *Expected: PERMISSION_DENIED*

12. **Payload 12 (Direct Write to Catch-All Path):**
    Attacker tries writing directly to arbitrary paths like `/system/settings` or `/database/credentials`.
    *Expected: PERMISSION_DENIED*
