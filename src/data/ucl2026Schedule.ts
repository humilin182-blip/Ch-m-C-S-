import { Match } from '../types/football';

/**
 * Lịch thi đấu UEFA Champions League (C1) mùa giải 2026/2027 từ Tháng 10 đến Tháng 12/2026 (Matchday 1 đến Matchday 6)
 * Đầy đủ các đại chiến đỉnh cao châu Âu:
 * - Matchday 2 (14 - 15/10): Arsenal vs Lille, Galatasaray vs Barca, Atletico vs Man United, Man City vs PSG, Roma vs Real Madrid...
 * - Matchday 3 (21 - 22/10): PSG vs Barcelona, Liverpool vs Villarreal, Bayern vs Arsenal, Real Madrid vs Leipzig...
 * - Matchday 4 (04 - 05/11): Atletico vs Bayern, Barca vs Aston Villa, Man United vs Roma, Villarreal vs PSG, AEK vs Real, Slavia vs Arsenal...
 * - Matchday 5 (25 - 26/11): Arsenal vs Dortmund, Real Madrid vs PSV, Man City vs Napoli, Lille vs Bayern, PSG vs Roma, Brugge vs Liverpool...
 * - Matchday 6 (09 - 10/12): Barcelona vs Man City, Arsenal vs Real Madrid, Dortmund vs Inter, Liverpool vs Porto...
 * 
 * Toàn bộ trận đấu có status: 'SCHEDULED' kích hoạt đồng hồ đếm ngược trực tiếp.
 */
