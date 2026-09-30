import { Match } from '../types/football';

/**
 * Lịch thi đấu Bundesliga 2026 từ Tháng 10 đến hết Tháng 12/2026 (Vòng 5 đến Vòng 15 trước kỳ nghỉ đông)
 * Đầy đủ 18 CLB Đức: Bayern Munich, Dortmund, Leverkusen, Leipzig, Frankfurt, Stuttgart, Freiburg...
 * Bao gồm Der Klassiker (01/11), Revierderby Dortmund vs Schalke 04 (04/12), Bayern vs Leverkusen (12/12)
 * Giờ thi đấu chuẩn theo Giờ Việt Nam (Asia/Saigon GMT+7)
 * Toàn bộ trận đấu chưa đá đều có status: 'SCHEDULED' để kích hoạt đồng hồ đếm ngược trực tiếp.
 */
export const BUNDESLIGA_2026_SCHEDULE: Match[] = [
  {
    "id": "bun-r5-bvb-bre",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 5",
    "homeTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 3,
      "color": "#FDE100"
    },
    "awayTeam": {
      "id": "bre-de",
      "name": "SV Werder Bremen",
      "shortName": "Werder Bremen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/137.png",
      "score": 1,
      "color": "#1B824B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T01:30:00+07:00",
    "stadium": "Signal Iduna Park",
    "city": "Dortmund",
    "referee": "Harm Osmers",
    "events": [
      {
        "id": "ev-de-1200",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Serhou Guirassy"
      },
      {
        "id": "ev-de-1203",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Marvin Ducksch"
      },
      {
        "id": "ev-de-1201",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Julian Brandt"
      },
      {
        "id": "ev-de-1202",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Karim Adeyemi"
      }
    ],
    "stats": {
      "possession": [
        59,
        41
      ],
      "shots": [
        13,
        7
      ],
      "shotsOnTarget": [
        5,
        3
      ],
      "expectedGoals": [
        2.8,
        1.1
      ],
      "fouls": [
        12,
        11
      ],
      "corners": [
        11,
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
        666,
        594
      ],
      "passAccuracy": [
        90,
        83
      ]
    }
  },
  {
    "id": "bun-r5-aug-bay",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 5",
    "homeTeam": {
      "id": "aug",
      "name": "FC Augsburg",
      "shortName": "Augsburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3841.png",
      "score": 1,
      "color": "#BA3733"
    },
    "awayTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern Munich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 4,
      "color": "#DC052D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T20:30:00+07:00",
    "stadium": "WWK Arena",
    "city": "Augsburg",
    "referee": "Bastian Dankert",
    "events": [
      {
        "id": "ev-de-1204",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Phillip Tietz"
      },
      {
        "id": "ev-de-1205",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Harry Kane"
      },
      {
        "id": "ev-de-1206",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Jamal Musiala"
      },
      {
        "id": "ev-de-1207",
        "minute": 60,
        "type": "GOAL",
        "team": "away",
        "player": "Michael Olise"
      },
      {
        "id": "ev-de-1208",
        "minute": 74,
        "type": "GOAL",
        "team": "away",
        "player": "Leroy Sané"
      }
    ],
    "stats": {
      "possession": [
        44,
        56
      ],
      "shots": [
        8,
        19
      ],
      "shotsOnTarget": [
        3,
        8
      ],
      "expectedGoals": [
        1.2,
        3.5
      ],
      "fouls": [
        13,
        11
      ],
      "corners": [
        7,
        11
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
        606,
        654
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "bun-r5-mai-lev",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 5",
    "homeTeam": {
      "id": "mai",
      "name": "1. FSV Mainz 05",
      "shortName": "Mainz 05",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/134.png",
      "score": 1,
      "color": "#C91316"
    },
    "awayTeam": {
      "id": "lev",
      "name": "Bayer 04 Leverkusen",
      "shortName": "Leverkusen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png",
      "score": 3,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T20:30:00+07:00",
    "stadium": "Mewa Arena",
    "city": "Mainz",
    "referee": "Tobias Stieler",
    "events": [
      {
        "id": "ev-de-1209",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Jonathan Burkardt"
      },
      {
        "id": "ev-de-1210",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Florian Wirtz"
      },
      {
        "id": "ev-de-1211",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Victor Boniface"
      },
      {
        "id": "ev-de-1212",
        "minute": 60,
        "type": "GOAL",
        "team": "away",
        "player": "Jeremie Frimpong"
      }
    ],
    "stats": {
      "possession": [
        44,
        56
      ],
      "shots": [
        8,
        15
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
        13,
        11
      ],
      "corners": [
        7,
        9
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        606,
        654
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "bun-r5-hof-hsv",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 5",
    "homeTeam": {
      "id": "hof",
      "name": "TSG Hoffenheim",
      "shortName": "Hoffenheim",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8157.png",
      "score": 2,
      "color": "#005CA9"
    },
    "awayTeam": {
      "id": "hsv",
      "name": "Hamburger SV",
      "shortName": "Hamburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/125.png",
      "score": 1,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T20:30:00+07:00",
    "stadium": "PreZero Arena",
    "city": "Sinsheim",
    "referee": "Felix Brych",
    "events": [
      {
        "id": "ev-de-1213",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Andrej Kramarić"
      },
      {
        "id": "ev-de-1215",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Robert Glatzel"
      },
      {
        "id": "ev-de-1214",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Maximilian Beier"
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
        10,
        12
      ],
      "corners": [
        9,
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
        658,
        602
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r5-uni-elv",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 5",
    "homeTeam": {
      "id": "uni",
      "name": "1. FC Union Berlin",
      "shortName": "Union Berlin",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/594.png",
      "score": 2,
      "color": "#EB1923"
    },
    "awayTeam": {
      "id": "elv",
      "name": "SV Elversberg",
      "shortName": "Elversberg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7097.png",
      "score": 0,
      "color": "#111111"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T20:30:00+07:00",
    "stadium": "Stadion An der Alten Försterei",
    "city": "Berlin",
    "referee": "Daniel Siebert",
    "events": [
      {
        "id": "ev-de-1216",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benedict Hollerbach"
      },
      {
        "id": "ev-de-1217",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Yorbe Vertessen"
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
        10,
        12
      ],
      "corners": [
        9,
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
        662,
        598
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r5-pad-vfb",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 5",
    "homeTeam": {
      "id": "pad",
      "name": "SC Paderborn 07",
      "shortName": "Paderborn",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6902.png",
      "score": 1,
      "color": "#004B87"
    },
    "awayTeam": {
      "id": "vfb",
      "name": "VfB Stuttgart",
      "shortName": "Stuttgart",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/135.png",
      "score": 3,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T20:30:00+07:00",
    "stadium": "Home Deluxe Arena",
    "city": "Paderborn",
    "referee": "Sven Jablonski",
    "events": [
      {
        "id": "ev-de-1218",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Filip Bilbija"
      },
      {
        "id": "ev-de-1219",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Deniz Undav"
      },
      {
        "id": "ev-de-1220",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Ermedin Demirović"
      },
      {
        "id": "ev-de-1221",
        "minute": 60,
        "type": "GOAL",
        "team": "away",
        "player": "Enzo Millot"
      }
    ],
    "stats": {
      "possession": [
        44,
        56
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
        2.7
      ],
      "fouls": [
        12,
        14
      ],
      "corners": [
        7,
        9
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        606,
        654
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "bun-r5-rbl-sge",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 5",
    "homeTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 2,
      "color": "#DD0741"
    },
    "awayTeam": {
      "id": "sge",
      "name": "Eintracht Frankfurt",
      "shortName": "Frankfurt",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png",
      "score": 2,
      "color": "#E1000F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T23:30:00+07:00",
    "stadium": "Red Bull Arena",
    "city": "Leipzig",
    "referee": "Robert Hartmann",
    "events": [
      {
        "id": "ev-de-1222",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benjamin Šeško"
      },
      {
        "id": "ev-de-1224",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Omar Marmoush"
      },
      {
        "id": "ev-de-1223",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Loïs Openda"
      },
      {
        "id": "ev-de-1225",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Hugo Ekitiké"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
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
        2,
        1.9
      ],
      "fouls": [
        10,
        12
      ],
      "corners": [
        9,
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
        654,
        606
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r5-koe-bmg",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 5",
    "homeTeam": {
      "id": "koe",
      "name": "1. FC Köln",
      "shortName": "FC Köln",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/128.png",
      "score": 1,
      "color": "#ED1C24"
    },
    "awayTeam": {
      "id": "bmg",
      "name": "Borussia M'gladbach",
      "shortName": "M'gladbach",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/268.png",
      "score": 2,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-11T20:30:00+07:00",
    "stadium": "RheinEnergieStadion",
    "city": "Cologne",
    "referee": "Christian Dingert",
    "events": [
      {
        "id": "ev-de-1226",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Tim Lemperle"
      },
      {
        "id": "ev-de-1227",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Tim Kleindienst"
      },
      {
        "id": "ev-de-1228",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Alassane Pléa"
      }
    ],
    "stats": {
      "possession": [
        44,
        56
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
        14,
        13
      ],
      "corners": [
        7,
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
        606,
        654
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "bun-r5-scf-s04",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 5",
    "homeTeam": {
      "id": "scf",
      "name": "SC Freiburg",
      "shortName": "Freiburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/126.png",
      "score": 2,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "s04",
      "name": "FC Schalke 04",
      "shortName": "Schalke 04",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/133.png",
      "score": 1,
      "color": "#004D9D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-11T22:30:00+07:00",
    "stadium": "Europa-Park Stadion",
    "city": "Freiburg",
    "referee": "Sascha Stegemann",
    "events": [
      {
        "id": "ev-de-1229",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Vincenzo Grifo"
      },
      {
        "id": "ev-de-1231",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Kenan Karaman"
      },
      {
        "id": "ev-de-1230",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Junior Adamu"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
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
        12,
        13
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        650,
        610
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r6-sge-koe",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 6",
    "homeTeam": {
      "id": "sge",
      "name": "Eintracht Frankfurt",
      "shortName": "Frankfurt",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png",
      "score": 3,
      "color": "#E1000F"
    },
    "awayTeam": {
      "id": "koe",
      "name": "1. FC Köln",
      "shortName": "FC Köln",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/128.png",
      "score": 1,
      "color": "#ED1C24"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T01:30:00+07:00",
    "stadium": "Deutsche Bank Park",
    "city": "Frankfurt",
    "referee": "Felix Brych",
    "events": [
      {
        "id": "ev-de-1232",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Omar Marmoush"
      },
      {
        "id": "ev-de-1235",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Tim Lemperle"
      },
      {
        "id": "ev-de-1233",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Hugo Ekitiké"
      },
      {
        "id": "ev-de-1234",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Mario Götze"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
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
        1.1
      ],
      "fouls": [
        12,
        15
      ],
      "corners": [
        11,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        642,
        618
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r6-uni-bvb",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 6",
    "homeTeam": {
      "id": "uni",
      "name": "1. FC Union Berlin",
      "shortName": "Union Berlin",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/594.png",
      "score": 1,
      "color": "#EB1923"
    },
    "awayTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 2,
      "color": "#FDE100"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T20:30:00+07:00",
    "stadium": "Stadion An der Alten Försterei",
    "city": "Berlin",
    "referee": "Daniel Siebert",
    "events": [
      {
        "id": "ev-de-1236",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benedict Hollerbach"
      },
      {
        "id": "ev-de-1237",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Serhou Guirassy"
      },
      {
        "id": "ev-de-1238",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Julian Brandt"
      }
    ],
    "stats": {
      "possession": [
        46,
        54
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
        11,
        15
      ],
      "corners": [
        7,
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
        614,
        646
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r6-hsv-vfb",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 6",
    "homeTeam": {
      "id": "hsv",
      "name": "Hamburger SV",
      "shortName": "Hamburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/125.png",
      "score": 1,
      "color": "#003399"
    },
    "awayTeam": {
      "id": "vfb",
      "name": "VfB Stuttgart",
      "shortName": "Stuttgart",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/135.png",
      "score": 2,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T20:30:00+07:00",
    "stadium": "Volksparkstadion",
    "city": "Hamburg",
    "referee": "Sven Jablonski",
    "events": [
      {
        "id": "ev-de-1239",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Robert Glatzel"
      },
      {
        "id": "ev-de-1240",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Deniz Undav"
      },
      {
        "id": "ev-de-1241",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Ermedin Demirović"
      }
    ],
    "stats": {
      "possession": [
        46,
        54
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
        10,
        12
      ],
      "corners": [
        7,
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
        614,
        646
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r6-bre-pad",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 6",
    "homeTeam": {
      "id": "bre-de",
      "name": "SV Werder Bremen",
      "shortName": "Werder Bremen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/137.png",
      "score": 2,
      "color": "#1B824B"
    },
    "awayTeam": {
      "id": "pad",
      "name": "SC Paderborn 07",
      "shortName": "Paderborn",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6902.png",
      "score": 0,
      "color": "#004B87"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T20:30:00+07:00",
    "stadium": "Weserstadion",
    "city": "Bremen",
    "referee": "Robert Hartmann",
    "events": [
      {
        "id": "ev-de-1242",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Marvin Ducksch"
      },
      {
        "id": "ev-de-1243",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Keke Topp"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
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
        13,
        15
      ],
      "corners": [
        9,
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
        642,
        618
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r6-s04-mai",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 6",
    "homeTeam": {
      "id": "s04",
      "name": "FC Schalke 04",
      "shortName": "Schalke 04",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/133.png",
      "score": 1,
      "color": "#004D9D"
    },
    "awayTeam": {
      "id": "mai",
      "name": "1. FSV Mainz 05",
      "shortName": "Mainz 05",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/134.png",
      "score": 1,
      "color": "#C91316"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T20:30:00+07:00",
    "stadium": "Veltins-Arena",
    "city": "Gelsenkirchen",
    "referee": "Christian Dingert",
    "events": [
      {
        "id": "ev-de-1244",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Kenan Karaman"
      },
      {
        "id": "ev-de-1245",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Jonathan Burkardt"
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
        1.2,
        1.1
      ],
      "fouls": [
        10,
        13
      ],
      "corners": [
        7,
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
        638,
        622
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r6-elv-aug",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 6",
    "homeTeam": {
      "id": "elv",
      "name": "SV Elversberg",
      "shortName": "Elversberg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7097.png",
      "score": 1,
      "color": "#111111"
    },
    "awayTeam": {
      "id": "aug",
      "name": "FC Augsburg",
      "shortName": "Augsburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3841.png",
      "score": 2,
      "color": "#BA3733"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T20:30:00+07:00",
    "stadium": "Ursapharm-Arena an der Kaiserlinde",
    "city": "Spiesen-Elversberg",
    "referee": "Sascha Stegemann",
    "events": [
      {
        "id": "ev-de-1246",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Fisnik Asllani"
      },
      {
        "id": "ev-de-1247",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Phillip Tietz"
      },
      {
        "id": "ev-de-1248",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Samuel Essende"
      }
    ],
    "stats": {
      "possession": [
        43,
        57
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
        12
      ],
      "corners": [
        7,
        7
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        602,
        658
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "bun-r6-bay-rbl",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 6",
    "homeTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern Munich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 3,
      "color": "#DC052D"
    },
    "awayTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 2,
      "color": "#DD0741"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T23:30:00+07:00",
    "stadium": "Allianz Arena",
    "city": "Munich",
    "referee": "Harm Osmers",
    "events": [
      {
        "id": "ev-de-1249",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Harry Kane"
      },
      {
        "id": "ev-de-1252",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Benjamin Šeško"
      },
      {
        "id": "ev-de-1250",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Jamal Musiala"
      },
      {
        "id": "ev-de-1253",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Loïs Openda"
      },
      {
        "id": "ev-de-1251",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Michael Olise"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
      ],
      "shots": [
        14,
        11
      ],
      "shotsOnTarget": [
        6,
        4
      ],
      "expectedGoals": [
        2.8,
        1.9
      ],
      "fouls": [
        10,
        11
      ],
      "corners": [
        11,
        7
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        650,
        610
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r6-lev-scf",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 6",
    "homeTeam": {
      "id": "lev",
      "name": "Bayer 04 Leverkusen",
      "shortName": "Leverkusen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png",
      "score": 2,
      "color": "#E32219"
    },
    "awayTeam": {
      "id": "scf",
      "name": "SC Freiburg",
      "shortName": "Freiburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/126.png",
      "score": 0,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-18T20:30:00+07:00",
    "stadium": "BayArena",
    "city": "Leverkusen",
    "referee": "Bastian Dankert",
    "events": [
      {
        "id": "ev-de-1254",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Florian Wirtz"
      },
      {
        "id": "ev-de-1255",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Victor Boniface"
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
        0.3
      ],
      "fouls": [
        12,
        11
      ],
      "corners": [
        9,
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
        642,
        618
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r6-bmg-hof",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 6",
    "homeTeam": {
      "id": "bmg",
      "name": "Borussia M'gladbach",
      "shortName": "M'gladbach",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/268.png",
      "score": 2,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "hof",
      "name": "TSG Hoffenheim",
      "shortName": "Hoffenheim",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8157.png",
      "score": 2,
      "color": "#005CA9"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-18T22:30:00+07:00",
    "stadium": "Borussia-Park",
    "city": "Mönchengladbach",
    "referee": "Tobias Stieler",
    "events": [
      {
        "id": "ev-de-1256",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Tim Kleindienst"
      },
      {
        "id": "ev-de-1258",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Andrej Kramarić"
      },
      {
        "id": "ev-de-1257",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Alassane Pléa"
      },
      {
        "id": "ev-de-1259",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Maximilian Beier"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
      ],
      "shots": [
        11,
        10
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
        14
      ],
      "corners": [
        9,
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
        650,
        610
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r7-vfb-bmg",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 7",
    "homeTeam": {
      "id": "vfb",
      "name": "VfB Stuttgart",
      "shortName": "Stuttgart",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/135.png",
      "score": 3,
      "color": "#E32219"
    },
    "awayTeam": {
      "id": "bmg",
      "name": "Borussia M'gladbach",
      "shortName": "M'gladbach",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/268.png",
      "score": 1,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T01:30:00+07:00",
    "stadium": "MHPArena",
    "city": "Stuttgart",
    "referee": "Robert Hartmann",
    "events": [
      {
        "id": "ev-de-1260",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Deniz Undav"
      },
      {
        "id": "ev-de-1263",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Tim Kleindienst"
      },
      {
        "id": "ev-de-1261",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Ermedin Demirović"
      },
      {
        "id": "ev-de-1262",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Enzo Millot"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
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
        2.8,
        1.1
      ],
      "fouls": [
        14,
        12
      ],
      "corners": [
        11,
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
        646,
        614
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r7-rbl-elv",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 7",
    "homeTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 3,
      "color": "#DD0741"
    },
    "awayTeam": {
      "id": "elv",
      "name": "SV Elversberg",
      "shortName": "Elversberg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7097.png",
      "score": 0,
      "color": "#111111"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T20:30:00+07:00",
    "stadium": "Red Bull Arena",
    "city": "Leipzig",
    "referee": "Christian Dingert",
    "events": [
      {
        "id": "ev-de-1264",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benjamin Šeško"
      },
      {
        "id": "ev-de-1265",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Loïs Openda"
      },
      {
        "id": "ev-de-1266",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Xavi Simons"
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
        2.8,
        0.3
      ],
      "fouls": [
        13,
        12
      ],
      "corners": [
        11,
        3
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
        658,
        602
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r7-aug-uni",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 7",
    "homeTeam": {
      "id": "aug",
      "name": "FC Augsburg",
      "shortName": "Augsburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3841.png",
      "score": 1,
      "color": "#BA3733"
    },
    "awayTeam": {
      "id": "uni",
      "name": "1. FC Union Berlin",
      "shortName": "Union Berlin",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/594.png",
      "score": 1,
      "color": "#EB1923"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T20:30:00+07:00",
    "stadium": "WWK Arena",
    "city": "Augsburg",
    "referee": "Sascha Stegemann",
    "events": [
      {
        "id": "ev-de-1267",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Phillip Tietz"
      },
      {
        "id": "ev-de-1268",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Benedict Hollerbach"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
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
        15
      ],
      "corners": [
        7,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        650,
        610
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r7-mai-bre",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 7",
    "homeTeam": {
      "id": "mai",
      "name": "1. FSV Mainz 05",
      "shortName": "Mainz 05",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/134.png",
      "score": 2,
      "color": "#C91316"
    },
    "awayTeam": {
      "id": "bre-de",
      "name": "SV Werder Bremen",
      "shortName": "Werder Bremen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/137.png",
      "score": 1,
      "color": "#1B824B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T20:30:00+07:00",
    "stadium": "Mewa Arena",
    "city": "Mainz",
    "referee": "Harm Osmers",
    "events": [
      {
        "id": "ev-de-1269",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Jonathan Burkardt"
      },
      {
        "id": "ev-de-1271",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Marvin Ducksch"
      },
      {
        "id": "ev-de-1270",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Armindo Sieb"
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
        12,
        13
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        654,
        606
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r7-koe-s04",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 7",
    "homeTeam": {
      "id": "koe",
      "name": "1. FC Köln",
      "shortName": "FC Köln",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/128.png",
      "score": 2,
      "color": "#ED1C24"
    },
    "awayTeam": {
      "id": "s04",
      "name": "FC Schalke 04",
      "shortName": "Schalke 04",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/133.png",
      "score": 1,
      "color": "#004D9D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T20:30:00+07:00",
    "stadium": "RheinEnergieStadion",
    "city": "Cologne",
    "referee": "Bastian Dankert",
    "events": [
      {
        "id": "ev-de-1272",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Tim Lemperle"
      },
      {
        "id": "ev-de-1274",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Kenan Karaman"
      },
      {
        "id": "ev-de-1273",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Damion Downs"
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
        11,
        11
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        654,
        606
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r7-pad-hsv",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 7",
    "homeTeam": {
      "id": "pad",
      "name": "SC Paderborn 07",
      "shortName": "Paderborn",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6902.png",
      "score": 1,
      "color": "#004B87"
    },
    "awayTeam": {
      "id": "hsv",
      "name": "Hamburger SV",
      "shortName": "Hamburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/125.png",
      "score": 2,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T20:30:00+07:00",
    "stadium": "Home Deluxe Arena",
    "city": "Paderborn",
    "referee": "Tobias Stieler",
    "events": [
      {
        "id": "ev-de-1275",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Filip Bilbija"
      },
      {
        "id": "ev-de-1276",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Robert Glatzel"
      },
      {
        "id": "ev-de-1277",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Davie Selke"
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
        11,
        13
      ],
      "corners": [
        7,
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
        594,
        666
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "bun-r7-bvb-sge",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 7",
    "homeTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 2,
      "color": "#FDE100"
    },
    "awayTeam": {
      "id": "sge",
      "name": "Eintracht Frankfurt",
      "shortName": "Frankfurt",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png",
      "score": 1,
      "color": "#E1000F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T23:30:00+07:00",
    "stadium": "Signal Iduna Park",
    "city": "Dortmund",
    "referee": "Felix Brych",
    "events": [
      {
        "id": "ev-de-1278",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Serhou Guirassy"
      },
      {
        "id": "ev-de-1280",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Omar Marmoush"
      },
      {
        "id": "ev-de-1279",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Julian Brandt"
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
        2,
        1.1
      ],
      "fouls": [
        14,
        14
      ],
      "corners": [
        9,
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
        646,
        614
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r7-hof-lev",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 7",
    "homeTeam": {
      "id": "hof",
      "name": "TSG Hoffenheim",
      "shortName": "Hoffenheim",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8157.png",
      "score": 1,
      "color": "#005CA9"
    },
    "awayTeam": {
      "id": "lev",
      "name": "Bayer 04 Leverkusen",
      "shortName": "Leverkusen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png",
      "score": 3,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-25T21:30:00+07:00",
    "stadium": "PreZero Arena",
    "city": "Sinsheim",
    "referee": "Daniel Siebert",
    "events": [
      {
        "id": "ev-de-1281",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Andrej Kramarić"
      },
      {
        "id": "ev-de-1282",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Florian Wirtz"
      },
      {
        "id": "ev-de-1283",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Victor Boniface"
      },
      {
        "id": "ev-de-1284",
        "minute": 60,
        "type": "GOAL",
        "team": "away",
        "player": "Jeremie Frimpong"
      }
    ],
    "stats": {
      "possession": [
        46,
        54
      ],
      "shots": [
        8,
        15
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
        11,
        12
      ],
      "corners": [
        7,
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
        614,
        646
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r7-scf-bay",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 7",
    "homeTeam": {
      "id": "scf",
      "name": "SC Freiburg",
      "shortName": "Freiburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/126.png",
      "score": 1,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern Munich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 3,
      "color": "#DC052D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-25T23:30:00+07:00",
    "stadium": "Europa-Park Stadion",
    "city": "Freiburg",
    "referee": "Sven Jablonski",
    "events": [
      {
        "id": "ev-de-1285",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Vincenzo Grifo"
      },
      {
        "id": "ev-de-1286",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Harry Kane"
      },
      {
        "id": "ev-de-1287",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Jamal Musiala"
      },
      {
        "id": "ev-de-1288",
        "minute": 60,
        "type": "GOAL",
        "team": "away",
        "player": "Michael Olise"
      }
    ],
    "stats": {
      "possession": [
        47,
        53
      ],
      "shots": [
        8,
        15
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
        13,
        15
      ],
      "corners": [
        7,
        9
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        618,
        642
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r8-elv-mai",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 8 (Der Klassiker)",
    "homeTeam": {
      "id": "elv",
      "name": "SV Elversberg",
      "shortName": "Elversberg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7097.png",
      "score": 1,
      "color": "#111111"
    },
    "awayTeam": {
      "id": "mai",
      "name": "1. FSV Mainz 05",
      "shortName": "Mainz 05",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/134.png",
      "score": 2,
      "color": "#C91316"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-31T02:30:00+07:00",
    "stadium": "Ursapharm-Arena an der Kaiserlinde",
    "city": "Spiesen-Elversberg",
    "referee": "Harm Osmers",
    "events": [
      {
        "id": "ev-de-1289",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Fisnik Asllani"
      },
      {
        "id": "ev-de-1290",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Jonathan Burkardt"
      },
      {
        "id": "ev-de-1291",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Armindo Sieb"
      }
    ],
    "stats": {
      "possession": [
        47,
        53
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
        13,
        14
      ],
      "corners": [
        7,
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
        618,
        642
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r8-lev-vfb",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 8 (Der Klassiker)",
    "homeTeam": {
      "id": "lev",
      "name": "Bayer 04 Leverkusen",
      "shortName": "Leverkusen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png",
      "score": 2,
      "color": "#E32219"
    },
    "awayTeam": {
      "id": "vfb",
      "name": "VfB Stuttgart",
      "shortName": "Stuttgart",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/135.png",
      "score": 2,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-31T21:30:00+07:00",
    "stadium": "BayArena",
    "city": "Leverkusen",
    "referee": "Bastian Dankert",
    "events": [
      {
        "id": "ev-de-1292",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Florian Wirtz"
      },
      {
        "id": "ev-de-1294",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Deniz Undav"
      },
      {
        "id": "ev-de-1293",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Victor Boniface"
      },
      {
        "id": "ev-de-1295",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Ermedin Demirović"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        9,
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
        14,
        11
      ],
      "corners": [
        9,
        7
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        654,
        606
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r8-aug-scf",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 8 (Der Klassiker)",
    "homeTeam": {
      "id": "aug",
      "name": "FC Augsburg",
      "shortName": "Augsburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3841.png",
      "score": 1,
      "color": "#BA3733"
    },
    "awayTeam": {
      "id": "scf",
      "name": "SC Freiburg",
      "shortName": "Freiburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/126.png",
      "score": 1,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-31T21:30:00+07:00",
    "stadium": "WWK Arena",
    "city": "Augsburg",
    "referee": "Tobias Stieler",
    "events": [
      {
        "id": "ev-de-1296",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Phillip Tietz"
      },
      {
        "id": "ev-de-1297",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Vincenzo Grifo"
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
        1.2,
        1.1
      ],
      "fouls": [
        13,
        14
      ],
      "corners": [
        7,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        642,
        618
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r8-bmg-pad",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 8 (Der Klassiker)",
    "homeTeam": {
      "id": "bmg",
      "name": "Borussia M'gladbach",
      "shortName": "M'gladbach",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/268.png",
      "score": 2,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "pad",
      "name": "SC Paderborn 07",
      "shortName": "Paderborn",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6902.png",
      "score": 0,
      "color": "#004B87"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-31T21:30:00+07:00",
    "stadium": "Borussia-Park",
    "city": "Mönchengladbach",
    "referee": "Felix Brych",
    "events": [
      {
        "id": "ev-de-1298",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Tim Kleindienst"
      },
      {
        "id": "ev-de-1299",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Alassane Pléa"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
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
        10,
        14
      ],
      "corners": [
        9,
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
        646,
        614
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r8-bre-hof",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 8 (Der Klassiker)",
    "homeTeam": {
      "id": "bre-de",
      "name": "SV Werder Bremen",
      "shortName": "Werder Bremen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/137.png",
      "score": 2,
      "color": "#1B824B"
    },
    "awayTeam": {
      "id": "hof",
      "name": "TSG Hoffenheim",
      "shortName": "Hoffenheim",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8157.png",
      "score": 1,
      "color": "#005CA9"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-31T21:30:00+07:00",
    "stadium": "Weserstadion",
    "city": "Bremen",
    "referee": "Daniel Siebert",
    "events": [
      {
        "id": "ev-de-1300",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Marvin Ducksch"
      },
      {
        "id": "ev-de-1302",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Andrej Kramarić"
      },
      {
        "id": "ev-de-1301",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Keke Topp"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
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
        11
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        650,
        610
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r8-s04-rbl",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 8 (Der Klassiker)",
    "homeTeam": {
      "id": "s04",
      "name": "FC Schalke 04",
      "shortName": "Schalke 04",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/133.png",
      "score": 1,
      "color": "#004D9D"
    },
    "awayTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 3,
      "color": "#DD0741"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-31T21:30:00+07:00",
    "stadium": "Veltins-Arena",
    "city": "Gelsenkirchen",
    "referee": "Sven Jablonski",
    "events": [
      {
        "id": "ev-de-1303",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Kenan Karaman"
      },
      {
        "id": "ev-de-1304",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Benjamin Šeško"
      },
      {
        "id": "ev-de-1305",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Loïs Openda"
      },
      {
        "id": "ev-de-1306",
        "minute": 60,
        "type": "GOAL",
        "team": "away",
        "player": "Xavi Simons"
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
        2.7
      ],
      "fouls": [
        11,
        15
      ],
      "corners": [
        7,
        9
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
        618,
        642
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r8-bay-bvb",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 8 (Der Klassiker)",
    "homeTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern Munich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 3,
      "color": "#DC052D"
    },
    "awayTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 2,
      "color": "#FDE100"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-01T00:30:00+07:00",
    "stadium": "Allianz Arena",
    "city": "Munich",
    "referee": "Robert Hartmann",
    "events": [
      {
        "id": "ev-de-1307",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Harry Kane"
      },
      {
        "id": "ev-de-1310",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Serhou Guirassy"
      },
      {
        "id": "ev-de-1308",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Jamal Musiala"
      },
      {
        "id": "ev-de-1311",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Julian Brandt"
      },
      {
        "id": "ev-de-1309",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Michael Olise"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        16,
        10
      ],
      "shotsOnTarget": [
        7,
        4
      ],
      "expectedGoals": [
        2.8,
        1.9
      ],
      "fouls": [
        14,
        12
      ],
      "corners": [
        11,
        7
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        638,
        622
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r8-uni-koe",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 8 (Der Klassiker)",
    "homeTeam": {
      "id": "uni",
      "name": "1. FC Union Berlin",
      "shortName": "Union Berlin",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/594.png",
      "score": 2,
      "color": "#EB1923"
    },
    "awayTeam": {
      "id": "koe",
      "name": "1. FC Köln",
      "shortName": "FC Köln",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/128.png",
      "score": 1,
      "color": "#ED1C24"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-01T21:30:00+07:00",
    "stadium": "Stadion An der Alten Försterei",
    "city": "Berlin",
    "referee": "Christian Dingert",
    "events": [
      {
        "id": "ev-de-1312",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benedict Hollerbach"
      },
      {
        "id": "ev-de-1314",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Tim Lemperle"
      },
      {
        "id": "ev-de-1313",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Yorbe Vertessen"
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
        1.1
      ],
      "fouls": [
        12,
        13
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        662,
        598
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r8-sge-hsv",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 8 (Der Klassiker)",
    "homeTeam": {
      "id": "sge",
      "name": "Eintracht Frankfurt",
      "shortName": "Frankfurt",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png",
      "score": 2,
      "color": "#E1000F"
    },
    "awayTeam": {
      "id": "hsv",
      "name": "Hamburger SV",
      "shortName": "Hamburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/125.png",
      "score": 0,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-01T23:30:00+07:00",
    "stadium": "Deutsche Bank Park",
    "city": "Frankfurt",
    "referee": "Sascha Stegemann",
    "events": [
      {
        "id": "ev-de-1315",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Omar Marmoush"
      },
      {
        "id": "ev-de-1316",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Hugo Ekitiké"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
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
        9,
        3
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        650,
        610
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r9-mai-bay",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 9",
    "homeTeam": {
      "id": "mai",
      "name": "1. FSV Mainz 05",
      "shortName": "Mainz 05",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/134.png",
      "score": 1,
      "color": "#C91316"
    },
    "awayTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern Munich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 3,
      "color": "#DC052D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-07T21:30:00+07:00",
    "stadium": "Mewa Arena",
    "city": "Mainz",
    "referee": "Felix Brych",
    "events": [
      {
        "id": "ev-de-1317",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Jonathan Burkardt"
      },
      {
        "id": "ev-de-1318",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Harry Kane"
      },
      {
        "id": "ev-de-1319",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Jamal Musiala"
      },
      {
        "id": "ev-de-1320",
        "minute": 60,
        "type": "GOAL",
        "team": "away",
        "player": "Michael Olise"
      }
    ],
    "stats": {
      "possession": [
        45,
        55
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
        2.7
      ],
      "fouls": [
        12,
        11
      ],
      "corners": [
        7,
        9
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
        610,
        650
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r9-bvb-elv",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 9",
    "homeTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 4,
      "color": "#FDE100"
    },
    "awayTeam": {
      "id": "elv",
      "name": "SV Elversberg",
      "shortName": "Elversberg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7097.png",
      "score": 0,
      "color": "#111111"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-07T21:30:00+07:00",
    "stadium": "Signal Iduna Park",
    "city": "Dortmund",
    "referee": "Daniel Siebert",
    "events": [
      {
        "id": "ev-de-1321",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Serhou Guirassy"
      },
      {
        "id": "ev-de-1322",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Julian Brandt"
      },
      {
        "id": "ev-de-1323",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Karim Adeyemi"
      },
      {
        "id": "ev-de-1324",
        "minute": 67,
        "type": "GOAL",
        "team": "home",
        "player": "Donyell Malen"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        17,
        6
      ],
      "shotsOnTarget": [
        7,
        2
      ],
      "expectedGoals": [
        3.6,
        0.3
      ],
      "fouls": [
        10,
        12
      ],
      "corners": [
        13,
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
        654,
        606
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r9-hsv-bmg",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 9",
    "homeTeam": {
      "id": "hsv",
      "name": "Hamburger SV",
      "shortName": "Hamburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/125.png",
      "score": 1,
      "color": "#003399"
    },
    "awayTeam": {
      "id": "bmg",
      "name": "Borussia M'gladbach",
      "shortName": "M'gladbach",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/268.png",
      "score": 2,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-07T21:30:00+07:00",
    "stadium": "Volksparkstadion",
    "city": "Hamburg",
    "referee": "Sven Jablonski",
    "events": [
      {
        "id": "ev-de-1325",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Robert Glatzel"
      },
      {
        "id": "ev-de-1326",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Tim Kleindienst"
      },
      {
        "id": "ev-de-1327",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Alassane Pléa"
      }
    ],
    "stats": {
      "possession": [
        45,
        55
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
        11,
        12
      ],
      "corners": [
        7,
        7
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        610,
        650
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r9-pad-sge",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 9",
    "homeTeam": {
      "id": "pad",
      "name": "SC Paderborn 07",
      "shortName": "Paderborn",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6902.png",
      "score": 1,
      "color": "#004B87"
    },
    "awayTeam": {
      "id": "sge",
      "name": "Eintracht Frankfurt",
      "shortName": "Frankfurt",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png",
      "score": 2,
      "color": "#E1000F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-07T21:30:00+07:00",
    "stadium": "Home Deluxe Arena",
    "city": "Paderborn",
    "referee": "Robert Hartmann",
    "events": [
      {
        "id": "ev-de-1328",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Filip Bilbija"
      },
      {
        "id": "ev-de-1329",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Omar Marmoush"
      },
      {
        "id": "ev-de-1330",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Hugo Ekitiké"
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
        11,
        12
      ],
      "corners": [
        7,
        7
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        602,
        658
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "bun-r9-rbl-aug",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 9",
    "homeTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 3,
      "color": "#DD0741"
    },
    "awayTeam": {
      "id": "aug",
      "name": "FC Augsburg",
      "shortName": "Augsburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3841.png",
      "score": 1,
      "color": "#BA3733"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-07T21:30:00+07:00",
    "stadium": "Red Bull Arena",
    "city": "Leipzig",
    "referee": "Christian Dingert",
    "events": [
      {
        "id": "ev-de-1331",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benjamin Šeško"
      },
      {
        "id": "ev-de-1334",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Phillip Tietz"
      },
      {
        "id": "ev-de-1332",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Loïs Openda"
      },
      {
        "id": "ev-de-1333",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Xavi Simons"
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
        1.1
      ],
      "fouls": [
        10,
        11
      ],
      "corners": [
        11,
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
        650,
        610
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r9-vfb-bre",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 9",
    "homeTeam": {
      "id": "vfb",
      "name": "VfB Stuttgart",
      "shortName": "Stuttgart",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/135.png",
      "score": 2,
      "color": "#E32219"
    },
    "awayTeam": {
      "id": "bre-de",
      "name": "SV Werder Bremen",
      "shortName": "Werder Bremen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/137.png",
      "score": 1,
      "color": "#1B824B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-08T00:30:00+07:00",
    "stadium": "MHPArena",
    "city": "Stuttgart",
    "referee": "Sascha Stegemann",
    "events": [
      {
        "id": "ev-de-1335",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Deniz Undav"
      },
      {
        "id": "ev-de-1337",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Marvin Ducksch"
      },
      {
        "id": "ev-de-1336",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Ermedin Demirović"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
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
        11,
        14
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        662,
        598
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r9-koe-lev",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 9",
    "homeTeam": {
      "id": "koe",
      "name": "1. FC Köln",
      "shortName": "FC Köln",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/128.png",
      "score": 1,
      "color": "#ED1C24"
    },
    "awayTeam": {
      "id": "lev",
      "name": "Bayer 04 Leverkusen",
      "shortName": "Leverkusen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png",
      "score": 3,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-08T21:30:00+07:00",
    "stadium": "RheinEnergieStadion",
    "city": "Cologne",
    "referee": "Harm Osmers",
    "events": [
      {
        "id": "ev-de-1338",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Tim Lemperle"
      },
      {
        "id": "ev-de-1339",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Florian Wirtz"
      },
      {
        "id": "ev-de-1340",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Victor Boniface"
      },
      {
        "id": "ev-de-1341",
        "minute": 60,
        "type": "GOAL",
        "team": "away",
        "player": "Jeremie Frimpong"
      }
    ],
    "stats": {
      "possession": [
        42,
        58
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
        12,
        12
      ],
      "corners": [
        7,
        9
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        598,
        662
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "bun-r9-scf-uni",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 9",
    "homeTeam": {
      "id": "scf",
      "name": "SC Freiburg",
      "shortName": "Freiburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/126.png",
      "score": 2,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "uni",
      "name": "1. FC Union Berlin",
      "shortName": "Union Berlin",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/594.png",
      "score": 1,
      "color": "#EB1923"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-08T23:30:00+07:00",
    "stadium": "Europa-Park Stadion",
    "city": "Freiburg",
    "referee": "Bastian Dankert",
    "events": [
      {
        "id": "ev-de-1342",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Vincenzo Grifo"
      },
      {
        "id": "ev-de-1344",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Benedict Hollerbach"
      },
      {
        "id": "ev-de-1343",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Junior Adamu"
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
        13,
        14
      ],
      "corners": [
        9,
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
        654,
        606
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r9-hof-s04",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 9",
    "homeTeam": {
      "id": "hof",
      "name": "TSG Hoffenheim",
      "shortName": "Hoffenheim",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8157.png",
      "score": 2,
      "color": "#005CA9"
    },
    "awayTeam": {
      "id": "s04",
      "name": "FC Schalke 04",
      "shortName": "Schalke 04",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/133.png",
      "score": 0,
      "color": "#004D9D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-09T01:30:00+07:00",
    "stadium": "PreZero Arena",
    "city": "Sinsheim",
    "referee": "Tobias Stieler",
    "events": [
      {
        "id": "ev-de-1345",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Andrej Kramarić"
      },
      {
        "id": "ev-de-1346",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Maximilian Beier"
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
        0.3
      ],
      "fouls": [
        14,
        15
      ],
      "corners": [
        9,
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
        642,
        618
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r10-bay-sge",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 10",
    "homeTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern Munich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 3,
      "color": "#DC052D"
    },
    "awayTeam": {
      "id": "sge",
      "name": "Eintracht Frankfurt",
      "shortName": "Frankfurt",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png",
      "score": 1,
      "color": "#E1000F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T21:30:00+07:00",
    "stadium": "Allianz Arena",
    "city": "Munich",
    "referee": "Robert Hartmann",
    "events": [
      {
        "id": "ev-de-1347",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Harry Kane"
      },
      {
        "id": "ev-de-1350",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Omar Marmoush"
      },
      {
        "id": "ev-de-1348",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Jamal Musiala"
      },
      {
        "id": "ev-de-1349",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Michael Olise"
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
        2.8,
        1.1
      ],
      "fouls": [
        14,
        15
      ],
      "corners": [
        11,
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
        654,
        606
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r10-lev-bvb",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 10",
    "homeTeam": {
      "id": "lev",
      "name": "Bayer 04 Leverkusen",
      "shortName": "Leverkusen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png",
      "score": 2,
      "color": "#E32219"
    },
    "awayTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 2,
      "color": "#FDE100"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T21:30:00+07:00",
    "stadium": "BayArena",
    "city": "Leverkusen",
    "referee": "Christian Dingert",
    "events": [
      {
        "id": "ev-de-1351",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Florian Wirtz"
      },
      {
        "id": "ev-de-1353",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Serhou Guirassy"
      },
      {
        "id": "ev-de-1352",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Victor Boniface"
      },
      {
        "id": "ev-de-1354",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Julian Brandt"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        9,
        12
      ],
      "shotsOnTarget": [
        4,
        5
      ],
      "expectedGoals": [
        2,
        1.9
      ],
      "fouls": [
        13,
        13
      ],
      "corners": [
        9,
        7
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        638,
        622
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r10-s04-vfb",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 10",
    "homeTeam": {
      "id": "s04",
      "name": "FC Schalke 04",
      "shortName": "Schalke 04",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/133.png",
      "score": 1,
      "color": "#004D9D"
    },
    "awayTeam": {
      "id": "vfb",
      "name": "VfB Stuttgart",
      "shortName": "Stuttgart",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/135.png",
      "score": 2,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T21:30:00+07:00",
    "stadium": "Veltins-Arena",
    "city": "Gelsenkirchen",
    "referee": "Sascha Stegemann",
    "events": [
      {
        "id": "ev-de-1355",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Kenan Karaman"
      },
      {
        "id": "ev-de-1356",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Deniz Undav"
      },
      {
        "id": "ev-de-1357",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Ermedin Demirović"
      }
    ],
    "stats": {
      "possession": [
        42,
        58
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
        13,
        11
      ],
      "corners": [
        7,
        7
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        598,
        662
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "bun-r10-bre-koe",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 10",
    "homeTeam": {
      "id": "bre-de",
      "name": "SV Werder Bremen",
      "shortName": "Werder Bremen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/137.png",
      "score": 2,
      "color": "#1B824B"
    },
    "awayTeam": {
      "id": "koe",
      "name": "1. FC Köln",
      "shortName": "FC Köln",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/128.png",
      "score": 1,
      "color": "#ED1C24"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T21:30:00+07:00",
    "stadium": "Weserstadion",
    "city": "Bremen",
    "referee": "Harm Osmers",
    "events": [
      {
        "id": "ev-de-1358",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Marvin Ducksch"
      },
      {
        "id": "ev-de-1360",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Tim Lemperle"
      },
      {
        "id": "ev-de-1359",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Keke Topp"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
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
        14,
        13
      ],
      "corners": [
        9,
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
        650,
        610
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r10-bmg-uni",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 10",
    "homeTeam": {
      "id": "bmg",
      "name": "Borussia M'gladbach",
      "shortName": "M'gladbach",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/268.png",
      "score": 1,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "uni",
      "name": "1. FC Union Berlin",
      "shortName": "Union Berlin",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/594.png",
      "score": 1,
      "color": "#EB1923"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T21:30:00+07:00",
    "stadium": "Borussia-Park",
    "city": "Mönchengladbach",
    "referee": "Bastian Dankert",
    "events": [
      {
        "id": "ev-de-1361",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Tim Kleindienst"
      },
      {
        "id": "ev-de-1362",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Benedict Hollerbach"
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
        13
      ],
      "corners": [
        7,
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
        638,
        622
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r10-hof-aug",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 10",
    "homeTeam": {
      "id": "hof",
      "name": "TSG Hoffenheim",
      "shortName": "Hoffenheim",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8157.png",
      "score": 2,
      "color": "#005CA9"
    },
    "awayTeam": {
      "id": "aug",
      "name": "FC Augsburg",
      "shortName": "Augsburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3841.png",
      "score": 1,
      "color": "#BA3733"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-22T00:30:00+07:00",
    "stadium": "PreZero Arena",
    "city": "Sinsheim",
    "referee": "Tobias Stieler",
    "events": [
      {
        "id": "ev-de-1363",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Andrej Kramarić"
      },
      {
        "id": "ev-de-1365",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Phillip Tietz"
      },
      {
        "id": "ev-de-1364",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Maximilian Beier"
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
        2,
        1.1
      ],
      "fouls": [
        14,
        13
      ],
      "corners": [
        9,
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
        638,
        622
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r10-elv-hsv",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 10",
    "homeTeam": {
      "id": "elv",
      "name": "SV Elversberg",
      "shortName": "Elversberg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7097.png",
      "score": 1,
      "color": "#111111"
    },
    "awayTeam": {
      "id": "hsv",
      "name": "Hamburger SV",
      "shortName": "Hamburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/125.png",
      "score": 2,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-22T21:30:00+07:00",
    "stadium": "Ursapharm-Arena an der Kaiserlinde",
    "city": "Spiesen-Elversberg",
    "referee": "Felix Brych",
    "events": [
      {
        "id": "ev-de-1366",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Fisnik Asllani"
      },
      {
        "id": "ev-de-1367",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Robert Glatzel"
      },
      {
        "id": "ev-de-1368",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Davie Selke"
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
        11,
        14
      ],
      "corners": [
        7,
        7
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        614,
        646
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r10-scf-pad",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 10",
    "homeTeam": {
      "id": "scf",
      "name": "SC Freiburg",
      "shortName": "Freiburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/126.png",
      "score": 2,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "pad",
      "name": "SC Paderborn 07",
      "shortName": "Paderborn",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6902.png",
      "score": 0,
      "color": "#004B87"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-22T23:30:00+07:00",
    "stadium": "Europa-Park Stadion",
    "city": "Freiburg",
    "referee": "Daniel Siebert",
    "events": [
      {
        "id": "ev-de-1369",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Vincenzo Grifo"
      },
      {
        "id": "ev-de-1370",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Junior Adamu"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
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
        10,
        12
      ],
      "corners": [
        9,
        3
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        646,
        614
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r10-rbl-mai",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 10",
    "homeTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 3,
      "color": "#DD0741"
    },
    "awayTeam": {
      "id": "mai",
      "name": "1. FSV Mainz 05",
      "shortName": "Mainz 05",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/134.png",
      "score": 1,
      "color": "#C91316"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-23T01:30:00+07:00",
    "stadium": "Red Bull Arena",
    "city": "Leipzig",
    "referee": "Sven Jablonski",
    "events": [
      {
        "id": "ev-de-1371",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benjamin Šeško"
      },
      {
        "id": "ev-de-1374",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Jonathan Burkardt"
      },
      {
        "id": "ev-de-1372",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Loïs Openda"
      },
      {
        "id": "ev-de-1373",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Xavi Simons"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
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
        13
      ],
      "corners": [
        11,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        662,
        598
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r11-bvb-s04",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 11 (Derby Vùng Ruhr)",
    "homeTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 3,
      "color": "#FDE100"
    },
    "awayTeam": {
      "id": "s04",
      "name": "FC Schalke 04",
      "shortName": "Schalke 04",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/133.png",
      "score": 1,
      "color": "#004D9D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-04T02:30:00+07:00",
    "stadium": "Signal Iduna Park",
    "city": "Dortmund",
    "referee": "Harm Osmers",
    "events": [
      {
        "id": "ev-de-1375",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Serhou Guirassy"
      },
      {
        "id": "ev-de-1378",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Kenan Karaman"
      },
      {
        "id": "ev-de-1376",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Julian Brandt"
      },
      {
        "id": "ev-de-1377",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Karim Adeyemi"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
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
        13,
        11
      ],
      "corners": [
        11,
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
        642,
        618
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r11-vfb-bay",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 11 (Derby Vùng Ruhr)",
    "homeTeam": {
      "id": "vfb",
      "name": "VfB Stuttgart",
      "shortName": "Stuttgart",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/135.png",
      "score": 1,
      "color": "#E32219"
    },
    "awayTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern Munich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 3,
      "color": "#DC052D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T21:30:00+07:00",
    "stadium": "MHPArena",
    "city": "Stuttgart",
    "referee": "Bastian Dankert",
    "events": [
      {
        "id": "ev-de-1379",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Deniz Undav"
      },
      {
        "id": "ev-de-1380",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Harry Kane"
      },
      {
        "id": "ev-de-1381",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Jamal Musiala"
      },
      {
        "id": "ev-de-1382",
        "minute": 60,
        "type": "GOAL",
        "team": "away",
        "player": "Michael Olise"
      }
    ],
    "stats": {
      "possession": [
        41,
        59
      ],
      "shots": [
        8,
        15
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
        7,
        9
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
        594,
        666
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "bun-r11-rbl-lev",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 11 (Derby Vùng Ruhr)",
    "homeTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 2,
      "color": "#DD0741"
    },
    "awayTeam": {
      "id": "lev",
      "name": "Bayer 04 Leverkusen",
      "shortName": "Leverkusen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png",
      "score": 2,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T21:30:00+07:00",
    "stadium": "Red Bull Arena",
    "city": "Leipzig",
    "referee": "Tobias Stieler",
    "events": [
      {
        "id": "ev-de-1383",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benjamin Šeško"
      },
      {
        "id": "ev-de-1385",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Florian Wirtz"
      },
      {
        "id": "ev-de-1384",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Loïs Openda"
      },
      {
        "id": "ev-de-1386",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Victor Boniface"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
      ],
      "shots": [
        10,
        10
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
        13,
        11
      ],
      "corners": [
        9,
        7
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
        646,
        614
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r11-mai-hof",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 11 (Derby Vùng Ruhr)",
    "homeTeam": {
      "id": "mai",
      "name": "1. FSV Mainz 05",
      "shortName": "Mainz 05",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/134.png",
      "score": 1,
      "color": "#C91316"
    },
    "awayTeam": {
      "id": "hof",
      "name": "TSG Hoffenheim",
      "shortName": "Hoffenheim",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8157.png",
      "score": 1,
      "color": "#005CA9"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T21:30:00+07:00",
    "stadium": "Mewa Arena",
    "city": "Mainz",
    "referee": "Felix Brych",
    "events": [
      {
        "id": "ev-de-1387",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Jonathan Burkardt"
      },
      {
        "id": "ev-de-1388",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Andrej Kramarić"
      }
    ],
    "stats": {
      "possession": [
        59,
        41
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
        12
      ],
      "corners": [
        7,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        666,
        594
      ],
      "passAccuracy": [
        90,
        83
      ]
    }
  },
  {
    "id": "bun-r11-uni-bre",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 11 (Derby Vùng Ruhr)",
    "homeTeam": {
      "id": "uni",
      "name": "1. FC Union Berlin",
      "shortName": "Union Berlin",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/594.png",
      "score": 2,
      "color": "#EB1923"
    },
    "awayTeam": {
      "id": "bre-de",
      "name": "SV Werder Bremen",
      "shortName": "Werder Bremen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/137.png",
      "score": 1,
      "color": "#1B824B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T21:30:00+07:00",
    "stadium": "Stadion An der Alten Försterei",
    "city": "Berlin",
    "referee": "Daniel Siebert",
    "events": [
      {
        "id": "ev-de-1389",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benedict Hollerbach"
      },
      {
        "id": "ev-de-1391",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Marvin Ducksch"
      },
      {
        "id": "ev-de-1390",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Yorbe Vertessen"
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
        14,
        11
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        646,
        614
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r11-aug-pad",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 11 (Derby Vùng Ruhr)",
    "homeTeam": {
      "id": "aug",
      "name": "FC Augsburg",
      "shortName": "Augsburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3841.png",
      "score": 2,
      "color": "#BA3733"
    },
    "awayTeam": {
      "id": "pad",
      "name": "SC Paderborn 07",
      "shortName": "Paderborn",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6902.png",
      "score": 0,
      "color": "#004B87"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T21:30:00+07:00",
    "stadium": "WWK Arena",
    "city": "Augsburg",
    "referee": "Sven Jablonski",
    "events": [
      {
        "id": "ev-de-1392",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Phillip Tietz"
      },
      {
        "id": "ev-de-1393",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Samuel Essende"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
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
        12,
        15
      ],
      "corners": [
        9,
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
        658,
        602
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r11-hsv-scf",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 11 (Derby Vùng Ruhr)",
    "homeTeam": {
      "id": "hsv",
      "name": "Hamburger SV",
      "shortName": "Hamburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/125.png",
      "score": 1,
      "color": "#003399"
    },
    "awayTeam": {
      "id": "scf",
      "name": "SC Freiburg",
      "shortName": "Freiburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/126.png",
      "score": 1,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-06T00:30:00+07:00",
    "stadium": "Volksparkstadion",
    "city": "Hamburg",
    "referee": "Robert Hartmann",
    "events": [
      {
        "id": "ev-de-1394",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Robert Glatzel"
      },
      {
        "id": "ev-de-1395",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Vincenzo Grifo"
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
        11,
        11
      ],
      "corners": [
        7,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        638,
        622
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r11-koe-elv",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 11 (Derby Vùng Ruhr)",
    "homeTeam": {
      "id": "koe",
      "name": "1. FC Köln",
      "shortName": "FC Köln",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/128.png",
      "score": 2,
      "color": "#ED1C24"
    },
    "awayTeam": {
      "id": "elv",
      "name": "SV Elversberg",
      "shortName": "Elversberg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7097.png",
      "score": 0,
      "color": "#111111"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-06T21:30:00+07:00",
    "stadium": "RheinEnergieStadion",
    "city": "Cologne",
    "referee": "Christian Dingert",
    "events": [
      {
        "id": "ev-de-1396",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Tim Lemperle"
      },
      {
        "id": "ev-de-1397",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Damion Downs"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
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
        14,
        11
      ],
      "corners": [
        9,
        3
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        658,
        602
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r11-sge-bmg",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 11 (Derby Vùng Ruhr)",
    "homeTeam": {
      "id": "sge",
      "name": "Eintracht Frankfurt",
      "shortName": "Frankfurt",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png",
      "score": 2,
      "color": "#E1000F"
    },
    "awayTeam": {
      "id": "bmg",
      "name": "Borussia M'gladbach",
      "shortName": "M'gladbach",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/268.png",
      "score": 1,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-06T23:30:00+07:00",
    "stadium": "Deutsche Bank Park",
    "city": "Frankfurt",
    "referee": "Sascha Stegemann",
    "events": [
      {
        "id": "ev-de-1398",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Omar Marmoush"
      },
      {
        "id": "ev-de-1400",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Tim Kleindienst"
      },
      {
        "id": "ev-de-1399",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Hugo Ekitiké"
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
        2,
        1.1
      ],
      "fouls": [
        10,
        13
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        638,
        622
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r12-bay-hsv",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 12 (Loạt Trận Giữa Tuần)",
    "homeTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern Munich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 4,
      "color": "#DC052D"
    },
    "awayTeam": {
      "id": "hsv",
      "name": "Hamburger SV",
      "shortName": "Hamburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/125.png",
      "score": 0,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-08T02:30:00+07:00",
    "stadium": "Allianz Arena",
    "city": "Munich",
    "referee": "Felix Brych",
    "events": [
      {
        "id": "ev-de-1401",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Harry Kane"
      },
      {
        "id": "ev-de-1402",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Jamal Musiala"
      },
      {
        "id": "ev-de-1403",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Michael Olise"
      },
      {
        "id": "ev-de-1404",
        "minute": 67,
        "type": "GOAL",
        "team": "home",
        "player": "Leroy Sané"
      }
    ],
    "stats": {
      "possession": [
        59,
        41
      ],
      "shots": [
        19,
        6
      ],
      "shotsOnTarget": [
        8,
        2
      ],
      "expectedGoals": [
        3.6,
        0.3
      ],
      "fouls": [
        11,
        11
      ],
      "corners": [
        13,
        3
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
        666,
        594
      ],
      "passAccuracy": [
        90,
        83
      ]
    }
  },
  {
    "id": "bun-r12-s04-sge",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 12 (Loạt Trận Giữa Tuần)",
    "homeTeam": {
      "id": "s04",
      "name": "FC Schalke 04",
      "shortName": "Schalke 04",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/133.png",
      "score": 1,
      "color": "#004D9D"
    },
    "awayTeam": {
      "id": "sge",
      "name": "Eintracht Frankfurt",
      "shortName": "Frankfurt",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png",
      "score": 2,
      "color": "#E1000F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-08T02:30:00+07:00",
    "stadium": "Veltins-Arena",
    "city": "Gelsenkirchen",
    "referee": "Daniel Siebert",
    "events": [
      {
        "id": "ev-de-1405",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Kenan Karaman"
      },
      {
        "id": "ev-de-1406",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Omar Marmoush"
      },
      {
        "id": "ev-de-1407",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Hugo Ekitiké"
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
        13,
        11
      ],
      "corners": [
        7,
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
        614,
        646
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r12-lev-uni",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 12 (Loạt Trận Giữa Tuần)",
    "homeTeam": {
      "id": "lev",
      "name": "Bayer 04 Leverkusen",
      "shortName": "Leverkusen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png",
      "score": 3,
      "color": "#E32219"
    },
    "awayTeam": {
      "id": "uni",
      "name": "1. FC Union Berlin",
      "shortName": "Union Berlin",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/594.png",
      "score": 1,
      "color": "#EB1923"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-09T02:30:00+07:00",
    "stadium": "BayArena",
    "city": "Leverkusen",
    "referee": "Sven Jablonski",
    "events": [
      {
        "id": "ev-de-1408",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Florian Wirtz"
      },
      {
        "id": "ev-de-1411",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Benedict Hollerbach"
      },
      {
        "id": "ev-de-1409",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Victor Boniface"
      },
      {
        "id": "ev-de-1410",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Jeremie Frimpong"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
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
        1.1
      ],
      "fouls": [
        10,
        15
      ],
      "corners": [
        11,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        662,
        598
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r12-bmg-mai",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 12 (Loạt Trận Giữa Tuần)",
    "homeTeam": {
      "id": "bmg",
      "name": "Borussia M'gladbach",
      "shortName": "M'gladbach",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/268.png",
      "score": 2,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "mai",
      "name": "1. FSV Mainz 05",
      "shortName": "Mainz 05",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/134.png",
      "score": 1,
      "color": "#C91316"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-09T02:30:00+07:00",
    "stadium": "Borussia-Park",
    "city": "Mönchengladbach",
    "referee": "Robert Hartmann",
    "events": [
      {
        "id": "ev-de-1412",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Tim Kleindienst"
      },
      {
        "id": "ev-de-1414",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Jonathan Burkardt"
      },
      {
        "id": "ev-de-1413",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Alassane Pléa"
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
        11,
        14
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        654,
        606
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r12-bre-rbl",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 12 (Loạt Trận Giữa Tuần)",
    "homeTeam": {
      "id": "bre-de",
      "name": "SV Werder Bremen",
      "shortName": "Werder Bremen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/137.png",
      "score": 1,
      "color": "#1B824B"
    },
    "awayTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 2,
      "color": "#DD0741"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-09T02:30:00+07:00",
    "stadium": "Weserstadion",
    "city": "Bremen",
    "referee": "Christian Dingert",
    "events": [
      {
        "id": "ev-de-1415",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Marvin Ducksch"
      },
      {
        "id": "ev-de-1416",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Benjamin Šeško"
      },
      {
        "id": "ev-de-1417",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Loïs Openda"
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
        13,
        12
      ],
      "corners": [
        7,
        7
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        594,
        666
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "bun-r12-hof-vfb",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 12 (Loạt Trận Giữa Tuần)",
    "homeTeam": {
      "id": "hof",
      "name": "TSG Hoffenheim",
      "shortName": "Hoffenheim",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8157.png",
      "score": 1,
      "color": "#005CA9"
    },
    "awayTeam": {
      "id": "vfb",
      "name": "VfB Stuttgart",
      "shortName": "Stuttgart",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/135.png",
      "score": 2,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-09T02:30:00+07:00",
    "stadium": "PreZero Arena",
    "city": "Sinsheim",
    "referee": "Sascha Stegemann",
    "events": [
      {
        "id": "ev-de-1418",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Andrej Kramarić"
      },
      {
        "id": "ev-de-1419",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Deniz Undav"
      },
      {
        "id": "ev-de-1420",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Ermedin Demirović"
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
        11,
        13
      ],
      "corners": [
        7,
        7
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        594,
        666
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "bun-r12-scf-bvb",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 12 (Loạt Trận Giữa Tuần)",
    "homeTeam": {
      "id": "scf",
      "name": "SC Freiburg",
      "shortName": "Freiburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/126.png",
      "score": 1,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 2,
      "color": "#FDE100"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-09T02:30:00+07:00",
    "stadium": "Europa-Park Stadion",
    "city": "Freiburg",
    "referee": "Harm Osmers",
    "events": [
      {
        "id": "ev-de-1421",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Vincenzo Grifo"
      },
      {
        "id": "ev-de-1422",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Serhou Guirassy"
      },
      {
        "id": "ev-de-1423",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Julian Brandt"
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
        1.2,
        1.9
      ],
      "fouls": [
        11,
        12
      ],
      "corners": [
        7,
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
        614,
        646
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r12-pad-koe",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 12 (Loạt Trận Giữa Tuần)",
    "homeTeam": {
      "id": "pad",
      "name": "SC Paderborn 07",
      "shortName": "Paderborn",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6902.png",
      "score": 1,
      "color": "#004B87"
    },
    "awayTeam": {
      "id": "koe",
      "name": "1. FC Köln",
      "shortName": "FC Köln",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/128.png",
      "score": 1,
      "color": "#ED1C24"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-09T02:30:00+07:00",
    "stadium": "Home Deluxe Arena",
    "city": "Paderborn",
    "referee": "Bastian Dankert",
    "events": [
      {
        "id": "ev-de-1424",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Filip Bilbija"
      },
      {
        "id": "ev-de-1425",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Tim Lemperle"
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
        1.2,
        1.1
      ],
      "fouls": [
        11,
        14
      ],
      "corners": [
        7,
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
        642,
        618
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r12-elv-aug",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 12 (Loạt Trận Giữa Tuần)",
    "homeTeam": {
      "id": "elv",
      "name": "SV Elversberg",
      "shortName": "Elversberg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7097.png",
      "score": 0,
      "color": "#111111"
    },
    "awayTeam": {
      "id": "aug",
      "name": "FC Augsburg",
      "shortName": "Augsburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3841.png",
      "score": 2,
      "color": "#BA3733"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-09T02:30:00+07:00",
    "stadium": "Ursapharm-Arena an der Kaiserlinde",
    "city": "Spiesen-Elversberg",
    "referee": "Tobias Stieler",
    "events": [
      {
        "id": "ev-de-1426",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Phillip Tietz"
      },
      {
        "id": "ev-de-1427",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Samuel Essende"
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
        0.4,
        1.9
      ],
      "fouls": [
        11,
        15
      ],
      "corners": [
        5,
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
        610,
        650
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r13-bay-lev",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 13 (Đại Chiến Quyết Định Ngôi Đầu)",
    "homeTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern Munich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 2,
      "color": "#DC052D"
    },
    "awayTeam": {
      "id": "lev",
      "name": "Bayer 04 Leverkusen",
      "shortName": "Leverkusen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png",
      "score": 2,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T21:30:00+07:00",
    "stadium": "Allianz Arena",
    "city": "Munich",
    "referee": "Robert Hartmann",
    "events": [
      {
        "id": "ev-de-1428",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Harry Kane"
      },
      {
        "id": "ev-de-1430",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Florian Wirtz"
      },
      {
        "id": "ev-de-1429",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Jamal Musiala"
      },
      {
        "id": "ev-de-1431",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Victor Boniface"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        9,
        10
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
        11,
        12
      ],
      "corners": [
        9,
        7
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
        654,
        606
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r13-bvb-rbl",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 13 (Đại Chiến Quyết Định Ngôi Đầu)",
    "homeTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 2,
      "color": "#FDE100"
    },
    "awayTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 1,
      "color": "#DD0741"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T21:30:00+07:00",
    "stadium": "Signal Iduna Park",
    "city": "Dortmund",
    "referee": "Christian Dingert",
    "events": [
      {
        "id": "ev-de-1432",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Serhou Guirassy"
      },
      {
        "id": "ev-de-1434",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Benjamin Šeško"
      },
      {
        "id": "ev-de-1433",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Julian Brandt"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
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
        11,
        13
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        646,
        614
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r13-sge-vfb",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 13 (Đại Chiến Quyết Định Ngôi Đầu)",
    "homeTeam": {
      "id": "sge",
      "name": "Eintracht Frankfurt",
      "shortName": "Frankfurt",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png",
      "score": 2,
      "color": "#E1000F"
    },
    "awayTeam": {
      "id": "vfb",
      "name": "VfB Stuttgart",
      "shortName": "Stuttgart",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/135.png",
      "score": 2,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T21:30:00+07:00",
    "stadium": "Deutsche Bank Park",
    "city": "Frankfurt",
    "referee": "Sascha Stegemann",
    "events": [
      {
        "id": "ev-de-1435",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Omar Marmoush"
      },
      {
        "id": "ev-de-1437",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Deniz Undav"
      },
      {
        "id": "ev-de-1436",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Hugo Ekitiké"
      },
      {
        "id": "ev-de-1438",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Ermedin Demirović"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
      ],
      "shots": [
        9,
        10
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
        11
      ],
      "corners": [
        9,
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
        646,
        614
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r13-uni-hof",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 13 (Đại Chiến Quyết Định Ngôi Đầu)",
    "homeTeam": {
      "id": "uni",
      "name": "1. FC Union Berlin",
      "shortName": "Union Berlin",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/594.png",
      "score": 1,
      "color": "#EB1923"
    },
    "awayTeam": {
      "id": "hof",
      "name": "TSG Hoffenheim",
      "shortName": "Hoffenheim",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8157.png",
      "score": 0,
      "color": "#005CA9"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T21:30:00+07:00",
    "stadium": "Stadion An der Alten Försterei",
    "city": "Berlin",
    "referee": "Harm Osmers",
    "events": [
      {
        "id": "ev-de-1439",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benedict Hollerbach"
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
        0.3
      ],
      "fouls": [
        13,
        11
      ],
      "corners": [
        7,
        3
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
        638,
        622
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r13-aug-hsv",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 13 (Đại Chiến Quyết Định Ngôi Đầu)",
    "homeTeam": {
      "id": "aug",
      "name": "FC Augsburg",
      "shortName": "Augsburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3841.png",
      "score": 2,
      "color": "#BA3733"
    },
    "awayTeam": {
      "id": "hsv",
      "name": "Hamburger SV",
      "shortName": "Hamburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/125.png",
      "score": 1,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T21:30:00+07:00",
    "stadium": "WWK Arena",
    "city": "Augsburg",
    "referee": "Bastian Dankert",
    "events": [
      {
        "id": "ev-de-1440",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Phillip Tietz"
      },
      {
        "id": "ev-de-1442",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Robert Glatzel"
      },
      {
        "id": "ev-de-1441",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Samuel Essende"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
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
        10,
        13
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        650,
        610
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r13-mai-scf",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 13 (Đại Chiến Quyết Định Ngôi Đầu)",
    "homeTeam": {
      "id": "mai",
      "name": "1. FSV Mainz 05",
      "shortName": "Mainz 05",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/134.png",
      "score": 1,
      "color": "#C91316"
    },
    "awayTeam": {
      "id": "scf",
      "name": "SC Freiburg",
      "shortName": "Freiburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/126.png",
      "score": 1,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-13T00:30:00+07:00",
    "stadium": "Mewa Arena",
    "city": "Mainz",
    "referee": "Tobias Stieler",
    "events": [
      {
        "id": "ev-de-1443",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Jonathan Burkardt"
      },
      {
        "id": "ev-de-1444",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Vincenzo Grifo"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
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
        10,
        11
      ],
      "corners": [
        7,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        654,
        606
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r13-koe-bre",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 13 (Đại Chiến Quyết Định Ngôi Đầu)",
    "homeTeam": {
      "id": "koe",
      "name": "1. FC Köln",
      "shortName": "FC Köln",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/128.png",
      "score": 2,
      "color": "#ED1C24"
    },
    "awayTeam": {
      "id": "bre-de",
      "name": "SV Werder Bremen",
      "shortName": "Werder Bremen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/137.png",
      "score": 1,
      "color": "#1B824B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-13T21:30:00+07:00",
    "stadium": "RheinEnergieStadion",
    "city": "Cologne",
    "referee": "Felix Brych",
    "events": [
      {
        "id": "ev-de-1445",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Tim Lemperle"
      },
      {
        "id": "ev-de-1447",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Marvin Ducksch"
      },
      {
        "id": "ev-de-1446",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Damion Downs"
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
        10,
        13
      ],
      "corners": [
        9,
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
        646,
        614
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r13-bmg-s04",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 13 (Đại Chiến Quyết Định Ngôi Đầu)",
    "homeTeam": {
      "id": "bmg",
      "name": "Borussia M'gladbach",
      "shortName": "M'gladbach",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/268.png",
      "score": 2,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "s04",
      "name": "FC Schalke 04",
      "shortName": "Schalke 04",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/133.png",
      "score": 0,
      "color": "#004D9D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-13T23:30:00+07:00",
    "stadium": "Borussia-Park",
    "city": "Mönchengladbach",
    "referee": "Daniel Siebert",
    "events": [
      {
        "id": "ev-de-1448",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Tim Kleindienst"
      },
      {
        "id": "ev-de-1449",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Alassane Pléa"
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
        0.3
      ],
      "fouls": [
        11,
        11
      ],
      "corners": [
        9,
        3
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        662,
        598
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r13-elv-pad",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 13 (Đại Chiến Quyết Định Ngôi Đầu)",
    "homeTeam": {
      "id": "elv",
      "name": "SV Elversberg",
      "shortName": "Elversberg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7097.png",
      "score": 1,
      "color": "#111111"
    },
    "awayTeam": {
      "id": "pad",
      "name": "SC Paderborn 07",
      "shortName": "Paderborn",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6902.png",
      "score": 1,
      "color": "#004B87"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-14T01:30:00+07:00",
    "stadium": "Ursapharm-Arena an der Kaiserlinde",
    "city": "Spiesen-Elversberg",
    "referee": "Sven Jablonski",
    "events": [
      {
        "id": "ev-de-1450",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Fisnik Asllani"
      },
      {
        "id": "ev-de-1451",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Filip Bilbija"
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
        15
      ],
      "corners": [
        7,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        646,
        614
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r14-lev-bmg",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 14",
    "homeTeam": {
      "id": "lev",
      "name": "Bayer 04 Leverkusen",
      "shortName": "Leverkusen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png",
      "score": 3,
      "color": "#E32219"
    },
    "awayTeam": {
      "id": "bmg",
      "name": "Borussia M'gladbach",
      "shortName": "M'gladbach",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/268.png",
      "score": 1,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-15T02:30:00+07:00",
    "stadium": "BayArena",
    "city": "Leverkusen",
    "referee": "Harm Osmers",
    "events": [
      {
        "id": "ev-de-1452",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Florian Wirtz"
      },
      {
        "id": "ev-de-1455",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Tim Kleindienst"
      },
      {
        "id": "ev-de-1453",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Victor Boniface"
      },
      {
        "id": "ev-de-1454",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Jeremie Frimpong"
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
        14,
        11
      ],
      "corners": [
        11,
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
        654,
        606
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r14-vfb-mai",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 14",
    "homeTeam": {
      "id": "vfb",
      "name": "VfB Stuttgart",
      "shortName": "Stuttgart",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/135.png",
      "score": 2,
      "color": "#E32219"
    },
    "awayTeam": {
      "id": "mai",
      "name": "1. FSV Mainz 05",
      "shortName": "Mainz 05",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/134.png",
      "score": 0,
      "color": "#C91316"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-15T02:30:00+07:00",
    "stadium": "MHPArena",
    "city": "Stuttgart",
    "referee": "Bastian Dankert",
    "events": [
      {
        "id": "ev-de-1456",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Deniz Undav"
      },
      {
        "id": "ev-de-1457",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Ermedin Demirović"
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
        13,
        15
      ],
      "corners": [
        9,
        3
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
        638,
        622
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r14-hsv-bvb",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 14",
    "homeTeam": {
      "id": "hsv",
      "name": "Hamburger SV",
      "shortName": "Hamburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/125.png",
      "score": 1,
      "color": "#003399"
    },
    "awayTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 3,
      "color": "#FDE100"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-16T02:30:00+07:00",
    "stadium": "Volksparkstadion",
    "city": "Hamburg",
    "referee": "Tobias Stieler",
    "events": [
      {
        "id": "ev-de-1458",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Robert Glatzel"
      },
      {
        "id": "ev-de-1459",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Serhou Guirassy"
      },
      {
        "id": "ev-de-1460",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Julian Brandt"
      },
      {
        "id": "ev-de-1461",
        "minute": 60,
        "type": "GOAL",
        "team": "away",
        "player": "Karim Adeyemi"
      }
    ],
    "stats": {
      "possession": [
        42,
        58
      ],
      "shots": [
        8,
        15
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
        13,
        11
      ],
      "corners": [
        7,
        9
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        598,
        662
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "bun-r14-rbl-koe",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 14",
    "homeTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 3,
      "color": "#DD0741"
    },
    "awayTeam": {
      "id": "koe",
      "name": "1. FC Köln",
      "shortName": "FC Köln",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/128.png",
      "score": 1,
      "color": "#ED1C24"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-16T02:30:00+07:00",
    "stadium": "Red Bull Arena",
    "city": "Leipzig",
    "referee": "Felix Brych",
    "events": [
      {
        "id": "ev-de-1462",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benjamin Šeško"
      },
      {
        "id": "ev-de-1465",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Tim Lemperle"
      },
      {
        "id": "ev-de-1463",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Loïs Openda"
      },
      {
        "id": "ev-de-1464",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Xavi Simons"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
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
        1.1
      ],
      "fouls": [
        14,
        14
      ],
      "corners": [
        11,
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
        658,
        602
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r14-s04-bay",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 14",
    "homeTeam": {
      "id": "s04",
      "name": "FC Schalke 04",
      "shortName": "Schalke 04",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/133.png",
      "score": 0,
      "color": "#004D9D"
    },
    "awayTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern Munich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 4,
      "color": "#DC052D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-16T02:30:00+07:00",
    "stadium": "Veltins-Arena",
    "city": "Gelsenkirchen",
    "referee": "Daniel Siebert",
    "events": [
      {
        "id": "ev-de-1466",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Harry Kane"
      },
      {
        "id": "ev-de-1467",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Jamal Musiala"
      },
      {
        "id": "ev-de-1468",
        "minute": 60,
        "type": "GOAL",
        "team": "away",
        "player": "Michael Olise"
      },
      {
        "id": "ev-de-1469",
        "minute": 74,
        "type": "GOAL",
        "team": "away",
        "player": "Leroy Sané"
      }
    ],
    "stats": {
      "possession": [
        42,
        58
      ],
      "shots": [
        8,
        20
      ],
      "shotsOnTarget": [
        3,
        9
      ],
      "expectedGoals": [
        0.4,
        3.5
      ],
      "fouls": [
        13,
        12
      ],
      "corners": [
        5,
        11
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
        598,
        662
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  },
  {
    "id": "bun-r14-bre-aug",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 14",
    "homeTeam": {
      "id": "bre-de",
      "name": "SV Werder Bremen",
      "shortName": "Werder Bremen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/137.png",
      "score": 2,
      "color": "#1B824B"
    },
    "awayTeam": {
      "id": "aug",
      "name": "FC Augsburg",
      "shortName": "Augsburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3841.png",
      "score": 1,
      "color": "#BA3733"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-16T02:30:00+07:00",
    "stadium": "Weserstadion",
    "city": "Bremen",
    "referee": "Sven Jablonski",
    "events": [
      {
        "id": "ev-de-1470",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Marvin Ducksch"
      },
      {
        "id": "ev-de-1472",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Phillip Tietz"
      },
      {
        "id": "ev-de-1471",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Keke Topp"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
      ],
      "shots": [
        12,
        8
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
        12
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        650,
        610
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r14-hof-sge",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 14",
    "homeTeam": {
      "id": "hof",
      "name": "TSG Hoffenheim",
      "shortName": "Hoffenheim",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8157.png",
      "score": 1,
      "color": "#005CA9"
    },
    "awayTeam": {
      "id": "sge",
      "name": "Eintracht Frankfurt",
      "shortName": "Frankfurt",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png",
      "score": 2,
      "color": "#E1000F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-16T02:30:00+07:00",
    "stadium": "PreZero Arena",
    "city": "Sinsheim",
    "referee": "Robert Hartmann",
    "events": [
      {
        "id": "ev-de-1473",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Andrej Kramarić"
      },
      {
        "id": "ev-de-1474",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Omar Marmoush"
      },
      {
        "id": "ev-de-1475",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Hugo Ekitiké"
      }
    ],
    "stats": {
      "possession": [
        40,
        60
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
        14
      ],
      "corners": [
        7,
        7
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        590,
        670
      ],
      "passAccuracy": [
        87,
        86
      ]
    }
  },
  {
    "id": "bun-r14-scf-elv",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 14",
    "homeTeam": {
      "id": "scf",
      "name": "SC Freiburg",
      "shortName": "Freiburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/126.png",
      "score": 2,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "elv",
      "name": "SV Elversberg",
      "shortName": "Elversberg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7097.png",
      "score": 0,
      "color": "#111111"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-16T02:30:00+07:00",
    "stadium": "Europa-Park Stadion",
    "city": "Freiburg",
    "referee": "Christian Dingert",
    "events": [
      {
        "id": "ev-de-1476",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Vincenzo Grifo"
      },
      {
        "id": "ev-de-1477",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Junior Adamu"
      }
    ],
    "stats": {
      "possession": [
        59,
        41
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
        13,
        15
      ],
      "corners": [
        9,
        3
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        666,
        594
      ],
      "passAccuracy": [
        90,
        83
      ]
    }
  },
  {
    "id": "bun-r14-pad-uni",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 14",
    "homeTeam": {
      "id": "pad",
      "name": "SC Paderborn 07",
      "shortName": "Paderborn",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6902.png",
      "score": 1,
      "color": "#004B87"
    },
    "awayTeam": {
      "id": "uni",
      "name": "1. FC Union Berlin",
      "shortName": "Union Berlin",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/594.png",
      "score": 2,
      "color": "#EB1923"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-16T02:30:00+07:00",
    "stadium": "Home Deluxe Arena",
    "city": "Paderborn",
    "referee": "Sascha Stegemann",
    "events": [
      {
        "id": "ev-de-1478",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Filip Bilbija"
      },
      {
        "id": "ev-de-1479",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Benedict Hollerbach"
      },
      {
        "id": "ev-de-1480",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Yorbe Vertessen"
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
        13,
        11
      ],
      "corners": [
        7,
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
        610,
        650
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r15-bay-bmg",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 15 (Loạt Trận Trước Kỳ Nghỉ Đông)",
    "homeTeam": {
      "id": "bay",
      "name": "FC Bayern München",
      "shortName": "Bayern Munich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png",
      "score": 3,
      "color": "#DC052D"
    },
    "awayTeam": {
      "id": "bmg",
      "name": "Borussia M'gladbach",
      "shortName": "M'gladbach",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/268.png",
      "score": 1,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T21:30:00+07:00",
    "stadium": "Allianz Arena",
    "city": "Munich",
    "referee": "Felix Brych",
    "events": [
      {
        "id": "ev-de-1481",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Harry Kane"
      },
      {
        "id": "ev-de-1484",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Tim Kleindienst"
      },
      {
        "id": "ev-de-1482",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Jamal Musiala"
      },
      {
        "id": "ev-de-1483",
        "minute": 53,
        "type": "GOAL",
        "team": "home",
        "player": "Michael Olise"
      }
    ],
    "stats": {
      "possession": [
        58,
        42
      ],
      "shots": [
        16,
        7
      ],
      "shotsOnTarget": [
        7,
        3
      ],
      "expectedGoals": [
        2.8,
        1.1
      ],
      "fouls": [
        12,
        11
      ],
      "corners": [
        11,
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
        662,
        598
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r15-bvb-vfb",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 15 (Loạt Trận Trước Kỳ Nghỉ Đông)",
    "homeTeam": {
      "id": "bvb",
      "name": "Borussia Dortmund",
      "shortName": "Dortmund",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png",
      "score": 2,
      "color": "#FDE100"
    },
    "awayTeam": {
      "id": "vfb",
      "name": "VfB Stuttgart",
      "shortName": "Stuttgart",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/135.png",
      "score": 1,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T21:30:00+07:00",
    "stadium": "Signal Iduna Park",
    "city": "Dortmund",
    "referee": "Daniel Siebert",
    "events": [
      {
        "id": "ev-de-1485",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Serhou Guirassy"
      },
      {
        "id": "ev-de-1487",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Deniz Undav"
      },
      {
        "id": "ev-de-1486",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Julian Brandt"
      }
    ],
    "stats": {
      "possession": [
        59,
        41
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
        11
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        2,
        2
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        666,
        594
      ],
      "passAccuracy": [
        90,
        83
      ]
    }
  },
  {
    "id": "bun-r15-sge-lev",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 15 (Loạt Trận Trước Kỳ Nghỉ Đông)",
    "homeTeam": {
      "id": "sge",
      "name": "Eintracht Frankfurt",
      "shortName": "Frankfurt",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png",
      "score": 1,
      "color": "#E1000F"
    },
    "awayTeam": {
      "id": "lev",
      "name": "Bayer 04 Leverkusen",
      "shortName": "Leverkusen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png",
      "score": 2,
      "color": "#E32219"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T21:30:00+07:00",
    "stadium": "Deutsche Bank Park",
    "city": "Frankfurt",
    "referee": "Sven Jablonski",
    "events": [
      {
        "id": "ev-de-1488",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Omar Marmoush"
      },
      {
        "id": "ev-de-1489",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Florian Wirtz"
      },
      {
        "id": "ev-de-1490",
        "minute": 42,
        "type": "GOAL",
        "team": "away",
        "player": "Victor Boniface"
      }
    ],
    "stats": {
      "possession": [
        45,
        55
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
        10,
        15
      ],
      "corners": [
        7,
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
        610,
        650
      ],
      "passAccuracy": [
        88,
        85
      ]
    }
  },
  {
    "id": "bun-r15-rbl-scf",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 15 (Loạt Trận Trước Kỳ Nghỉ Đông)",
    "homeTeam": {
      "id": "rbl",
      "name": "RB Leipzig",
      "shortName": "RB Leipzig",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png",
      "score": 2,
      "color": "#DD0741"
    },
    "awayTeam": {
      "id": "scf",
      "name": "SC Freiburg",
      "shortName": "Freiburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/126.png",
      "score": 0,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T21:30:00+07:00",
    "stadium": "Red Bull Arena",
    "city": "Leipzig",
    "referee": "Robert Hartmann",
    "events": [
      {
        "id": "ev-de-1491",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benjamin Šeško"
      },
      {
        "id": "ev-de-1492",
        "minute": 35,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Loïs Openda"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
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
        13,
        12
      ],
      "corners": [
        9,
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
        658,
        602
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r15-aug-s04",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 15 (Loạt Trận Trước Kỳ Nghỉ Đông)",
    "homeTeam": {
      "id": "aug",
      "name": "FC Augsburg",
      "shortName": "Augsburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3841.png",
      "score": 2,
      "color": "#BA3733"
    },
    "awayTeam": {
      "id": "s04",
      "name": "FC Schalke 04",
      "shortName": "Schalke 04",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/133.png",
      "score": 1,
      "color": "#004D9D"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T21:30:00+07:00",
    "stadium": "WWK Arena",
    "city": "Augsburg",
    "referee": "Christian Dingert",
    "events": [
      {
        "id": "ev-de-1493",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Phillip Tietz"
      },
      {
        "id": "ev-de-1495",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Kenan Karaman"
      },
      {
        "id": "ev-de-1494",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Samuel Essende"
      }
    ],
    "stats": {
      "possession": [
        59,
        41
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
        9,
        5
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        666,
        594
      ],
      "passAccuracy": [
        90,
        83
      ]
    }
  },
  {
    "id": "bun-r15-mai-pad",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 15 (Loạt Trận Trước Kỳ Nghỉ Đông)",
    "homeTeam": {
      "id": "mai",
      "name": "1. FSV Mainz 05",
      "shortName": "Mainz 05",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/134.png",
      "score": 2,
      "color": "#C91316"
    },
    "awayTeam": {
      "id": "pad",
      "name": "SC Paderborn 07",
      "shortName": "Paderborn",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6902.png",
      "score": 0,
      "color": "#004B87"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-20T00:30:00+07:00",
    "stadium": "Mewa Arena",
    "city": "Mainz",
    "referee": "Sascha Stegemann",
    "events": [
      {
        "id": "ev-de-1496",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Jonathan Burkardt"
      },
      {
        "id": "ev-de-1497",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Armindo Sieb"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
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
        15
      ],
      "corners": [
        9,
        3
      ],
      "offsides": [
        1,
        2
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        654,
        606
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r15-uni-hsv",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 15 (Loạt Trận Trước Kỳ Nghỉ Đông)",
    "homeTeam": {
      "id": "uni",
      "name": "1. FC Union Berlin",
      "shortName": "Union Berlin",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/594.png",
      "score": 2,
      "color": "#EB1923"
    },
    "awayTeam": {
      "id": "hsv",
      "name": "Hamburger SV",
      "shortName": "Hamburg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/125.png",
      "score": 1,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-20T21:30:00+07:00",
    "stadium": "Stadion An der Alten Försterei",
    "city": "Berlin",
    "referee": "Harm Osmers",
    "events": [
      {
        "id": "ev-de-1498",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Benedict Hollerbach"
      },
      {
        "id": "ev-de-1500",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Robert Glatzel"
      },
      {
        "id": "ev-de-1499",
        "minute": 35,
        "type": "GOAL",
        "team": "home",
        "player": "Yorbe Vertessen"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
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
        10,
        14
      ],
      "corners": [
        9,
        5
      ],
      "offsides": [
        1,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        646,
        614
      ],
      "passAccuracy": [
        89,
        84
      ]
    }
  },
  {
    "id": "bun-r15-koe-hof",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 15 (Loạt Trận Trước Kỳ Nghỉ Đông)",
    "homeTeam": {
      "id": "koe",
      "name": "1. FC Köln",
      "shortName": "FC Köln",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/128.png",
      "score": 1,
      "color": "#ED1C24"
    },
    "awayTeam": {
      "id": "hof",
      "name": "TSG Hoffenheim",
      "shortName": "Hoffenheim",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8157.png",
      "score": 1,
      "color": "#005CA9"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-20T23:30:00+07:00",
    "stadium": "RheinEnergieStadion",
    "city": "Cologne",
    "referee": "Bastian Dankert",
    "events": [
      {
        "id": "ev-de-1501",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Tim Lemperle"
      },
      {
        "id": "ev-de-1502",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Andrej Kramarić"
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
        13,
        14
      ],
      "corners": [
        7,
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
        658,
        602
      ],
      "passAccuracy": [
        90,
        84
      ]
    }
  },
  {
    "id": "bun-r15-elv-bre",
    "leagueId": "bundesliga",
    "round": "Bundesliga - Vòng 15 (Loạt Trận Trước Kỳ Nghỉ Đông)",
    "homeTeam": {
      "id": "elv",
      "name": "SV Elversberg",
      "shortName": "Elversberg",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7097.png",
      "score": 1,
      "color": "#111111"
    },
    "awayTeam": {
      "id": "bre-de",
      "name": "SV Werder Bremen",
      "shortName": "Werder Bremen",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/137.png",
      "score": 2,
      "color": "#1B824B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-21T01:30:00+07:00",
    "stadium": "Ursapharm-Arena an der Kaiserlinde",
    "city": "Spiesen-Elversberg",
    "referee": "Tobias Stieler",
    "events": [
      {
        "id": "ev-de-1503",
        "minute": 17,
        "type": "GOAL",
        "team": "home",
        "player": "Fisnik Asllani"
      },
      {
        "id": "ev-de-1504",
        "minute": 26,
        "type": "GOAL",
        "team": "away",
        "player": "Marvin Ducksch"
      },
      {
        "id": "ev-de-1505",
        "minute": 42,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Keke Topp"
      }
    ],
    "stats": {
      "possession": [
        44,
        56
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
        13,
        15
      ],
      "corners": [
        7,
        7
      ],
      "offsides": [
        2,
        1
      ],
      "yellowCards": [
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        606,
        654
      ],
      "passAccuracy": [
        88,
        86
      ]
    }
  }
];
