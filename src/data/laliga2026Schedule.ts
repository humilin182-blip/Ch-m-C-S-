import { Match } from '../types/football';

/**
 * Lịch thi đấu La Liga EA Sports 2026 từ Tháng 10 đến hết Tháng 12/2026 (Vòng 8 đến Vòng 17)
 * Đầy đủ 20 CLB Tây Ban Nha: Real Madrid, Barcelona, Atlético Madrid, Athletic Bilbao, Real Sociedad, Real Betis, Sevilla...
 * Bao gồm Siêu kinh điển El Clásico (26/10), Derby Xứ Basque (01/11), Đại chiến Metropolitano (09/11), Derby Seville (22/11)
 * Giờ thi đấu chuẩn theo Giờ Việt Nam (Asia/Saigon GMT+7)
 * Toàn bộ trận đấu chưa đá đều có status: 'SCHEDULED' để kích hoạt đồng hồ đếm ngược trực tiếp.
 */
export const LALIGA_2026_SCHEDULE: Match[] = [
  // ==========================================
  // KẾT QUẢ LA LIGA VÒNG 6 & 7 (MỚI NHẤT)
  // ==========================================
  {
    id: 'laliga-r7-bar-rac',
    leagueId: 'laliga',
    round: 'La Liga - Vòng 7',
    homeTeam: {
      id: 'bar',
      name: 'FC Barcelona',
      shortName: 'Barcelona',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png',
      score: 7,
      color: '#A50044'
    },
    awayTeam: {
      id: 'rac',
      name: 'Racing Santander',
      shortName: 'Racing',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/240.png',
      score: 2,
      color: '#008000'
    },
    status: 'FINISHED',
    startTime: '2026-10-04T02:00:00+07:00',
    stadium: 'Spotify Camp Nou',
    city: 'Barcelona',
    referee: 'Jesús Gil Manzano',
    events: [
      { id: 'ev-br-1', minute: 14, type: 'GOAL', team: 'home', player: 'Raphinha', detail: 'Sút xa sấm sét góc cao mở tỉ số cho Barca' },
      { id: 'ev-br-2', minute: 24, type: 'GOAL', team: 'home', player: 'Lamine Yamal', detail: 'Độc diễn qua hai hậu vệ cứa lòng chân trái' },
      { id: 'ev-br-3', minute: 31, type: 'GOAL', team: 'away', player: 'Íñigo Vicente', detail: 'Dứt điểm chéo góc rút ngắn tỉ số cho Racing' },
      { id: 'ev-br-4', minute: 38, type: 'GOAL', team: 'home', player: 'Raphinha', detail: 'Đệm bóng cận thành sau đường căng ngang của Balde' },
      { id: 'ev-br-5', minute: 45, type: 'PENALTY_GOAL', team: 'home', player: 'Robert Lewandowski', detail: 'Đá phạt đền lạnh lùng nâng tỉ số lên 4-1' },
      { id: 'ev-br-6', minute: 55, type: 'GOAL', team: 'home', player: 'Lamine Yamal', detail: 'Hoàn tất cú đúp với cú sút chìm góc hiểm' },
      { id: 'ev-br-7', minute: 62, type: 'GOAL', team: 'home', player: 'Raphinha', detail: 'Hoàn tất cú hat-trick siêu đẳng' },
      { id: 'ev-br-8', minute: 70, type: 'GOAL', team: 'away', player: 'Andres Martin', detail: 'Đánh đầu cận thành rút ngắn tỉ số cho Racing' },
      { id: 'ev-br-9', minute: 79, type: 'GOAL', team: 'home', player: 'Dani Olmo', detail: 'Xoay compa dứt điểm tung nóc lưới ấn định 7-2' }
    ],
    stats: {
      possession: [73, 27],
      shots: [26, 6],
      shotsOnTarget: [15, 3],
      expectedGoals: [5.1, 1.2],
      fouls: [7, 14],
      corners: [12, 2],
      offsides: [1, 3],
      yellowCards: [1, 2],
      redCards: [0, 0],
      passes: [790, 260],
      passAccuracy: [93, 72]
    }
  },
  {
    id: 'laliga-r6-sev-bar',
    leagueId: 'laliga',
    round: 'La Liga - Vòng 6',
    homeTeam: {
      id: 'sev',
      name: 'Sevilla FC',
      shortName: 'Sevilla',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png',
      score: 1,
      color: '#D4001F'
    },
    awayTeam: {
      id: 'bar',
      name: 'FC Barcelona',
      shortName: 'Barcelona',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png',
      score: 3,
      color: '#A50044'
    },
    status: 'FINISHED',
    startTime: '2026-09-28T02:00:00+07:00',
    stadium: 'Ramón Sánchez Pizjuán',
    city: 'Sevilla',
    referee: 'Alejandro Hernández Hernández',
    events: [
      { id: 'ev-sb-1', minute: 15, type: 'GOAL', team: 'home', player: 'Youssef En-Nesyri', detail: 'Đánh đầu cận thành dũng mãnh mở tỉ số cho Sevilla' },
      { id: 'ev-sb-2', minute: 28, type: 'GOAL', team: 'away', player: 'Raphinha', detail: 'Cứa lòng chân trái gỡ hòa 1-1 cho Barca' },
      { id: 'ev-sb-3', minute: 65, type: 'GOAL', team: 'away', player: 'Raphinha', detail: 'Nhân đôi cách biệt với cú sút chìm góc xa' },
      { id: 'ev-sb-4', minute: 81, type: 'GOAL', team: 'away', player: 'Fermín López', detail: 'Đá bồi nhanh sau tình huống hỗn loạn ấn định 3-1' }
    ],
    stats: {
      possession: [42, 58],
      shots: [10, 18],
      shotsOnTarget: [3, 8],
      expectedGoals: [1.1, 2.7],
      fouls: [13, 9],
      corners: [4, 8],
      offsides: [3, 2],
      yellowCards: [3, 1],
      redCards: [0, 0],
      passes: [410, 590],
      passAccuracy: [81, 89]
    }
  },
  {
    id: 'laliga-r7-atm-rma',
    leagueId: 'laliga',
    round: 'La Liga - Vòng 7 (Derby Madrid)',
    homeTeam: {
      id: 'atm',
      name: 'Atlético Madrid',
      shortName: 'Atletico',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png',
      score: 2,
      color: '#CB3524'
    },
    awayTeam: {
      id: 'rma',
      name: 'Real Madrid',
      shortName: 'Real Madrid',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png',
      score: 1,
      color: '#00529F'
    },
    status: 'FINISHED',
    startTime: '2026-10-04T02:00:00+07:00',
    stadium: 'Cívitas Metropolitano',
    city: 'Madrid',
    referee: 'José María Sánchez Martínez',
    events: [
      { id: 'ev-ar-1', minute: 22, type: 'GOAL', team: 'home', player: 'Julián Alvarez', detail: 'Tì đè dứt điểm chân phải hiểm hóc mở tỉ số' },
      { id: 'ev-ar-2', minute: 45, type: 'GOAL', team: 'away', player: 'Kylian Mbappé', detail: 'Tăng tốc thoát bẫy việt vị gỡ hòa 1-1 cho Real Madrid' },
      { id: 'ev-ar-3', minute: 70, type: 'GOAL', team: 'home', player: 'Antoine Griezmann', detail: 'Đá phạt lòng chân trái mẫu mực ấn định thắng lợi 2-1' }
    ],
    stats: {
      possession: [46, 54],
      shots: [13, 16],
      shotsOnTarget: [5, 6],
      expectedGoals: [1.8, 1.7],
      fouls: [15, 12],
      corners: [6, 7],
      offsides: [1, 2],
      yellowCards: [3, 2],
      redCards: [0, 0],
      passes: [440, 520],
      passAccuracy: [83, 87]
    }
  },
  {
    id: 'laliga-r6-elc-rma',
    leagueId: 'laliga',
    round: 'La Liga - Vòng 6',
    homeTeam: {
      id: 'elc',
      name: 'Elche CF',
      shortName: 'Elche',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3751.png',
      score: 2,
      color: '#006837'
    },
    awayTeam: {
      id: 'rma',
      name: 'Real Madrid',
      shortName: 'Real Madrid',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png',
      score: 3,
      color: '#00529F'
    },
    status: 'FINISHED',
    startTime: '2026-09-27T23:30:00+07:00',
    stadium: 'Estadio Manuel Martínez Valero',
    city: 'Elche',
    referee: 'Juan Martínez Munuera',
    events: [
      { id: 'ev-er-1', minute: 18, type: 'GOAL', team: 'home', player: 'Mourad El Ghezouani', detail: 'Đánh đầu cận thành mở tỉ số cho Elche' },
      { id: 'ev-er-2', minute: 29, type: 'GOAL', team: 'away', player: 'Kylian Mbappé', detail: 'Đột phá solo gỡ hòa 1-1' },
      { id: 'ev-er-3', minute: 54, type: 'GOAL', team: 'home', player: 'Nico Castro', detail: 'Sút xa ngoạn mục tái lập thế dẫn bàn 2-1 cho Elche' },
      { id: 'ev-er-4', minute: 63, type: 'GOAL', team: 'away', player: 'Kylian Mbappé', detail: 'Hoàn tất cú đúp gỡ hòa 2-2 cho Real' },
      { id: 'ev-er-5', minute: 84, type: 'GOAL', team: 'away', player: 'Jude Bellingham', detail: 'Đánh đầu dũng mãnh ấn định màn ngược dòng 3-2' }
    ],
    stats: {
      possession: [38, 62],
      shots: [9, 21],
      shotsOnTarget: [4, 9],
      expectedGoals: [1.3, 3.1],
      fouls: [12, 8],
      corners: [3, 10],
      offsides: [2, 1],
      yellowCards: [2, 1],
      redCards: [0, 0],
      passes: [350, 640],
      passAccuracy: [77, 91]
    }
  },
  {
    "id": "laliga-r8-mlg-esp",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 8",
    "homeTeam": {
      "id": "mlg",
      "name": "Malaga",
      "shortName": "Malaga",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/99.png",
      "score": 1,
      "color": "#1B65AB"
    },
    "awayTeam": {
      "id": "esp",
      "name": "Espanyol",
      "shortName": "Espanyol",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png",
      "score": 1,
      "color": "#007FC8"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T02:00:00+07:00",
    "stadium": "La Rosaleda",
    "city": "Málaga",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-600",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Antoñito Cordero"
      },
      {
        "id": "ev-es-601",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Javi Puado"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        13,
        16
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        644,
        596
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r8-ray-ath",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 8",
    "homeTeam": {
      "id": "ray",
      "name": "Rayo Vallecano",
      "shortName": "Rayo Vallecano",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/101.png",
      "score": 1,
      "color": "#DE0029"
    },
    "awayTeam": {
      "id": "ath",
      "name": "Athletic Bilbao",
      "shortName": "Athletic Club",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png",
      "score": 2,
      "color": "#EE2524"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T19:00:00+07:00",
    "stadium": "Campo de Fútbol de Vallecas",
    "city": "Madrid",
    "referee": "Mateo Busquets Ferrer",
    "events": [
      {
        "id": "ev-es-602",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Jorge de Frutos"
      },
      {
        "id": "ev-es-603",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Nico Williams"
      },
      {
        "id": "ev-es-604",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Iñaki Williams"
      }
    ],
    "stats": {
      "possession": [
        42,
        58
      ],
      "shots": [
        8,
        9
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        14,
        12
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        588,
        652
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r8-ala-atm",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 8",
    "homeTeam": {
      "id": "ala",
      "name": "Deportivo Alavés",
      "shortName": "Alavés",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png",
      "score": 0,
      "color": "#0055A5"
    },
    "awayTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 2,
      "color": "#CB3524"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T21:15:00+07:00",
    "stadium": "Mendizorrotza",
    "city": "Vitoria-Gasteiz",
    "referee": "Ricardo de Burgos Bengoetxea",
    "events": [
      {
        "id": "ev-es-605",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Antoine Griezmann"
      },
      {
        "id": "ev-es-606",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Julián Álvarez"
      }
    ],
    "stats": {
      "possession": [
        46,
        54
      ],
      "shots": [
        8,
        8
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        0.4,
        1.9
      ],
      "fouls": [
        13,
        14
      ],
      "corners": [
        4,
        7
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        604,
        636
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "laliga-r8-bar-get",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 8",
    "homeTeam": {
      "id": "bar",
      "name": "Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 3,
      "color": "#A50044"
    },
    "awayTeam": {
      "id": "get",
      "name": "Getafe",
      "shortName": "Getafe",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png",
      "score": 0,
      "color": "#005999"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T23:30:00+07:00",
    "stadium": "Spotify Camp Nou",
    "city": "Barcelona",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-607",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Robert Lewandowski"
      },
      {
        "id": "ev-es-608",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Lamine Yamal"
      },
      {
        "id": "ev-es-609",
        "minute": 54,
        "type": "GOAL",
        "team": "home",
        "player": "Raphinha"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
      ],
      "shots": [
        14,
        6
      ],
      "shotsOnTarget": [
        6,
        2
      ],
      "expectedGoals": [
        2.8,
        0.3
      ],
      "fouls": [
        12,
        16
      ],
      "corners": [
        10,
        3
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        640,
        600
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r8-rma-vil",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 8",
    "homeTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 3,
      "color": "#FEBE10"
    },
    "awayTeam": {
      "id": "vil",
      "name": "Villarreal",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 1,
      "color": "#FFE600"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-11T02:00:00+07:00",
    "stadium": "Santiago Bernabéu",
    "city": "Madrid",
    "referee": "José María Sánchez Martínez",
    "events": [
      {
        "id": "ev-es-610",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Kylian Mbappé"
      },
      {
        "id": "ev-es-613",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Álex Baena"
      },
      {
        "id": "ev-es-611",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Vinícius Jr"
      },
      {
        "id": "ev-es-612",
        "minute": 54,
        "type": "GOAL",
        "team": "home",
        "player": "Jude Bellingham"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        14,
        7
      ],
      "shotsOnTarget": [
        6,
        3
      ],
      "expectedGoals": [
        2.8,
        1.1
      ],
      "fouls": [
        14,
        15
      ],
      "corners": [
        10,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r8-elc-cel",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 8",
    "homeTeam": {
      "id": "elc",
      "name": "Elche",
      "shortName": "Elche",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3751.png",
      "score": 1,
      "color": "#006B3F"
    },
    "awayTeam": {
      "id": "cel",
      "name": "Celta de Vigo",
      "shortName": "Celta Vigo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/85.png",
      "score": 2,
      "color": "#8AC3EE"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-11T19:00:00+07:00",
    "stadium": "Manuel Martínez Valero",
    "city": "Elche",
    "referee": "Juan Martínez Munuera",
    "events": [
      {
        "id": "ev-es-614",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Nicolás Castro"
      },
      {
        "id": "ev-es-615",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Iago Aspas"
      },
      {
        "id": "ev-es-616",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Borja Iglesias"
      }
    ],
    "stats": {
      "possession": [
        42,
        58
      ],
      "shots": [
        8,
        12
      ],
      "shotsOnTarget": [
        3,
        5
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        14,
        14
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        588,
        652
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r8-rso-dep",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 8",
    "homeTeam": {
      "id": "rso",
      "name": "Real Sociedad",
      "shortName": "Real Sociedad",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png",
      "score": 2,
      "color": "#0067B1"
    },
    "awayTeam": {
      "id": "dep",
      "name": "Deportivo de La Coruña",
      "shortName": "Deportivo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/87.png",
      "score": 0,
      "color": "#0055A5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-11T21:15:00+07:00",
    "stadium": "Reale Arena",
    "city": "San Sebastián",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-617",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Takefusa Kubo"
      },
      {
        "id": "ev-es-618",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Mikel Oyarzabal"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
      ],
      "shots": [
        12,
        6
      ],
      "shotsOnTarget": [
        5,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        11,
        16
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        652,
        588
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r8-bet-osa",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 8",
    "homeTeam": {
      "id": "bet",
      "name": "Real Betis",
      "shortName": "Real Betis",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png",
      "score": 2,
      "color": "#0BB364"
    },
    "awayTeam": {
      "id": "osa",
      "name": "Atlético Osasuna",
      "shortName": "Osasuna",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png",
      "score": 1,
      "color": "#0A1E40"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-11T23:30:00+07:00",
    "stadium": "Benito Villamarín",
    "city": "Sevilla",
    "referee": "César Soto Grado",
    "events": [
      {
        "id": "ev-es-619",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Giovani Lo Celso"
      },
      {
        "id": "ev-es-621",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Ante Budimir"
      },
      {
        "id": "ev-es-620",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Vitor Roque"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        12,
        7
      ],
      "shotsOnTarget": [
        5,
        3
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        13,
        16
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r8-rac-val",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 8",
    "homeTeam": {
      "id": "rac",
      "name": "Racing de Santander",
      "shortName": "Racing Santander",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/90.png",
      "score": 1,
      "color": "#008754"
    },
    "awayTeam": {
      "id": "val",
      "name": "Valencia",
      "shortName": "Valencia",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/94.png",
      "score": 2,
      "color": "#FF6600"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-12T02:00:00+07:00",
    "stadium": "El Sardinero",
    "city": "Santander",
    "referee": "Javier Alberola Rojas",
    "events": [
      {
        "id": "ev-es-622",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Andrés Martín"
      },
      {
        "id": "ev-es-623",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Hugo Duro"
      },
      {
        "id": "ev-es-624",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Diego López"
      }
    ],
    "stats": {
      "possession": [
        46,
        54
      ],
      "shots": [
        8,
        11
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        13,
        15
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        604,
        636
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "laliga-r8-lev-sev",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 8",
    "homeTeam": {
      "id": "lev",
      "name": "Levante",
      "shortName": "Levante",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/153.png",
      "score": 1,
      "color": "#002B49"
    },
    "awayTeam": {
      "id": "sev",
      "name": "Sevilla",
      "shortName": "Sevilla",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png",
      "score": 2,
      "color": "#D4001F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-13T02:00:00+07:00",
    "stadium": "Ciutat de València",
    "city": "Valencia",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-625",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "José Luis Morales"
      },
      {
        "id": "ev-es-626",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Dodi Lukebakio"
      },
      {
        "id": "ev-es-627",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Isaac Romero"
      }
    ],
    "stats": {
      "possession": [
        41,
        59
      ],
      "shots": [
        8,
        12
      ],
      "shotsOnTarget": [
        3,
        5
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        12,
        12
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        584,
        656
      ],
      "passAccuracy": [
        86,
        87
      ]
    }
  },
  {
    "id": "laliga-r9-dep-lev",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 9",
    "homeTeam": {
      "id": "dep",
      "name": "Deportivo de La Coruña",
      "shortName": "Deportivo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/87.png",
      "score": 1,
      "color": "#0055A5"
    },
    "awayTeam": {
      "id": "lev",
      "name": "Levante",
      "shortName": "Levante",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/153.png",
      "score": 1,
      "color": "#002B49"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T02:00:00+07:00",
    "stadium": "Abanca-Riazor",
    "city": "A Coruña",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-628",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Lucas Pérez"
      },
      {
        "id": "ev-es-629",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "José Luis Morales"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
      ],
      "shots": [
        8,
        7
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        11,
        16
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        616
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "laliga-r9-esp-atm",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 9",
    "homeTeam": {
      "id": "esp",
      "name": "Espanyol",
      "shortName": "Espanyol",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png",
      "score": 1,
      "color": "#007FC8"
    },
    "awayTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 2,
      "color": "#CB3524"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T19:00:00+07:00",
    "stadium": "Stage Front Stadium",
    "city": "Barcelona",
    "referee": "José María Sánchez Martínez",
    "events": [
      {
        "id": "ev-es-630",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Javi Puado"
      },
      {
        "id": "ev-es-631",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Antoine Griezmann"
      },
      {
        "id": "ev-es-632",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Julián Álvarez"
      }
    ],
    "stats": {
      "possession": [
        44,
        56
      ],
      "shots": [
        8,
        11
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        13,
        16
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        596,
        644
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r9-vil-elc",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 9",
    "homeTeam": {
      "id": "vil",
      "name": "Villarreal",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 3,
      "color": "#FFE600"
    },
    "awayTeam": {
      "id": "elc",
      "name": "Elche",
      "shortName": "Elche",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3751.png",
      "score": 1,
      "color": "#006B3F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T21:15:00+07:00",
    "stadium": "Estadio de la Cerámica",
    "city": "Villarreal",
    "referee": "Juan Martínez Munuera",
    "events": [
      {
        "id": "ev-es-633",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Álex Baena"
      },
      {
        "id": "ev-es-636",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Nicolás Castro"
      },
      {
        "id": "ev-es-634",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Ayoze Pérez"
      },
      {
        "id": "ev-es-635",
        "minute": 54,
        "type": "GOAL",
        "team": "home",
        "player": "Nicolas Pépé"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        15,
        6
      ],
      "shotsOnTarget": [
        6,
        2
      ],
      "expectedGoals": [
        2.8,
        1.1
      ],
      "fouls": [
        11,
        16
      ],
      "corners": [
        10,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        644,
        596
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r9-bet-bar",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 9",
    "homeTeam": {
      "id": "bet",
      "name": "Real Betis",
      "shortName": "Real Betis",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png",
      "score": 2,
      "color": "#0BB364"
    },
    "awayTeam": {
      "id": "bar",
      "name": "Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 3,
      "color": "#A50044"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T23:30:00+07:00",
    "stadium": "Benito Villamarín",
    "city": "Sevilla",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-637",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Giovani Lo Celso"
      },
      {
        "id": "ev-es-639",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Robert Lewandowski"
      },
      {
        "id": "ev-es-638",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Vitor Roque"
      },
      {
        "id": "ev-es-640",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Lamine Yamal"
      },
      {
        "id": "ev-es-641",
        "minute": 62,
        "type": "GOAL",
        "team": "away",
        "player": "Raphinha"
      }
    ],
    "stats": {
      "possession": [
        47,
        53
      ],
      "shots": [
        12,
        14
      ],
      "shotsOnTarget": [
        5,
        6
      ],
      "expectedGoals": [
        2,
        2.7
      ],
      "fouls": [
        13,
        13
      ],
      "corners": [
        8,
        9
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        632
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "laliga-r9-val-ath",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 9",
    "homeTeam": {
      "id": "val",
      "name": "Valencia",
      "shortName": "Valencia",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/94.png",
      "score": 1,
      "color": "#FF6600"
    },
    "awayTeam": {
      "id": "ath",
      "name": "Athletic Bilbao",
      "shortName": "Athletic Club",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png",
      "score": 1,
      "color": "#EE2524"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-18T02:00:00+07:00",
    "stadium": "Mestalla",
    "city": "Valencia",
    "referee": "César Soto Grado",
    "events": [
      {
        "id": "ev-es-642",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Hugo Duro"
      },
      {
        "id": "ev-es-643",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Nico Williams"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        13,
        15
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r9-osa-rac",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 9",
    "homeTeam": {
      "id": "osa",
      "name": "Atlético Osasuna",
      "shortName": "Osasuna",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png",
      "score": 2,
      "color": "#0A1E40"
    },
    "awayTeam": {
      "id": "rac",
      "name": "Racing de Santander",
      "shortName": "Racing Santander",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/90.png",
      "score": 0,
      "color": "#008754"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-18T19:00:00+07:00",
    "stadium": "El Sadar",
    "city": "Pamplona",
    "referee": "Javier Alberola Rojas",
    "events": [
      {
        "id": "ev-es-644",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Ante Budimir"
      },
      {
        "id": "ev-es-645",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Bryan Zaragoza"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        9,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        15,
        14
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r9-cel-ala",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 9",
    "homeTeam": {
      "id": "cel",
      "name": "Celta de Vigo",
      "shortName": "Celta Vigo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/85.png",
      "score": 2,
      "color": "#8AC3EE"
    },
    "awayTeam": {
      "id": "ala",
      "name": "Deportivo Alavés",
      "shortName": "Alavés",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png",
      "score": 1,
      "color": "#0055A5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-18T21:15:00+07:00",
    "stadium": "Abanca-Balaídos",
    "city": "Vigo",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-646",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Iago Aspas"
      },
      {
        "id": "ev-es-648",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Kike García"
      },
      {
        "id": "ev-es-647",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Borja Iglesias"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        10,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        12,
        12
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        644,
        596
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r9-rso-mlg",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 9",
    "homeTeam": {
      "id": "rso",
      "name": "Real Sociedad",
      "shortName": "Real Sociedad",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png",
      "score": 2,
      "color": "#0067B1"
    },
    "awayTeam": {
      "id": "mlg",
      "name": "Malaga",
      "shortName": "Malaga",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/99.png",
      "score": 0,
      "color": "#1B65AB"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-18T23:30:00+07:00",
    "stadium": "Reale Arena",
    "city": "San Sebastián",
    "referee": "Mateo Busquets Ferrer",
    "events": [
      {
        "id": "ev-es-649",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Takefusa Kubo"
      },
      {
        "id": "ev-es-650",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Mikel Oyarzabal"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
      ],
      "shots": [
        9,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        15,
        13
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        636,
        604
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r9-rma-sev",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 9",
    "homeTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 3,
      "color": "#FEBE10"
    },
    "awayTeam": {
      "id": "sev",
      "name": "Sevilla",
      "shortName": "Sevilla",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png",
      "score": 1,
      "color": "#D4001F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-19T02:00:00+07:00",
    "stadium": "Santiago Bernabéu",
    "city": "Madrid",
    "referee": "Ricardo de Burgos Bengoetxea",
    "events": [
      {
        "id": "ev-es-651",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Kylian Mbappé"
      },
      {
        "id": "ev-es-654",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Dodi Lukebakio"
      },
      {
        "id": "ev-es-652",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Vinícius Jr"
      },
      {
        "id": "ev-es-653",
        "minute": 54,
        "type": "GOAL",
        "team": "home",
        "player": "Jude Bellingham"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
      ],
      "shots": [
        12,
        6
      ],
      "shotsOnTarget": [
        5,
        2
      ],
      "expectedGoals": [
        2.8,
        1.1
      ],
      "fouls": [
        11,
        15
      ],
      "corners": [
        10,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        640,
        600
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r9-get-ray",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 9",
    "homeTeam": {
      "id": "get",
      "name": "Getafe",
      "shortName": "Getafe",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png",
      "score": 1,
      "color": "#005999"
    },
    "awayTeam": {
      "id": "ray",
      "name": "Rayo Vallecano",
      "shortName": "Rayo Vallecano",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/101.png",
      "score": 1,
      "color": "#DE0029"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-20T02:00:00+07:00",
    "stadium": "Coliseum",
    "city": "Getafe",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-655",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Borja Mayoral"
      },
      {
        "id": "ev-es-656",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Jorge de Frutos"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        13,
        12
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r10-val-vil",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 10 (Siêu Kinh Điển El Clásico)",
    "homeTeam": {
      "id": "val",
      "name": "Valencia",
      "shortName": "Valencia",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/94.png",
      "score": 1,
      "color": "#FF6600"
    },
    "awayTeam": {
      "id": "vil",
      "name": "Villarreal",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 2,
      "color": "#FFE600"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T19:00:00+07:00",
    "stadium": "Mestalla",
    "city": "Valencia",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-657",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Hugo Duro"
      },
      {
        "id": "ev-es-658",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Álex Baena"
      },
      {
        "id": "ev-es-659",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Ayoze Pérez"
      }
    ],
    "stats": {
      "possession": [
        43,
        57
      ],
      "shots": [
        8,
        8
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        15,
        14
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        592,
        648
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r10-atm-dep",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 10 (Siêu Kinh Điển El Clásico)",
    "homeTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 3,
      "color": "#CB3524"
    },
    "awayTeam": {
      "id": "dep",
      "name": "Deportivo de La Coruña",
      "shortName": "Deportivo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/87.png",
      "score": 0,
      "color": "#0055A5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T21:15:00+07:00",
    "stadium": "Riyadh Air Metropolitano",
    "city": "Madrid",
    "referee": "César Soto Grado",
    "events": [
      {
        "id": "ev-es-660",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Antoine Griezmann"
      },
      {
        "id": "ev-es-661",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Julián Álvarez"
      },
      {
        "id": "ev-es-662",
        "minute": 54,
        "type": "GOAL",
        "team": "home",
        "player": "Alexander Sørloth"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
      ],
      "shots": [
        13,
        6
      ],
      "shotsOnTarget": [
        5,
        2
      ],
      "expectedGoals": [
        2.8,
        0.3
      ],
      "fouls": [
        11,
        16
      ],
      "corners": [
        10,
        3
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        616
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "laliga-r10-sev-osa",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 10 (Siêu Kinh Điển El Clásico)",
    "homeTeam": {
      "id": "sev",
      "name": "Sevilla",
      "shortName": "Sevilla",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png",
      "score": 2,
      "color": "#D4001F"
    },
    "awayTeam": {
      "id": "osa",
      "name": "Atlético Osasuna",
      "shortName": "Osasuna",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png",
      "score": 1,
      "color": "#0A1E40"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T23:30:00+07:00",
    "stadium": "Ramón Sánchez-Pizjuán",
    "city": "Sevilla",
    "referee": "Javier Alberola Rojas",
    "events": [
      {
        "id": "ev-es-663",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Dodi Lukebakio"
      },
      {
        "id": "ev-es-665",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Ante Budimir"
      },
      {
        "id": "ev-es-664",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Isaac Romero"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
      ],
      "shots": [
        11,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        11,
        14
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        652,
        588
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r10-ath-cel",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 10 (Siêu Kinh Điển El Clásico)",
    "homeTeam": {
      "id": "ath",
      "name": "Athletic Bilbao",
      "shortName": "Athletic Club",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png",
      "score": 2,
      "color": "#EE2524"
    },
    "awayTeam": {
      "id": "cel",
      "name": "Celta de Vigo",
      "shortName": "Celta Vigo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/85.png",
      "score": 1,
      "color": "#8AC3EE"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-25T02:00:00+07:00",
    "stadium": "San Mamés",
    "city": "Bilbao",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-666",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Nico Williams"
      },
      {
        "id": "ev-es-668",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Iago Aspas"
      },
      {
        "id": "ev-es-667",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Iñaki Williams"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
      ],
      "shots": [
        8,
        8
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        12,
        13
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        648,
        592
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r10-ray-bet",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 10 (Siêu Kinh Điển El Clásico)",
    "homeTeam": {
      "id": "ray",
      "name": "Rayo Vallecano",
      "shortName": "Rayo Vallecano",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/101.png",
      "score": 1,
      "color": "#DE0029"
    },
    "awayTeam": {
      "id": "bet",
      "name": "Real Betis",
      "shortName": "Real Betis",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png",
      "score": 2,
      "color": "#0BB364"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-25T19:00:00+07:00",
    "stadium": "Campo de Fútbol de Vallecas",
    "city": "Madrid",
    "referee": "Mateo Busquets Ferrer",
    "events": [
      {
        "id": "ev-es-669",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Jorge de Frutos"
      },
      {
        "id": "ev-es-670",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Giovani Lo Celso"
      },
      {
        "id": "ev-es-671",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Vitor Roque"
      }
    ],
    "stats": {
      "possession": [
        46,
        54
      ],
      "shots": [
        8,
        10
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        14,
        12
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        604,
        636
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "laliga-r10-ala-rso",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 10 (Siêu Kinh Điển El Clásico)",
    "homeTeam": {
      "id": "ala",
      "name": "Deportivo Alavés",
      "shortName": "Alavés",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png",
      "score": 0,
      "color": "#0055A5"
    },
    "awayTeam": {
      "id": "rso",
      "name": "Real Sociedad",
      "shortName": "Real Sociedad",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png",
      "score": 1,
      "color": "#0067B1"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-25T21:15:00+07:00",
    "stadium": "Mendizorrotza",
    "city": "Vitoria-Gasteiz",
    "referee": "Ricardo de Burgos Bengoetxea",
    "events": [
      {
        "id": "ev-es-672",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Takefusa Kubo"
      }
    ],
    "stats": {
      "possession": [
        48,
        52
      ],
      "shots": [
        8,
        8
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        0.4,
        1.1
      ],
      "fouls": [
        11,
        16
      ],
      "corners": [
        4,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        612,
        628
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "laliga-r10-elc-lev",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 10 (Siêu Kinh Điển El Clásico)",
    "homeTeam": {
      "id": "elc",
      "name": "Elche",
      "shortName": "Elche",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3751.png",
      "score": 2,
      "color": "#006B3F"
    },
    "awayTeam": {
      "id": "lev",
      "name": "Levante",
      "shortName": "Levante",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/153.png",
      "score": 1,
      "color": "#002B49"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-25T23:30:00+07:00",
    "stadium": "Manuel Martínez Valero",
    "city": "Elche",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-673",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Nicolás Castro"
      },
      {
        "id": "ev-es-675",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "José Luis Morales"
      },
      {
        "id": "ev-es-674",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Mourad El Ghezouani"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
      ],
      "shots": [
        10,
        7
      ],
      "shotsOnTarget": [
        4,
        3
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        15,
        12
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        636,
        604
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r10-get-rac",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 10 (Siêu Kinh Điển El Clásico)",
    "homeTeam": {
      "id": "get",
      "name": "Getafe",
      "shortName": "Getafe",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png",
      "score": 1,
      "color": "#005999"
    },
    "awayTeam": {
      "id": "rac",
      "name": "Racing de Santander",
      "shortName": "Racing Santander",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/90.png",
      "score": 0,
      "color": "#008754"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-26T02:00:00+07:00",
    "stadium": "Coliseum",
    "city": "Getafe",
    "referee": "José María Sánchez Martínez",
    "events": [
      {
        "id": "ev-es-676",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Borja Mayoral"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        0.3
      ],
      "fouls": [
        13,
        12
      ],
      "corners": [
        6,
        3
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        652,
        588
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r10-bar-rma",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 10 (Siêu Kinh Điển El Clásico)",
    "homeTeam": {
      "id": "bar",
      "name": "Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 2,
      "color": "#A50044"
    },
    "awayTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 2,
      "color": "#FEBE10"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-26T03:00:00+07:00",
    "stadium": "Spotify Camp Nou",
    "city": "Barcelona",
    "referee": "Juan Martínez Munuera",
    "events": [
      {
        "id": "ev-es-677",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Robert Lewandowski"
      },
      {
        "id": "ev-es-679",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Kylian Mbappé"
      },
      {
        "id": "ev-es-678",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Lamine Yamal"
      },
      {
        "id": "ev-es-680",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Vinícius Jr"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        11,
        9
      ],
      "shotsOnTarget": [
        4,
        4
      ],
      "expectedGoals": [
        2,
        1.9
      ],
      "fouls": [
        12,
        16
      ],
      "corners": [
        8,
        7
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r10-esp-mlg",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 10 (Siêu Kinh Điển El Clásico)",
    "homeTeam": {
      "id": "esp",
      "name": "Espanyol",
      "shortName": "Espanyol",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png",
      "score": 2,
      "color": "#007FC8"
    },
    "awayTeam": {
      "id": "mlg",
      "name": "Malaga",
      "shortName": "Malaga",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/99.png",
      "score": 1,
      "color": "#1B65AB"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-27T03:00:00+07:00",
    "stadium": "Stage Front Stadium",
    "city": "Barcelona",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-681",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Javi Puado"
      },
      {
        "id": "ev-es-683",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Antoñito Cordero"
      },
      {
        "id": "ev-es-682",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Alejo Véliz"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        12,
        12
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        644,
        596
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r11-bar-ala",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 11 (Derby Xứ Basque)",
    "homeTeam": {
      "id": "bar",
      "name": "Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 3,
      "color": "#A50044"
    },
    "awayTeam": {
      "id": "ala",
      "name": "Deportivo Alavés",
      "shortName": "Alavés",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png",
      "score": 0,
      "color": "#0055A5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-01T19:00:00+07:00",
    "stadium": "Spotify Camp Nou",
    "city": "Barcelona",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-684",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Robert Lewandowski"
      },
      {
        "id": "ev-es-685",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Lamine Yamal"
      },
      {
        "id": "ev-es-686",
        "minute": 54,
        "type": "GOAL",
        "team": "home",
        "player": "Raphinha"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        13,
        6
      ],
      "shotsOnTarget": [
        5,
        2
      ],
      "expectedGoals": [
        2.8,
        0.3
      ],
      "fouls": [
        14,
        15
      ],
      "corners": [
        10,
        3
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        644,
        596
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r11-rac-rma",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 11 (Derby Xứ Basque)",
    "homeTeam": {
      "id": "rac",
      "name": "Racing de Santander",
      "shortName": "Racing Santander",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/90.png",
      "score": 0,
      "color": "#008754"
    },
    "awayTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 3,
      "color": "#FEBE10"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-01T21:15:00+07:00",
    "stadium": "El Sardinero",
    "city": "Santander",
    "referee": "Mateo Busquets Ferrer",
    "events": [
      {
        "id": "ev-es-687",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Kylian Mbappé"
      },
      {
        "id": "ev-es-688",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Vinícius Jr"
      },
      {
        "id": "ev-es-689",
        "minute": 62,
        "type": "GOAL",
        "team": "away",
        "player": "Jude Bellingham"
      }
    ],
    "stats": {
      "possession": [
        46,
        54
      ],
      "shots": [
        8,
        14
      ],
      "shotsOnTarget": [
        3,
        6
      ],
      "expectedGoals": [
        0.4,
        2.7
      ],
      "fouls": [
        15,
        16
      ],
      "corners": [
        4,
        9
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        604,
        636
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "laliga-r11-ath-rso",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 11 (Derby Xứ Basque)",
    "homeTeam": {
      "id": "ath",
      "name": "Athletic Bilbao",
      "shortName": "Athletic Club",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png",
      "score": 2,
      "color": "#EE2524"
    },
    "awayTeam": {
      "id": "rso",
      "name": "Real Sociedad",
      "shortName": "Real Sociedad",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png",
      "score": 1,
      "color": "#0067B1"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-01T23:30:00+07:00",
    "stadium": "San Mamés",
    "city": "Bilbao",
    "referee": "Ricardo de Burgos Bengoetxea",
    "events": [
      {
        "id": "ev-es-690",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Nico Williams"
      },
      {
        "id": "ev-es-692",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Takefusa Kubo"
      },
      {
        "id": "ev-es-691",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Iñaki Williams"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
      ],
      "shots": [
        11,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        13,
        12
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        632,
        608
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r11-lev-atm",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 11 (Derby Xứ Basque)",
    "homeTeam": {
      "id": "lev",
      "name": "Levante",
      "shortName": "Levante",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/153.png",
      "score": 1,
      "color": "#002B49"
    },
    "awayTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 2,
      "color": "#CB3524"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-02T02:00:00+07:00",
    "stadium": "Ciutat de València",
    "city": "Valencia",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-693",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "José Luis Morales"
      },
      {
        "id": "ev-es-694",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Antoine Griezmann"
      },
      {
        "id": "ev-es-695",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Julián Álvarez"
      }
    ],
    "stats": {
      "possession": [
        43,
        57
      ],
      "shots": [
        8,
        11
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        11,
        14
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        592,
        648
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r11-vil-ray",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 11 (Derby Xứ Basque)",
    "homeTeam": {
      "id": "vil",
      "name": "Villarreal",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 2,
      "color": "#FFE600"
    },
    "awayTeam": {
      "id": "ray",
      "name": "Rayo Vallecano",
      "shortName": "Rayo Vallecano",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/101.png",
      "score": 1,
      "color": "#DE0029"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-02T03:00:00+07:00",
    "stadium": "Estadio de la Cerámica",
    "city": "Villarreal",
    "referee": "José María Sánchez Martínez",
    "events": [
      {
        "id": "ev-es-696",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Álex Baena"
      },
      {
        "id": "ev-es-698",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Jorge de Frutos"
      },
      {
        "id": "ev-es-697",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Ayoze Pérez"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
      ],
      "shots": [
        9,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        13,
        13
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        648,
        592
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r11-cel-val",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 11 (Derby Xứ Basque)",
    "homeTeam": {
      "id": "cel",
      "name": "Celta de Vigo",
      "shortName": "Celta Vigo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/85.png",
      "score": 1,
      "color": "#8AC3EE"
    },
    "awayTeam": {
      "id": "val",
      "name": "Valencia",
      "shortName": "Valencia",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/94.png",
      "score": 1,
      "color": "#FF6600"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-02T19:00:00+07:00",
    "stadium": "Abanca-Balaídos",
    "city": "Vigo",
    "referee": "Juan Martínez Munuera",
    "events": [
      {
        "id": "ev-es-699",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Iago Aspas"
      },
      {
        "id": "ev-es-700",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Hugo Duro"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
      ],
      "shots": [
        8,
        8
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        12,
        14
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        632,
        608
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r11-osa-esp",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 11 (Derby Xứ Basque)",
    "homeTeam": {
      "id": "osa",
      "name": "Atlético Osasuna",
      "shortName": "Osasuna",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png",
      "score": 2,
      "color": "#0A1E40"
    },
    "awayTeam": {
      "id": "esp",
      "name": "Espanyol",
      "shortName": "Espanyol",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png",
      "score": 0,
      "color": "#007FC8"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-02T21:15:00+07:00",
    "stadium": "El Sadar",
    "city": "Pamplona",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-701",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Ante Budimir"
      },
      {
        "id": "ev-es-702",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Bryan Zaragoza"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
      ],
      "shots": [
        10,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        12,
        15
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        616
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "laliga-r11-dep-bet",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 11 (Derby Xứ Basque)",
    "homeTeam": {
      "id": "dep",
      "name": "Deportivo de La Coruña",
      "shortName": "Deportivo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/87.png",
      "score": 1,
      "color": "#0055A5"
    },
    "awayTeam": {
      "id": "bet",
      "name": "Real Betis",
      "shortName": "Real Betis",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png",
      "score": 2,
      "color": "#0BB364"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-02T23:30:00+07:00",
    "stadium": "Abanca-Riazor",
    "city": "A Coruña",
    "referee": "César Soto Grado",
    "events": [
      {
        "id": "ev-es-703",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Lucas Pérez"
      },
      {
        "id": "ev-es-704",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Giovani Lo Celso"
      },
      {
        "id": "ev-es-705",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Vitor Roque"
      }
    ],
    "stats": {
      "possession": [
        42,
        58
      ],
      "shots": [
        8,
        10
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        15,
        15
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        588,
        652
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r11-mlg-get",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 11 (Derby Xứ Basque)",
    "homeTeam": {
      "id": "mlg",
      "name": "Malaga",
      "shortName": "Malaga",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/99.png",
      "score": 1,
      "color": "#1B65AB"
    },
    "awayTeam": {
      "id": "get",
      "name": "Getafe",
      "shortName": "Getafe",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png",
      "score": 1,
      "color": "#005999"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-03T01:30:00+07:00",
    "stadium": "La Rosaleda",
    "city": "Málaga",
    "referee": "Javier Alberola Rojas",
    "events": [
      {
        "id": "ev-es-706",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Antoñito Cordero"
      },
      {
        "id": "ev-es-707",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Borja Mayoral"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        11,
        14
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        648,
        592
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r11-sev-elc",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 11 (Derby Xứ Basque)",
    "homeTeam": {
      "id": "sev",
      "name": "Sevilla",
      "shortName": "Sevilla",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png",
      "score": 2,
      "color": "#D4001F"
    },
    "awayTeam": {
      "id": "elc",
      "name": "Elche",
      "shortName": "Elche",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3751.png",
      "score": 0,
      "color": "#006B3F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-03T03:00:00+07:00",
    "stadium": "Ramón Sánchez-Pizjuán",
    "city": "Sevilla",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-708",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Dodi Lukebakio"
      },
      {
        "id": "ev-es-709",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Isaac Romero"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
      ],
      "shots": [
        11,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        14,
        14
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        636,
        604
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r12-val-rma",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 12 (Đại Chiến Metropolitano)",
    "homeTeam": {
      "id": "val",
      "name": "Valencia",
      "shortName": "Valencia",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/94.png",
      "score": 1,
      "color": "#FF6600"
    },
    "awayTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 2,
      "color": "#FEBE10"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-08T19:00:00+07:00",
    "stadium": "Mestalla",
    "city": "Valencia",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-710",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Hugo Duro"
      },
      {
        "id": "ev-es-711",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Kylian Mbappé"
      },
      {
        "id": "ev-es-712",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Vinícius Jr"
      }
    ],
    "stats": {
      "possession": [
        43,
        57
      ],
      "shots": [
        8,
        8
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        15,
        12
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        592,
        648
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r12-sev-ala",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 12 (Đại Chiến Metropolitano)",
    "homeTeam": {
      "id": "sev",
      "name": "Sevilla",
      "shortName": "Sevilla",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png",
      "score": 2,
      "color": "#D4001F"
    },
    "awayTeam": {
      "id": "ala",
      "name": "Deportivo Alavés",
      "shortName": "Alavés",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png",
      "score": 1,
      "color": "#0055A5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-08T21:15:00+07:00",
    "stadium": "Ramón Sánchez-Pizjuán",
    "city": "Sevilla",
    "referee": "José María Sánchez Martínez",
    "events": [
      {
        "id": "ev-es-713",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Dodi Lukebakio"
      },
      {
        "id": "ev-es-715",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Kike García"
      },
      {
        "id": "ev-es-714",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Isaac Romero"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
      ],
      "shots": [
        10,
        8
      ],
      "shotsOnTarget": [
        4,
        3
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        12,
        14
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        616
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "laliga-r12-vil-get",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 12 (Đại Chiến Metropolitano)",
    "homeTeam": {
      "id": "vil",
      "name": "Villarreal",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 2,
      "color": "#FFE600"
    },
    "awayTeam": {
      "id": "get",
      "name": "Getafe",
      "shortName": "Getafe",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png",
      "score": 0,
      "color": "#005999"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-08T23:30:00+07:00",
    "stadium": "Estadio de la Cerámica",
    "city": "Villarreal",
    "referee": "Juan Martínez Munuera",
    "events": [
      {
        "id": "ev-es-716",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Álex Baena"
      },
      {
        "id": "ev-es-717",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Ayoze Pérez"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
      ],
      "shots": [
        9,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        11,
        12
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        652,
        588
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r12-bet-cel",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 12 (Đại Chiến Metropolitano)",
    "homeTeam": {
      "id": "bet",
      "name": "Real Betis",
      "shortName": "Real Betis",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png",
      "score": 2,
      "color": "#0BB364"
    },
    "awayTeam": {
      "id": "cel",
      "name": "Celta de Vigo",
      "shortName": "Celta Vigo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/85.png",
      "score": 1,
      "color": "#8AC3EE"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-09T02:00:00+07:00",
    "stadium": "Benito Villamarín",
    "city": "Sevilla",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-718",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Giovani Lo Celso"
      },
      {
        "id": "ev-es-720",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Iago Aspas"
      },
      {
        "id": "ev-es-719",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Vitor Roque"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        12,
        6
      ],
      "shotsOnTarget": [
        5,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        15,
        12
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        644,
        596
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r12-atm-bar",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 12 (Đại Chiến Metropolitano)",
    "homeTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 1,
      "color": "#CB3524"
    },
    "awayTeam": {
      "id": "bar",
      "name": "Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 2,
      "color": "#A50044"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-09T03:00:00+07:00",
    "stadium": "Riyadh Air Metropolitano",
    "city": "Madrid",
    "referee": "César Soto Grado",
    "events": [
      {
        "id": "ev-es-721",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Antoine Griezmann"
      },
      {
        "id": "ev-es-722",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Robert Lewandowski"
      },
      {
        "id": "ev-es-723",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Lamine Yamal"
      }
    ],
    "stats": {
      "possession": [
        47,
        53
      ],
      "shots": [
        8,
        11
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        11,
        16
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        632
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "laliga-r12-rso-lev",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 12 (Đại Chiến Metropolitano)",
    "homeTeam": {
      "id": "rso",
      "name": "Real Sociedad",
      "shortName": "Real Sociedad",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png",
      "score": 2,
      "color": "#0067B1"
    },
    "awayTeam": {
      "id": "lev",
      "name": "Levante",
      "shortName": "Levante",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/153.png",
      "score": 0,
      "color": "#002B49"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-09T19:00:00+07:00",
    "stadium": "Reale Arena",
    "city": "San Sebastián",
    "referee": "Javier Alberola Rojas",
    "events": [
      {
        "id": "ev-es-724",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Takefusa Kubo"
      },
      {
        "id": "ev-es-725",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Mikel Oyarzabal"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
      ],
      "shots": [
        12,
        6
      ],
      "shotsOnTarget": [
        5,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        11,
        13
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        640,
        600
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r12-ray-osa",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 12 (Đại Chiến Metropolitano)",
    "homeTeam": {
      "id": "ray",
      "name": "Rayo Vallecano",
      "shortName": "Rayo Vallecano",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/101.png",
      "score": 1,
      "color": "#DE0029"
    },
    "awayTeam": {
      "id": "osa",
      "name": "Atlético Osasuna",
      "shortName": "Osasuna",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png",
      "score": 1,
      "color": "#0A1E40"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-09T21:15:00+07:00",
    "stadium": "Campo de Fútbol de Vallecas",
    "city": "Madrid",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-726",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Jorge de Frutos"
      },
      {
        "id": "ev-es-727",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Ante Budimir"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
      ],
      "shots": [
        8,
        8
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        12,
        13
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        648,
        592
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r12-esp-rac",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 12 (Đại Chiến Metropolitano)",
    "homeTeam": {
      "id": "esp",
      "name": "Espanyol",
      "shortName": "Espanyol",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png",
      "score": 2,
      "color": "#007FC8"
    },
    "awayTeam": {
      "id": "rac",
      "name": "Racing de Santander",
      "shortName": "Racing Santander",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/90.png",
      "score": 1,
      "color": "#008754"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-09T23:30:00+07:00",
    "stadium": "Stage Front Stadium",
    "city": "Barcelona",
    "referee": "Mateo Busquets Ferrer",
    "events": [
      {
        "id": "ev-es-728",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Javi Puado"
      },
      {
        "id": "ev-es-730",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Andrés Martín"
      },
      {
        "id": "ev-es-729",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Alejo Véliz"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        10,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        14,
        15
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        644,
        596
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r12-elc-ath",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 12 (Đại Chiến Metropolitano)",
    "homeTeam": {
      "id": "elc",
      "name": "Elche",
      "shortName": "Elche",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3751.png",
      "score": 0,
      "color": "#006B3F"
    },
    "awayTeam": {
      "id": "ath",
      "name": "Athletic Bilbao",
      "shortName": "Athletic Club",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png",
      "score": 2,
      "color": "#EE2524"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-10T01:30:00+07:00",
    "stadium": "Manuel Martínez Valero",
    "city": "Elche",
    "referee": "Ricardo de Burgos Bengoetxea",
    "events": [
      {
        "id": "ev-es-731",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Nico Williams"
      },
      {
        "id": "ev-es-732",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Iñaki Williams"
      }
    ],
    "stats": {
      "possession": [
        43,
        57
      ],
      "shots": [
        8,
        8
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        0.4,
        1.9
      ],
      "fouls": [
        13,
        12
      ],
      "corners": [
        4,
        7
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        592,
        648
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r12-dep-mlg",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 12 (Đại Chiến Metropolitano)",
    "homeTeam": {
      "id": "dep",
      "name": "Deportivo de La Coruña",
      "shortName": "Deportivo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/87.png",
      "score": 1,
      "color": "#0055A5"
    },
    "awayTeam": {
      "id": "mlg",
      "name": "Malaga",
      "shortName": "Malaga",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/99.png",
      "score": 1,
      "color": "#1B65AB"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-10T03:00:00+07:00",
    "stadium": "Abanca-Riazor",
    "city": "A Coruña",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-733",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Lucas Pérez"
      },
      {
        "id": "ev-es-734",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Antoñito Cordero"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        14,
        15
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        652,
        588
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r13-cel-rma",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 13 (Derby Xứ Andalucia)",
    "homeTeam": {
      "id": "cel",
      "name": "Celta de Vigo",
      "shortName": "Celta Vigo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/85.png",
      "score": 1,
      "color": "#8AC3EE"
    },
    "awayTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 3,
      "color": "#FEBE10"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T20:00:00+07:00",
    "stadium": "Abanca-Balaídos",
    "city": "Vigo",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-735",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Iago Aspas"
      },
      {
        "id": "ev-es-736",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Kylian Mbappé"
      },
      {
        "id": "ev-es-737",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Vinícius Jr"
      },
      {
        "id": "ev-es-738",
        "minute": 62,
        "type": "GOAL",
        "team": "away",
        "player": "Jude Bellingham"
      }
    ],
    "stats": {
      "possession": [
        43,
        57
      ],
      "shots": [
        8,
        14
      ],
      "shotsOnTarget": [
        3,
        6
      ],
      "expectedGoals": [
        1.2,
        2.7
      ],
      "fouls": [
        14,
        15
      ],
      "corners": [
        6,
        9
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        592,
        648
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r13-vil-bar",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 13 (Derby Xứ Andalucia)",
    "homeTeam": {
      "id": "vil",
      "name": "Villarreal",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 1,
      "color": "#FFE600"
    },
    "awayTeam": {
      "id": "bar",
      "name": "Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 2,
      "color": "#A50044"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T22:15:00+07:00",
    "stadium": "Estadio de la Cerámica",
    "city": "Villarreal",
    "referee": "César Soto Grado",
    "events": [
      {
        "id": "ev-es-739",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Álex Baena"
      },
      {
        "id": "ev-es-740",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Robert Lewandowski"
      },
      {
        "id": "ev-es-741",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Lamine Yamal"
      }
    ],
    "stats": {
      "possession": [
        44,
        56
      ],
      "shots": [
        8,
        9
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        12,
        15
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        596,
        644
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r13-atm-rso",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 13 (Derby Xứ Andalucia)",
    "homeTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 2,
      "color": "#CB3524"
    },
    "awayTeam": {
      "id": "rso",
      "name": "Real Sociedad",
      "shortName": "Real Sociedad",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png",
      "score": 1,
      "color": "#0067B1"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-22T00:30:00+07:00",
    "stadium": "Riyadh Air Metropolitano",
    "city": "Madrid",
    "referee": "Javier Alberola Rojas",
    "events": [
      {
        "id": "ev-es-742",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Antoine Griezmann"
      },
      {
        "id": "ev-es-744",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Takefusa Kubo"
      },
      {
        "id": "ev-es-743",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Julián Álvarez"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        8,
        8
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        14,
        16
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r13-sev-bet",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 13 (Derby Xứ Andalucia)",
    "homeTeam": {
      "id": "sev",
      "name": "Sevilla",
      "shortName": "Sevilla",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png",
      "score": 2,
      "color": "#D4001F"
    },
    "awayTeam": {
      "id": "bet",
      "name": "Real Betis",
      "shortName": "Real Betis",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png",
      "score": 2,
      "color": "#0BB364"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-22T03:00:00+07:00",
    "stadium": "Ramón Sánchez-Pizjuán",
    "city": "Sevilla",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-745",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Dodi Lukebakio"
      },
      {
        "id": "ev-es-747",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Giovani Lo Celso"
      },
      {
        "id": "ev-es-746",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Isaac Romero"
      },
      {
        "id": "ev-es-748",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Vitor Roque"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
      ],
      "shots": [
        8,
        10
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        2,
        1.9
      ],
      "fouls": [
        14,
        15
      ],
      "corners": [
        8,
        7
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        632,
        608
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r13-ath-ala",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 13 (Derby Xứ Andalucia)",
    "homeTeam": {
      "id": "ath",
      "name": "Athletic Bilbao",
      "shortName": "Athletic Club",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png",
      "score": 2,
      "color": "#EE2524"
    },
    "awayTeam": {
      "id": "ala",
      "name": "Deportivo Alavés",
      "shortName": "Alavés",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png",
      "score": 0,
      "color": "#0055A5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-22T19:00:00+07:00",
    "stadium": "San Mamés",
    "city": "Bilbao",
    "referee": "Mateo Busquets Ferrer",
    "events": [
      {
        "id": "ev-es-749",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Nico Williams"
      },
      {
        "id": "ev-es-750",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Iñaki Williams"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        9,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        15,
        16
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        644,
        596
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r13-osa-elc",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 13 (Derby Xứ Andalucia)",
    "homeTeam": {
      "id": "osa",
      "name": "Atlético Osasuna",
      "shortName": "Osasuna",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png",
      "score": 2,
      "color": "#0A1E40"
    },
    "awayTeam": {
      "id": "elc",
      "name": "Elche",
      "shortName": "Elche",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3751.png",
      "score": 1,
      "color": "#006B3F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-22T21:15:00+07:00",
    "stadium": "El Sadar",
    "city": "Pamplona",
    "referee": "Ricardo de Burgos Bengoetxea",
    "events": [
      {
        "id": "ev-es-751",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Ante Budimir"
      },
      {
        "id": "ev-es-753",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Nicolás Castro"
      },
      {
        "id": "ev-es-752",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Bryan Zaragoza"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
      ],
      "shots": [
        10,
        7
      ],
      "shotsOnTarget": [
        4,
        3
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        13,
        14
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        632,
        608
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r13-get-esp",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 13 (Derby Xứ Andalucia)",
    "homeTeam": {
      "id": "get",
      "name": "Getafe",
      "shortName": "Getafe",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png",
      "score": 1,
      "color": "#005999"
    },
    "awayTeam": {
      "id": "esp",
      "name": "Espanyol",
      "shortName": "Espanyol",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png",
      "score": 0,
      "color": "#007FC8"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-22T23:30:00+07:00",
    "stadium": "Coliseum",
    "city": "Getafe",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-754",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Borja Mayoral"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        0.3
      ],
      "fouls": [
        14,
        13
      ],
      "corners": [
        6,
        3
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        616
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "laliga-r13-rac-dep",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 13 (Derby Xứ Andalucia)",
    "homeTeam": {
      "id": "rac",
      "name": "Racing de Santander",
      "shortName": "Racing Santander",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/90.png",
      "score": 1,
      "color": "#008754"
    },
    "awayTeam": {
      "id": "dep",
      "name": "Deportivo de La Coruña",
      "shortName": "Deportivo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/87.png",
      "score": 1,
      "color": "#0055A5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-23T01:30:00+07:00",
    "stadium": "El Sardinero",
    "city": "Santander",
    "referee": "José María Sánchez Martínez",
    "events": [
      {
        "id": "ev-es-755",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Andrés Martín"
      },
      {
        "id": "ev-es-756",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Lucas Pérez"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        14,
        16
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        636,
        604
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r13-lev-mlg",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 13 (Derby Xứ Andalucia)",
    "homeTeam": {
      "id": "lev",
      "name": "Levante",
      "shortName": "Levante",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/153.png",
      "score": 2,
      "color": "#002B49"
    },
    "awayTeam": {
      "id": "mlg",
      "name": "Malaga",
      "shortName": "Malaga",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/99.png",
      "score": 1,
      "color": "#1B65AB"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-23T03:00:00+07:00",
    "stadium": "Ciutat de València",
    "city": "Valencia",
    "referee": "Juan Martínez Munuera",
    "events": [
      {
        "id": "ev-es-757",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "José Luis Morales"
      },
      {
        "id": "ev-es-759",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Antoñito Cordero"
      },
      {
        "id": "ev-es-758",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Carlos Álvarez"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
      ],
      "shots": [
        9,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        15,
        15
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        632,
        608
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r13-ray-val",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 13 (Derby Xứ Andalucia)",
    "homeTeam": {
      "id": "ray",
      "name": "Rayo Vallecano",
      "shortName": "Rayo Vallecano",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/101.png",
      "score": 1,
      "color": "#DE0029"
    },
    "awayTeam": {
      "id": "val",
      "name": "Valencia",
      "shortName": "Valencia",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/94.png",
      "score": 2,
      "color": "#FF6600"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-23T03:00:00+07:00",
    "stadium": "Campo de Fútbol de Vallecas",
    "city": "Madrid",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-760",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Jorge de Frutos"
      },
      {
        "id": "ev-es-761",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Hugo Duro"
      },
      {
        "id": "ev-es-762",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Diego López"
      }
    ],
    "stats": {
      "possession": [
        43,
        57
      ],
      "shots": [
        8,
        11
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        14,
        16
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        592,
        648
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r14-ala-rma",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 14",
    "homeTeam": {
      "id": "ala",
      "name": "Deportivo Alavés",
      "shortName": "Alavés",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png",
      "score": 0,
      "color": "#0055A5"
    },
    "awayTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 3,
      "color": "#FEBE10"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-28T20:00:00+07:00",
    "stadium": "Mendizorrotza",
    "city": "Vitoria-Gasteiz",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-763",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Kylian Mbappé"
      },
      {
        "id": "ev-es-764",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Vinícius Jr"
      },
      {
        "id": "ev-es-765",
        "minute": 62,
        "type": "GOAL",
        "team": "away",
        "player": "Jude Bellingham"
      }
    ],
    "stats": {
      "possession": [
        42,
        58
      ],
      "shots": [
        8,
        12
      ],
      "shotsOnTarget": [
        3,
        5
      ],
      "expectedGoals": [
        0.4,
        2.7
      ],
      "fouls": [
        15,
        14
      ],
      "corners": [
        4,
        9
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        588,
        652
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r14-dep-bar",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 14",
    "homeTeam": {
      "id": "dep",
      "name": "Deportivo de La Coruña",
      "shortName": "Deportivo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/87.png",
      "score": 1,
      "color": "#0055A5"
    },
    "awayTeam": {
      "id": "bar",
      "name": "Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 4,
      "color": "#A50044"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-28T22:15:00+07:00",
    "stadium": "Abanca-Riazor",
    "city": "A Coruña",
    "referee": "Mateo Busquets Ferrer",
    "events": [
      {
        "id": "ev-es-766",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Lucas Pérez"
      },
      {
        "id": "ev-es-767",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Robert Lewandowski"
      },
      {
        "id": "ev-es-768",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Lamine Yamal"
      },
      {
        "id": "ev-es-769",
        "minute": 62,
        "type": "GOAL",
        "team": "away",
        "player": "Raphinha"
      },
      {
        "id": "ev-es-770",
        "minute": 76,
        "type": "GOAL",
        "team": "away",
        "player": "Dani Olmo"
      }
    ],
    "stats": {
      "possession": [
        47,
        53
      ],
      "shots": [
        8,
        16
      ],
      "shotsOnTarget": [
        3,
        7
      ],
      "expectedGoals": [
        1.2,
        3.5
      ],
      "fouls": [
        12,
        12
      ],
      "corners": [
        6,
        11
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        632
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "laliga-r14-elc-atm",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 14",
    "homeTeam": {
      "id": "elc",
      "name": "Elche",
      "shortName": "Elche",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3751.png",
      "score": 0,
      "color": "#006B3F"
    },
    "awayTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 2,
      "color": "#CB3524"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-29T00:30:00+07:00",
    "stadium": "Manuel Martínez Valero",
    "city": "Elche",
    "referee": "Ricardo de Burgos Bengoetxea",
    "events": [
      {
        "id": "ev-es-771",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Antoine Griezmann"
      },
      {
        "id": "ev-es-772",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Julián Álvarez"
      }
    ],
    "stats": {
      "possession": [
        45,
        55
      ],
      "shots": [
        8,
        9
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        0.4,
        1.9
      ],
      "fouls": [
        11,
        15
      ],
      "corners": [
        4,
        7
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        600,
        640
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "laliga-r14-rso-vil",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 14",
    "homeTeam": {
      "id": "rso",
      "name": "Real Sociedad",
      "shortName": "Real Sociedad",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png",
      "score": 1,
      "color": "#0067B1"
    },
    "awayTeam": {
      "id": "vil",
      "name": "Villarreal",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 1,
      "color": "#FFE600"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-29T03:00:00+07:00",
    "stadium": "Reale Arena",
    "city": "San Sebastián",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-773",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Takefusa Kubo"
      },
      {
        "id": "ev-es-774",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Álex Baena"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        11,
        16
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        652,
        588
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r14-bet-ath",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 14",
    "homeTeam": {
      "id": "bet",
      "name": "Real Betis",
      "shortName": "Real Betis",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png",
      "score": 2,
      "color": "#0BB364"
    },
    "awayTeam": {
      "id": "ath",
      "name": "Athletic Bilbao",
      "shortName": "Athletic Club",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png",
      "score": 1,
      "color": "#EE2524"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-29T19:00:00+07:00",
    "stadium": "Benito Villamarín",
    "city": "Sevilla",
    "referee": "José María Sánchez Martínez",
    "events": [
      {
        "id": "ev-es-775",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Giovani Lo Celso"
      },
      {
        "id": "ev-es-777",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Nico Williams"
      },
      {
        "id": "ev-es-776",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Vitor Roque"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        9,
        8
      ],
      "shotsOnTarget": [
        4,
        3
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        14,
        15
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r14-val-sev",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 14",
    "homeTeam": {
      "id": "val",
      "name": "Valencia",
      "shortName": "Valencia",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/94.png",
      "score": 1,
      "color": "#FF6600"
    },
    "awayTeam": {
      "id": "sev",
      "name": "Sevilla",
      "shortName": "Sevilla",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png",
      "score": 1,
      "color": "#D4001F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-29T21:15:00+07:00",
    "stadium": "Mestalla",
    "city": "Valencia",
    "referee": "Juan Martínez Munuera",
    "events": [
      {
        "id": "ev-es-778",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Hugo Duro"
      },
      {
        "id": "ev-es-779",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Dodi Lukebakio"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        15,
        13
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        648,
        592
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r14-mlg-cel",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 14",
    "homeTeam": {
      "id": "mlg",
      "name": "Malaga",
      "shortName": "Malaga",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/99.png",
      "score": 1,
      "color": "#1B65AB"
    },
    "awayTeam": {
      "id": "cel",
      "name": "Celta de Vigo",
      "shortName": "Celta Vigo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/85.png",
      "score": 2,
      "color": "#8AC3EE"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-29T23:30:00+07:00",
    "stadium": "La Rosaleda",
    "city": "Málaga",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-780",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Antoñito Cordero"
      },
      {
        "id": "ev-es-781",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Iago Aspas"
      },
      {
        "id": "ev-es-782",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Borja Iglesias"
      }
    ],
    "stats": {
      "possession": [
        41,
        59
      ],
      "shots": [
        8,
        10
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        14,
        12
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        584,
        656
      ],
      "passAccuracy": [
        86,
        87
      ]
    }
  },
  {
    "id": "laliga-r14-esp-ray",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 14",
    "homeTeam": {
      "id": "esp",
      "name": "Espanyol",
      "shortName": "Espanyol",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png",
      "score": 2,
      "color": "#007FC8"
    },
    "awayTeam": {
      "id": "ray",
      "name": "Rayo Vallecano",
      "shortName": "Rayo Vallecano",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/101.png",
      "score": 1,
      "color": "#DE0029"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-30T01:30:00+07:00",
    "stadium": "Stage Front Stadium",
    "city": "Barcelona",
    "referee": "César Soto Grado",
    "events": [
      {
        "id": "ev-es-783",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Javi Puado"
      },
      {
        "id": "ev-es-785",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Jorge de Frutos"
      },
      {
        "id": "ev-es-784",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Alejo Véliz"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
      ],
      "shots": [
        12,
        6
      ],
      "shotsOnTarget": [
        5,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        14,
        16
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        648,
        592
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r14-osa-get",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 14",
    "homeTeam": {
      "id": "osa",
      "name": "Atlético Osasuna",
      "shortName": "Osasuna",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png",
      "score": 2,
      "color": "#0A1E40"
    },
    "awayTeam": {
      "id": "get",
      "name": "Getafe",
      "shortName": "Getafe",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png",
      "score": 0,
      "color": "#005999"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-30T03:00:00+07:00",
    "stadium": "El Sadar",
    "city": "Pamplona",
    "referee": "Javier Alberola Rojas",
    "events": [
      {
        "id": "ev-es-786",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Ante Budimir"
      },
      {
        "id": "ev-es-787",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Bryan Zaragoza"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
      ],
      "shots": [
        9,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        12,
        12
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        616
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "laliga-r14-lev-rac",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 14",
    "homeTeam": {
      "id": "lev",
      "name": "Levante",
      "shortName": "Levante",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/153.png",
      "score": 1,
      "color": "#002B49"
    },
    "awayTeam": {
      "id": "rac",
      "name": "Racing de Santander",
      "shortName": "Racing Santander",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/90.png",
      "score": 1,
      "color": "#008754"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-30T03:00:00+07:00",
    "stadium": "Ciutat de València",
    "city": "Valencia",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-788",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "José Luis Morales"
      },
      {
        "id": "ev-es-789",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Andrés Martín"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
      ],
      "shots": [
        8,
        8
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        13,
        13
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        636,
        604
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r15-ath-rma",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 15",
    "homeTeam": {
      "id": "ath",
      "name": "Athletic Bilbao",
      "shortName": "Athletic Club",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png",
      "score": 1,
      "color": "#EE2524"
    },
    "awayTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 2,
      "color": "#FEBE10"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T20:00:00+07:00",
    "stadium": "San Mamés",
    "city": "Bilbao",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-790",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Nico Williams"
      },
      {
        "id": "ev-es-791",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Kylian Mbappé"
      },
      {
        "id": "ev-es-792",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Vinícius Jr"
      }
    ],
    "stats": {
      "possession": [
        48,
        52
      ],
      "shots": [
        8,
        9
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        13,
        12
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        612,
        628
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "laliga-r15-bar-cel",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 15",
    "homeTeam": {
      "id": "bar",
      "name": "Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 3,
      "color": "#A50044"
    },
    "awayTeam": {
      "id": "cel",
      "name": "Celta de Vigo",
      "shortName": "Celta Vigo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/85.png",
      "score": 1,
      "color": "#8AC3EE"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T22:15:00+07:00",
    "stadium": "Spotify Camp Nou",
    "city": "Barcelona",
    "referee": "José María Sánchez Martínez",
    "events": [
      {
        "id": "ev-es-793",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Robert Lewandowski"
      },
      {
        "id": "ev-es-796",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Iago Aspas"
      },
      {
        "id": "ev-es-794",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Lamine Yamal"
      },
      {
        "id": "ev-es-795",
        "minute": 54,
        "type": "GOAL",
        "team": "home",
        "player": "Raphinha"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        15,
        6
      ],
      "shotsOnTarget": [
        6,
        2
      ],
      "expectedGoals": [
        2.8,
        1.1
      ],
      "fouls": [
        15,
        13
      ],
      "corners": [
        10,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r15-atm-bet",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 15",
    "homeTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 2,
      "color": "#CB3524"
    },
    "awayTeam": {
      "id": "bet",
      "name": "Real Betis",
      "shortName": "Real Betis",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png",
      "score": 1,
      "color": "#0BB364"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-06T00:30:00+07:00",
    "stadium": "Riyadh Air Metropolitano",
    "city": "Madrid",
    "referee": "Juan Martínez Munuera",
    "events": [
      {
        "id": "ev-es-797",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Antoine Griezmann"
      },
      {
        "id": "ev-es-799",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Giovani Lo Celso"
      },
      {
        "id": "ev-es-798",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Julián Álvarez"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        12,
        7
      ],
      "shotsOnTarget": [
        5,
        3
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        11,
        15
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r15-vil-val",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 15",
    "homeTeam": {
      "id": "vil",
      "name": "Villarreal",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 2,
      "color": "#FFE600"
    },
    "awayTeam": {
      "id": "val",
      "name": "Valencia",
      "shortName": "Valencia",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/94.png",
      "score": 1,
      "color": "#FF6600"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-06T03:00:00+07:00",
    "stadium": "Estadio de la Cerámica",
    "city": "Villarreal",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-800",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Álex Baena"
      },
      {
        "id": "ev-es-802",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Hugo Duro"
      },
      {
        "id": "ev-es-801",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Ayoze Pérez"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        10,
        7
      ],
      "shotsOnTarget": [
        4,
        3
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        12,
        16
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r15-sev-rso",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 15",
    "homeTeam": {
      "id": "sev",
      "name": "Sevilla",
      "shortName": "Sevilla",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png",
      "score": 1,
      "color": "#D4001F"
    },
    "awayTeam": {
      "id": "rso",
      "name": "Real Sociedad",
      "shortName": "Real Sociedad",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png",
      "score": 1,
      "color": "#0067B1"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-06T19:00:00+07:00",
    "stadium": "Ramón Sánchez-Pizjuán",
    "city": "Sevilla",
    "referee": "César Soto Grado",
    "events": [
      {
        "id": "ev-es-803",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Dodi Lukebakio"
      },
      {
        "id": "ev-es-804",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Takefusa Kubo"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        15,
        16
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        652,
        588
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r15-get-elc",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 15",
    "homeTeam": {
      "id": "get",
      "name": "Getafe",
      "shortName": "Getafe",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png",
      "score": 1,
      "color": "#005999"
    },
    "awayTeam": {
      "id": "elc",
      "name": "Elche",
      "shortName": "Elche",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3751.png",
      "score": 0,
      "color": "#006B3F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-06T21:15:00+07:00",
    "stadium": "Coliseum",
    "city": "Getafe",
    "referee": "Javier Alberola Rojas",
    "events": [
      {
        "id": "ev-es-805",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Borja Mayoral"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        0.3
      ],
      "fouls": [
        11,
        14
      ],
      "corners": [
        6,
        3
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        644,
        596
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r15-ray-dep",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 15",
    "homeTeam": {
      "id": "ray",
      "name": "Rayo Vallecano",
      "shortName": "Rayo Vallecano",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/101.png",
      "score": 2,
      "color": "#DE0029"
    },
    "awayTeam": {
      "id": "dep",
      "name": "Deportivo de La Coruña",
      "shortName": "Deportivo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/87.png",
      "score": 1,
      "color": "#0055A5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-06T23:30:00+07:00",
    "stadium": "Campo de Fútbol de Vallecas",
    "city": "Madrid",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-806",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Jorge de Frutos"
      },
      {
        "id": "ev-es-808",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Lucas Pérez"
      },
      {
        "id": "ev-es-807",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Álvaro García"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        10,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        11,
        14
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        644,
        596
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r15-rac-mlg",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 15",
    "homeTeam": {
      "id": "rac",
      "name": "Racing de Santander",
      "shortName": "Racing Santander",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/90.png",
      "score": 1,
      "color": "#008754"
    },
    "awayTeam": {
      "id": "mlg",
      "name": "Malaga",
      "shortName": "Malaga",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/99.png",
      "score": 1,
      "color": "#1B65AB"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-07T01:30:00+07:00",
    "stadium": "El Sardinero",
    "city": "Santander",
    "referee": "Mateo Busquets Ferrer",
    "events": [
      {
        "id": "ev-es-809",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Andrés Martín"
      },
      {
        "id": "ev-es-810",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Antoñito Cordero"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        12,
        16
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r15-ala-lev",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 15",
    "homeTeam": {
      "id": "ala",
      "name": "Deportivo Alavés",
      "shortName": "Alavés",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png",
      "score": 2,
      "color": "#0055A5"
    },
    "awayTeam": {
      "id": "lev",
      "name": "Levante",
      "shortName": "Levante",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/153.png",
      "score": 0,
      "color": "#002B49"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-07T03:00:00+07:00",
    "stadium": "Mendizorrotza",
    "city": "Vitoria-Gasteiz",
    "referee": "Ricardo de Burgos Bengoetxea",
    "events": [
      {
        "id": "ev-es-811",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Kike García"
      },
      {
        "id": "ev-es-812",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Toni Martínez"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
      ],
      "shots": [
        12,
        6
      ],
      "shotsOnTarget": [
        5,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        11,
        13
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        640,
        600
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r15-esp-osa",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 15",
    "homeTeam": {
      "id": "esp",
      "name": "Espanyol",
      "shortName": "Espanyol",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png",
      "score": 1,
      "color": "#007FC8"
    },
    "awayTeam": {
      "id": "osa",
      "name": "Atlético Osasuna",
      "shortName": "Osasuna",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png",
      "score": 1,
      "color": "#0A1E40"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-07T03:00:00+07:00",
    "stadium": "Stage Front Stadium",
    "city": "Barcelona",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-813",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Javi Puado"
      },
      {
        "id": "ev-es-814",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Ante Budimir"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        12,
        12
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r16-rma-osa",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 16",
    "homeTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 3,
      "color": "#FEBE10"
    },
    "awayTeam": {
      "id": "osa",
      "name": "Atlético Osasuna",
      "shortName": "Osasuna",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png",
      "score": 0,
      "color": "#0A1E40"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T20:00:00+07:00",
    "stadium": "Santiago Bernabéu",
    "city": "Madrid",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-815",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Kylian Mbappé"
      },
      {
        "id": "ev-es-816",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Vinícius Jr"
      },
      {
        "id": "ev-es-817",
        "minute": 54,
        "type": "GOAL",
        "team": "home",
        "player": "Jude Bellingham"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        16,
        6
      ],
      "shotsOnTarget": [
        7,
        2
      ],
      "expectedGoals": [
        2.8,
        0.3
      ],
      "fouls": [
        13,
        12
      ],
      "corners": [
        10,
        3
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r16-mlg-bar",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 16",
    "homeTeam": {
      "id": "mlg",
      "name": "Malaga",
      "shortName": "Malaga",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/99.png",
      "score": 0,
      "color": "#1B65AB"
    },
    "awayTeam": {
      "id": "bar",
      "name": "Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 3,
      "color": "#A50044"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T22:15:00+07:00",
    "stadium": "La Rosaleda",
    "city": "Málaga",
    "referee": "César Soto Grado",
    "events": [
      {
        "id": "ev-es-818",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Robert Lewandowski"
      },
      {
        "id": "ev-es-819",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Lamine Yamal"
      },
      {
        "id": "ev-es-820",
        "minute": 62,
        "type": "GOAL",
        "team": "away",
        "player": "Raphinha"
      }
    ],
    "stats": {
      "possession": [
        47,
        53
      ],
      "shots": [
        8,
        14
      ],
      "shotsOnTarget": [
        3,
        6
      ],
      "expectedGoals": [
        0.4,
        2.7
      ],
      "fouls": [
        13,
        15
      ],
      "corners": [
        4,
        9
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        632
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "laliga-r16-atm-val",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 16",
    "homeTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 2,
      "color": "#CB3524"
    },
    "awayTeam": {
      "id": "val",
      "name": "Valencia",
      "shortName": "Valencia",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/94.png",
      "score": 1,
      "color": "#FF6600"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-13T00:30:00+07:00",
    "stadium": "Riyadh Air Metropolitano",
    "city": "Madrid",
    "referee": "Javier Alberola Rojas",
    "events": [
      {
        "id": "ev-es-821",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Antoine Griezmann"
      },
      {
        "id": "ev-es-823",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Hugo Duro"
      },
      {
        "id": "ev-es-822",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Julián Álvarez"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
      ],
      "shots": [
        9,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        15,
        12
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        616
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "laliga-r16-cel-ath",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 16",
    "homeTeam": {
      "id": "cel",
      "name": "Celta de Vigo",
      "shortName": "Celta Vigo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/85.png",
      "score": 1,
      "color": "#8AC3EE"
    },
    "awayTeam": {
      "id": "ath",
      "name": "Athletic Bilbao",
      "shortName": "Athletic Club",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png",
      "score": 2,
      "color": "#EE2524"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-13T03:00:00+07:00",
    "stadium": "Abanca-Balaídos",
    "city": "Vigo",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-824",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Iago Aspas"
      },
      {
        "id": "ev-es-825",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Nico Williams"
      },
      {
        "id": "ev-es-826",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Iñaki Williams"
      }
    ],
    "stats": {
      "possession": [
        42,
        58
      ],
      "shots": [
        8,
        11
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        13,
        13
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        588,
        652
      ],
      "passAccuracy": [
        87,
        87
      ]
    }
  },
  {
    "id": "laliga-r16-rso-ala",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 16",
    "homeTeam": {
      "id": "rso",
      "name": "Real Sociedad",
      "shortName": "Real Sociedad",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png",
      "score": 2,
      "color": "#0067B1"
    },
    "awayTeam": {
      "id": "ala",
      "name": "Deportivo Alavés",
      "shortName": "Alavés",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png",
      "score": 0,
      "color": "#0055A5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-13T19:00:00+07:00",
    "stadium": "Reale Arena",
    "city": "San Sebastián",
    "referee": "Mateo Busquets Ferrer",
    "events": [
      {
        "id": "ev-es-827",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Takefusa Kubo"
      },
      {
        "id": "ev-es-828",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Mikel Oyarzabal"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        12,
        14
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        648,
        592
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r16-bet-vil",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 16",
    "homeTeam": {
      "id": "bet",
      "name": "Real Betis",
      "shortName": "Real Betis",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png",
      "score": 2,
      "color": "#0BB364"
    },
    "awayTeam": {
      "id": "vil",
      "name": "Villarreal",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 2,
      "color": "#FFE600"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-13T21:15:00+07:00",
    "stadium": "Benito Villamarín",
    "city": "Sevilla",
    "referee": "Ricardo de Burgos Bengoetxea",
    "events": [
      {
        "id": "ev-es-829",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Giovani Lo Celso"
      },
      {
        "id": "ev-es-831",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Álex Baena"
      },
      {
        "id": "ev-es-830",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Vitor Roque"
      },
      {
        "id": "ev-es-832",
        "minute": 44,
        "type": "GOAL",
        "team": "away",
        "player": "Ayoze Pérez"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
      ],
      "shots": [
        12,
        9
      ],
      "shotsOnTarget": [
        5,
        4
      ],
      "expectedGoals": [
        2,
        1.9
      ],
      "fouls": [
        12,
        16
      ],
      "corners": [
        8,
        7
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        652,
        588
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r16-sev-rac",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 16",
    "homeTeam": {
      "id": "sev",
      "name": "Sevilla",
      "shortName": "Sevilla",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png",
      "score": 3,
      "color": "#D4001F"
    },
    "awayTeam": {
      "id": "rac",
      "name": "Racing de Santander",
      "shortName": "Racing Santander",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/90.png",
      "score": 0,
      "color": "#008754"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-13T23:30:00+07:00",
    "stadium": "Ramón Sánchez-Pizjuán",
    "city": "Sevilla",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-833",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Dodi Lukebakio"
      },
      {
        "id": "ev-es-834",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Isaac Romero"
      },
      {
        "id": "ev-es-835",
        "minute": 54,
        "type": "GOAL",
        "team": "home",
        "player": "Saúl Ñíguez"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        12,
        6
      ],
      "shotsOnTarget": [
        5,
        2
      ],
      "expectedGoals": [
        2.8,
        0.3
      ],
      "fouls": [
        14,
        16
      ],
      "corners": [
        10,
        3
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        612
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r16-elc-esp",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 16",
    "homeTeam": {
      "id": "elc",
      "name": "Elche",
      "shortName": "Elche",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3751.png",
      "score": 1,
      "color": "#006B3F"
    },
    "awayTeam": {
      "id": "esp",
      "name": "Espanyol",
      "shortName": "Espanyol",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png",
      "score": 1,
      "color": "#007FC8"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-14T01:30:00+07:00",
    "stadium": "Manuel Martínez Valero",
    "city": "Elche",
    "referee": "José María Sánchez Martínez",
    "events": [
      {
        "id": "ev-es-836",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Nicolás Castro"
      },
      {
        "id": "ev-es-837",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Javi Puado"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
      ],
      "shots": [
        8,
        7
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        13,
        12
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        616
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "laliga-r16-dep-get",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 16",
    "homeTeam": {
      "id": "dep",
      "name": "Deportivo de La Coruña",
      "shortName": "Deportivo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/87.png",
      "score": 2,
      "color": "#0055A5"
    },
    "awayTeam": {
      "id": "get",
      "name": "Getafe",
      "shortName": "Getafe",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png",
      "score": 1,
      "color": "#005999"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-14T03:00:00+07:00",
    "stadium": "Abanca-Riazor",
    "city": "A Coruña",
    "referee": "Juan Martínez Munuera",
    "events": [
      {
        "id": "ev-es-838",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Lucas Pérez"
      },
      {
        "id": "ev-es-840",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Borja Mayoral"
      },
      {
        "id": "ev-es-839",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Yeremay Hernández"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
      ],
      "shots": [
        12,
        6
      ],
      "shotsOnTarget": [
        5,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        12,
        14
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        652,
        588
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r16-lev-ray",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 16",
    "homeTeam": {
      "id": "lev",
      "name": "Levante",
      "shortName": "Levante",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/153.png",
      "score": 1,
      "color": "#002B49"
    },
    "awayTeam": {
      "id": "ray",
      "name": "Rayo Vallecano",
      "shortName": "Rayo Vallecano",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/101.png",
      "score": 1,
      "color": "#DE0029"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-14T03:00:00+07:00",
    "stadium": "Ciutat de València",
    "city": "Valencia",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-841",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "José Luis Morales"
      },
      {
        "id": "ev-es-842",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Jorge de Frutos"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
      ],
      "shots": [
        8,
        8
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        11,
        12
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        640,
        600
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r17-rma-dep",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 17 (Loạt Trận Trước Giáng Sinh)",
    "homeTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 3,
      "color": "#FEBE10"
    },
    "awayTeam": {
      "id": "dep",
      "name": "Deportivo de La Coruña",
      "shortName": "Deportivo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/87.png",
      "score": 1,
      "color": "#0055A5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T20:00:00+07:00",
    "stadium": "Santiago Bernabéu",
    "city": "Madrid",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-843",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Kylian Mbappé"
      },
      {
        "id": "ev-es-846",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Lucas Pérez"
      },
      {
        "id": "ev-es-844",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Vinícius Jr"
      },
      {
        "id": "ev-es-845",
        "minute": 54,
        "type": "GOAL",
        "team": "home",
        "player": "Jude Bellingham"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        13,
        6
      ],
      "shotsOnTarget": [
        5,
        2
      ],
      "expectedGoals": [
        2.8,
        1.1
      ],
      "fouls": [
        14,
        14
      ],
      "corners": [
        10,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        644,
        596
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r17-cel-atm",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 17 (Loạt Trận Trước Giáng Sinh)",
    "homeTeam": {
      "id": "cel",
      "name": "Celta de Vigo",
      "shortName": "Celta Vigo",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/85.png",
      "score": 1,
      "color": "#8AC3EE"
    },
    "awayTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 2,
      "color": "#CB3524"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T22:15:00+07:00",
    "stadium": "Abanca-Balaídos",
    "city": "Vigo",
    "referee": "Mateo Busquets Ferrer",
    "events": [
      {
        "id": "ev-es-847",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Iago Aspas"
      },
      {
        "id": "ev-es-848",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Antoine Griezmann"
      },
      {
        "id": "ev-es-849",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Julián Álvarez"
      }
    ],
    "stats": {
      "possession": [
        45,
        55
      ],
      "shots": [
        8,
        10
      ],
      "shotsOnTarget": [
        3,
        4
      ],
      "expectedGoals": [
        1.2,
        1.9
      ],
      "fouls": [
        11,
        13
      ],
      "corners": [
        6,
        7
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        600,
        640
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "laliga-r17-bar-rso",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 17 (Loạt Trận Trước Giáng Sinh)",
    "homeTeam": {
      "id": "bar",
      "name": "Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 2,
      "color": "#A50044"
    },
    "awayTeam": {
      "id": "rso",
      "name": "Real Sociedad",
      "shortName": "Real Sociedad",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png",
      "score": 1,
      "color": "#0067B1"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-20T00:30:00+07:00",
    "stadium": "Spotify Camp Nou",
    "city": "Barcelona",
    "referee": "Ricardo de Burgos Bengoetxea",
    "events": [
      {
        "id": "ev-es-850",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Robert Lewandowski"
      },
      {
        "id": "ev-es-852",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Takefusa Kubo"
      },
      {
        "id": "ev-es-851",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Lamine Yamal"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        14,
        16
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        632,
        608
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r17-val-bet",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 17 (Loạt Trận Trước Giáng Sinh)",
    "homeTeam": {
      "id": "val",
      "name": "Valencia",
      "shortName": "Valencia",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/94.png",
      "score": 2,
      "color": "#FF6600"
    },
    "awayTeam": {
      "id": "bet",
      "name": "Real Betis",
      "shortName": "Real Betis",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png",
      "score": 2,
      "color": "#0BB364"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-20T03:00:00+07:00",
    "stadium": "Mestalla",
    "city": "Valencia",
    "referee": "Jesús Gil Manzano",
    "events": [
      {
        "id": "ev-es-853",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Hugo Duro"
      },
      {
        "id": "ev-es-855",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Giovani Lo Celso"
      },
      {
        "id": "ev-es-854",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Diego López"
      },
      {
        "id": "ev-es-856",
        "minute": 44,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Vitor Roque"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
      ],
      "shots": [
        11,
        8
      ],
      "shotsOnTarget": [
        4,
        3
      ],
      "expectedGoals": [
        2,
        1.9
      ],
      "fouls": [
        12,
        15
      ],
      "corners": [
        8,
        7
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        648,
        592
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r17-ath-sev",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 17 (Loạt Trận Trước Giáng Sinh)",
    "homeTeam": {
      "id": "ath",
      "name": "Athletic Bilbao",
      "shortName": "Athletic Club",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png",
      "score": 2,
      "color": "#EE2524"
    },
    "awayTeam": {
      "id": "sev",
      "name": "Sevilla",
      "shortName": "Sevilla",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png",
      "score": 1,
      "color": "#D4001F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-20T19:00:00+07:00",
    "stadium": "San Mamés",
    "city": "Bilbao",
    "referee": "José María Sánchez Martínez",
    "events": [
      {
        "id": "ev-es-857",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Nico Williams"
      },
      {
        "id": "ev-es-859",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Dodi Lukebakio"
      },
      {
        "id": "ev-es-858",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Iñaki Williams"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
      ],
      "shots": [
        10,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        11,
        14
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        636,
        604
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "laliga-r17-vil-osa",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 17 (Loạt Trận Trước Giáng Sinh)",
    "homeTeam": {
      "id": "vil",
      "name": "Villarreal",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 2,
      "color": "#FFE600"
    },
    "awayTeam": {
      "id": "osa",
      "name": "Atlético Osasuna",
      "shortName": "Osasuna",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png",
      "score": 0,
      "color": "#0A1E40"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-20T21:15:00+07:00",
    "stadium": "Estadio de la Cerámica",
    "city": "Villarreal",
    "referee": "Juan Martínez Munuera",
    "events": [
      {
        "id": "ev-es-860",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Álex Baena"
      },
      {
        "id": "ev-es-861",
        "minute": 36,
        "type": "GOAL",
        "team": "home",
        "player": "Ayoze Pérez"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
      ],
      "shots": [
        10,
        6
      ],
      "shotsOnTarget": [
        4,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        11,
        16
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        652,
        588
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r17-get-lev",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 17 (Loạt Trận Trước Giáng Sinh)",
    "homeTeam": {
      "id": "get",
      "name": "Getafe",
      "shortName": "Getafe",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png",
      "score": 1,
      "color": "#005999"
    },
    "awayTeam": {
      "id": "lev",
      "name": "Levante",
      "shortName": "Levante",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/153.png",
      "score": 0,
      "color": "#002B49"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-20T23:30:00+07:00",
    "stadium": "Coliseum",
    "city": "Getafe",
    "referee": "Alejandro Hernández Hernández",
    "events": [
      {
        "id": "ev-es-862",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Borja Mayoral"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        1.2,
        0.3
      ],
      "fouls": [
        13,
        16
      ],
      "corners": [
        6,
        3
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        3,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        648,
        592
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r17-ray-rac",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 17 (Loạt Trận Trước Giáng Sinh)",
    "homeTeam": {
      "id": "ray",
      "name": "Rayo Vallecano",
      "shortName": "Rayo Vallecano",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/101.png",
      "score": 2,
      "color": "#DE0029"
    },
    "awayTeam": {
      "id": "rac",
      "name": "Racing de Santander",
      "shortName": "Racing Santander",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/90.png",
      "score": 1,
      "color": "#008754"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-21T01:30:00+07:00",
    "stadium": "Campo de Fútbol de Vallecas",
    "city": "Madrid",
    "referee": "César Soto Grado",
    "events": [
      {
        "id": "ev-es-863",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Jorge de Frutos"
      },
      {
        "id": "ev-es-865",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Andrés Martín"
      },
      {
        "id": "ev-es-864",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Álvaro García"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        10,
        7
      ],
      "shotsOnTarget": [
        4,
        3
      ],
      "expectedGoals": [
        2,
        1.1
      ],
      "fouls": [
        12,
        12
      ],
      "corners": [
        8,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        3,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        644,
        596
      ],
      "passAccuracy": [
        89,
        85
      ]
    }
  },
  {
    "id": "laliga-r17-esp-ala",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 17 (Loạt Trận Trước Giáng Sinh)",
    "homeTeam": {
      "id": "esp",
      "name": "Espanyol",
      "shortName": "Espanyol",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png",
      "score": 1,
      "color": "#007FC8"
    },
    "awayTeam": {
      "id": "ala",
      "name": "Deportivo Alavés",
      "shortName": "Alavés",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png",
      "score": 1,
      "color": "#0055A5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-21T03:00:00+07:00",
    "stadium": "Stage Front Stadium",
    "city": "Barcelona",
    "referee": "Javier Alberola Rojas",
    "events": [
      {
        "id": "ev-es-866",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Javi Puado"
      },
      {
        "id": "ev-es-867",
        "minute": 28,
        "type": "GOAL",
        "team": "away",
        "player": "Kike García"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
      ],
      "shots": [
        8,
        8
      ],
      "shotsOnTarget": [
        3,
        3
      ],
      "expectedGoals": [
        1.2,
        1.1
      ],
      "fouls": [
        13,
        13
      ],
      "corners": [
        6,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        616
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "laliga-r17-osa-mlg",
    "leagueId": "laliga",
    "round": "La Liga - Vòng 17 (Loạt Trận Trước Giáng Sinh)",
    "homeTeam": {
      "id": "osa",
      "name": "Atlético Osasuna",
      "shortName": "Osasuna",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/97.png",
      "score": 2,
      "color": "#0A1E40"
    },
    "awayTeam": {
      "id": "mlg",
      "name": "Malaga",
      "shortName": "Malaga",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/99.png",
      "score": 0,
      "color": "#1B65AB"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-21T03:00:00+07:00",
    "stadium": "El Sadar",
    "city": "Pamplona",
    "referee": "Guillermo Cuadra Fernández",
    "events": [
      {
        "id": "ev-es-868",
        "minute": 19,
        "type": "GOAL",
        "team": "home",
        "player": "Ante Budimir"
      },
      {
        "id": "ev-es-869",
        "minute": 36,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Bryan Zaragoza"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
      ],
      "shots": [
        8,
        6
      ],
      "shotsOnTarget": [
        3,
        2
      ],
      "expectedGoals": [
        2,
        0.3
      ],
      "fouls": [
        11,
        14
      ],
      "corners": [
        8,
        3
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        632,
        608
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  }
];
