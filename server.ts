import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

export const ADMIN_EMAIL = 'humilin182@gmail.com';
export const ADMIN_SECRET = 'humilin182';

const DATA_DIR = path.resolve(__dirname, 'data');
const DATA_FILE = path.resolve(DATA_DIR, 'admin-store.json');

// Default initial leagues (with Champion leauge standardized)
const DEFAULT_LEAGUES = [
  {
    id: 'ucl',
    name: 'Champion leauge',
    shortName: 'Champion leauge',
    country: 'Châu Âu',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=80&q=80',
    flag: '⭐',
    color: '#0e1e5b',
    season: '2026/2027'
  },
  {
    id: 'unl',
    name: 'UEFA Nations League',
    shortName: 'Nations League',
    country: 'Châu Âu',
    logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=80&q=80',
    flag: '🇪🇺',
    color: '#003399',
    season: '2026/2027'
  },
  {
    id: 'epl',
    name: 'Premier League',
    shortName: 'Ngoại Hạng Anh',
    country: 'Anh',
    logo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=80&q=80',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    color: '#3d195b',
    season: '2026/2027'
  },
  {
    id: 'laliga',
    name: 'La Liga EA Sports',
    shortName: 'La Liga',
    country: 'Tây Ban Nha',
    logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=80&q=80',
    flag: '🇪🇸',
    color: '#ee1526',
    season: '2026/2027'
  },
  {
    id: 'bundesliga',
    name: 'Bundesliga',
    shortName: 'Bundesliga',
    country: 'Đức',
    logo: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=80&q=80',
    flag: '🇩🇪',
    color: '#d20515',
    season: '2026/2027'
  },
  {
    id: 'seriea',
    name: 'Serie A TIM',
    shortName: 'Serie A',
    country: 'Ý',
    logo: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=80&q=80',
    flag: '🇮🇹',
    color: '#024494',
    season: '2026/2027'
  },
  {
    id: 'ligue1',
    name: "Ligue 1 McDonald's",
    shortName: 'Ligue 1',
    country: 'Pháp',
    logo: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=80&q=80',
    flag: '🇫🇷',
    color: '#091c3e',
    season: '2026/2027'
  },
  {
    id: 'vleague',
    name: 'V.League 1',
    shortName: 'V-League',
    country: 'Việt Nam',
    logo: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=80&q=80',
    flag: '🇻🇳',
    color: '#da251d',
    season: '2026/2027'
  }
];

interface StoreData {
  leagues: any[];
  deletedLeagueIds: string[];
  customMatches: any[];
  editedMatches: Record<string, any>;
  deletedMatchIds: string[];
  lastUpdated: number;
}

function loadStore(): StoreData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      const data = JSON.parse(raw);
      if (data && Array.isArray(data.leagues)) {
        return data;
      }
    }
  } catch (err) {
    console.error('Error reading store file:', err);
  }

  const initialStore: StoreData = {
    leagues: DEFAULT_LEAGUES,
    deletedLeagueIds: [],
    customMatches: [],
    editedMatches: {},
    deletedMatchIds: [],
    lastUpdated: Date.now()
  };
  saveStore(initialStore);
  return initialStore;
}

function saveStore(data: StoreData) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing store file:', err);
  }
}

let currentStore: StoreData = loadStore();

