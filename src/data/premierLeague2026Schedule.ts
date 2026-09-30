import { Match } from '../types/football';

/**
 * Lịch thi đấu Premier League 2026 trọn vẹn từ Tháng 10 đến cuối Tháng 12/2026 (Vòng 6 đến Vòng 18)
 * Giờ thi đấu chính xác theo Giờ Việt Nam (Asia/Saigon, GMT+7)
 * Đầy đủ 20 CLB Ngoại Hạng Anh, các trận Super Sunday, Derby, Boxing Day và Vòng đấu đón chào năm mới!
 * Tất cả trận đấu chưa đá đều có status: 'SCHEDULED' để kích hoạt đồng hồ đếm ngược thời gian thực.
 */
export const PREMIER_LEAGUE_2026_SCHEDULE: Match[] = [
  {
    "id": "epl-r6-ars-lee",
    "leagueId": "epl",
    "round": "Vòng 6 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 3,
      "color": "#EF0107"
    },
    "awayTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 0,
      "color": "#1D428A"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T18:30:00+07:00",
    "stadium": "Emirates Stadium",
    "city": "London",
    "referee": "Stuart Attwell",
    "events": [
      {
        "id": "ev-200",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-201",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Kai Havertz"
      },
      {
        "id": "ev-202",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Gabriel Martinelli"
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
        2.8,
        0.3
      ],
      "fouls": [
        10,
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        612,
        588
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r6-avl-bre",
    "leagueId": "epl",
    "round": "Vòng 6 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 2,
      "color": "#95BFE5"
    },
    "awayTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 1,
      "color": "#E30613"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T21:00:00+07:00",
    "stadium": "Villa Park",
    "city": "Birmingham",
    "referee": "Rob Jones",
    "events": [
      {
        "id": "ev-203",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-205",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bryan Mbeumo"
      },
      {
        "id": "ev-204",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Morgan Rogers"
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
        10,
        13
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r6-che-bou",
    "leagueId": "epl",
    "round": "Vòng 6 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 2,
      "color": "#034694"
    },
    "awayTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 1,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T21:00:00+07:00",
    "stadium": "Stamford Bridge",
    "city": "London",
    "referee": "Craig Pawson",
    "events": [
      {
        "id": "ev-206",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-208",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Antoine Semenyo"
      },
      {
        "id": "ev-207",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Nicolas Jackson"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
      ],
      "shots": [
        9,
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
        10
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r6-ips-ful",
    "leagueId": "epl",
    "round": "Vòng 6 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 1,
      "color": "#004B87"
    },
    "awayTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 1,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T21:00:00+07:00",
    "stadium": "Portman Road",
    "city": "Ipswich",
    "referee": "Chris Kavanagh",
    "events": [
      {
        "id": "ev-209",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Liam Delap"
      },
      {
        "id": "ev-210",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Emile Smith Rowe"
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
        12,
        12
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        592
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r6-sun-bha",
    "leagueId": "epl",
    "round": "Vòng 6 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 1,
      "color": "#EB172B"
    },
    "awayTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 2,
      "color": "#0057B8"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T21:00:00+07:00",
    "stadium": "Stadium of Light",
    "city": "Sunderland",
    "referee": "Michael Oliver",
    "events": [
      {
        "id": "ev-211",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Jack Clarke"
      },
      {
        "id": "ev-212",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Kaoru Mitoma"
      },
      {
        "id": "ev-213",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Danny Welbeck"
      }
    ],
    "stats": {
      "possession": [
        48,
        52
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
        10,
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        592,
        608
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r6-mun-tot",
    "leagueId": "epl",
    "round": "Vòng 6 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 2,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 2,
      "color": "#132257"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-10T23:30:00+07:00",
    "stadium": "Old Trafford",
    "city": "Manchester",
    "referee": "Anthony Taylor",
    "events": [
      {
        "id": "ev-214",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-216",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-215",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Rasmus Højlund"
      },
      {
        "id": "ev-217",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Dominic Solanke"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
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
        13,
        14
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
        624,
        576
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r6-cry-nfo",
    "leagueId": "epl",
    "round": "Vòng 6 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 1,
      "color": "#1B458F"
    },
    "awayTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 1,
      "color": "#DD0000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-11T20:00:00+07:00",
    "stadium": "Selhurst Park",
    "city": "London",
    "referee": "Simon Hooper",
    "events": [
      {
        "id": "ev-218",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Eberechi Eze"
      },
      {
        "id": "ev-219",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Chris Wood"
      }
    ],
    "stats": {
      "possession": [
        50,
        50
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
        9,
        12
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
        600,
        600
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r6-hul-eve",
    "leagueId": "epl",
    "round": "Vòng 6 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 1,
      "color": "#FFA500"
    },
    "awayTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 2,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-11T20:00:00+07:00",
    "stadium": "MKM Stadium",
    "city": "Hull",
    "referee": "Paul Tierney",
    "events": [
      {
        "id": "ev-220",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Chris Bedia"
      },
      {
        "id": "ev-221",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Dominic Calvert-Lewin"
      },
      {
        "id": "ev-222",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Dwight McNeil"
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
        12,
        11
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
        608
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r6-liv-mci",
    "leagueId": "epl",
    "round": "Vòng 6 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 2,
      "color": "#C8102E"
    },
    "awayTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 2,
      "color": "#6CABDD"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-11T22:30:00+07:00",
    "stadium": "Anfield",
    "city": "Liverpool",
    "referee": "Jarred Gillett",
    "events": [
      {
        "id": "ev-223",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-225",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-224",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Luis Díaz"
      },
      {
        "id": "ev-226",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Phil Foden"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        9,
        11
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
        14
      ],
      "corners": [
        8,
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
        624,
        576
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r6-cov-new",
    "leagueId": "epl",
    "round": "Vòng 6 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 0,
      "color": "#00BFFF"
    },
    "awayTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 2,
      "color": "#241F20"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-13T02:00:00+07:00",
    "stadium": "Coventry Building Society Arena",
    "city": "Coventry",
    "referee": "Darren England",
    "events": [
      {
        "id": "ev-227",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-228",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Anthony Gordon"
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
        0.4,
        1.9
      ],
      "fouls": [
        10,
        11
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        580,
        620
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r7-eve-che",
    "leagueId": "epl",
    "round": "Vòng 7 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 1,
      "color": "#003399"
    },
    "awayTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 2,
      "color": "#034694"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T18:30:00+07:00",
    "stadium": "Goodison Park",
    "city": "Liverpool",
    "referee": "Chris Kavanagh",
    "events": [
      {
        "id": "ev-229",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Dominic Calvert-Lewin"
      },
      {
        "id": "ev-230",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-231",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Nicolas Jackson"
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
        13,
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        568,
        632
      ],
      "passAccuracy": [
        86,
        86
      ]
    }
  },
  {
    "id": "epl-r7-bre-liv",
    "leagueId": "epl",
    "round": "Vòng 7 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 1,
      "color": "#E30613"
    },
    "awayTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 3,
      "color": "#C8102E"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T21:00:00+07:00",
    "stadium": "Gtech Community Stadium",
    "city": "Brentford",
    "referee": "Michael Oliver",
    "events": [
      {
        "id": "ev-232",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bryan Mbeumo"
      },
      {
        "id": "ev-233",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-234",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Luis Díaz"
      },
      {
        "id": "ev-235",
        "minute": 61,
        "type": "GOAL",
        "team": "away",
        "player": "Darwin Núñez"
      }
    ],
    "stats": {
      "possession": [
        49,
        51
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
        9,
        11
      ],
      "corners": [
        6,
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
        596,
        604
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r7-ful-hul",
    "leagueId": "epl",
    "round": "Vòng 7 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 2,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 0,
      "color": "#FFA500"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T21:00:00+07:00",
    "stadium": "Craven Cottage",
    "city": "London",
    "referee": "Anthony Taylor",
    "events": [
      {
        "id": "ev-236",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Emile Smith Rowe"
      },
      {
        "id": "ev-237",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Raúl Jiménez"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
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
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        604,
        596
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r7-mci-ips",
    "leagueId": "epl",
    "round": "Vòng 7 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 4,
      "color": "#6CABDD"
    },
    "awayTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 0,
      "color": "#004B87"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T21:00:00+07:00",
    "stadium": "Etihad Stadium",
    "city": "Manchester",
    "referee": "Simon Hooper",
    "events": [
      {
        "id": "ev-238",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-239",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Phil Foden"
      },
      {
        "id": "ev-240",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Kevin De Bruyne"
      },
      {
        "id": "ev-241",
        "minute": 68,
        "type": "GOAL",
        "team": "home",
        "player": "Bernardo Silva"
      }
    ],
    "stats": {
      "possession": [
        50,
        50
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
        12,
        11
      ],
      "corners": [
        12,
        3
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
        600,
        600
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r7-new-avl",
    "leagueId": "epl",
    "round": "Vòng 7 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 2,
      "color": "#241F20"
    },
    "awayTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 1,
      "color": "#95BFE5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-17T23:30:00+07:00",
    "stadium": "St. James' Park",
    "city": "Newcastle",
    "referee": "Paul Tierney",
    "events": [
      {
        "id": "ev-242",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-244",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-243",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Anthony Gordon"
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
        1.1
      ],
      "fouls": [
        9,
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
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        572
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r7-bou-sun",
    "leagueId": "epl",
    "round": "Vòng 7 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 2,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 1,
      "color": "#EB172B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-18T20:00:00+07:00",
    "stadium": "Vitality Stadium",
    "city": "Bournemouth",
    "referee": "Jarred Gillett",
    "events": [
      {
        "id": "ev-245",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Antoine Semenyo"
      },
      {
        "id": "ev-247",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Jack Clarke"
      },
      {
        "id": "ev-246",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Evanilson"
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
        1.1
      ],
      "fouls": [
        11,
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        572
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r7-bha-cry",
    "leagueId": "epl",
    "round": "Vòng 7 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 1,
      "color": "#0057B8"
    },
    "awayTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 1,
      "color": "#1B458F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-18T20:00:00+07:00",
    "stadium": "Amex Stadium",
    "city": "Falmer",
    "referee": "Darren England",
    "events": [
      {
        "id": "ev-248",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Kaoru Mitoma"
      },
      {
        "id": "ev-249",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Eberechi Eze"
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
        9,
        12
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
        612,
        588
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r7-lee-mun",
    "leagueId": "epl",
    "round": "Vòng 7 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 1,
      "color": "#1D428A"
    },
    "awayTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 2,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-18T20:00:00+07:00",
    "stadium": "Elland Road",
    "city": "Leeds",
    "referee": "Peter Bankes",
    "events": [
      {
        "id": "ev-250",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Wilfried Gnonto"
      },
      {
        "id": "ev-251",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-252",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Rasmus Højlund"
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
        9,
        13
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        588,
        612
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r7-nfo-ars",
    "leagueId": "epl",
    "round": "Vòng 7 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 1,
      "color": "#DD0000"
    },
    "awayTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 2,
      "color": "#EF0107"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-18T22:30:00+07:00",
    "stadium": "City Ground",
    "city": "Nottingham",
    "referee": "Stuart Attwell",
    "events": [
      {
        "id": "ev-253",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Chris Wood"
      },
      {
        "id": "ev-254",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-255",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Kai Havertz"
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
        13
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        576,
        624
      ],
      "passAccuracy": [
        86,
        86
      ]
    }
  },
  {
    "id": "epl-r7-tot-cov",
    "leagueId": "epl",
    "round": "Vòng 7 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 3,
      "color": "#132257"
    },
    "awayTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 0,
      "color": "#00BFFF"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-19T02:00:00+07:00",
    "stadium": "Tottenham Hotspur Stadium",
    "city": "London",
    "referee": "Rob Jones",
    "events": [
      {
        "id": "ev-256",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-257",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Dominic Solanke"
      },
      {
        "id": "ev-258",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Brennan Johnson"
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
        0.3
      ],
      "fouls": [
        11,
        14
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r8-ips-nfo",
    "leagueId": "epl",
    "round": "Vòng 8 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 1,
      "color": "#004B87"
    },
    "awayTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 1,
      "color": "#DD0000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-23T02:00:00+07:00",
    "stadium": "Portman Road",
    "city": "Ipswich",
    "referee": "Simon Hooper",
    "events": [
      {
        "id": "ev-259",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Liam Delap"
      },
      {
        "id": "ev-260",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Chris Wood"
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
        10,
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
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r8-avl-mci",
    "leagueId": "epl",
    "round": "Vòng 8 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 1,
      "color": "#95BFE5"
    },
    "awayTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 2,
      "color": "#6CABDD"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T18:30:00+07:00",
    "stadium": "Villa Park",
    "city": "Birmingham",
    "referee": "Paul Tierney",
    "events": [
      {
        "id": "ev-261",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-262",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-263",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Phil Foden"
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
        12,
        10
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
        588,
        612
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r8-ars-eve",
    "leagueId": "epl",
    "round": "Vòng 8 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 3,
      "color": "#EF0107"
    },
    "awayTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 0,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T21:00:00+07:00",
    "stadium": "Emirates Stadium",
    "city": "London",
    "referee": "Jarred Gillett",
    "events": [
      {
        "id": "ev-264",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-265",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Kai Havertz"
      },
      {
        "id": "ev-266",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Gabriel Martinelli"
      }
    ],
    "stats": {
      "possession": [
        50,
        50
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
        0.3
      ],
      "fouls": [
        11,
        12
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        600,
        600
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r8-cov-ful",
    "leagueId": "epl",
    "round": "Vòng 8 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 1,
      "color": "#00BFFF"
    },
    "awayTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 2,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T21:00:00+07:00",
    "stadium": "Coventry Building Society Arena",
    "city": "Coventry",
    "referee": "Darren England",
    "events": [
      {
        "id": "ev-267",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Haji Wright"
      },
      {
        "id": "ev-268",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Emile Smith Rowe"
      },
      {
        "id": "ev-269",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Raúl Jiménez"
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
        11
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
        584,
        616
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r8-liv-bha",
    "leagueId": "epl",
    "round": "Vòng 8 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 2,
      "color": "#C8102E"
    },
    "awayTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 1,
      "color": "#0057B8"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T21:00:00+07:00",
    "stadium": "Anfield",
    "city": "Liverpool",
    "referee": "Peter Bankes",
    "events": [
      {
        "id": "ev-270",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-272",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Kaoru Mitoma"
      },
      {
        "id": "ev-271",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Luis Díaz"
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        592
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r8-che-tot",
    "leagueId": "epl",
    "round": "Vòng 8 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 2,
      "color": "#034694"
    },
    "awayTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 1,
      "color": "#132257"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-24T23:30:00+07:00",
    "stadium": "Stamford Bridge",
    "city": "London",
    "referee": "Stuart Attwell",
    "events": [
      {
        "id": "ev-273",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-275",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-274",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Nicolas Jackson"
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
        2,
        1.1
      ],
      "fouls": [
        10,
        12
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        616,
        584
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r8-cry-new",
    "leagueId": "epl",
    "round": "Vòng 8 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 1,
      "color": "#1B458F"
    },
    "awayTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 2,
      "color": "#241F20"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-25T21:00:00+07:00",
    "stadium": "Selhurst Park",
    "city": "London",
    "referee": "Rob Jones",
    "events": [
      {
        "id": "ev-276",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Eberechi Eze"
      },
      {
        "id": "ev-277",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-278",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Anthony Gordon"
      }
    ],
    "stats": {
      "possession": [
        48,
        52
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
        608
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r8-hul-bre",
    "leagueId": "epl",
    "round": "Vòng 8 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 0,
      "color": "#FFA500"
    },
    "awayTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 2,
      "color": "#E30613"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-25T21:00:00+07:00",
    "stadium": "MKM Stadium",
    "city": "Hull",
    "referee": "Craig Pawson",
    "events": [
      {
        "id": "ev-279",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bryan Mbeumo"
      },
      {
        "id": "ev-280",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Yoane Wissa"
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
        0.4,
        1.9
      ],
      "fouls": [
        13,
        10
      ],
      "corners": [
        4,
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
        576,
        624
      ],
      "passAccuracy": [
        86,
        86
      ]
    }
  },
  {
    "id": "epl-r8-mun-bou",
    "leagueId": "epl",
    "round": "Vòng 8 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 3,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 1,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-25T21:00:00+07:00",
    "stadium": "Old Trafford",
    "city": "Manchester",
    "referee": "Chris Kavanagh",
    "events": [
      {
        "id": "ev-281",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-284",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Antoine Semenyo"
      },
      {
        "id": "ev-282",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Rasmus Højlund"
      },
      {
        "id": "ev-283",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Bruno Fernandes"
      }
    ],
    "stats": {
      "possession": [
        50,
        50
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
        2.8,
        1.1
      ],
      "fouls": [
        10,
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        600,
        600
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r8-sun-lee",
    "leagueId": "epl",
    "round": "Vòng 8 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 1,
      "color": "#EB172B"
    },
    "awayTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 1,
      "color": "#1D428A"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-25T23:30:00+07:00",
    "stadium": "Stadium of Light",
    "city": "Sunderland",
    "referee": "Michael Oliver",
    "events": [
      {
        "id": "ev-285",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Jack Clarke"
      },
      {
        "id": "ev-286",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Wilfried Gnonto"
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
        1.1
      ],
      "fouls": [
        11,
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
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        604,
        596
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r9-che-mun",
    "leagueId": "epl",
    "round": "Vòng 9 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 2,
      "color": "#034694"
    },
    "awayTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 2,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-31T19:30:00+07:00",
    "stadium": "Stamford Bridge",
    "city": "London",
    "referee": "Darren England",
    "events": [
      {
        "id": "ev-287",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-289",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-288",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Nicolas Jackson"
      },
      {
        "id": "ev-290",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Rasmus Højlund"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
      ],
      "shots": [
        10,
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
        10,
        13
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        616,
        584
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r9-bou-lee",
    "leagueId": "epl",
    "round": "Vòng 9 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 2,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 1,
      "color": "#1D428A"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-31T22:00:00+07:00",
    "stadium": "Vitality Stadium",
    "city": "Bournemouth",
    "referee": "Peter Bankes",
    "events": [
      {
        "id": "ev-291",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Antoine Semenyo"
      },
      {
        "id": "ev-293",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Wilfried Gnonto"
      },
      {
        "id": "ev-292",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Evanilson"
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
        624,
        576
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r9-bre-nfo",
    "leagueId": "epl",
    "round": "Vòng 9 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 2,
      "color": "#E30613"
    },
    "awayTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 0,
      "color": "#DD0000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-31T22:00:00+07:00",
    "stadium": "Gtech Community Stadium",
    "city": "Brentford",
    "referee": "Stuart Attwell",
    "events": [
      {
        "id": "ev-294",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bryan Mbeumo"
      },
      {
        "id": "ev-295",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Yoane Wissa"
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
        11,
        10
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        604,
        596
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r9-cov-sun",
    "leagueId": "epl",
    "round": "Vòng 9 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 1,
      "color": "#00BFFF"
    },
    "awayTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 1,
      "color": "#EB172B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-31T22:00:00+07:00",
    "stadium": "Coventry Building Society Arena",
    "city": "Coventry",
    "referee": "Rob Jones",
    "events": [
      {
        "id": "ev-296",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Haji Wright"
      },
      {
        "id": "ev-297",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Jack Clarke"
      }
    ],
    "stats": {
      "possession": [
        57,
        43
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
        10
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
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        572
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r9-hul-ips",
    "leagueId": "epl",
    "round": "Vòng 9 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 0,
      "color": "#FFA500"
    },
    "awayTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 1,
      "color": "#004B87"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-31T22:00:00+07:00",
    "stadium": "MKM Stadium",
    "city": "Hull",
    "referee": "Craig Pawson",
    "events": [
      {
        "id": "ev-298",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Liam Delap"
      }
    ],
    "stats": {
      "possession": [
        44,
        56
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
        0.4,
        1.1
      ],
      "fouls": [
        13,
        13
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        576,
        624
      ],
      "passAccuracy": [
        86,
        86
      ]
    }
  },
  {
    "id": "epl-r9-mci-bha",
    "leagueId": "epl",
    "round": "Vòng 9 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 3,
      "color": "#6CABDD"
    },
    "awayTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 1,
      "color": "#0057B8"
    },
    "status": "SCHEDULED",
    "startTime": "2026-10-31T22:00:00+07:00",
    "stadium": "Etihad Stadium",
    "city": "Manchester",
    "referee": "Chris Kavanagh",
    "events": [
      {
        "id": "ev-299",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-302",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Kaoru Mitoma"
      },
      {
        "id": "ev-300",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Phil Foden"
      },
      {
        "id": "ev-301",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Kevin De Bruyne"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
      ],
      "shots": [
        14,
        8
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
        13,
        13
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
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        604,
        596
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r9-tot-cry",
    "leagueId": "epl",
    "round": "Vòng 9 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 2,
      "color": "#132257"
    },
    "awayTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 1,
      "color": "#1B458F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-01T00:30:00+07:00",
    "stadium": "Tottenham Hotspur Stadium",
    "city": "London",
    "referee": "Michael Oliver",
    "events": [
      {
        "id": "ev-303",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-305",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Eberechi Eze"
      },
      {
        "id": "ev-304",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Dominic Solanke"
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
        1.1
      ],
      "fouls": [
        12,
        10
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        612,
        588
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r9-avl-ful",
    "leagueId": "epl",
    "round": "Vòng 9 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 2,
      "color": "#95BFE5"
    },
    "awayTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 1,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-01T03:00:00+07:00",
    "stadium": "Villa Park",
    "city": "Birmingham",
    "referee": "Anthony Taylor",
    "events": [
      {
        "id": "ev-306",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-308",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Emile Smith Rowe"
      },
      {
        "id": "ev-307",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Morgan Rogers"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
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
        2,
        1.1
      ],
      "fouls": [
        11,
        13
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
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        592
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r9-liv-ars",
    "leagueId": "epl",
    "round": "Vòng 9 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 2,
      "color": "#C8102E"
    },
    "awayTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 1,
      "color": "#EF0107"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-01T23:30:00+07:00",
    "stadium": "Anfield",
    "city": "Liverpool",
    "referee": "Simon Hooper",
    "events": [
      {
        "id": "ev-309",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-311",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-310",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Luis Díaz"
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
        608,
        592
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r9-new-eve",
    "leagueId": "epl",
    "round": "Vòng 9 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 2,
      "color": "#241F20"
    },
    "awayTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 0,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-03T03:00:00+07:00",
    "stadium": "St. James' Park",
    "city": "Newcastle",
    "referee": "Paul Tierney",
    "events": [
      {
        "id": "ev-312",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-313",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Anthony Gordon"
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
        0.3
      ],
      "fouls": [
        10,
        14
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
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        592
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r10-eve-cov",
    "leagueId": "epl",
    "round": "Vòng 10 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 2,
      "color": "#003399"
    },
    "awayTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 0,
      "color": "#00BFFF"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-07T03:00:00+07:00",
    "stadium": "Goodison Park",
    "city": "Liverpool",
    "referee": "Rob Jones",
    "events": [
      {
        "id": "ev-314",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Dominic Calvert-Lewin"
      },
      {
        "id": "ev-315",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Dwight McNeil"
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
        10,
        14
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r10-lee-tot",
    "leagueId": "epl",
    "round": "Vòng 10 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 1,
      "color": "#1D428A"
    },
    "awayTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 2,
      "color": "#132257"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-07T19:30:00+07:00",
    "stadium": "Elland Road",
    "city": "Leeds",
    "referee": "Craig Pawson",
    "events": [
      {
        "id": "ev-316",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Wilfried Gnonto"
      },
      {
        "id": "ev-317",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-318",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Dominic Solanke"
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
        1.2,
        1.9
      ],
      "fouls": [
        9,
        11
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
        592,
        608
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r10-ful-new",
    "leagueId": "epl",
    "round": "Vòng 10 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 1,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 2,
      "color": "#241F20"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-07T22:00:00+07:00",
    "stadium": "Craven Cottage",
    "city": "London",
    "referee": "Chris Kavanagh",
    "events": [
      {
        "id": "ev-319",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Emile Smith Rowe"
      },
      {
        "id": "ev-320",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-321",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Anthony Gordon"
      }
    ],
    "stats": {
      "possession": [
        49,
        51
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
        11
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        596,
        604
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r10-ars-hul",
    "leagueId": "epl",
    "round": "Vòng 10 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 4,
      "color": "#EF0107"
    },
    "awayTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 0,
      "color": "#FFA500"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-07T22:00:00+07:00",
    "stadium": "Emirates Stadium",
    "city": "London",
    "referee": "Michael Oliver",
    "events": [
      {
        "id": "ev-322",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-323",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Kai Havertz"
      },
      {
        "id": "ev-324",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Gabriel Martinelli"
      },
      {
        "id": "ev-325",
        "minute": 68,
        "type": "GOAL",
        "team": "home",
        "player": "Martin Ødegaard"
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
        3.6,
        0.3
      ],
      "fouls": [
        12,
        13
      ],
      "corners": [
        12,
        3
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
        628,
        572
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r10-nfo-mci",
    "leagueId": "epl",
    "round": "Vòng 10 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 1,
      "color": "#DD0000"
    },
    "awayTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 3,
      "color": "#6CABDD"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-08T00:30:00+07:00",
    "stadium": "City Ground",
    "city": "Nottingham",
    "referee": "Anthony Taylor",
    "events": [
      {
        "id": "ev-326",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Chris Wood"
      },
      {
        "id": "ev-327",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-328",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Phil Foden"
      },
      {
        "id": "ev-329",
        "minute": 61,
        "type": "GOAL",
        "team": "away",
        "player": "Kevin De Bruyne"
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
        2.7
      ],
      "fouls": [
        10,
        11
      ],
      "corners": [
        6,
        9
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
        588,
        612
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r10-ips-bou",
    "leagueId": "epl",
    "round": "Vòng 10 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 1,
      "color": "#004B87"
    },
    "awayTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 2,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-08T21:00:00+07:00",
    "stadium": "Portman Road",
    "city": "Ipswich",
    "referee": "Simon Hooper",
    "events": [
      {
        "id": "ev-330",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Liam Delap"
      },
      {
        "id": "ev-331",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Antoine Semenyo"
      },
      {
        "id": "ev-332",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Evanilson"
      }
    ],
    "stats": {
      "possession": [
        49,
        51
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
        12,
        14
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        596,
        604
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r10-sun-che",
    "leagueId": "epl",
    "round": "Vòng 10 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 0,
      "color": "#EB172B"
    },
    "awayTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 2,
      "color": "#034694"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-08T21:00:00+07:00",
    "stadium": "Stadium of Light",
    "city": "Sunderland",
    "referee": "Paul Tierney",
    "events": [
      {
        "id": "ev-333",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-334",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Nicolas Jackson"
      }
    ],
    "stats": {
      "possession": [
        47,
        53
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
        10,
        11
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
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        588,
        612
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r10-bha-bre",
    "leagueId": "epl",
    "round": "Vòng 10 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 2,
      "color": "#0057B8"
    },
    "awayTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 2,
      "color": "#E30613"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-08T21:00:00+07:00",
    "stadium": "Amex Stadium",
    "city": "Falmer",
    "referee": "Jarred Gillett",
    "events": [
      {
        "id": "ev-335",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Kaoru Mitoma"
      },
      {
        "id": "ev-337",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bryan Mbeumo"
      },
      {
        "id": "ev-336",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Danny Welbeck"
      },
      {
        "id": "ev-338",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Yoane Wissa"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
      ],
      "shots": [
        12,
        10
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
        11,
        10
      ],
      "corners": [
        8,
        7
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
        604,
        596
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r10-cry-liv",
    "leagueId": "epl",
    "round": "Vòng 10 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 1,
      "color": "#1B458F"
    },
    "awayTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 3,
      "color": "#C8102E"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-08T21:00:00+07:00",
    "stadium": "Selhurst Park",
    "city": "London",
    "referee": "Darren England",
    "events": [
      {
        "id": "ev-339",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Eberechi Eze"
      },
      {
        "id": "ev-340",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-341",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Luis Díaz"
      },
      {
        "id": "ev-342",
        "minute": 61,
        "type": "GOAL",
        "team": "away",
        "player": "Darwin Núñez"
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
        11
      ],
      "corners": [
        6,
        9
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
        584,
        616
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r10-mun-avl",
    "leagueId": "epl",
    "round": "Vòng 10 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 2,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 1,
      "color": "#95BFE5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-08T23:30:00+07:00",
    "stadium": "Old Trafford",
    "city": "Manchester",
    "referee": "Peter Bankes",
    "events": [
      {
        "id": "ev-343",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-345",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-344",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Rasmus Højlund"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
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
        8,
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
        604,
        596
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r11-mci-ful",
    "leagueId": "epl",
    "round": "Vòng 11 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 3,
      "color": "#6CABDD"
    },
    "awayTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 1,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T19:30:00+07:00",
    "stadium": "Etihad Stadium",
    "city": "Manchester",
    "referee": "Michael Oliver",
    "events": [
      {
        "id": "ev-346",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-349",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Emile Smith Rowe"
      },
      {
        "id": "ev-347",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Phil Foden"
      },
      {
        "id": "ev-348",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Kevin De Bruyne"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
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
        10,
        11
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
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        592
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r11-bou-nfo",
    "leagueId": "epl",
    "round": "Vòng 11 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 2,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 1,
      "color": "#DD0000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T22:00:00+07:00",
    "stadium": "Vitality Stadium",
    "city": "Bournemouth",
    "referee": "Anthony Taylor",
    "events": [
      {
        "id": "ev-350",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Antoine Semenyo"
      },
      {
        "id": "ev-352",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Chris Wood"
      },
      {
        "id": "ev-351",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Evanilson"
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
        2,
        1.1
      ],
      "fouls": [
        11,
        11
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
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r11-cov-cry",
    "leagueId": "epl",
    "round": "Vòng 11 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 1,
      "color": "#00BFFF"
    },
    "awayTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 2,
      "color": "#1B458F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T22:00:00+07:00",
    "stadium": "Coventry Building Society Arena",
    "city": "Coventry",
    "referee": "Simon Hooper",
    "events": [
      {
        "id": "ev-353",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Haji Wright"
      },
      {
        "id": "ev-354",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Eberechi Eze"
      },
      {
        "id": "ev-355",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Jean-Philippe Mateta"
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
        13
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        572,
        628
      ],
      "passAccuracy": [
        86,
        86
      ]
    }
  },
  {
    "id": "epl-r11-tot-ips",
    "leagueId": "epl",
    "round": "Vòng 11 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 3,
      "color": "#132257"
    },
    "awayTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 1,
      "color": "#004B87"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T22:00:00+07:00",
    "stadium": "Tottenham Hotspur Stadium",
    "city": "London",
    "referee": "Paul Tierney",
    "events": [
      {
        "id": "ev-356",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-359",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Liam Delap"
      },
      {
        "id": "ev-357",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Dominic Solanke"
      },
      {
        "id": "ev-358",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Brennan Johnson"
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
        1.1
      ],
      "fouls": [
        13,
        10
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        592
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r11-che-lee",
    "leagueId": "epl",
    "round": "Vòng 11 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 3,
      "color": "#034694"
    },
    "awayTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 0,
      "color": "#1D428A"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T22:00:00+07:00",
    "stadium": "Stamford Bridge",
    "city": "London",
    "referee": "Jarred Gillett",
    "events": [
      {
        "id": "ev-360",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-361",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Nicolas Jackson"
      },
      {
        "id": "ev-362",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Christopher Nkunku"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
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
        13,
        10
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
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        616,
        584
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r11-avl-sun",
    "leagueId": "epl",
    "round": "Vòng 11 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 2,
      "color": "#95BFE5"
    },
    "awayTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 0,
      "color": "#EB172B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-21T22:00:00+07:00",
    "stadium": "Villa Park",
    "city": "Birmingham",
    "referee": "Darren England",
    "events": [
      {
        "id": "ev-363",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-364",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Morgan Rogers"
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
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        572
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r11-new-ars",
    "leagueId": "epl",
    "round": "Vòng 11 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 1,
      "color": "#241F20"
    },
    "awayTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 2,
      "color": "#EF0107"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-22T00:30:00+07:00",
    "stadium": "St. James' Park",
    "city": "Newcastle",
    "referee": "Peter Bankes",
    "events": [
      {
        "id": "ev-365",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-366",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-367",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Kai Havertz"
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
        9,
        10
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        576,
        624
      ],
      "passAccuracy": [
        86,
        86
      ]
    }
  },
  {
    "id": "epl-r11-hul-bha",
    "leagueId": "epl",
    "round": "Vòng 11 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 1,
      "color": "#FFA500"
    },
    "awayTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 3,
      "color": "#0057B8"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-22T21:00:00+07:00",
    "stadium": "MKM Stadium",
    "city": "Hull",
    "referee": "Stuart Attwell",
    "events": [
      {
        "id": "ev-368",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Chris Bedia"
      },
      {
        "id": "ev-369",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Kaoru Mitoma"
      },
      {
        "id": "ev-370",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Danny Welbeck"
      },
      {
        "id": "ev-371",
        "minute": 61,
        "type": "GOAL",
        "team": "away",
        "player": "João Pedro"
      }
    ],
    "stats": {
      "possession": [
        49,
        51
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
        11,
        13
      ],
      "corners": [
        6,
        9
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
        596,
        604
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r11-liv-mun",
    "leagueId": "epl",
    "round": "Vòng 11 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 3,
      "color": "#C8102E"
    },
    "awayTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 1,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-22T23:30:00+07:00",
    "stadium": "Anfield",
    "city": "Liverpool",
    "referee": "Rob Jones",
    "events": [
      {
        "id": "ev-372",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-375",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-373",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Luis Díaz"
      },
      {
        "id": "ev-374",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Darwin Núñez"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
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
        13,
        11
      ],
      "corners": [
        10,
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
        604,
        596
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r11-bre-eve",
    "leagueId": "epl",
    "round": "Vòng 11 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 1,
      "color": "#E30613"
    },
    "awayTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 1,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-24T03:00:00+07:00",
    "stadium": "Gtech Community Stadium",
    "city": "Brentford",
    "referee": "Craig Pawson",
    "events": [
      {
        "id": "ev-376",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bryan Mbeumo"
      },
      {
        "id": "ev-377",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Dominic Calvert-Lewin"
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
        10,
        10
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
        628,
        572
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r12-nfo-che",
    "leagueId": "epl",
    "round": "Vòng 12 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 1,
      "color": "#DD0000"
    },
    "awayTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 2,
      "color": "#034694"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-28T03:00:00+07:00",
    "stadium": "City Ground",
    "city": "Nottingham",
    "referee": "Paul Tierney",
    "events": [
      {
        "id": "ev-378",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Chris Wood"
      },
      {
        "id": "ev-379",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-380",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Nicolas Jackson"
      }
    ],
    "stats": {
      "possession": [
        47,
        53
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
        12,
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
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        588,
        612
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r12-mun-bre",
    "leagueId": "epl",
    "round": "Vòng 12 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 2,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 1,
      "color": "#E30613"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-28T22:00:00+07:00",
    "stadium": "Old Trafford",
    "city": "Manchester",
    "referee": "Jarred Gillett",
    "events": [
      {
        "id": "ev-381",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-383",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bryan Mbeumo"
      },
      {
        "id": "ev-382",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Rasmus Højlund"
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
        12,
        10
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        572
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r12-lee-cov",
    "leagueId": "epl",
    "round": "Vòng 12 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 2,
      "color": "#1D428A"
    },
    "awayTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 0,
      "color": "#00BFFF"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-28T22:00:00+07:00",
    "stadium": "Elland Road",
    "city": "Leeds",
    "referee": "Darren England",
    "events": [
      {
        "id": "ev-384",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Wilfried Gnonto"
      },
      {
        "id": "ev-385",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Joël Piroe"
      }
    ],
    "stats": {
      "possession": [
        50,
        50
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        600,
        600
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r12-ips-avl",
    "leagueId": "epl",
    "round": "Vòng 12 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 1,
      "color": "#004B87"
    },
    "awayTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 2,
      "color": "#95BFE5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-29T00:30:00+07:00",
    "stadium": "Portman Road",
    "city": "Ipswich",
    "referee": "Peter Bankes",
    "events": [
      {
        "id": "ev-386",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Liam Delap"
      },
      {
        "id": "ev-387",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-388",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Morgan Rogers"
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
        10,
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
        580,
        620
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r12-eve-liv",
    "leagueId": "epl",
    "round": "Vòng 12 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 0,
      "color": "#003399"
    },
    "awayTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 2,
      "color": "#C8102E"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-29T19:00:00+07:00",
    "stadium": "Goodison Park",
    "city": "Liverpool",
    "referee": "Stuart Attwell",
    "events": [
      {
        "id": "ev-389",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-390",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Luis Díaz"
      }
    ],
    "stats": {
      "possession": [
        48,
        52
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
        1.9
      ],
      "fouls": [
        9,
        14
      ],
      "corners": [
        4,
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
        592,
        608
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r12-bha-new",
    "leagueId": "epl",
    "round": "Vòng 12 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 1,
      "color": "#0057B8"
    },
    "awayTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 2,
      "color": "#241F20"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-29T21:05:00+07:00",
    "stadium": "Amex Stadium",
    "city": "Falmer",
    "referee": "Rob Jones",
    "events": [
      {
        "id": "ev-391",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Kaoru Mitoma"
      },
      {
        "id": "ev-392",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-393",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Anthony Gordon"
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        584,
        616
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r12-ful-bou",
    "leagueId": "epl",
    "round": "Vòng 12 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 1,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 1,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-29T21:05:00+07:00",
    "stadium": "Craven Cottage",
    "city": "London",
    "referee": "Craig Pawson",
    "events": [
      {
        "id": "ev-394",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Emile Smith Rowe"
      },
      {
        "id": "ev-395",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Antoine Semenyo"
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
        1.2,
        1.1
      ],
      "fouls": [
        10,
        10
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
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r12-sun-tot",
    "leagueId": "epl",
    "round": "Vòng 12 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 1,
      "color": "#EB172B"
    },
    "awayTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 3,
      "color": "#132257"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-29T21:05:00+07:00",
    "stadium": "Stadium of Light",
    "city": "Sunderland",
    "referee": "Chris Kavanagh",
    "events": [
      {
        "id": "ev-396",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Jack Clarke"
      },
      {
        "id": "ev-397",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-398",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Dominic Solanke"
      },
      {
        "id": "ev-399",
        "minute": 61,
        "type": "GOAL",
        "team": "away",
        "player": "Brennan Johnson"
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
        2.7
      ],
      "fouls": [
        12,
        14
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
        588,
        612
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r12-cry-hul",
    "leagueId": "epl",
    "round": "Vòng 12 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 2,
      "color": "#1B458F"
    },
    "awayTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 0,
      "color": "#FFA500"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-29T21:05:00+07:00",
    "stadium": "Selhurst Park",
    "city": "London",
    "referee": "Michael Oliver",
    "events": [
      {
        "id": "ev-400",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Eberechi Eze"
      },
      {
        "id": "ev-401",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Jean-Philippe Mateta"
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
        11,
        14
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        616,
        584
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r12-ars-mci",
    "leagueId": "epl",
    "round": "Vòng 12 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 2,
      "color": "#EF0107"
    },
    "awayTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 2,
      "color": "#6CABDD"
    },
    "status": "SCHEDULED",
    "startTime": "2026-11-29T23:30:00+07:00",
    "stadium": "Emirates Stadium",
    "city": "London",
    "referee": "Anthony Taylor",
    "events": [
      {
        "id": "ev-402",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-404",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-403",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Kai Havertz"
      },
      {
        "id": "ev-405",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Phil Foden"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
      ],
      "shots": [
        11,
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
        12,
        14
      ],
      "corners": [
        8,
        7
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
        624,
        576
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r13-bre-ars",
    "leagueId": "epl",
    "round": "Vòng 13 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 1,
      "color": "#E30613"
    },
    "awayTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 2,
      "color": "#EF0107"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-02T02:30:00+07:00",
    "stadium": "Gtech Community Stadium",
    "city": "Brentford",
    "referee": "Peter Bankes",
    "events": [
      {
        "id": "ev-406",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bryan Mbeumo"
      },
      {
        "id": "ev-407",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-408",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Kai Havertz"
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
        12,
        10
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
        612
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r13-che-cry",
    "leagueId": "epl",
    "round": "Vòng 13 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 2,
      "color": "#034694"
    },
    "awayTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 0,
      "color": "#1B458F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-02T02:30:00+07:00",
    "stadium": "Stamford Bridge",
    "city": "London",
    "referee": "Stuart Attwell",
    "events": [
      {
        "id": "ev-409",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-410",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Nicolas Jackson"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
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
        10,
        11
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        592
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r13-new-mun",
    "leagueId": "epl",
    "round": "Vòng 13 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 2,
      "color": "#241F20"
    },
    "awayTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 1,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-02T03:15:00+07:00",
    "stadium": "St. James' Park",
    "city": "Newcastle",
    "referee": "Rob Jones",
    "events": [
      {
        "id": "ev-411",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-413",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-412",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Anthony Gordon"
      }
    ],
    "stats": {
      "possession": [
        50,
        50
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
        1.1
      ],
      "fouls": [
        12,
        10
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
        600,
        600
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r13-bou-eve",
    "leagueId": "epl",
    "round": "Vòng 13 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 2,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 1,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-03T02:30:00+07:00",
    "stadium": "Vitality Stadium",
    "city": "Bournemouth",
    "referee": "Craig Pawson",
    "events": [
      {
        "id": "ev-414",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Antoine Semenyo"
      },
      {
        "id": "ev-416",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Dominic Calvert-Lewin"
      },
      {
        "id": "ev-415",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Evanilson"
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
        10,
        10
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
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        612,
        588
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r13-ful-mci",
    "leagueId": "epl",
    "round": "Vòng 13 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 0,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 3,
      "color": "#6CABDD"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-03T02:30:00+07:00",
    "stadium": "Craven Cottage",
    "city": "London",
    "referee": "Chris Kavanagh",
    "events": [
      {
        "id": "ev-417",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-418",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Phil Foden"
      },
      {
        "id": "ev-419",
        "minute": 61,
        "type": "GOAL",
        "team": "away",
        "player": "Kevin De Bruyne"
      }
    ],
    "stats": {
      "possession": [
        46,
        54
      ],
      "shots": [
        8,
        13
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
        10,
        14
      ],
      "corners": [
        4,
        9
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
        584,
        616
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r13-ips-cov",
    "leagueId": "epl",
    "round": "Vòng 13 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 1,
      "color": "#004B87"
    },
    "awayTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 1,
      "color": "#00BFFF"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-03T02:30:00+07:00",
    "stadium": "Portman Road",
    "city": "Ipswich",
    "referee": "Michael Oliver",
    "events": [
      {
        "id": "ev-420",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Liam Delap"
      },
      {
        "id": "ev-421",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Haji Wright"
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
        604,
        596
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r13-lee-bha",
    "leagueId": "epl",
    "round": "Vòng 13 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 1,
      "color": "#1D428A"
    },
    "awayTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 2,
      "color": "#0057B8"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-03T02:30:00+07:00",
    "stadium": "Elland Road",
    "city": "Leeds",
    "referee": "Anthony Taylor",
    "events": [
      {
        "id": "ev-422",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Wilfried Gnonto"
      },
      {
        "id": "ev-423",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Kaoru Mitoma"
      },
      {
        "id": "ev-424",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Danny Welbeck"
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
        9,
        12
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
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        568,
        632
      ],
      "passAccuracy": [
        86,
        86
      ]
    }
  },
  {
    "id": "epl-r13-avl-nfo",
    "leagueId": "epl",
    "round": "Vòng 13 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 2,
      "color": "#95BFE5"
    },
    "awayTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 1,
      "color": "#DD0000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-03T03:00:00+07:00",
    "stadium": "Villa Park",
    "city": "Birmingham",
    "referee": "Simon Hooper",
    "events": [
      {
        "id": "ev-425",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-427",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Chris Wood"
      },
      {
        "id": "ev-426",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Morgan Rogers"
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
        9,
        12
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        576
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r13-tot-hul",
    "leagueId": "epl",
    "round": "Vòng 13 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 3,
      "color": "#132257"
    },
    "awayTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 0,
      "color": "#FFA500"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-03T03:00:00+07:00",
    "stadium": "Tottenham Hotspur Stadium",
    "city": "London",
    "referee": "Paul Tierney",
    "events": [
      {
        "id": "ev-428",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-429",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Dominic Solanke"
      },
      {
        "id": "ev-430",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Brennan Johnson"
      }
    ],
    "stats": {
      "possession": [
        50,
        50
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
        10,
        13
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
        600,
        600
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r13-liv-sun",
    "leagueId": "epl",
    "round": "Vòng 13 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 3,
      "color": "#C8102E"
    },
    "awayTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 0,
      "color": "#EB172B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-03T03:15:00+07:00",
    "stadium": "Anfield",
    "city": "Liverpool",
    "referee": "Jarred Gillett",
    "events": [
      {
        "id": "ev-431",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-432",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Luis Díaz"
      },
      {
        "id": "ev-433",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Darwin Núñez"
      }
    ],
    "stats": {
      "possession": [
        56,
        44
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
        11,
        13
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        576
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r14-tot-ars",
    "leagueId": "epl",
    "round": "Vòng 14 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 1,
      "color": "#132257"
    },
    "awayTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 2,
      "color": "#EF0107"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T19:30:00+07:00",
    "stadium": "Tottenham Hotspur Stadium",
    "city": "London",
    "referee": "Craig Pawson",
    "events": [
      {
        "id": "ev-434",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-435",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-436",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Kai Havertz"
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
        9,
        10
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        584,
        616
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r14-bre-mci",
    "leagueId": "epl",
    "round": "Vòng 14 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 1,
      "color": "#E30613"
    },
    "awayTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 3,
      "color": "#6CABDD"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T22:00:00+07:00",
    "stadium": "Gtech Community Stadium",
    "city": "Brentford",
    "referee": "Chris Kavanagh",
    "events": [
      {
        "id": "ev-437",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bryan Mbeumo"
      },
      {
        "id": "ev-438",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-439",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Phil Foden"
      },
      {
        "id": "ev-440",
        "minute": 61,
        "type": "GOAL",
        "team": "away",
        "player": "Kevin De Bruyne"
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
        9,
        13
      ],
      "corners": [
        6,
        9
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
        580,
        620
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r14-mun-ful",
    "leagueId": "epl",
    "round": "Vòng 14 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 2,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 0,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T22:00:00+07:00",
    "stadium": "Old Trafford",
    "city": "Manchester",
    "referee": "Michael Oliver",
    "events": [
      {
        "id": "ev-441",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-442",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Rasmus Højlund"
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
        12,
        10
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
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        592
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r14-avl-cry",
    "leagueId": "epl",
    "round": "Vòng 14 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 2,
      "color": "#95BFE5"
    },
    "awayTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 1,
      "color": "#1B458F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T22:00:00+07:00",
    "stadium": "Villa Park",
    "city": "Birmingham",
    "referee": "Anthony Taylor",
    "events": [
      {
        "id": "ev-443",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-445",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Eberechi Eze"
      },
      {
        "id": "ev-444",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Morgan Rogers"
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
        1.1
      ],
      "fouls": [
        12,
        10
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        572
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r14-eve-nfo",
    "leagueId": "epl",
    "round": "Vòng 14 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 1,
      "color": "#003399"
    },
    "awayTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 1,
      "color": "#DD0000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T22:00:00+07:00",
    "stadium": "Goodison Park",
    "city": "Liverpool",
    "referee": "Simon Hooper",
    "events": [
      {
        "id": "ev-446",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Dominic Calvert-Lewin"
      },
      {
        "id": "ev-447",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Chris Wood"
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
        12,
        12
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        612,
        588
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r14-bha-ips",
    "leagueId": "epl",
    "round": "Vòng 14 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 2,
      "color": "#0057B8"
    },
    "awayTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 0,
      "color": "#004B87"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-05T22:00:00+07:00",
    "stadium": "Amex Stadium",
    "city": "Falmer",
    "referee": "Paul Tierney",
    "events": [
      {
        "id": "ev-448",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Kaoru Mitoma"
      },
      {
        "id": "ev-449",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Danny Welbeck"
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
        13,
        12
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        612,
        588
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r14-new-bou",
    "leagueId": "epl",
    "round": "Vòng 14 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 2,
      "color": "#241F20"
    },
    "awayTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 1,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-06T00:30:00+07:00",
    "stadium": "St. James' Park",
    "city": "Newcastle",
    "referee": "Jarred Gillett",
    "events": [
      {
        "id": "ev-450",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-452",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Antoine Semenyo"
      },
      {
        "id": "ev-451",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Anthony Gordon"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
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
        11,
        11
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
        616,
        584
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r14-sun-hul",
    "leagueId": "epl",
    "round": "Vòng 14 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 2,
      "color": "#EB172B"
    },
    "awayTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 1,
      "color": "#FFA500"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-06T21:00:00+07:00",
    "stadium": "Stadium of Light",
    "city": "Sunderland",
    "referee": "Darren England",
    "events": [
      {
        "id": "ev-453",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Jack Clarke"
      },
      {
        "id": "ev-455",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Chris Bedia"
      },
      {
        "id": "ev-454",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Jobe Bellingham"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
      ],
      "shots": [
        9,
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
        13
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
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r14-cov-lee",
    "leagueId": "epl",
    "round": "Vòng 14 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 1,
      "color": "#00BFFF"
    },
    "awayTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 2,
      "color": "#1D428A"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-06T21:00:00+07:00",
    "stadium": "Coventry Building Society Arena",
    "city": "Coventry",
    "referee": "Peter Bankes",
    "events": [
      {
        "id": "ev-456",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Haji Wright"
      },
      {
        "id": "ev-457",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Wilfried Gnonto"
      },
      {
        "id": "ev-458",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Joël Piroe"
      }
    ],
    "stats": {
      "possession": [
        49,
        51
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
        10,
        10
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        596,
        604
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r14-che-liv",
    "leagueId": "epl",
    "round": "Vòng 14 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 2,
      "color": "#034694"
    },
    "awayTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 2,
      "color": "#C8102E"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-06T23:30:00+07:00",
    "stadium": "Stamford Bridge",
    "city": "London",
    "referee": "Stuart Attwell",
    "events": [
      {
        "id": "ev-459",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-461",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-460",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Nicolas Jackson"
      },
      {
        "id": "ev-462",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Luis Díaz"
      }
    ],
    "stats": {
      "possession": [
        52,
        48
      ],
      "shots": [
        11,
        11
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
        10,
        10
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        592
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r15-mci-che",
    "leagueId": "epl",
    "round": "Vòng 15 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 2,
      "color": "#6CABDD"
    },
    "awayTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 1,
      "color": "#034694"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T19:30:00+07:00",
    "stadium": "Etihad Stadium",
    "city": "Manchester",
    "referee": "Anthony Taylor",
    "events": [
      {
        "id": "ev-463",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-465",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-464",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Phil Foden"
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        628,
        572
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r15-ars-bou",
    "leagueId": "epl",
    "round": "Vòng 15 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 3,
      "color": "#EF0107"
    },
    "awayTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 0,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T22:00:00+07:00",
    "stadium": "Emirates Stadium",
    "city": "London",
    "referee": "Simon Hooper",
    "events": [
      {
        "id": "ev-466",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-467",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Kai Havertz"
      },
      {
        "id": "ev-468",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Gabriel Martinelli"
      }
    ],
    "stats": {
      "possession": [
        54,
        46
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
        9,
        14
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        616,
        584
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r15-cry-mun",
    "leagueId": "epl",
    "round": "Vòng 15 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 1,
      "color": "#1B458F"
    },
    "awayTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 2,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T22:00:00+07:00",
    "stadium": "Selhurst Park",
    "city": "London",
    "referee": "Paul Tierney",
    "events": [
      {
        "id": "ev-469",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Eberechi Eze"
      },
      {
        "id": "ev-470",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-471",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Rasmus Højlund"
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
        9,
        10
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
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        572,
        628
      ],
      "passAccuracy": [
        86,
        86
      ]
    }
  },
  {
    "id": "epl-r15-nfo-new",
    "leagueId": "epl",
    "round": "Vòng 15 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 1,
      "color": "#DD0000"
    },
    "awayTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 2,
      "color": "#241F20"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T22:00:00+07:00",
    "stadium": "City Ground",
    "city": "Nottingham",
    "referee": "Jarred Gillett",
    "events": [
      {
        "id": "ev-472",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Chris Wood"
      },
      {
        "id": "ev-473",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-474",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Anthony Gordon"
      }
    ],
    "stats": {
      "possession": [
        48,
        52
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
        12
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        592,
        608
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r15-ful-bha",
    "leagueId": "epl",
    "round": "Vòng 15 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 1,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 1,
      "color": "#0057B8"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T22:00:00+07:00",
    "stadium": "Craven Cottage",
    "city": "London",
    "referee": "Darren England",
    "events": [
      {
        "id": "ev-475",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Emile Smith Rowe"
      },
      {
        "id": "ev-476",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Kaoru Mitoma"
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
        1.1
      ],
      "fouls": [
        9,
        13
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
        604,
        596
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r15-hul-cov",
    "leagueId": "epl",
    "round": "Vòng 15 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 1,
      "color": "#FFA500"
    },
    "awayTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 1,
      "color": "#00BFFF"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-12T22:00:00+07:00",
    "stadium": "MKM Stadium",
    "city": "Hull",
    "referee": "Peter Bankes",
    "events": [
      {
        "id": "ev-477",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Chris Bedia"
      },
      {
        "id": "ev-478",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Haji Wright"
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
        14
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        616,
        584
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r15-tot-avl",
    "leagueId": "epl",
    "round": "Vòng 15 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 2,
      "color": "#132257"
    },
    "awayTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 2,
      "color": "#95BFE5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-13T00:30:00+07:00",
    "stadium": "Tottenham Hotspur Stadium",
    "city": "London",
    "referee": "Stuart Attwell",
    "events": [
      {
        "id": "ev-479",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-481",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-480",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Dominic Solanke"
      },
      {
        "id": "ev-482",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Morgan Rogers"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
      ],
      "shots": [
        12,
        11
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
        11,
        10
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
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r15-ips-sun",
    "leagueId": "epl",
    "round": "Vòng 15 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 2,
      "color": "#004B87"
    },
    "awayTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 1,
      "color": "#EB172B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-13T21:00:00+07:00",
    "stadium": "Portman Road",
    "city": "Ipswich",
    "referee": "Rob Jones",
    "events": [
      {
        "id": "ev-483",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Liam Delap"
      },
      {
        "id": "ev-485",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Jack Clarke"
      },
      {
        "id": "ev-484",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Sammie Szmodics"
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
        12,
        10
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        612,
        588
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r15-lee-bre",
    "leagueId": "epl",
    "round": "Vòng 15 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 1,
      "color": "#1D428A"
    },
    "awayTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 1,
      "color": "#E30613"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-13T21:00:00+07:00",
    "stadium": "Elland Road",
    "city": "Leeds",
    "referee": "Craig Pawson",
    "events": [
      {
        "id": "ev-486",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Wilfried Gnonto"
      },
      {
        "id": "ev-487",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bryan Mbeumo"
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
        11
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        576
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r15-liv-eve",
    "leagueId": "epl",
    "round": "Vòng 15 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 3,
      "color": "#C8102E"
    },
    "awayTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 1,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-13T23:30:00+07:00",
    "stadium": "Anfield",
    "city": "Liverpool",
    "referee": "Chris Kavanagh",
    "events": [
      {
        "id": "ev-488",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-491",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Dominic Calvert-Lewin"
      },
      {
        "id": "ev-489",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Luis Díaz"
      },
      {
        "id": "ev-490",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Darwin Núñez"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
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
        10,
        12
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        604,
        596
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r16-che-avl",
    "leagueId": "epl",
    "round": "Vòng 16 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 2,
      "color": "#034694"
    },
    "awayTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 1,
      "color": "#95BFE5"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T19:30:00+07:00",
    "stadium": "Stamford Bridge",
    "city": "London",
    "referee": "Jarred Gillett",
    "events": [
      {
        "id": "ev-492",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-494",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-493",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Nicolas Jackson"
      }
    ],
    "stats": {
      "possession": [
        50,
        50
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
        600,
        600
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r16-mci-cry",
    "leagueId": "epl",
    "round": "Vòng 16 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 3,
      "color": "#6CABDD"
    },
    "awayTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 0,
      "color": "#1B458F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T22:00:00+07:00",
    "stadium": "Etihad Stadium",
    "city": "Manchester",
    "referee": "Darren England",
    "events": [
      {
        "id": "ev-495",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-496",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Phil Foden"
      },
      {
        "id": "ev-497",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Kevin De Bruyne"
      }
    ],
    "stats": {
      "possession": [
        50,
        50
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
        10,
        13
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
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        600,
        600
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r16-new-lee",
    "leagueId": "epl",
    "round": "Vòng 16 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 3,
      "color": "#241F20"
    },
    "awayTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 1,
      "color": "#1D428A"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T22:00:00+07:00",
    "stadium": "St. James' Park",
    "city": "Newcastle",
    "referee": "Peter Bankes",
    "events": [
      {
        "id": "ev-498",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-501",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Wilfried Gnonto"
      },
      {
        "id": "ev-499",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Anthony Gordon"
      },
      {
        "id": "ev-500",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Harvey Barnes"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
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
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r16-eve-ips",
    "leagueId": "epl",
    "round": "Vòng 16 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 2,
      "color": "#003399"
    },
    "awayTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 1,
      "color": "#004B87"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T22:00:00+07:00",
    "stadium": "Goodison Park",
    "city": "Liverpool",
    "referee": "Stuart Attwell",
    "events": [
      {
        "id": "ev-502",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Dominic Calvert-Lewin"
      },
      {
        "id": "ev-504",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Liam Delap"
      },
      {
        "id": "ev-503",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Dwight McNeil"
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
        628,
        572
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r16-bha-nfo",
    "leagueId": "epl",
    "round": "Vòng 16 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 2,
      "color": "#0057B8"
    },
    "awayTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 1,
      "color": "#DD0000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T22:00:00+07:00",
    "stadium": "Amex Stadium",
    "city": "Falmer",
    "referee": "Rob Jones",
    "events": [
      {
        "id": "ev-505",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Kaoru Mitoma"
      },
      {
        "id": "ev-507",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Chris Wood"
      },
      {
        "id": "ev-506",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Danny Welbeck"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
      ],
      "shots": [
        9,
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
        9,
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        612,
        588
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r16-bre-ful",
    "leagueId": "epl",
    "round": "Vòng 16 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 1,
      "color": "#E30613"
    },
    "awayTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 1,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-19T22:00:00+07:00",
    "stadium": "Gtech Community Stadium",
    "city": "Brentford",
    "referee": "Craig Pawson",
    "events": [
      {
        "id": "ev-508",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bryan Mbeumo"
      },
      {
        "id": "ev-509",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Emile Smith Rowe"
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
        11,
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
        616,
        584
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r16-liv-tot",
    "leagueId": "epl",
    "round": "Vòng 16 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 2,
      "color": "#C8102E"
    },
    "awayTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 1,
      "color": "#132257"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-20T00:30:00+07:00",
    "stadium": "Anfield",
    "city": "Liverpool",
    "referee": "Chris Kavanagh",
    "events": [
      {
        "id": "ev-510",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-512",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-511",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Luis Díaz"
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
        2,
        1.1
      ],
      "fouls": [
        10,
        11
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
        608,
        592
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r16-bou-hul",
    "leagueId": "epl",
    "round": "Vòng 16 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 3,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 0,
      "color": "#FFA500"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-20T21:00:00+07:00",
    "stadium": "Vitality Stadium",
    "city": "Bournemouth",
    "referee": "Michael Oliver",
    "events": [
      {
        "id": "ev-513",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Antoine Semenyo"
      },
      {
        "id": "ev-514",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Evanilson"
      },
      {
        "id": "ev-515",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Justin Kluivert"
      }
    ],
    "stats": {
      "possession": [
        55,
        45
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
        12,
        13
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
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r16-sun-cov",
    "leagueId": "epl",
    "round": "Vòng 16 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 1,
      "color": "#EB172B"
    },
    "awayTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 1,
      "color": "#00BFFF"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-20T21:00:00+07:00",
    "stadium": "Stadium of Light",
    "city": "Sunderland",
    "referee": "Anthony Taylor",
    "events": [
      {
        "id": "ev-516",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Jack Clarke"
      },
      {
        "id": "ev-517",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Haji Wright"
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
        13,
        10
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        616,
        584
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r16-ars-mun",
    "leagueId": "epl",
    "round": "Vòng 16 Ngoại Hạng Anh",
    "homeTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 2,
      "color": "#EF0107"
    },
    "awayTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 1,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-20T23:30:00+07:00",
    "stadium": "Emirates Stadium",
    "city": "London",
    "referee": "Simon Hooper",
    "events": [
      {
        "id": "ev-518",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-520",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-519",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Kai Havertz"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        612,
        588
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r17-new-mci",
    "leagueId": "epl",
    "round": "Vòng 17 Ngoại Hạng Anh - Boxing Day",
    "homeTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 2,
      "color": "#241F20"
    },
    "awayTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 2,
      "color": "#6CABDD"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-26T19:30:00+07:00",
    "stadium": "St. James' Park",
    "city": "Newcastle",
    "referee": "Stuart Attwell",
    "events": [
      {
        "id": "ev-521",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-523",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-522",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Anthony Gordon"
      },
      {
        "id": "ev-524",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Phil Foden"
      }
    ],
    "stats": {
      "possession": [
        51,
        49
      ],
      "shots": [
        10,
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
        11,
        12
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
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        604,
        596
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r17-cry-ars",
    "leagueId": "epl",
    "round": "Vòng 17 Ngoại Hạng Anh - Boxing Day",
    "homeTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 1,
      "color": "#1B458F"
    },
    "awayTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 2,
      "color": "#EF0107"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-26T22:00:00+07:00",
    "stadium": "Selhurst Park",
    "city": "London",
    "referee": "Rob Jones",
    "events": [
      {
        "id": "ev-525",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Eberechi Eze"
      },
      {
        "id": "ev-526",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-527",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Kai Havertz"
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
        1.2,
        1.9
      ],
      "fouls": [
        10,
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        580,
        620
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r17-cov-che",
    "leagueId": "epl",
    "round": "Vòng 17 Ngoại Hạng Anh - Boxing Day",
    "homeTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 0,
      "color": "#00BFFF"
    },
    "awayTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 3,
      "color": "#034694"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-26T22:00:00+07:00",
    "stadium": "Coventry Building Society Arena",
    "city": "Coventry",
    "referee": "Craig Pawson",
    "events": [
      {
        "id": "ev-528",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-529",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Nicolas Jackson"
      },
      {
        "id": "ev-530",
        "minute": 61,
        "type": "GOAL",
        "team": "away",
        "player": "Christopher Nkunku"
      }
    ],
    "stats": {
      "possession": [
        45,
        55
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
        10
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        580,
        620
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r17-mun-sun",
    "leagueId": "epl",
    "round": "Vòng 17 Ngoại Hạng Anh - Boxing Day",
    "homeTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 3,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 0,
      "color": "#EB172B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-26T22:00:00+07:00",
    "stadium": "Old Trafford",
    "city": "Manchester",
    "referee": "Chris Kavanagh",
    "events": [
      {
        "id": "ev-531",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-532",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Rasmus Højlund"
      },
      {
        "id": "ev-533",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Bruno Fernandes"
      }
    ],
    "stats": {
      "possession": [
        50,
        50
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
        0.3
      ],
      "fouls": [
        9,
        13
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        600,
        600
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r17-avl-bre",
    "leagueId": "epl",
    "round": "Vòng 17 Ngoại Hạng Anh - Boxing Day",
    "homeTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 2,
      "color": "#95BFE5"
    },
    "awayTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 1,
      "color": "#E30613"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-26T22:00:00+07:00",
    "stadium": "Villa Park",
    "city": "Birmingham",
    "referee": "Michael Oliver",
    "events": [
      {
        "id": "ev-534",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-536",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bryan Mbeumo"
      },
      {
        "id": "ev-535",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Morgan Rogers"
      }
    ],
    "stats": {
      "possession": [
        50,
        50
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
        11
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
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        600,
        600
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r17-nfo-ful",
    "leagueId": "epl",
    "round": "Vòng 17 Ngoại Hạng Anh - Boxing Day",
    "homeTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 1,
      "color": "#DD0000"
    },
    "awayTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 1,
      "color": "#000000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-26T22:00:00+07:00",
    "stadium": "City Ground",
    "city": "Nottingham",
    "referee": "Anthony Taylor",
    "events": [
      {
        "id": "ev-537",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Chris Wood"
      },
      {
        "id": "ev-538",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Emile Smith Rowe"
      }
    ],
    "stats": {
      "possession": [
        53,
        47
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
        9,
        12
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        612,
        588
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r17-lee-ips",
    "leagueId": "epl",
    "round": "Vòng 17 Ngoại Hạng Anh - Boxing Day",
    "homeTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 2,
      "color": "#1D428A"
    },
    "awayTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 1,
      "color": "#004B87"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-26T22:00:00+07:00",
    "stadium": "Elland Road",
    "city": "Leeds",
    "referee": "Simon Hooper",
    "events": [
      {
        "id": "ev-539",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Wilfried Gnonto"
      },
      {
        "id": "ev-541",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Liam Delap"
      },
      {
        "id": "ev-540",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Joël Piroe"
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        612,
        588
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r17-liv-bou",
    "leagueId": "epl",
    "round": "Vòng 17 Ngoại Hạng Anh - Boxing Day",
    "homeTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 3,
      "color": "#C8102E"
    },
    "awayTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 1,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-27T00:30:00+07:00",
    "stadium": "Anfield",
    "city": "Liverpool",
    "referee": "Paul Tierney",
    "events": [
      {
        "id": "ev-542",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-545",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Antoine Semenyo"
      },
      {
        "id": "ev-543",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Luis Díaz"
      },
      {
        "id": "ev-544",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Darwin Núñez"
      }
    ],
    "stats": {
      "possession": [
        50,
        50
      ],
      "shots": [
        15,
        8
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
        13,
        11
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
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        600,
        600
      ],
      "passAccuracy": [
        87,
        85
      ]
    }
  },
  {
    "id": "epl-r17-hul-bha",
    "leagueId": "epl",
    "round": "Vòng 17 Ngoại Hạng Anh - Boxing Day",
    "homeTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 0,
      "color": "#FFA500"
    },
    "awayTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 2,
      "color": "#0057B8"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-27T21:00:00+07:00",
    "stadium": "MKM Stadium",
    "city": "Hull",
    "referee": "Jarred Gillett",
    "events": [
      {
        "id": "ev-546",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Kaoru Mitoma"
      },
      {
        "id": "ev-547",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Danny Welbeck"
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
        1.9
      ],
      "fouls": [
        12,
        11
      ],
      "corners": [
        4,
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
        568,
        632
      ],
      "passAccuracy": [
        86,
        86
      ]
    }
  },
  {
    "id": "epl-r17-tot-eve",
    "leagueId": "epl",
    "round": "Vòng 17 Ngoại Hạng Anh - Boxing Day",
    "homeTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 2,
      "color": "#132257"
    },
    "awayTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 0,
      "color": "#003399"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-27T23:30:00+07:00",
    "stadium": "Tottenham Hotspur Stadium",
    "city": "London",
    "referee": "Darren England",
    "events": [
      {
        "id": "ev-548",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-549",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Dominic Solanke"
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
        2,
        0.3
      ],
      "fouls": [
        10,
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
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        608,
        592
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r18-ful-ars",
    "leagueId": "epl",
    "round": "Vòng 18 Ngoại Hạng Anh - Chào Năm Mới 2027",
    "homeTeam": {
      "id": "ful",
      "name": "Fulham",
      "shortName": "Fulham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png",
      "score": 1,
      "color": "#000000"
    },
    "awayTeam": {
      "id": "ars",
      "name": "Arsenal",
      "shortName": "Arsenal",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png",
      "score": 2,
      "color": "#EF0107"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-30T02:45:00+07:00",
    "stadium": "Craven Cottage",
    "city": "London",
    "referee": "Chris Kavanagh",
    "events": [
      {
        "id": "ev-550",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Emile Smith Rowe"
      },
      {
        "id": "ev-551",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Bukayo Saka"
      },
      {
        "id": "ev-552",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Kai Havertz"
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
        12,
        11
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        592,
        608
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r18-eve-mci",
    "leagueId": "epl",
    "round": "Vòng 18 Ngoại Hạng Anh - Chào Năm Mới 2027",
    "homeTeam": {
      "id": "eve",
      "name": "Everton",
      "shortName": "Everton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/368.png",
      "score": 1,
      "color": "#003399"
    },
    "awayTeam": {
      "id": "mci",
      "name": "Manchester City",
      "shortName": "Man City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png",
      "score": 3,
      "color": "#6CABDD"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-30T02:45:00+07:00",
    "stadium": "Goodison Park",
    "city": "Liverpool",
    "referee": "Michael Oliver",
    "events": [
      {
        "id": "ev-553",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Dominic Calvert-Lewin"
      },
      {
        "id": "ev-554",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Erling Haaland"
      },
      {
        "id": "ev-555",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Phil Foden"
      },
      {
        "id": "ev-556",
        "minute": 61,
        "type": "GOAL",
        "team": "away",
        "player": "Kevin De Bruyne"
      }
    ],
    "stats": {
      "possession": [
        48,
        52
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
        10,
        11
      ],
      "corners": [
        6,
        9
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
        608
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r18-che-bou",
    "leagueId": "epl",
    "round": "Vòng 18 Ngoại Hạng Anh - Chào Năm Mới 2027",
    "homeTeam": {
      "id": "che",
      "name": "Chelsea",
      "shortName": "Chelsea",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png",
      "score": 2,
      "color": "#034694"
    },
    "awayTeam": {
      "id": "bou",
      "name": "Bournemouth",
      "shortName": "Bournemouth",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png",
      "score": 0,
      "color": "#DA291C"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-30T02:45:00+07:00",
    "stadium": "Stamford Bridge",
    "city": "London",
    "referee": "Anthony Taylor",
    "events": [
      {
        "id": "ev-557",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Cole Palmer"
      },
      {
        "id": "ev-558",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Nicolas Jackson"
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
        9,
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r18-mun-cov",
    "leagueId": "epl",
    "round": "Vòng 18 Ngoại Hạng Anh - Chào Năm Mới 2027",
    "homeTeam": {
      "id": "mun",
      "name": "Manchester United",
      "shortName": "Man United",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png",
      "score": 3,
      "color": "#DA291C"
    },
    "awayTeam": {
      "id": "cov",
      "name": "Coventry City",
      "shortName": "Coventry",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/392.png",
      "score": 0,
      "color": "#00BFFF"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-30T02:45:00+07:00",
    "stadium": "Old Trafford",
    "city": "Manchester",
    "referee": "Simon Hooper",
    "events": [
      {
        "id": "ev-559",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Marcus Rashford"
      },
      {
        "id": "ev-560",
        "minute": 34,
        "type": "PENALTY_GOAL",
        "team": "home",
        "player": "Rasmus Højlund"
      },
      {
        "id": "ev-561",
        "minute": 52,
        "type": "GOAL",
        "team": "home",
        "player": "Bruno Fernandes"
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
        9,
        14
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
        1,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        624,
        576
      ],
      "passAccuracy": [
        88,
        84
      ]
    }
  },
  {
    "id": "epl-r18-tot-nfo",
    "leagueId": "epl",
    "round": "Vòng 18 Ngoại Hạng Anh - Chào Năm Mới 2027",
    "homeTeam": {
      "id": "tot",
      "name": "Tottenham Hotspur",
      "shortName": "Tottenham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png",
      "score": 2,
      "color": "#132257"
    },
    "awayTeam": {
      "id": "nfo",
      "name": "Nottingham Forest",
      "shortName": "Nottingham",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/393.png",
      "score": 1,
      "color": "#DD0000"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-30T02:45:00+07:00",
    "stadium": "Tottenham Hotspur Stadium",
    "city": "London",
    "referee": "Paul Tierney",
    "events": [
      {
        "id": "ev-562",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Son Heung-min"
      },
      {
        "id": "ev-564",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Chris Wood"
      },
      {
        "id": "ev-563",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Dominic Solanke"
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
        616,
        584
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r18-bre-new",
    "leagueId": "epl",
    "round": "Vòng 18 Ngoại Hạng Anh - Chào Năm Mới 2027",
    "homeTeam": {
      "id": "bre",
      "name": "Brentford",
      "shortName": "Brentford",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png",
      "score": 1,
      "color": "#E30613"
    },
    "awayTeam": {
      "id": "new",
      "name": "Newcastle United",
      "shortName": "Newcastle",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png",
      "score": 2,
      "color": "#241F20"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-30T03:00:00+07:00",
    "stadium": "Gtech Community Stadium",
    "city": "Brentford",
    "referee": "Jarred Gillett",
    "events": [
      {
        "id": "ev-565",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Bryan Mbeumo"
      },
      {
        "id": "ev-566",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Alexander Isak"
      },
      {
        "id": "ev-567",
        "minute": 43,
        "type": "PENALTY_GOAL",
        "team": "away",
        "player": "Anthony Gordon"
      }
    ],
    "stats": {
      "possession": [
        48,
        52
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
        10
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
        1,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        592,
        608
      ],
      "passAccuracy": [
        86,
        85
      ]
    }
  },
  {
    "id": "epl-r18-bha-sun",
    "leagueId": "epl",
    "round": "Vòng 18 Ngoại Hạng Anh - Chào Năm Mới 2027",
    "homeTeam": {
      "id": "bha",
      "name": "Brighton & Hove Albion",
      "shortName": "Brighton",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png",
      "score": 2,
      "color": "#0057B8"
    },
    "awayTeam": {
      "id": "sun",
      "name": "Sunderland",
      "shortName": "Sunderland",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png",
      "score": 1,
      "color": "#EB172B"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-30T03:00:00+07:00",
    "stadium": "Amex Stadium",
    "city": "Falmer",
    "referee": "Darren England",
    "events": [
      {
        "id": "ev-568",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Kaoru Mitoma"
      },
      {
        "id": "ev-570",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Jack Clarke"
      },
      {
        "id": "ev-569",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Danny Welbeck"
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
        9,
        10
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
        616,
        584
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r18-ips-hul",
    "leagueId": "epl",
    "round": "Vòng 18 Ngoại Hạng Anh - Chào Năm Mới 2027",
    "homeTeam": {
      "id": "ips",
      "name": "Ipswich Town",
      "shortName": "Ipswich",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png",
      "score": 1,
      "color": "#004B87"
    },
    "awayTeam": {
      "id": "hul",
      "name": "Hull City",
      "shortName": "Hull City",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/306.png",
      "score": 1,
      "color": "#FFA500"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-30T03:00:00+07:00",
    "stadium": "Portman Road",
    "city": "Ipswich",
    "referee": "Peter Bankes",
    "events": [
      {
        "id": "ev-571",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Liam Delap"
      },
      {
        "id": "ev-572",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Chris Bedia"
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
        620,
        580
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  },
  {
    "id": "epl-r18-lee-cry",
    "leagueId": "epl",
    "round": "Vòng 18 Ngoại Hạng Anh - Chào Năm Mới 2027",
    "homeTeam": {
      "id": "lee",
      "name": "Leeds United",
      "shortName": "Leeds",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png",
      "score": 1,
      "color": "#1D428A"
    },
    "awayTeam": {
      "id": "cry",
      "name": "Crystal Palace",
      "shortName": "Crystal Palace",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/384.png",
      "score": 2,
      "color": "#1B458F"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-30T03:00:00+07:00",
    "stadium": "Elland Road",
    "city": "Leeds",
    "referee": "Stuart Attwell",
    "events": [
      {
        "id": "ev-573",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Wilfried Gnonto"
      },
      {
        "id": "ev-574",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Eberechi Eze"
      },
      {
        "id": "ev-575",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Jean-Philippe Mateta"
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
        10,
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
        2,
        3
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        568,
        632
      ],
      "passAccuracy": [
        86,
        86
      ]
    }
  },
  {
    "id": "epl-r18-avl-liv",
    "leagueId": "epl",
    "round": "Vòng 18 Ngoại Hạng Anh - Chào Năm Mới 2027",
    "homeTeam": {
      "id": "avl",
      "name": "Aston Villa",
      "shortName": "Aston Villa",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png",
      "score": 2,
      "color": "#95BFE5"
    },
    "awayTeam": {
      "id": "liv",
      "name": "Liverpool",
      "shortName": "Liverpool",
      "logo": "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png",
      "score": 2,
      "color": "#C8102E"
    },
    "status": "SCHEDULED",
    "startTime": "2026-12-31T03:00:00+07:00",
    "stadium": "Villa Park",
    "city": "Birmingham",
    "referee": "Rob Jones",
    "events": [
      {
        "id": "ev-576",
        "minute": 18,
        "type": "GOAL",
        "team": "home",
        "player": "Ollie Watkins"
      },
      {
        "id": "ev-578",
        "minute": 27,
        "type": "GOAL",
        "team": "away",
        "player": "Mohamed Salah"
      },
      {
        "id": "ev-577",
        "minute": 34,
        "type": "GOAL",
        "team": "home",
        "player": "Morgan Rogers"
      },
      {
        "id": "ev-579",
        "minute": 43,
        "type": "GOAL",
        "team": "away",
        "player": "Luis Díaz"
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
        13
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
        2,
        2
      ],
      "redCards": [
        0,
        0
      ],
      "passes": [
        616,
        584
      ],
      "passAccuracy": [
        87,
        84
      ]
    }
  }
];