export const UCL_2026_SCHEDULE: Match[] = [
  {
    "id": "ucl-c1---matchday-2-ars-lil",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 2",
    "homeTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 0,
      "color": "#EF0107"
    },
    "awayTeam": {
      "id": "lil",
      "name": "Lille OSC",
      "shortName": "Lille",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/164.png",
      "score": 0,
      "color": "#E01E13"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-14T02:00:00+07:00",
    "stadium": "Emirates Stadium",
    "city": "London",
    "referee": "Szymon Marciniak (POL)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-2-gal-bar",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 2",
    "homeTeam": {
      "id": "gal",
      "name": "Galatasaray",
      "shortName": "Galatasaray",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/436.png",
      "score": 0,
      "color": "#A90432"
    },
    "awayTeam": {
      "id": "bar",
      "name": "FC Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 0,
      "color": "#A50044"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-14T02:00:00+07:00",
    "stadium": "RAMS Park",
    "city": "Istanbul",
    "referee": "Daniele Orsato (ITA)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-2-atm-mun",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 2",
    "homeTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 0,
      "color": "#CB3524"
    },
    "awayTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 0,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-14T02:00:00+07:00",
    "stadium": "Riyadh Air Metropolitano",
    "city": "Madrid",
    "referee": "Clément Turpin (FRA)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-2-vil-nap",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 2",
    "homeTeam": {
      "id": "vil",
      "name": "Villarreal CF",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 0,
      "color": "#FFE667"
    },
    "awayTeam": {
      "id": "nap",
      "name": "SSC Napoli",
      "shortName": "Napoli",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png",
      "score": 0,
      "color": "#12A0D7"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-14T02:00:00+07:00",
    "stadium": "Estadio de la Cerámica",
    "city": "Villarreal",
    "referee": "Michael Oliver (ENG)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-2-int-bru",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 2",
    "homeTeam": {
      "id": "int",
      "name": "Inter Milan",
      "shortName": "Inter",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png",
      "score": 0,
      "color": "#010E80"
    },
    "awayTeam": {
      "id": "bru",
      "name": "Club Brugge",
      "shortName": "Club Brugge",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/232.png",
      "score": 0,
      "color": "#002B7F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-14T02:00:00+07:00",
    "stadium": "San Siro",
    "city": "Milan",
    "referee": "Felix Zwayer (GER)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-2-rbl-psv",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 2",
    "homeTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 0,
      "color": "#DD0741"
    },
    "awayTeam": {
      "id": "psv",
      "name": "PSV Eindhoven",
      "shortName": "PSV",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/148.png",
      "score": 0,
      "color": "#ED1B24"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-14T02:00:00+07:00",
    "stadium": "Red Bull Arena",
    "city": "Leipzig",
    "referee": "Artur Soares Dias (POR)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-2-vik-bay",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 2",
    "homeTeam": {
      "id": "vik",
      "name": "Viking FK",
      "shortName": "Viking",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/409.png",
      "score": 0,
      "color": "#002855"
    },
    "awayTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 0,
      "color": "#DC052D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-14T02:00:00+07:00",
    "stadium": "SR-Bank Arena",
    "city": "Stavanger",
    "referee": "Glenn Nyberg (SWE)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-2-fey-com",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 2",
    "homeTeam": {
      "id": "fey",
      "name": "Feyenoord",
      "shortName": "Feyenoord",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/144.png",
      "score": 0,
      "color": "#ED1C24"
    },
    "awayTeam": {
      "id": "com",
      "name": "Como 1907",
      "shortName": "Como",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/118.png",
      "score": 0,
      "color": "#003366"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-14T23:45:00+07:00",
    "stadium": "De Kuip",
    "city": "Rotterdam",
    "referee": "Irfan Peljto (BIH)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-2-las-liv",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 2",
    "homeTeam": {
      "id": "las",
      "name": "LASK Linz",
      "shortName": "LASK",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2255.png",
      "score": 0,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "liv",
      "name": "Liverpool FC",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 0,
      "color": "#C8102E"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-14T23:45:00+07:00",
    "stadium": "Raiffeisen Arena",
    "city": "Linz",
    "referee": "Jesús Gil Manzano (ESP)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-2-mci-psg",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 2",
    "homeTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 0,
      "color": "#6CABDD"
    },
    "awayTeam": {
      "id": "psg",
      "name": "Paris Saint-Germain",
      "shortName": "PSG",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png",
      "score": 0,
      "color": "#004170"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-15T02:00:00+07:00",
    "stadium": "Etihad Stadium",
    "city": "Manchester",
    "referee": "István Kovács (ROU)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-2-rom-rma",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 2",
    "homeTeam": {
      "id": "rom",
      "name": "AS Roma",
      "shortName": "Roma",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/104.png",
      "score": 0,
      "color": "#8E1F2F"
    },
    "awayTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 0,
      "color": "#FEBE10"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-15T02:00:00+07:00",
    "stadium": "Stadio Olimpico",
    "city": "Rome",
    "referee": "Anthony Taylor (ENG)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-2-avl-fen",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 2",
    "homeTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 0,
      "color": "#95BFE5"
    },
    "awayTeam": {
      "id": "fen",
      "name": "Fenerbahçe",
      "shortName": "Fenerbahçe",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/434.png",
      "score": 0,
      "color": "#002D72"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-15T02:00:00+07:00",
    "stadium": "Villa Park",
    "city": "Birmingham",
    "referee": "Slavko Vincic (SVN)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-3-lil-gal",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 3",
    "homeTeam": {
      "id": "lil",
      "name": "Lille OSC",
      "shortName": "Lille",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/164.png",
      "score": 0,
      "color": "#E01E13"
    },
    "awayTeam": {
      "id": "gal",
      "name": "Galatasaray",
      "shortName": "Galatasaray",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/436.png",
      "score": 0,
      "color": "#A90432"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-21T18:45:00+07:00",
    "stadium": "Stade Pierre-Mauroy",
    "city": "Villeneuve-d'Ascq",
    "referee": "Davide Massa (ITA)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-3-psg-bar",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 3",
    "homeTeam": {
      "id": "psg",
      "name": "Paris Saint-Germain",
      "shortName": "PSG",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png",
      "score": 0,
      "color": "#004170"
    },
    "awayTeam": {
      "id": "bar",
      "name": "FC Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 0,
      "color": "#A50044"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-21T02:00:00+07:00",
    "stadium": "Parc des Princes",
    "city": "Paris",
    "referee": "Michael Oliver (ENG)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-3-liv-vil",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 3",
    "homeTeam": {
      "id": "liv",
      "name": "Liverpool FC",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 0,
      "color": "#C8102E"
    },
    "awayTeam": {
      "id": "vil",
      "name": "Villarreal CF",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 0,
      "color": "#FFE667"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-21T02:00:00+07:00",
    "stadium": "Anfield",
    "city": "Liverpool",
    "referee": "Felix Zwayer (GER)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-3-int-sla",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 3",
    "homeTeam": {
      "id": "int",
      "name": "Inter Milan",
      "shortName": "Inter",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png",
      "score": 0,
      "color": "#010E80"
    },
    "awayTeam": {
      "id": "sla",
      "name": "Slavia Praha",
      "shortName": "Slavia Praha",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/463.png",
      "score": 0,
      "color": "#E4002B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-21T02:00:00+07:00",
    "stadium": "San Siro",
    "city": "Milan",
    "referee": "Artur Soares Dias (POR)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-3-bay-ars",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 3",
    "homeTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 0,
      "color": "#DC052D"
    },
    "awayTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 0,
      "color": "#EF0107"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-22T02:00:00+07:00",
    "stadium": "Allianz Arena",
    "city": "Munich",
    "referee": "Szymon Marciniak (POL)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-3-rma-rbl",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 3",
    "homeTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 0,
      "color": "#FEBE10"
    },
    "awayTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 0,
      "color": "#DD0741"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-22T02:00:00+07:00",
    "stadium": "Santiago Bernabéu",
    "city": "Madrid",
    "referee": "Clément Turpin (FRA)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-3-mci-fey",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 3",
    "homeTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 0,
      "color": "#6CABDD"
    },
    "awayTeam": {
      "id": "fey",
      "name": "Feyenoord",
      "shortName": "Feyenoord",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/144.png",
      "score": 0,
      "color": "#ED1C24"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-22T02:00:00+07:00",
    "stadium": "Etihad Stadium",
    "city": "Manchester",
    "referee": "Glenn Nyberg (SWE)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-3-rom-bru",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 3",
    "homeTeam": {
      "id": "rom",
      "name": "AS Roma",
      "shortName": "Roma",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/104.png",
      "score": 0,
      "color": "#8E1F2F"
    },
    "awayTeam": {
      "id": "bru",
      "name": "Club Brugge",
      "shortName": "Club Brugge",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/232.png",
      "score": 0,
      "color": "#002B7F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-22T02:00:00+07:00",
    "stadium": "Stadio Olimpico",
    "city": "Rome",
    "referee": "François Letexier (FRA)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-4-atm-bay",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 4",
    "homeTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 0,
      "color": "#CB3524"
    },
    "awayTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 0,
      "color": "#DC052D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-04T02:00:00+07:00",
    "stadium": "Riyadh Air Metropolitano",
    "city": "Madrid",
    "referee": "Michael Oliver (ENG)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-4-bar-avl",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 4",
    "homeTeam": {
      "id": "bar",
      "name": "FC Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 0,
      "color": "#A50044"
    },
    "awayTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 0,
      "color": "#95BFE5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-04T02:00:00+07:00",
    "stadium": "Spotify Camp Nou",
    "city": "Barcelona",
    "referee": "Felix Zwayer (GER)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-4-mun-rom",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 4",
    "homeTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 0,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "rom",
      "name": "AS Roma",
      "shortName": "Roma",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/104.png",
      "score": 0,
      "color": "#8E1F2F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-04T02:00:00+07:00",
    "stadium": "Old Trafford",
    "city": "Manchester",
    "referee": "Clément Turpin (FRA)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-4-vil-psg",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 4",
    "homeTeam": {
      "id": "vil",
      "name": "Villarreal CF",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 0,
      "color": "#FFE667"
    },
    "awayTeam": {
      "id": "psg",
      "name": "Paris Saint-Germain",
      "shortName": "PSG",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png",
      "score": 0,
      "color": "#004170"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-04T02:00:00+07:00",
    "stadium": "Estadio de la Cerámica",
    "city": "Villarreal",
    "referee": "Szymon Marciniak (POL)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-4-aek-rma",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 4",
    "homeTeam": {
      "id": "aek",
      "name": "AEK Athens",
      "shortName": "AEK Athens",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/449.png",
      "score": 0,
      "color": "#FCD116"
    },
    "awayTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 0,
      "color": "#FEBE10"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-05T02:00:00+07:00",
    "stadium": "OPAP Arena",
    "city": "Athens",
    "referee": "Davide Massa (ITA)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-4-fen-liv",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 4",
    "homeTeam": {
      "id": "fen",
      "name": "Fenerbahçe",
      "shortName": "Fenerbahçe",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/434.png",
      "score": 0,
      "color": "#002D72"
    },
    "awayTeam": {
      "id": "liv",
      "name": "Liverpool FC",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 0,
      "color": "#C8102E"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-05T02:00:00+07:00",
    "stadium": "Şükrü Saracoğlu",
    "city": "Istanbul",
    "referee": "István Kovács (ROU)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-4-sla-ars",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 4",
    "homeTeam": {
      "id": "sla",
      "name": "Slavia Praha",
      "shortName": "Slavia Praha",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/463.png",
      "score": 0,
      "color": "#E4002B"
    },
    "awayTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 0,
      "color": "#EF0107"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-05T02:00:00+07:00",
    "stadium": "Fortuna Arena",
    "city": "Prague",
    "referee": "Glenn Nyberg (SWE)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-4-rbl-mci",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 4",
    "homeTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 0,
      "color": "#DD0741"
    },
    "awayTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 0,
      "color": "#6CABDD"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-05T02:00:00+07:00",
    "stadium": "Red Bull Arena",
    "city": "Leipzig",
    "referee": "Anthony Taylor (ENG)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-4-nap-int",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 4",
    "homeTeam": {
      "id": "nap",
      "name": "SSC Napoli",
      "shortName": "Napoli",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png",
      "score": 0,
      "color": "#12A0D7"
    },
    "awayTeam": {
      "id": "int",
      "name": "Inter Milan",
      "shortName": "Inter",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png",
      "score": 0,
      "color": "#010E80"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-05T02:00:00+07:00",
    "stadium": "Stadio Diego Armando Maradona",
    "city": "Napoli",
    "referee": "François Letexier (FRA)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-4-psv-bvb",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 4",
    "homeTeam": {
      "id": "psv",
      "name": "PSV Eindhoven",
      "shortName": "PSV",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/148.png",
      "score": 0,
      "color": "#ED1B24"
    },
    "awayTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 0,
      "color": "#FDE100"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-05T02:00:00+07:00",
    "stadium": "Philips Stadion",
    "city": "Eindhoven",
    "referee": "Artur Soares Dias (POR)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-5-ars-bvb",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 5",
    "homeTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 0,
      "color": "#EF0107"
    },
    "awayTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 0,
      "color": "#FDE100"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-25T02:00:00+07:00",
    "stadium": "Emirates Stadium",
    "city": "London",
    "referee": "Clément Turpin (FRA)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-5-rma-psv",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 5",
    "homeTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 0,
      "color": "#FEBE10"
    },
    "awayTeam": {
      "id": "psv",
      "name": "PSV Eindhoven",
      "shortName": "PSV",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/148.png",
      "score": 0,
      "color": "#ED1B24"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-25T02:00:00+07:00",
    "stadium": "Santiago Bernabéu",
    "city": "Madrid",
    "referee": "Michael Oliver (ENG)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-5-mci-nap",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 5",
    "homeTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 0,
      "color": "#6CABDD"
    },
    "awayTeam": {
      "id": "nap",
      "name": "SSC Napoli",
      "shortName": "Napoli",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png",
      "score": 0,
      "color": "#12A0D7"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-25T02:00:00+07:00",
    "stadium": "Etihad Stadium",
    "city": "Manchester",
    "referee": "Felix Zwayer (GER)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-5-lil-bay",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 5",
    "homeTeam": {
      "id": "lil",
      "name": "Lille OSC",
      "shortName": "Lille",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/164.png",
      "score": 0,
      "color": "#E01E13"
    },
    "awayTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 0,
      "color": "#DC052D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-26T02:00:00+07:00",
    "stadium": "Stade Pierre-Mauroy",
    "city": "Villeneuve-d'Ascq",
    "referee": "Szymon Marciniak (POL)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-5-psg-rom",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 5",
    "homeTeam": {
      "id": "psg",
      "name": "Paris Saint-Germain",
      "shortName": "PSG",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png",
      "score": 0,
      "color": "#004170"
    },
    "awayTeam": {
      "id": "rom",
      "name": "AS Roma",
      "shortName": "Roma",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/104.png",
      "score": 0,
      "color": "#8E1F2F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-26T02:00:00+07:00",
    "stadium": "Parc des Princes",
    "city": "Paris",
    "referee": "Anthony Taylor (ENG)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-5-bru-liv",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 5",
    "homeTeam": {
      "id": "bru",
      "name": "Club Brugge",
      "shortName": "Club Brugge",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/232.png",
      "score": 0,
      "color": "#002B7F"
    },
    "awayTeam": {
      "id": "liv",
      "name": "Liverpool FC",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 0,
      "color": "#C8102E"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-26T02:00:00+07:00",
    "stadium": "Jan Breydel Stadium",
    "city": "Bruges",
    "referee": "Davide Massa (ITA)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-5-bar-int",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 5",
    "homeTeam": {
      "id": "bar",
      "name": "FC Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 0,
      "color": "#A50044"
    },
    "awayTeam": {
      "id": "int",
      "name": "Inter Milan",
      "shortName": "Inter",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png",
      "score": 0,
      "color": "#010E80"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-26T02:00:00+07:00",
    "stadium": "Spotify Camp Nou",
    "city": "Barcelona",
    "referee": "István Kovács (ROU)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-5-atm-avl",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 5",
    "homeTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 0,
      "color": "#CB3524"
    },
    "awayTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 0,
      "color": "#95BFE5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-26T02:00:00+07:00",
    "stadium": "Riyadh Air Metropolitano",
    "city": "Madrid",
    "referee": "Glenn Nyberg (SWE)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-6-bar-mci",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 6",
    "homeTeam": {
      "id": "bar",
      "name": "FC Barcelona",
      "shortName": "Barcelona",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png",
      "score": 0,
      "color": "#A50044"
    },
    "awayTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 0,
      "color": "#6CABDD"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-09T02:00:00+07:00",
    "stadium": "Spotify Camp Nou",
    "city": "Barcelona",
    "referee": "Szymon Marciniak (POL)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-6-psg-bay",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 6",
    "homeTeam": {
      "id": "psg",
      "name": "Paris Saint-Germain",
      "shortName": "PSG",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png",
      "score": 0,
      "color": "#004170"
    },
    "awayTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 0,
      "color": "#DC052D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-09T02:00:00+07:00",
    "stadium": "Parc des Princes",
    "city": "Paris",
    "referee": "Anthony Taylor (ENG)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-6-atm-nap",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 6",
    "homeTeam": {
      "id": "atm",
      "name": "Atlético de Madrid",
      "shortName": "Atlético",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png",
      "score": 0,
      "color": "#CB3524"
    },
    "awayTeam": {
      "id": "nap",
      "name": "SSC Napoli",
      "shortName": "Napoli",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png",
      "score": 0,
      "color": "#12A0D7"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-09T02:00:00+07:00",
    "stadium": "Riyadh Air Metropolitano",
    "city": "Madrid",
    "referee": "Clément Turpin (FRA)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-6-ars-rma",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 6",
    "homeTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 0,
      "color": "#EF0107"
    },
    "awayTeam": {
      "id": "rma",
      "name": "Real Madrid",
      "shortName": "Real Madrid",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png",
      "score": 0,
      "color": "#FEBE10"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-10T02:00:00+07:00",
    "stadium": "Emirates Stadium",
    "city": "London",
    "referee": "Felix Zwayer (GER)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-6-bvb-int",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 6",
    "homeTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 0,
      "color": "#FDE100"
    },
    "awayTeam": {
      "id": "int",
      "name": "Inter Milan",
      "shortName": "Inter",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png",
      "score": 0,
      "color": "#010E80"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-10T02:00:00+07:00",
    "stadium": "Signal Iduna Park",
    "city": "Dortmund",
    "referee": "Michael Oliver (ENG)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-6-liv-por",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 6",
    "homeTeam": {
      "id": "liv",
      "name": "Liverpool FC",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 0,
      "color": "#C8102E"
    },
    "awayTeam": {
      "id": "por",
      "name": "FC Porto",
      "shortName": "Porto",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/437.png",
      "score": 0,
      "color": "#003882"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-10T02:00:00+07:00",
    "stadium": "Anfield",
    "city": "Liverpool",
    "referee": "István Kovács (ROU)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-6-rom-vil",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 6",
    "homeTeam": {
      "id": "rom",
      "name": "AS Roma",
      "shortName": "Roma",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/104.png",
      "score": 0,
      "color": "#8E1F2F"
    },
    "awayTeam": {
      "id": "vil",
      "name": "Villarreal CF",
      "shortName": "Villarreal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png",
      "score": 0,
      "color": "#FFE667"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-10T02:00:00+07:00",
    "stadium": "Stadio Olimpico",
    "city": "Rome",
    "referee": "Glenn Nyberg (SWE)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  },
  {
    "id": "ucl-c1---matchday-6-avl-rbl",
    "leagueId": "ucl",
    "round": "Champion leauge - Matchday 6",
    "homeTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 0,
      "color": "#95BFE5"
    },
    "awayTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 0,
      "color": "#DD0741"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-10T02:00:00+07:00",
    "stadium": "Villa Park",
    "city": "Birmingham",
    "referee": "Davide Massa (ITA)",
    "events": [],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        0,
        0
      ],
      "shotsOnTarget": [
        0,
        0
      ],
      "expectedGoals": [
        0,
        0
      ],
      "fouls": [
        0,
        0
      ],
      "corners": [
        0,
        0
      ],
      "offsides": [
        0,
        0
      ],
      "yellowCards": [
        0,
        0
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        0,
        0
      ],
      "passAccuracy": [
        0,
        0
      ]
    }
  }
];