async function startServer() {
  const app = express();

  app.use(express.json({ limit: '10mb' }));

  // GET /api/admin/data - Returns the shared state for all clients & servers
  app.get('/api/admin/data', (_req, res) => {
    currentStore = loadStore();
    res.json({
      success: true,
      leagues: currentStore.leagues,
      deletedLeagueIds: currentStore.deletedLeagueIds,
      customMatches: currentStore.customMatches,
      editedMatches: currentStore.editedMatches,
      deletedMatchIds: currentStore.deletedMatchIds,
      lastUpdated: currentStore.lastUpdated
    });
  });

  // POST /api/admin/action - Strictly authorized for humilin182@gmail.com
  app.post('/api/admin/action', (req, res) => {
    const { email, password, action, payload } = req.body;

    const cleanEmail = String(email || '').trim().toLowerCase();
    if (cleanEmail !== ADMIN_EMAIL.toLowerCase()) {
      return res.status(403).json({
        success: false,
        error: `Chỉ tài khoản admin ${ADMIN_EMAIL} mới có quyền thực hiện thao tác này!`
      });
    }

    // Optional password verification if provided
    if (password && password !== ADMIN_SECRET) {
      return res.status(401).json({
        success: false,
        error: 'Mật khẩu quản trị viên không chính xác!'
      });
    }

    let modified = false;

    switch (action) {
      case 'DELETE_LEAGUE': {
        const { leagueId } = payload;
        if (!leagueId) {
          return res.status(400).json({ error: 'Missing leagueId' });
        }

        // 1. Remove from leagues
        currentStore.leagues = currentStore.leagues.filter((l) => l.id !== leagueId);

        // 2. Add to deletedLeagueIds so it is permanently deleted across all servers
        if (!currentStore.deletedLeagueIds.includes(leagueId)) {
          currentStore.deletedLeagueIds.push(leagueId);
        }

        // 3. Remove any custom matches belonging to this league
        currentStore.customMatches = currentStore.customMatches.filter(
          (m) => m.leagueId !== leagueId
        );

        modified = true;
        break;
      }

      case 'ADD_LEAGUE': {
        const newLeague = payload;
        if (!newLeague || !newLeague.id) {
          return res.status(400).json({ error: 'Invalid league data' });
        }

        // Remove from deletedLeagueIds if re-added
        currentStore.deletedLeagueIds = currentStore.deletedLeagueIds.filter(
          (id) => id !== newLeague.id
        );

        // Add or replace
        const exists = currentStore.leagues.some((l) => l.id === newLeague.id);
        if (exists) {
          currentStore.leagues = currentStore.leagues.map((l) =>
            l.id === newLeague.id ? { ...l, ...newLeague } : l
          );
        } else {
          currentStore.leagues.push(newLeague);
        }

        modified = true;
        break;
      }

      case 'UPDATE_LEAGUE': {
        const { leagueId, updated } = payload;
        currentStore.leagues = currentStore.leagues.map((l) =>
          l.id === leagueId ? { ...l, ...updated } : l
        );
        modified = true;
        break;
      }

      case 'ADD_MATCH': {
        const newMatch = payload;
        if (!newMatch || !newMatch.id) {
          return res.status(400).json({ error: 'Invalid match data' });
        }
        currentStore.customMatches = [
          newMatch,
          ...currentStore.customMatches.filter((m) => m.id !== newMatch.id)
        ];
        // If it was in deletedMatchIds, remove it
        currentStore.deletedMatchIds = currentStore.deletedMatchIds.filter(
          (id) => id !== newMatch.id
        );
        modified = true;
        break;
      }

      case 'UPDATE_MATCH': {
        const { matchId, updated } = payload;
        const existsInCustom = currentStore.customMatches.some((m) => m.id === matchId);
        if (existsInCustom) {
          currentStore.customMatches = currentStore.customMatches.map((m) =>
            m.id === matchId ? { ...m, ...updated } : m
          );
        } else {
          currentStore.editedMatches[matchId] = {
            ...(currentStore.editedMatches[matchId] || {}),
            ...updated
          };
        }
        modified = true;
        break;
      }

      case 'DELETE_MATCH': {
        const { matchId } = payload;
        currentStore.customMatches = currentStore.customMatches.filter((m) => m.id !== matchId);
        if (!currentStore.deletedMatchIds.includes(matchId)) {
          currentStore.deletedMatchIds.push(matchId);
        }
        delete currentStore.editedMatches[matchId];
        modified = true;
        break;
      }

      case 'RESET_ALL': {
        currentStore = {
          leagues: DEFAULT_LEAGUES,
          deletedLeagueIds: [],
          customMatches: [],
          editedMatches: {},
          deletedMatchIds: [],
          lastUpdated: Date.now()
        };
        modified = true;
        break;
      }

      default:
        return res.status(400).json({ error: `Unknown action: ${action}` });
    }

    if (modified) {
      currentStore.lastUpdated = Date.now();
      saveStore(currentStore);
    }

    return res.json({
      success: true,
      leagues: currentStore.leagues,
      deletedLeagueIds: currentStore.deletedLeagueIds,
      customMatches: currentStore.customMatches,
      editedMatches: currentStore.editedMatches,
      deletedMatchIds: currentStore.deletedMatchIds,
      lastUpdated: currentStore.lastUpdated
    });
  });

  // Vite middleware in dev or static files in production
  if (isProd) {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
