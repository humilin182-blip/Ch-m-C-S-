import { Match } from '../types/football';

export const OCTOBER_2026_SCHEDULE: Match[] = [
  // Ngày 01/10/2026
  {
    id: 'unl-aze-lie-0110',
    leagueId: 'unl',
    round: 'Nations League - Vòng Bảng',
    homeTeam: { id: 'aze', name: 'Azerbaijan', shortName: 'Azerbaijan', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/aze.png', score: 2, color: '#00B5E2' },
    awayTeam: { id: 'lie', name: 'Liechtenstein', shortName: 'Liechtenstein', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/lie.png', score: 0, color: '#002B7F' },
    status: 'SCHEDULED',
    startTime: '2026-10-01T23:00:00+07:00',
    stadium: 'Tofiq Bahramov Stadium',
    city: 'Baku',
    referee: 'Igor Pajac',
    events: [
      { id: 'ev-1', minute: 34, type: 'GOAL', team: 'home', player: 'Mahir Emreli' },
      { id: 'ev-2', minute: 78, type: 'GOAL', team: 'home', player: 'Renat Dadashov' }
    ],
    stats: { possession: [62, 38], shots: [14, 4], shotsOnTarget: [6, 1], expectedGoals: [1.8, 0.3], fouls: [10, 13], corners: [7, 2], offsides: [2, 1], yellowCards: [1, 3], redCards: [0, 0], passes: [520, 310], passAccuracy: [85, 71] }
  },

  // Đêm 01/10 - Rạng sáng 02/10/2026 (01:45)
  {
    id: 'unl-ger-srb-0210',
    leagueId: 'unl',
    round: 'Nations League - League A',
    homeTeam: { id: 'ger', name: 'Đức', shortName: 'Đức', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ger.png', score: 2, color: '#111111' },
    awayTeam: { id: 'srb', name: 'Serbia', shortName: 'Serbia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/srb.png', score: 1, color: '#C6363C' },
    status: 'SCHEDULED',
    startTime: '2026-10-02T01:45:00+07:00',
    stadium: 'Allianz Arena',
    city: 'Munich',
    referee: 'Szymon Marciniak',
    events: [
      { id: 'ev-3', minute: 22, type: 'GOAL', team: 'home', player: 'Jamal Musiala' },
      { id: 'ev-4', minute: 68, type: 'GOAL', team: 'home', player: 'Florian Wirtz' },
      { id: 'ev-5', minute: 84, type: 'GOAL', team: 'away', player: 'Dušan Vlahović' }
    ],
    stats: { possession: [65, 35], shots: [17, 8], shotsOnTarget: [7, 3], expectedGoals: [2.1, 0.9], fouls: [8, 12], corners: [8, 3], offsides: [1, 2], yellowCards: [1, 2], redCards: [0, 0], passes: [610, 320], passAccuracy: [89, 76] }
  },
  {
    id: 'unl-gre-ned-0210',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'gre', name: 'Hy Lạp', shortName: 'Hy Lạp', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/gre.png', score: 1, color: '#0D5EAF' },
    awayTeam: { id: 'ned', name: 'Hà Lan', shortName: 'Hà Lan', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ned.png', score: 2, color: '#F36C21' },
    status: 'SCHEDULED',
    startTime: '2026-10-02T01:45:00+07:00',
    stadium: 'OPAP Arena',
    city: 'Athens',
    referee: 'Michael Oliver',
    events: [
      { id: 'ev-6', minute: 29, type: 'GOAL', team: 'away', player: 'Cody Gakpo' },
      { id: 'ev-7', minute: 41, type: 'GOAL', team: 'home', player: 'Vangelis Pavlidis' },
      { id: 'ev-8', minute: 74, type: 'GOAL', team: 'away', player: 'Tijjani Reijnders' }
    ],
    stats: { possession: [42, 58], shots: [9, 15], shotsOnTarget: [4, 6], expectedGoals: [1.1, 1.9], fouls: [14, 9], corners: [4, 7], offsides: [3, 1], yellowCards: [3, 1], redCards: [0, 0], passes: [380, 540], passAccuracy: [77, 86] }
  },
  {
    id: 'unl-den-por-0210',
    leagueId: 'unl',
    round: 'Nations League - League A',
    homeTeam: { id: 'den', name: 'Đan Mạch', shortName: 'Đan Mạch', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/den.png', score: 1, color: '#C60C30' },
    awayTeam: { id: 'por', name: 'Bồ Đào Nha', shortName: 'Bồ Đào Nha', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/por.png', score: 2, color: '#006600' },
    status: 'SCHEDULED',
    startTime: '2026-10-02T01:45:00+07:00',
    stadium: 'Parken Stadium',
    city: 'Copenhagen',
    referee: 'Anthony Taylor',
    events: [
      { id: 'ev-9', minute: 38, type: 'GOAL', team: 'away', player: 'Cristiano Ronaldo' },
      { id: 'ev-10', minute: 55, type: 'GOAL', team: 'home', player: 'Rasmus Højlund' },
      { id: 'ev-11', minute: 82, type: 'GOAL', team: 'away', player: 'Bruno Fernandes' }
    ],
    stats: { possession: [46, 54], shots: [11, 14], shotsOnTarget: [4, 6], expectedGoals: [1.3, 1.8], fouls: [11, 10], corners: [5, 6], offsides: [2, 2], yellowCards: [2, 2], redCards: [0, 0], passes: [430, 510], passAccuracy: [81, 84] }
  },
  {
    id: 'unl-wal-nor-0210',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'wal', name: 'Wales', shortName: 'Wales', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png', score: 1, color: '#D30731' },
    awayTeam: { id: 'nor', name: 'Na Uy', shortName: 'Na Uy', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/nor.png', score: 3, color: '#BA0C2F' },
    status: 'SCHEDULED',
    startTime: '2026-10-02T01:45:00+07:00',
    stadium: 'Cardiff City Stadium',
    city: 'Cardiff',
    referee: 'Daniele Orsato',
    events: [
      { id: 'ev-12', minute: 19, type: 'GOAL', team: 'away', player: 'Erling Haaland' },
      { id: 'ev-13', minute: 45, type: 'GOAL', team: 'away', player: 'Martin Ødegaard' },
      { id: 'ev-14', minute: 63, type: 'GOAL', team: 'home', player: 'Brennan Johnson' },
      { id: 'ev-15', minute: 71, type: 'GOAL', team: 'away', player: 'Erling Haaland' }
    ],
    stats: { possession: [45, 55], shots: [9, 16], shotsOnTarget: [3, 8], expectedGoals: [0.9, 2.7], fouls: [13, 8], corners: [4, 6], offsides: [1, 3], yellowCards: [2, 1], redCards: [0, 0], passes: [390, 480], passAccuracy: [79, 85] }
  },
  {
    id: 'unl-isr-kos-0210',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'isr', name: 'Israel', shortName: 'Israel', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/isr.png', score: 1, color: '#0038B8' },
    awayTeam: { id: 'kos', name: 'Kosovo', shortName: 'Kosovo', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/kos.png', score: 1, color: '#244B5A' },
    status: 'SCHEDULED',
    startTime: '2026-10-02T01:45:00+07:00',
    stadium: 'Bloomfield Stadium',
    city: 'Tel Aviv',
    referee: 'Artur Soares Dias',
    events: [
      { id: 'ev-16', minute: 52, type: 'GOAL', team: 'home', player: 'Manor Solomon' },
      { id: 'ev-17', minute: 79, type: 'PENALTY_GOAL', team: 'away', player: 'Vedat Muriqi' }
    ],
    stats: { possession: [52, 48], shots: [12, 11], shotsOnTarget: [4, 4], expectedGoals: [1.2, 1.4], fouls: [11, 14], corners: [5, 4], offsides: [2, 1], yellowCards: [2, 3], redCards: [0, 0], passes: [440, 410], passAccuracy: [80, 78] }
  },
  {
    id: 'unl-irl-aut-0210',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'irl', name: 'CH Ireland', shortName: 'Ireland', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/irl.png', score: 0, color: '#169B62' },
    awayTeam: { id: 'aut', name: 'Áo', shortName: 'Áo', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/aut.png', score: 2, color: '#ED2939' },
    status: 'SCHEDULED',
    startTime: '2026-10-02T01:45:00+07:00',
    stadium: 'Aviva Stadium',
    city: 'Dublin',
    referee: 'Clément Turpin',
    events: [
      { id: 'ev-18', minute: 36, type: 'GOAL', team: 'away', player: 'Marcel Sabitzer' },
      { id: 'ev-19', minute: 69, type: 'GOAL', team: 'away', player: 'Marko Arnautović' }
    ],
    stats: { possession: [40, 60], shots: [7, 15], shotsOnTarget: [2, 6], expectedGoals: [0.6, 1.9], fouls: [15, 11], corners: [3, 8], offsides: [1, 2], yellowCards: [3, 1], redCards: [0, 0], passes: [340, 520], passAccuracy: [75, 84] }
  },

  // Đêm 02/10 - Rạng sáng 03/10/2026
  {
    id: 'unl-kaz-mda-0210',
    leagueId: 'unl',
    round: 'Nations League - League C',
    homeTeam: { id: 'kaz', name: 'Kazakhstan', shortName: 'Kazakhstan', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/kaz.png', score: 2, color: '#00AFCA' },
    awayTeam: { id: 'mda', name: 'Moldova', shortName: 'Moldova', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/mda.png', score: 1, color: '#0033A0' },
    status: 'SCHEDULED',
    startTime: '2026-10-02T21:00:00+07:00',
    stadium: 'Astana Arena',
    city: 'Astana',
    referee: 'Ali Palabıyık',
    events: [
      { id: 'ev-20', minute: 40, type: 'GOAL', team: 'home', player: 'Bakhtiyar Zaynutdinov' },
      { id: 'ev-21', minute: 65, type: 'GOAL', team: 'away', player: 'Ion Nicolaescu' },
      { id: 'ev-22', minute: 81, type: 'GOAL', team: 'home', player: 'Askhat Tagybergen' }
    ],
    stats: { possession: [54, 46], shots: [13, 9], shotsOnTarget: [5, 3], expectedGoals: [1.5, 0.9], fouls: [12, 14], corners: [6, 4], offsides: [2, 1], yellowCards: [2, 2], redCards: [0, 0], passes: [450, 390], passAccuracy: [81, 75] }
  },
  {
    id: 'unl-cyp-arm-0210',
    leagueId: 'unl',
    round: 'Nations League - League C',
    homeTeam: { id: 'cyp', name: 'Síp', shortName: 'Síp', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/cyp.png', score: 0, color: '#D47600' },
    awayTeam: { id: 'arm', name: 'Armenia', shortName: 'Armenia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arm.png', score: 1, color: '#D90012' },
    status: 'SCHEDULED',
    startTime: '2026-10-02T23:00:00+07:00',
    stadium: 'AEK Arena',
    city: 'Larnaca',
    referee: 'Erik Lambrechts',
    events: [
      { id: 'ev-23', minute: 58, type: 'GOAL', team: 'away', player: 'Eduard Spertsyan' }
    ],
    stats: { possession: [48, 52], shots: [8, 12], shotsOnTarget: [2, 4], expectedGoals: [0.7, 1.2], fouls: [13, 11], corners: [4, 5], offsides: [1, 2], yellowCards: [2, 1], redCards: [0, 0], passes: [410, 440], passAccuracy: [79, 82] }
  },
  {
    id: 'unl-lva-mne-0210',
    leagueId: 'unl',
    round: 'Nations League - League C',
    homeTeam: { id: 'lva', name: 'Latvia', shortName: 'Latvia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/lva.png', score: 1, color: '#9E3039' },
    awayTeam: { id: 'mne', name: 'Montenegro', shortName: 'Montenegro', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/mne.png', score: 1, color: '#C40308' },
    status: 'SCHEDULED',
    startTime: '2026-10-02T23:00:00+07:00',
    stadium: 'Daugava Stadium',
    city: 'Riga',
    referee: 'Donatas Rumšas',
    events: [
      { id: 'ev-24', minute: 31, type: 'GOAL', team: 'away', player: 'Nikola Krstović' },
      { id: 'ev-25', minute: 73, type: 'GOAL', team: 'home', player: 'Jānis Ikaunieks' }
    ],
    stats: { possession: [44, 56], shots: [10, 13], shotsOnTarget: [3, 5], expectedGoals: [0.9, 1.3], fouls: [14, 12], corners: [3, 6], offsides: [2, 1], yellowCards: [2, 3], redCards: [0, 0], passes: [360, 470], passAccuracy: [76, 83] }
  },
  {
    id: 'unl-fra-ita-0310',
    leagueId: 'unl',
    round: 'Nations League - League A Siêu Kinh Điển',
    homeTeam: { id: 'fra', name: 'Pháp', shortName: 'Pháp', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/fra.png', score: 2, color: '#002654' },
    awayTeam: { id: 'ita', name: 'Ý', shortName: 'Ý', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ita.png', score: 1, color: '#0064AA' },
    status: 'SCHEDULED',
    startTime: '2026-10-03T01:45:00+07:00',
    stadium: 'Stade de France',
    city: 'Saint-Denis',
    referee: 'Felix Zwayer',
    events: [
      { id: 'ev-26', minute: 32, type: 'GOAL', team: 'home', player: 'Kylian Mbappé' },
      { id: 'ev-27', minute: 59, type: 'GOAL', team: 'away', player: 'Mateo Retegui' },
      { id: 'ev-28', minute: 77, type: 'GOAL', team: 'home', player: 'Bradley Barcola' }
    ],
    stats: { possession: [56, 44], shots: [16, 10], shotsOnTarget: [7, 4], expectedGoals: [2.0, 1.2], fouls: [10, 13], corners: [7, 4], offsides: [2, 1], yellowCards: [1, 2], redCards: [0, 0], passes: [530, 420], passAccuracy: [88, 83] }
  },
  {
    id: 'unl-bel-tur-0310',
    leagueId: 'unl',
    round: 'Nations League - League A',
    homeTeam: { id: 'bel', name: 'Bỉ', shortName: 'Bỉ', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png', score: 3, color: '#ED2939' },
    awayTeam: { id: 'tur', name: 'Thổ Nhĩ Kỳ', shortName: 'Thổ Nhĩ Kỳ', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/tur.png', score: 2, color: '#E30A17' },
    status: 'SCHEDULED',
    startTime: '2026-10-03T01:45:00+07:00',
    stadium: 'King Baudouin Stadium',
    city: 'Brussels',
    referee: 'Slavko Vinčić',
    events: [
      { id: 'ev-29', minute: 18, type: 'GOAL', team: 'home', player: 'Kevin De Bruyne' },
      { id: 'ev-30', minute: 39, type: 'GOAL', team: 'away', player: 'Arda Güler' },
      { id: 'ev-31', minute: 49, type: 'GOAL', team: 'home', player: 'Romelu Lukaku' },
      { id: 'ev-32', minute: 62, type: 'PENALTY_GOAL', team: 'away', player: 'Hakan Çalhanoğlu' },
      { id: 'ev-33', minute: 85, type: 'GOAL', team: 'home', player: 'Romelu Lukaku' }
    ],
    stats: { possession: [53, 47], shots: [15, 14], shotsOnTarget: [6, 5], expectedGoals: [2.3, 1.8], fouls: [12, 14], corners: [6, 5], offsides: [1, 2], yellowCards: [2, 3], redCards: [0, 0], passes: [490, 430], passAccuracy: [85, 82] }
  },
  {
    id: 'unl-pol-rou-0310',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'pol', name: 'Ba Lan', shortName: 'Ba Lan', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/pol.png', score: 2, color: '#DC143C' },
    awayTeam: { id: 'rou', name: 'Romania', shortName: 'Romania', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/rou.png', score: 0, color: '#002B7F' },
    status: 'SCHEDULED',
    startTime: '2026-10-03T01:45:00+07:00',
    stadium: 'PGE Narodowy',
    city: 'Warsaw',
    referee: 'Jesús Gil Manzano',
    events: [
      { id: 'ev-34', minute: 27, type: 'GOAL', team: 'home', player: 'Robert Lewandowski' },
      { id: 'ev-35', minute: 72, type: 'PENALTY_GOAL', team: 'home', player: 'Robert Lewandowski' }
    ],
    stats: { possession: [58, 42], shots: [14, 7], shotsOnTarget: [6, 2], expectedGoals: [2.1, 0.6], fouls: [9, 13], corners: [7, 3], offsides: [2, 1], yellowCards: [1, 2], redCards: [0, 0], passes: [520, 370], passAccuracy: [86, 78] }
  },
  {
    id: 'unl-swe-pol-0310',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'swe', name: 'Thụy Điển', shortName: 'Thụy Điển', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/swe.png', score: 2, color: '#006AA7' },
    awayTeam: { id: 'pol2', name: 'Ba Lan', shortName: 'Ba Lan', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/pol.png', score: 1, color: '#DC143C' },
    status: 'SCHEDULED',
    startTime: '2026-10-03T01:45:00+07:00',
    stadium: 'Friends Arena',
    city: 'Stockholm',
    referee: 'Davide Massa',
    events: [
      { id: 'ev-36', minute: 44, type: 'GOAL', team: 'home', player: 'Viktor Gyökeres' },
      { id: 'ev-37', minute: 60, type: 'GOAL', team: 'away', player: 'Piotr Zieliński' },
      { id: 'ev-38', minute: 80, type: 'GOAL', team: 'home', player: 'Alexander Isak' }
    ],
    stats: { possession: [52, 48], shots: [13, 11], shotsOnTarget: [5, 4], expectedGoals: [1.7, 1.2], fouls: [11, 10], corners: [6, 4], offsides: [2, 2], yellowCards: [1, 2], redCards: [0, 0], passes: [470, 430], passAccuracy: [83, 81] }
  },
  {
    id: 'unl-hun-geo-0310',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'hun', name: 'Hungary', shortName: 'Hungary', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/hun.png', score: 1, color: '#CE2939' },
    awayTeam: { id: 'geo', name: 'Gruzia', shortName: 'Gruzia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/geo.png', score: 1, color: '#FF0000' },
    status: 'SCHEDULED',
    startTime: '2026-10-03T01:45:00+07:00',
    stadium: 'Puskás Aréna',
    city: 'Budapest',
    referee: 'Danny Makkelie',
    events: [
      { id: 'ev-39', minute: 33, type: 'GOAL', team: 'home', player: 'Dominik Szoboszlai' },
      { id: 'ev-40', minute: 68, type: 'GOAL', team: 'away', player: 'Khvicha Kvaratskhelia' }
    ],
    stats: { possession: [51, 49], shots: [12, 13], shotsOnTarget: [4, 5], expectedGoals: [1.3, 1.4], fouls: [12, 11], corners: [5, 5], offsides: [1, 2], yellowCards: [2, 2], redCards: [0, 0], passes: [460, 440], passAccuracy: [82, 81] }
  },

  // Ngày 03/10/2026 (Thứ Bảy)
  {
    id: 'unl-fin-alb-0310',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'fin', name: 'Phần Lan', shortName: 'Phần Lan', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/fin.png', score: 1, color: '#002F6C' },
    awayTeam: { id: 'alb', name: 'Albania', shortName: 'Albania', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/alb.png', score: 0, color: '#E41E20' },
    status: 'SCHEDULED',
    startTime: '2026-10-03T20:00:00+07:00',
    stadium: 'Helsinki Olympic Stadium',
    city: 'Helsinki',
    referee: 'Serdar Gözübüyük',
    events: [
      { id: 'ev-41', minute: 64, type: 'GOAL', team: 'home', player: 'Teemu Pukki' }
    ],
    stats: { possession: [53, 47], shots: [10, 8], shotsOnTarget: [4, 2], expectedGoals: [1.2, 0.7], fouls: [10, 14], corners: [5, 3], offsides: [1, 2], yellowCards: [1, 3], redCards: [0, 0], passes: [460, 400], passAccuracy: [81, 77] }
  },
  {
    id: 'unl-cro-eng-0310',
    leagueId: 'unl',
    round: 'Nations League - Đại Chiến Châu Âu',
    homeTeam: { id: 'cro', name: 'Croatia', shortName: 'Croatia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/cro.png', score: 1, color: '#FF0000' },
    awayTeam: { id: 'eng', name: 'Anh', shortName: 'Anh', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/eng.png', score: 2, color: '#CE1124' },
    status: 'SCHEDULED',
    startTime: '2026-10-03T23:00:00+07:00',
    stadium: 'Maksimir Stadium',
    city: 'Zagreb',
    referee: 'Daniele Orsato',
    events: [
      { id: 'ev-42', minute: 21, type: 'GOAL', team: 'away', player: 'Harry Kane' },
      { id: 'ev-43', minute: 35, type: 'GOAL', team: 'home', player: 'Luka Modrić' },
      { id: 'ev-44', minute: 83, type: 'GOAL', team: 'away', player: 'Jude Bellingham' }
    ],
    stats: { possession: [47, 53], shots: [11, 15], shotsOnTarget: [4, 6], expectedGoals: [1.1, 1.9], fouls: [11, 9], corners: [4, 7], offsides: [2, 1], yellowCards: [2, 1], redCards: [0, 0], passes: [450, 520], passAccuracy: [83, 87] }
  },
  {
    id: 'unl-isl-bul-0310',
    leagueId: 'unl',
    round: 'Nations League - League C',
    homeTeam: { id: 'isl', name: 'Iceland', shortName: 'Iceland', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/isl.png', score: 2, color: '#003897' },
    awayTeam: { id: 'bul', name: 'Bulgaria', shortName: 'Bulgaria', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bul.png', score: 0, color: '#00966E' },
    status: 'SCHEDULED',
    startTime: '2026-10-03T23:00:00+07:00',
    stadium: 'Laugardalsvöllur',
    city: 'Reykjavik',
    referee: 'Nicholas Walsh',
    events: [
      { id: 'ev-45', minute: 41, type: 'GOAL', team: 'home', player: 'Albert Guðmundsson' },
      { id: 'ev-46', minute: 79, type: 'GOAL', team: 'home', player: 'Hákon Haraldsson' }
    ],
    stats: { possession: [55, 45], shots: [12, 6], shotsOnTarget: [5, 1], expectedGoals: [1.6, 0.4], fouls: [10, 12], corners: [6, 2], offsides: [1, 1], yellowCards: [1, 2], redCards: [0, 0], passes: [480, 390], passAccuracy: [83, 76] }
  },
  {
    id: 'unl-est-lux-0310',
    leagueId: 'unl',
    round: 'Nations League - League C',
    homeTeam: { id: 'est', name: 'Estonia', shortName: 'Estonia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/est.png', score: 0, color: '#0072CE' },
    awayTeam: { id: 'lux', name: 'Luxembourg', shortName: 'Luxembourg', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/lux.png', score: 1, color: '#EA141D' },
    status: 'SCHEDULED',
    startTime: '2026-10-03T23:00:00+07:00',
    stadium: 'A. Le Coq Arena',
    city: 'Tallinn',
    referee: 'Juxhin Xhaja',
    events: [
      { id: 'ev-47', minute: 66, type: 'GOAL', team: 'away', player: 'Gerson Rodrigues' }
    ],
    stats: { possession: [46, 54], shots: [8, 11], shotsOnTarget: [2, 4], expectedGoals: [0.6, 1.2], fouls: [13, 11], corners: [3, 5], offsides: [1, 2], yellowCards: [2, 1], redCards: [0, 0], passes: [410, 470], passAccuracy: [78, 82] }
  },
  {
    id: 'unl-blr-smr-0310',
    leagueId: 'unl',
    round: 'Nations League - League D',
    homeTeam: { id: 'blr', name: 'Belarus', shortName: 'Belarus', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/blr.png', score: 3, color: '#C8313E' },
    awayTeam: { id: 'smr', name: 'San Marino', shortName: 'San Marino', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/smr.png', score: 0, color: '#5EB6E4' },
    status: 'SCHEDULED',
    startTime: '2026-10-03T23:00:00+07:00',
    stadium: 'ZTE Arena',
    city: 'Zalaegerszeg',
    referee: 'Igor Stojchevski',
    events: [
      { id: 'ev-48', minute: 14, type: 'GOAL', team: 'home', player: 'Ivan Bakhar' },
      { id: 'ev-49', minute: 53, type: 'GOAL', team: 'home', player: 'Max Ebong' },
      { id: 'ev-50', minute: 88, type: 'GOAL', team: 'home', player: 'Vladislav Morozov' }
    ],
    stats: { possession: [68, 32], shots: [20, 3], shotsOnTarget: [9, 0], expectedGoals: [2.8, 0.1], fouls: [8, 14], corners: [9, 1], offsides: [3, 1], yellowCards: [1, 3], redCards: [0, 0], passes: [620, 240], passAccuracy: [88, 64] }
  },

  // Đêm 03/10 - Rạng sáng 04/10/2026 (01:45)
  {
    id: 'unl-esp-cze-0410',
    leagueId: 'unl',
    round: 'Nations League - League A',
    homeTeam: { id: 'esp', name: 'Tây Ban Nha', shortName: 'TBN', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/esp.png', score: 3, color: '#AA151B' },
    awayTeam: { id: 'cze', name: 'Cộng hòa Séc', shortName: 'CH Séc', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/cze.png', score: 0, color: '#11457E' },
    status: 'SCHEDULED',
    startTime: '2026-10-04T01:45:00+07:00',
    stadium: 'Santiago Bernabéu',
    city: 'Madrid',
    referee: 'Michael Oliver',
    events: [
      { id: 'ev-51', minute: 18, type: 'GOAL', team: 'home', player: 'Lamine Yamal' },
      { id: 'ev-52', minute: 45, extraMinute: 1, type: 'GOAL', team: 'home', player: 'Nico Williams' },
      { id: 'ev-53', minute: 70, type: 'GOAL', team: 'home', player: 'Dani Olmo' }
    ],
    stats: { possession: [70, 30], shots: [19, 5], shotsOnTarget: [8, 1], expectedGoals: [2.6, 0.4], fouls: [7, 13], corners: [8, 2], offsides: [2, 1], yellowCards: [1, 3], redCards: [0, 0], passes: [690, 280], passAccuracy: [92, 72] }
  },
  {
    id: 'unl-sui-svn-0410',
    leagueId: 'unl',
    round: 'Nations League - League A',
    homeTeam: { id: 'sui', name: 'Thụy Sĩ', shortName: 'Thụy Sĩ', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/sui.png', score: 2, color: '#FF0000' },
    awayTeam: { id: 'svn', name: 'Slovenia', shortName: 'Slovenia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/svn.png', score: 1, color: '#005DA4' },
    status: 'SCHEDULED',
    startTime: '2026-10-04T01:45:00+07:00',
    stadium: 'St. Jakob-Park',
    city: 'Basel',
    referee: 'Artur Soares Dias',
    events: [
      { id: 'ev-54', minute: 38, type: 'GOAL', team: 'home', player: 'Granit Xhaka' },
      { id: 'ev-55', minute: 54, type: 'GOAL', team: 'away', player: 'Benjamin Šeško' },
      { id: 'ev-56', minute: 82, type: 'GOAL', team: 'home', player: 'Breel Embolo' }
    ],
    stats: { possession: [57, 43], shots: [14, 9], shotsOnTarget: [6, 3], expectedGoals: [1.8, 1.1], fouls: [10, 11], corners: [6, 4], offsides: [1, 2], yellowCards: [2, 2], redCards: [0, 0], passes: [520, 380], passAccuracy: [85, 79] }
  },
  {
    id: 'unl-mkd-sco-0410',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'mkd', name: 'Bắc Macedonia', shortName: 'B.Macedonia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/mkd.png', score: 1, color: '#D20000' },
    awayTeam: { id: 'sco', name: 'Scotland', shortName: 'Scotland', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/sco.png', score: 2, color: '#002B7F' },
    status: 'SCHEDULED',
    startTime: '2026-10-04T01:45:00+07:00',
    stadium: 'Toše Proeski Arena',
    city: 'Skopje',
    referee: 'Kristo Tohver',
    events: [
      { id: 'ev-57', minute: 28, type: 'GOAL', team: 'away', player: 'Scott McTominay' },
      { id: 'ev-58', minute: 49, type: 'GOAL', team: 'home', player: 'Eljif Elmas' },
      { id: 'ev-59', minute: 76, type: 'GOAL', team: 'away', player: 'Scott McTominay' }
    ],
    stats: { possession: [49, 51], shots: [11, 12], shotsOnTarget: [4, 5], expectedGoals: [1.2, 1.6], fouls: [13, 12], corners: [4, 6], offsides: [2, 1], yellowCards: [3, 2], redCards: [0, 0], passes: [430, 450], passAccuracy: [80, 82] }
  },

  // Ngày 04/10/2026 (Chủ Nhật)
  {
    id: 'unl-aze-ltu-0410',
    leagueId: 'unl',
    round: 'Nations League - League C',
    homeTeam: { id: 'aze2', name: 'Azerbaijan', shortName: 'Azerbaijan', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/aze.png', score: 1, color: '#00B5E2' },
    awayTeam: { id: 'ltu', name: 'Litva', shortName: 'Litva', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ltu.png', score: 0, color: '#FDB913' },
    status: 'SCHEDULED',
    startTime: '2026-10-04T20:00:00+07:00',
    stadium: 'Baku Olympic Stadium',
    city: 'Baku',
    referee: 'Genc Nuza',
    events: [
      { id: 'ev-60', minute: 72, type: 'GOAL', team: 'home', player: 'Ramil Sheydayev' }
    ],
    stats: { possession: [54, 46], shots: [12, 7], shotsOnTarget: [4, 2], expectedGoals: [1.3, 0.5], fouls: [11, 14], corners: [5, 3], offsides: [1, 1], yellowCards: [2, 3], redCards: [0, 0], passes: [470, 390], passAccuracy: [82, 76] }
  },
  {
    id: 'unl-kos-aut-0410',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'kos2', name: 'Kosovo', shortName: 'Kosovo', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/kos.png', score: 1, color: '#244B5A' },
    awayTeam: { id: 'aut2', name: 'Áo', shortName: 'Áo', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/aut.png', score: 2, color: '#ED2939' },
    status: 'SCHEDULED',
    startTime: '2026-10-04T23:00:00+07:00',
    stadium: 'Fadil Vokrri Stadium',
    city: 'Pristina',
    referee: 'Radu Petrescu',
    events: [
      { id: 'ev-61', minute: 37, type: 'GOAL', team: 'home', player: 'Edon Zhegrova' },
      { id: 'ev-62', minute: 45, extraMinute: 2, type: 'GOAL', team: 'away', player: 'Christoph Baumgartner' },
      { id: 'ev-63', minute: 84, type: 'GOAL', team: 'away', player: 'Konrad Laimer' }
    ],
    stats: { possession: [43, 57], shots: [8, 16], shotsOnTarget: [3, 7], expectedGoals: [0.9, 2.1], fouls: [14, 10], corners: [3, 7], offsides: [2, 1], yellowCards: [3, 1], redCards: [0, 0], passes: [360, 520], passAccuracy: [77, 85] }
  },
  {
    id: 'unl-mlt-and-0410',
    leagueId: 'unl',
    round: 'Nations League - League D',
    homeTeam: { id: 'mlt', name: 'Malta', shortName: 'Malta', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/mlt.png', score: 1, color: '#CF1020' },
    awayTeam: { id: 'and', name: 'Andorra', shortName: 'Andorra', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/and.png', score: 0, color: '#0018A8' },
    status: 'SCHEDULED',
    startTime: '2026-10-04T23:00:00+07:00',
    stadium: 'Ta’ Qali National Stadium',
    city: 'Ta’ Qali',
    referee: 'Jérôme Brisard',
    events: [
      { id: 'ev-64', minute: 61, type: 'GOAL', team: 'home', player: 'Matthew Guillaumier' }
    ],
    stats: { possession: [60, 40], shots: [11, 4], shotsOnTarget: [4, 1], expectedGoals: [1.4, 0.2], fouls: [12, 15], corners: [5, 2], offsides: [1, 2], yellowCards: [2, 4], redCards: [0, 0], passes: [510, 310], passAccuracy: [83, 70] }
  },

  // Đêm 04/10 - Rạng sáng 05/10/2026 (01:45)
  {
    id: 'unl-gre-ger-0510',
    leagueId: 'unl',
    round: 'Nations League - League A',
    homeTeam: { id: 'gre2', name: 'Hy Lạp', shortName: 'Hy Lạp', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/gre.png', score: 1, color: '#0D5EAF' },
    awayTeam: { id: 'ger2', name: 'Đức', shortName: 'Đức', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ger.png', score: 3, color: '#111111' },
    status: 'SCHEDULED',
    startTime: '2026-10-05T01:45:00+07:00',
    stadium: 'Karaiskakis Stadium',
    city: 'Piraeus',
    referee: 'Clément Turpin',
    events: [
      { id: 'ev-65', minute: 26, type: 'GOAL', team: 'home', player: 'Anastasios Bakasetas' },
      { id: 'ev-66', minute: 39, type: 'GOAL', team: 'away', player: 'Kai Havertz' },
      { id: 'ev-67', minute: 63, type: 'GOAL', team: 'away', player: 'Jamal Musiala' },
      { id: 'ev-68', minute: 88, type: 'GOAL', team: 'away', player: 'Leroy Sané' }
    ],
    stats: { possession: [38, 62], shots: [7, 18], shotsOnTarget: [2, 8], expectedGoals: [0.8, 2.7], fouls: [13, 8], corners: [3, 8], offsides: [2, 1], yellowCards: [2, 1], redCards: [0, 0], passes: [330, 600], passAccuracy: [75, 89] }
  },
  {
    id: 'unl-ned-srb-0510',
    leagueId: 'unl',
    round: 'Nations League - League A',
    homeTeam: { id: 'ned2', name: 'Hà Lan', shortName: 'Hà Lan', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ned.png', score: 2, color: '#F36C21' },
    awayTeam: { id: 'srb2', name: 'Serbia', shortName: 'Serbia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/srb.png', score: 0, color: '#C6363C' },
    status: 'SCHEDULED',
    startTime: '2026-10-05T01:45:00+07:00',
    stadium: 'Johan Cruyff Arena',
    city: 'Amsterdam',
    referee: 'Davide Massa',
    events: [
      { id: 'ev-69', minute: 51, type: 'GOAL', team: 'home', player: 'Donyell Malen' },
      { id: 'ev-70', minute: 79, type: 'GOAL', team: 'home', player: 'Xavi Simons' }
    ],
    stats: { possession: [63, 37], shots: [15, 6], shotsOnTarget: [6, 2], expectedGoals: [2.0, 0.5], fouls: [9, 12], corners: [7, 3], offsides: [1, 2], yellowCards: [1, 2], redCards: [0, 0], passes: [590, 340], passAccuracy: [88, 77] }
  },
  {
    id: 'unl-por-nor-0510',
    leagueId: 'unl',
    round: 'Nations League - Đại Chiến Ronaldo vs Haaland',
    homeTeam: { id: 'por2', name: 'Bồ Đào Nha', shortName: 'Bồ Đào Nha', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/por.png', score: 2, color: '#006600' },
    awayTeam: { id: 'nor2', name: 'Na Uy', shortName: 'Na Uy', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/nor.png', score: 2, color: '#BA0C2F' },
    status: 'SCHEDULED',
    startTime: '2026-10-05T01:45:00+07:00',
    stadium: 'Estádio da Luz',
    city: 'Lisbon',
    referee: 'Szymon Marciniak',
    events: [
      { id: 'ev-71', minute: 31, type: 'GOAL', team: 'home', player: 'Bernardo Silva' },
      { id: 'ev-72', minute: 42, type: 'GOAL', team: 'away', player: 'Erling Haaland' },
      { id: 'ev-73', minute: 67, type: 'GOAL', team: 'home', player: 'Cristiano Ronaldo' },
      { id: 'ev-74', minute: 86, type: 'GOAL', team: 'away', player: 'Erling Haaland' }
    ],
    stats: { possession: [55, 45], shots: [16, 14], shotsOnTarget: [6, 6], expectedGoals: [1.9, 1.8], fouls: [10, 11], corners: [6, 5], offsides: [2, 1], yellowCards: [2, 2], redCards: [0, 0], passes: [530, 420], passAccuracy: [86, 82] }
  },
  {
    id: 'unl-wal-den-0510',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'wal2', name: 'Wales', shortName: 'Wales', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png', score: 1, color: '#D30731' },
    awayTeam: { id: 'den2', name: 'Đan Mạch', shortName: 'Đan Mạch', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/den.png', score: 2, color: '#C60C30' },
    status: 'SCHEDULED',
    startTime: '2026-10-05T01:45:00+07:00',
    stadium: 'Cardiff City Stadium',
    city: 'Cardiff',
    referee: 'Anthony Taylor',
    events: [
      { id: 'ev-75', minute: 33, type: 'GOAL', team: 'away', player: 'Christian Eriksen' },
      { id: 'ev-76', minute: 60, type: 'GOAL', team: 'away', player: 'Jonas Wind' },
      { id: 'ev-77', minute: 75, type: 'PENALTY_GOAL', team: 'home', player: 'Harry Wilson' }
    ],
    stats: { possession: [46, 54], shots: [10, 13], shotsOnTarget: [3, 5], expectedGoals: [1.1, 1.7], fouls: [12, 10], corners: [4, 6], offsides: [1, 2], yellowCards: [2, 1], redCards: [0, 0], passes: [410, 490], passAccuracy: [80, 84] }
  },
  {
    id: 'unl-irl-isr-0510',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'irl2', name: 'CH Ireland', shortName: 'Ireland', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/irl.png', score: 1, color: '#169B62' },
    awayTeam: { id: 'isr2', name: 'Israel', shortName: 'Israel', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/isr.png', score: 1, color: '#0038B8' },
    status: 'SCHEDULED',
    startTime: '2026-10-05T01:45:00+07:00',
    stadium: 'Aviva Stadium',
    city: 'Dublin',
    referee: 'Halil Umut Meler',
    events: [
      { id: 'ev-78', minute: 47, type: 'GOAL', team: 'home', player: 'Evan Ferguson' },
      { id: 'ev-79', minute: 81, type: 'GOAL', team: 'away', player: 'Oscar Gloukh' }
    ],
    stats: { possession: [51, 49], shots: [11, 10], shotsOnTarget: [4, 4], expectedGoals: [1.3, 1.2], fouls: [13, 11], corners: [5, 4], offsides: [2, 1], yellowCards: [2, 2], redCards: [0, 0], passes: [450, 430], passAccuracy: [81, 80] }
  },

  // Đêm 05/10 - Rạng sáng 06/10/2026
  {
    id: 'unl-cyp-lva-0510',
    leagueId: 'unl',
    round: 'Nations League - League C',
    homeTeam: { id: 'cyp2', name: 'Síp', shortName: 'Síp', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/cyp.png', score: 2, color: '#D47600' },
    awayTeam: { id: 'lva2', name: 'Latvia', shortName: 'Latvia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/lva.png', score: 1, color: '#9E3039' },
    status: 'SCHEDULED',
    startTime: '2026-10-05T23:00:00+07:00',
    stadium: 'GSP Stadium',
    city: 'Nicosia',
    referee: 'Horațiu Feșnic',
    events: [
      { id: 'ev-80', minute: 29, type: 'GOAL', team: 'home', player: 'Ioannis Pittas' },
      { id: 'ev-81', minute: 62, type: 'GOAL', team: 'away', player: 'Vladislavs Gutkovskis' },
      { id: 'ev-82', minute: 74, type: 'GOAL', team: 'home', player: 'Grigoris Kastanos' }
    ],
    stats: { possession: [53, 47], shots: [12, 9], shotsOnTarget: [5, 3], expectedGoals: [1.5, 0.9], fouls: [11, 13], corners: [6, 3], offsides: [1, 2], yellowCards: [2, 3], redCards: [0, 0], passes: [460, 400], passAccuracy: [81, 76] }
  },
  {
    id: 'unl-ita-tur-0610',
    leagueId: 'unl',
    round: 'Nations League - League A',
    homeTeam: { id: 'ita2', name: 'Ý', shortName: 'Ý', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ita.png', score: 2, color: '#0064AA' },
    awayTeam: { id: 'tur2', name: 'Thổ Nhĩ Kỳ', shortName: 'Thổ Nhĩ Kỳ', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/tur.png', score: 1, color: '#E30A17' },
    status: 'SCHEDULED',
    startTime: '2026-10-06T01:45:00+07:00',
    stadium: 'Stadio Olimpico',
    city: 'Rome',
    referee: 'Michael Oliver',
    events: [
      { id: 'ev-83', minute: 24, type: 'GOAL', team: 'home', player: 'Nicolò Barella' },
      { id: 'ev-84', minute: 55, type: 'GOAL', team: 'away', player: 'Barış Alper Yılmaz' },
      { id: 'ev-85', minute: 71, type: 'GOAL', team: 'home', player: 'Federico Chiesa' }
    ],
    stats: { possession: [58, 42], shots: [15, 10], shotsOnTarget: [6, 3], expectedGoals: [1.9, 1.1], fouls: [10, 14], corners: [7, 4], offsides: [2, 1], yellowCards: [1, 3], redCards: [0, 0], passes: [540, 390], passAccuracy: [87, 80] }
  },
  {
    id: 'unl-fra-bel-0610',
    leagueId: 'unl',
    round: 'Nations League - Đại Chiến Đỉnh Cao',
    homeTeam: { id: 'fra2', name: 'Pháp', shortName: 'Pháp', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/fra.png', score: 2, color: '#002654' },
    awayTeam: { id: 'bel2', name: 'Bỉ', shortName: 'Bỉ', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png', score: 0, color: '#ED2939' },
    status: 'SCHEDULED',
    startTime: '2026-10-06T01:45:00+07:00',
    stadium: 'Groupama Stadium',
    city: 'Lyon',
    referee: 'Felix Zwayer',
    events: [
      { id: 'ev-86', minute: 35, type: 'GOAL', team: 'home', player: 'Randal Kolo Muani' },
      { id: 'ev-87', minute: 67, type: 'GOAL', team: 'home', player: 'Ousmane Dembélé' }
    ],
    stats: { possession: [56, 44], shots: [17, 9], shotsOnTarget: [7, 3], expectedGoals: [2.2, 0.8], fouls: [9, 12], corners: [8, 4], offsides: [1, 2], yellowCards: [1, 2], redCards: [0, 0], passes: [540, 420], passAccuracy: [88, 83] }
  },
  {
    id: 'unl-mne-arm-0610',
    leagueId: 'unl',
    round: 'Nations League - League C',
    homeTeam: { id: 'mne2', name: 'Montenegro', shortName: 'Montenegro', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/mne.png', score: 2, color: '#C40308' },
    awayTeam: { id: 'arm2', name: 'Armenia', shortName: 'Armenia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/arm.png', score: 0, color: '#D90012' },
    status: 'SCHEDULED',
    startTime: '2026-10-06T01:45:00+07:00',
    stadium: 'Podgorica City Stadium',
    city: 'Podgorica',
    referee: 'Georgi Kabakov',
    events: [
      { id: 'ev-88', minute: 44, type: 'GOAL', team: 'home', player: 'Stevan Jovetić' },
      { id: 'ev-89', minute: 83, type: 'GOAL', team: 'home', player: 'Adam Marušić' }
    ],
    stats: { possession: [53, 47], shots: [13, 8], shotsOnTarget: [5, 2], expectedGoals: [1.6, 0.6], fouls: [12, 11], corners: [5, 3], offsides: [2, 1], yellowCards: [2, 2], redCards: [0, 0], passes: [470, 410], passAccuracy: [83, 79] }
  },
  {
    id: 'unl-ukr-hun-0610',
    leagueId: 'unl',
    round: 'Nations League - League B',
    homeTeam: { id: 'ukr', name: 'Ukraina', shortName: 'Ukraina', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ukr.png', score: 2, color: '#0057B7' },
    awayTeam: { id: 'hun2', name: 'Hungary', shortName: 'Hungary', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/hun.png', score: 1, color: '#CE2939' },
    status: 'SCHEDULED',
    startTime: '2026-10-06T01:45:00+07:00',
    stadium: 'Wrocław Stadium',
    city: 'Wrocław',
    referee: 'Maurizio Mariani',
    events: [
      { id: 'ev-90', minute: 38, type: 'GOAL', team: 'home', player: 'Artem Dovbyk' },
      { id: 'ev-91', minute: 65, type: 'GOAL', team: 'away', player: 'Barnabás Varga' },
      { id: 'ev-92', minute: 78, type: 'GOAL', team: 'home', player: 'Mykhailo Mudryk' }
    ],
    stats: { possession: [52, 48], shots: [14, 11], shotsOnTarget: [5, 4], expectedGoals: [1.8, 1.2], fouls: [10, 13], corners: [6, 4], offsides: [2, 1], yellowCards: [1, 2], redCards: [0, 0], passes: [480, 430], passAccuracy: [84, 80] }
  },
  {
    id: 'unl-nir-geo-0610',
    leagueId: 'unl',
    round: 'Nations League - League C',
    homeTeam: { id: 'nir', name: 'Bắc Ireland', shortName: 'B.Ireland', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/nir.png', score: 1, color: '#006400' },
    awayTeam: { id: 'geo2', name: 'Gruzia', shortName: 'Gruzia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/geo.png', score: 2, color: '#FF0000' },
    status: 'SCHEDULED',
    startTime: '2026-10-06T01:45:00+07:00',
    stadium: 'Windsor Park',
    city: 'Belfast',
    referee: 'Don Robertson',
    events: [
      { id: 'ev-93', minute: 33, type: 'GOAL', team: 'away', player: 'Georges Mikautadze' },
      { id: 'ev-94', minute: 50, type: 'GOAL', team: 'home', player: 'Shea Charles' },
      { id: 'ev-95', minute: 85, type: 'GOAL', team: 'away', player: 'Khvicha Kvaratskhelia' }
    ],
    stats: { possession: [44, 56], shots: [9, 14], shotsOnTarget: [3, 6], expectedGoals: [1.0, 1.8], fouls: [14, 10], corners: [4, 6], offsides: [1, 2], yellowCards: [3, 1], redCards: [0, 0], passes: [380, 490], passAccuracy: [77, 84] }
  },

  // Đêm 09/10 - Rạng sáng 10/10/2026
  {
    id: 'laliga-mal-esp-1010',
    leagueId: 'laliga',
    round: 'La Liga - Vòng 9',
    homeTeam: { id: 'mal', name: 'Malaga', shortName: 'Malaga', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/94.png', score: 1, color: '#0072CE' },
    awayTeam: { id: 'esp-club', name: 'Espanyol', shortName: 'Espanyol', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/88.png', score: 1, color: '#0055A5' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T02:00:00+07:00',
    stadium: 'La Rosaleda',
    city: 'Málaga',
    referee: 'Guillermo Cuadra Fernández',
    events: [
      { id: 'ev-96', minute: 34, type: 'GOAL', team: 'away', player: 'Javi Puado' },
      { id: 'ev-97', minute: 57, type: 'GOAL', team: 'home', player: 'Roberto Fernández' }
    ],
    stats: { possession: [48, 52], shots: [11, 10], shotsOnTarget: [4, 4], expectedGoals: [1.1, 1.2], fouls: [13, 15], corners: [5, 4], offsides: [2, 1], yellowCards: [2, 3], redCards: [0, 0], passes: [430, 460], passAccuracy: [80, 82] }
  },
  {
    id: 'bun-bvb-wer-1010',
    leagueId: 'bundesliga',
    round: 'Bundesliga - Vòng 7',
    homeTeam: { id: 'bvb', name: 'Borussia Dortmund', shortName: 'Dortmund', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png', score: 3, color: '#FDE100' },
    awayTeam: { id: 'wer', name: 'SV Werder Bremen', shortName: 'Bremen', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/137.png', score: 1, color: '#1C8040' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T02:30:00+07:00',
    stadium: 'Signal Iduna Park',
    city: 'Dortmund',
    referee: 'Tobias Stieler',
    events: [
      { id: 'ev-98', minute: 26, type: 'GOAL', team: 'home', player: 'Serhou Guirassy' },
      { id: 'ev-99', minute: 64, type: 'GOAL', team: 'home', player: 'Serhou Guirassy' },
      { id: 'ev-100', minute: 73, type: 'GOAL', team: 'away', player: 'Marvin Ducksch' },
      { id: 'ev-101', minute: 89, type: 'GOAL', team: 'home', player: 'Julian Brandt' }
    ],
    stats: { possession: [62, 38], shots: [18, 9], shotsOnTarget: [8, 3], expectedGoals: [2.5, 0.9], fouls: [9, 11], corners: [7, 3], offsides: [1, 2], yellowCards: [1, 2], redCards: [0, 0], passes: [590, 350], passAccuracy: [87, 78] }
  },

  // Ngày 10/10/2026 (Thứ Bảy)
  {
    id: 'epl-ars-lee-1010',
    leagueId: 'epl',
    round: 'Premier League - Vòng 8',
    homeTeam: { id: 'ars', name: 'Arsenal', shortName: 'Arsenal', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png', score: 3, color: '#EF0107' },
    awayTeam: { id: 'lee', name: 'Leeds United', shortName: 'Leeds', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/357.png', score: 0, color: '#1D428A' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T18:30:00+07:00',
    stadium: 'Emirates Stadium',
    city: 'London',
    referee: 'Anthony Taylor',
    events: [
      { id: 'ev-102', minute: 21, type: 'GOAL', team: 'home', player: 'Bukayo Saka' },
      { id: 'ev-103', minute: 58, type: 'GOAL', team: 'home', player: 'Kai Havertz' },
      { id: 'ev-104', minute: 77, type: 'GOAL', team: 'home', player: 'Gabriel Martinelli' }
    ],
    stats: { possession: [66, 34], shots: [19, 6], shotsOnTarget: [8, 1], expectedGoals: [2.7, 0.4], fouls: [8, 12], corners: [9, 2], offsides: [2, 1], yellowCards: [1, 2], redCards: [0, 0], passes: [640, 310], passAccuracy: [90, 75] }
  },
  {
    id: 'laliga-ray-ath-1010',
    leagueId: 'laliga',
    round: 'La Liga - Vòng 9',
    homeTeam: { id: 'ray', name: 'Rayo Vallecano', shortName: 'Rayo', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/101.png', score: 1, color: '#DE0029' },
    awayTeam: { id: 'ath', name: 'Athletic Bilbao', shortName: 'Athletic', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png', score: 2, color: '#EE2524' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T19:00:00+07:00',
    stadium: 'Campo de Fútbol de Vallecas',
    city: 'Madrid',
    referee: 'César Soto Grado',
    events: [
      { id: 'ev-105', minute: 32, type: 'GOAL', team: 'away', player: 'Nico Williams' },
      { id: 'ev-106', minute: 48, type: 'GOAL', team: 'home', player: 'Jorge de Frutos' },
      { id: 'ev-107', minute: 79, type: 'GOAL', team: 'away', player: 'Iñaki Williams' }
    ],
    stats: { possession: [47, 53], shots: [10, 13], shotsOnTarget: [4, 6], expectedGoals: [1.1, 1.8], fouls: [14, 12], corners: [4, 6], offsides: [2, 1], yellowCards: [3, 2], redCards: [0, 0], passes: [420, 470], passAccuracy: [79, 83] }
  },
  {
    id: 'bun-aug-bay-1010',
    leagueId: 'bundesliga',
    round: 'Bundesliga - Vòng 7',
    homeTeam: { id: 'aug', name: 'FC Augsburg', shortName: 'Augsburg', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3841.png', score: 1, color: '#BA3733' },
    awayTeam: { id: 'bay', name: 'FC Bayern München', shortName: 'Bayern', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png', score: 4, color: '#DC052D' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T20:30:00+07:00',
    stadium: 'WWK Arena',
    city: 'Augsburg',
    referee: 'Felix Brych',
    events: [
      { id: 'ev-108', minute: 18, type: 'GOAL', team: 'away', player: 'Harry Kane' },
      { id: 'ev-109', minute: 39, type: 'GOAL', team: 'away', player: 'Jamal Musiala' },
      { id: 'ev-110', minute: 52, type: 'PENALTY_GOAL', team: 'away', player: 'Harry Kane' },
      { id: 'ev-111', minute: 61, type: 'GOAL', team: 'home', player: 'Phillip Tietz' },
      { id: 'ev-112', minute: 84, type: 'GOAL', team: 'away', player: 'Michael Olise' }
    ],
    stats: { possession: [35, 65], shots: [8, 21], shotsOnTarget: [3, 10], expectedGoals: [0.8, 3.4], fouls: [12, 7], corners: [3, 9], offsides: [1, 2], yellowCards: [2, 1], redCards: [0, 0], passes: [320, 640], passAccuracy: [74, 91] }
  },
  {
    id: 'bun-mai-lev-1010',
    leagueId: 'bundesliga',
    round: 'Bundesliga - Vòng 7',
    homeTeam: { id: 'mai', name: '1. FSV Mainz 05', shortName: 'Mainz 05', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/134.png', score: 1, color: '#C91316' },
    awayTeam: { id: 'lev', name: 'Bayer 04 Leverkusen', shortName: 'Leverkusen', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png', score: 3, color: '#E32219' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T20:30:00+07:00',
    stadium: 'Mewa Arena',
    city: 'Mainz',
    referee: 'Daniel Siebert',
    events: [
      { id: 'ev-113', minute: 25, type: 'GOAL', team: 'away', player: 'Florian Wirtz' },
      { id: 'ev-114', minute: 49, type: 'GOAL', team: 'away', player: 'Victor Boniface' },
      { id: 'ev-115', minute: 70, type: 'GOAL', team: 'home', player: 'Jonathan Burkardt' },
      { id: 'ev-116', minute: 82, type: 'GOAL', team: 'away', player: 'Victor Boniface' }
    ],
    stats: { possession: [41, 59], shots: [9, 17], shotsOnTarget: [3, 7], expectedGoals: [1.0, 2.6], fouls: [13, 9], corners: [4, 7], offsides: [2, 1], yellowCards: [3, 1], redCards: [0, 0], passes: [380, 560], passAccuracy: [78, 88] }
  },
  {
    id: 'bun-hof-hsv-1010',
    leagueId: 'bundesliga',
    round: 'Bundesliga - Vòng 7',
    homeTeam: { id: 'hof', name: 'TSG Hoffenheim', shortName: 'Hoffenheim', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8157.png', score: 2, color: '#005CA9' },
    awayTeam: { id: 'hsv', name: 'Hamburger SV', shortName: 'Hamburg', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/125.png', score: 1, color: '#003399' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T20:30:00+07:00',
    stadium: 'PreZero Arena',
    city: 'Sinsheim',
    referee: 'Sven Jablonski',
    events: [
      { id: 'ev-117', minute: 33, type: 'PENALTY_GOAL', team: 'home', player: 'Andrej Kramarić' },
      { id: 'ev-118', minute: 51, type: 'GOAL', team: 'away', player: 'Robert Glatzel' },
      { id: 'ev-119', minute: 68, type: 'GOAL', team: 'home', player: 'Maximilian Beier' }
    ],
    stats: { possession: [52, 48], shots: [13, 11], shotsOnTarget: [5, 4], expectedGoals: [1.7, 1.2], fouls: [11, 13], corners: [6, 4], offsides: [1, 2], yellowCards: [2, 2], redCards: [0, 0], passes: [470, 430], passAccuracy: [83, 80] }
  },
  {
    id: 'bun-uni-elv-1010',
    leagueId: 'bundesliga',
    round: 'Bundesliga - Vòng 7',
    homeTeam: { id: 'uni', name: 'Union Berlin', shortName: 'Union Berlin', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/594.png', score: 2, color: '#EB1923' },
    awayTeam: { id: 'elv', name: 'SV Elversberg', shortName: 'Elversberg', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/7097.png', score: 0, color: '#111111' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T20:30:00+07:00',
    stadium: 'Stadion An der Alten Försterei',
    city: 'Berlin',
    referee: 'Robert Hartmann',
    events: [
      { id: 'ev-120', minute: 42, type: 'GOAL', team: 'home', player: 'Benedict Hollerbach' },
      { id: 'ev-121', minute: 76, type: 'GOAL', team: 'home', player: 'Yorbe Vertessen' }
    ],
    stats: { possession: [58, 42], shots: [15, 6], shotsOnTarget: [6, 1], expectedGoals: [2.0, 0.4], fouls: [10, 11], corners: [7, 2], offsides: [2, 1], yellowCards: [1, 2], redCards: [0, 0], passes: [510, 360], passAccuracy: [85, 76] }
  },
  {
    id: 'epl-che-bou-1010',
    leagueId: 'epl',
    round: 'Premier League - Vòng 8',
    homeTeam: { id: 'che', name: 'Chelsea', shortName: 'Chelsea', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png', score: 2, color: '#034694' },
    awayTeam: { id: 'bou', name: 'Bournemouth', shortName: 'Bournemouth', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/349.png', score: 1, color: '#DA291C' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T21:00:00+07:00',
    stadium: 'Stamford Bridge',
    city: 'London',
    referee: 'Simon Hooper',
    events: [
      { id: 'ev-122', minute: 34, type: 'PENALTY_GOAL', team: 'home', player: 'Cole Palmer' },
      { id: 'ev-123', minute: 55, type: 'GOAL', team: 'away', player: 'Antoine Semenyo' },
      { id: 'ev-124', minute: 63, type: 'GOAL', team: 'home', player: 'Nicolas Jackson' }
    ],
    stats: { possession: [61, 39], shots: [16, 10], shotsOnTarget: [6, 3], expectedGoals: [2.2, 1.1], fouls: [10, 13], corners: [7, 4], offsides: [1, 2], yellowCards: [2, 3], redCards: [0, 0], passes: [580, 370], passAccuracy: [88, 79] }
  },
  {
    id: 'epl-avl-bre-1010',
    leagueId: 'epl',
    round: 'Premier League - Vòng 8',
    homeTeam: { id: 'avl-club', name: 'Aston Villa', shortName: 'Aston Villa', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png', score: 2, color: '#95BFE5' },
    awayTeam: { id: 'bre', name: 'Brentford', shortName: 'Brentford', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/337.png', score: 1, color: '#E30613' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T21:00:00+07:00',
    stadium: 'Villa Park',
    city: 'Birmingham',
    referee: 'Michael Salisbury',
    events: [
      { id: 'ev-125', minute: 29, type: 'GOAL', team: 'home', player: 'Ollie Watkins' },
      { id: 'ev-126', minute: 45, type: 'GOAL', team: 'away', player: 'Bryan Mbeumo' },
      { id: 'ev-127', minute: 71, type: 'GOAL', team: 'home', player: 'Morgan Rogers' }
    ],
    stats: { possession: [54, 46], shots: [14, 11], shotsOnTarget: [5, 4], expectedGoals: [1.8, 1.3], fouls: [9, 12], corners: [6, 5], offsides: [2, 1], yellowCards: [1, 2], redCards: [0, 0], passes: [500, 420], passAccuracy: [85, 81] }
  },
  {
    id: 'epl-ips-ful-1010',
    leagueId: 'epl',
    round: 'Premier League - Vòng 8',
    homeTeam: { id: 'ips', name: 'Ipswich Town', shortName: 'Ipswich', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/371.png', score: 1, color: '#004B87' },
    awayTeam: { id: 'ful', name: 'Fulham', shortName: 'Fulham', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/370.png', score: 1, color: '#000000' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T21:00:00+07:00',
    stadium: 'Portman Road',
    city: 'Ipswich',
    referee: 'Peter Bankes',
    events: [
      { id: 'ev-128', minute: 43, type: 'GOAL', team: 'home', player: 'Liam Delap' },
      { id: 'ev-129', minute: 60, type: 'GOAL', team: 'away', player: 'Emile Smith Rowe' }
    ],
    stats: { possession: [47, 53], shots: [10, 12], shotsOnTarget: [3, 4], expectedGoals: [1.0, 1.3], fouls: [12, 11], corners: [4, 5], offsides: [1, 1], yellowCards: [2, 2], redCards: [0, 0], passes: [410, 460], passAccuracy: [80, 83] }
  },
  {
    id: 'epl-sun-bha-1010',
    leagueId: 'epl',
    round: 'Premier League - Vòng 8',
    homeTeam: { id: 'sun', name: 'Sunderland', shortName: 'Sunderland', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/366.png', score: 1, color: '#EB172B' },
    awayTeam: { id: 'bha', name: 'Brighton', shortName: 'Brighton', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/331.png', score: 2, color: '#0057B8' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T21:00:00+07:00',
    stadium: 'Stadium of Light',
    city: 'Sunderland',
    referee: 'Darren England',
    events: [
      { id: 'ev-130', minute: 23, type: 'GOAL', team: 'away', player: 'Kaoru Mitoma' },
      { id: 'ev-131', minute: 59, type: 'GOAL', team: 'away', player: 'Danny Welbeck' },
      { id: 'ev-132', minute: 67, type: 'GOAL', team: 'home', player: 'Jack Clarke' }
    ],
    stats: { possession: [43, 57], shots: [9, 15], shotsOnTarget: [3, 6], expectedGoals: [0.9, 1.9], fouls: [13, 9], corners: [4, 7], offsides: [2, 2], yellowCards: [2, 1], redCards: [0, 0], passes: [380, 520], passAccuracy: [78, 86] }
  },
  {
    id: 'laliga-ala-atm-1010',
    leagueId: 'laliga',
    round: 'La Liga - Vòng 9',
    homeTeam: { id: 'ala', name: 'Deportivo Alavés', shortName: 'Alavés', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/96.png', score: 0, color: '#0055A5' },
    awayTeam: { id: 'atm', name: 'Atlético de Madrid', shortName: 'Atlético', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png', score: 2, color: '#CB3524' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T21:15:00+07:00',
    stadium: 'Mendizorrotza',
    city: 'Vitoria-Gasteiz',
    referee: 'José María Sánchez Martínez',
    events: [
      { id: 'ev-133', minute: 37, type: 'GOAL', team: 'away', player: 'Antoine Griezmann' },
      { id: 'ev-134', minute: 75, type: 'GOAL', team: 'away', player: 'Julián Álvarez' }
    ],
    stats: { possession: [42, 58], shots: [7, 14], shotsOnTarget: [2, 5], expectedGoals: [0.5, 1.8], fouls: [15, 11], corners: [3, 6], offsides: [1, 2], yellowCards: [3, 2], redCards: [0, 0], passes: [370, 520], passAccuracy: [77, 85] }
  },
  {
    id: 'epl-mun-tot-1010',
    leagueId: 'epl',
    round: 'Premier League - Siêu Đại Chiến Super Saturday',
    homeTeam: { id: 'mun', name: 'Manchester United', shortName: 'Man United', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png', score: 2, color: '#DA291C' },
    awayTeam: { id: 'tot', name: 'Tottenham Hotspur', shortName: 'Tottenham', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png', score: 2, color: '#132257' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T23:30:00+07:00',
    stadium: 'Old Trafford',
    city: 'Manchester',
    referee: 'Michael Oliver',
    events: [
      { id: 'ev-135', minute: 27, type: 'GOAL', team: 'away', player: 'Son Heung-min' },
      { id: 'ev-136', minute: 38, type: 'PENALTY_GOAL', team: 'home', player: 'Bruno Fernandes' },
      { id: 'ev-137', minute: 66, type: 'GOAL', team: 'home', player: 'Marcus Rashford' },
      { id: 'ev-138', minute: 81, type: 'GOAL', team: 'away', player: 'Dominic Solanke' }
    ],
    stats: { possession: [51, 49], shots: [15, 14], shotsOnTarget: [6, 5], expectedGoals: [1.9, 1.8], fouls: [11, 12], corners: [6, 6], offsides: [2, 2], yellowCards: [2, 2], redCards: [0, 0], passes: [480, 460], passAccuracy: [84, 83] }
  },
  {
    id: 'laliga-bar-get-1010',
    leagueId: 'laliga',
    round: 'La Liga - Vòng 9',
    homeTeam: { id: 'bar', name: 'Barcelona', shortName: 'Barcelona', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png', score: 3, color: '#A50044' },
    awayTeam: { id: 'get', name: 'Getafe', shortName: 'Getafe', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/98.png', score: 0, color: '#005999' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T23:30:00+07:00',
    stadium: 'Estadi Olímpic Lluís Companys',
    city: 'Barcelona',
    referee: 'Juan Martínez Munuera',
    events: [
      { id: 'ev-139', minute: 19, type: 'GOAL', team: 'home', player: 'Robert Lewandowski' },
      { id: 'ev-140', minute: 54, type: 'GOAL', team: 'home', player: 'Robert Lewandowski' },
      { id: 'ev-141', minute: 78, type: 'GOAL', team: 'home', player: 'Lamine Yamal' }
    ],
    stats: { possession: [72, 28], shots: [18, 5], shotsOnTarget: [8, 1], expectedGoals: [2.8, 0.3], fouls: [8, 16], corners: [8, 2], offsides: [1, 1], yellowCards: [1, 4], redCards: [0, 0], passes: [710, 260], passAccuracy: [92, 70] }
  },
  {
    id: 'bun-rbl-sge-1010',
    leagueId: 'bundesliga',
    round: 'Bundesliga - Vòng 7',
    homeTeam: { id: 'rbl', name: 'RB Leipzig', shortName: 'RB Leipzig', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png', score: 2, color: '#DD0741' },
    awayTeam: { id: 'sge', name: 'Eintracht Frankfurt', shortName: 'Frankfurt', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png', score: 2, color: '#E1000F' },
    status: 'SCHEDULED',
    startTime: '2026-10-10T23:30:00+07:00',
    stadium: 'Red Bull Arena',
    city: 'Leipzig',
    referee: 'Christian Dingert',
    events: [
      { id: 'ev-142', minute: 22, type: 'GOAL', team: 'home', player: 'Benjamin Šeško' },
      { id: 'ev-143', minute: 44, type: 'GOAL', team: 'away', player: 'Omar Marmoush' },
      { id: 'ev-144', minute: 65, type: 'GOAL', team: 'home', player: 'Xavi Simons' },
      { id: 'ev-145', minute: 85, type: 'PENALTY_GOAL', team: 'away', player: 'Omar Marmoush' }
    ],
    stats: { possession: [56, 44], shots: [16, 13], shotsOnTarget: [6, 5], expectedGoals: [2.1, 1.9], fouls: [10, 12], corners: [7, 5], offsides: [2, 1], yellowCards: [2, 2], redCards: [0, 0], passes: [520, 410], passAccuracy: [86, 81] }
  },

  // Đêm 10/10 - Rạng sáng 11/10/2026 (02:00)
  {
    id: 'laliga-rma-vil-1110',
    leagueId: 'laliga',
    round: 'La Liga - Trận Cầu Tâm Điểm',
    homeTeam: { id: 'rma', name: 'Real Madrid', shortName: 'Real Madrid', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png', score: 3, color: '#FEBE10' },
    awayTeam: { id: 'vil', name: 'Villarreal', shortName: 'Villarreal', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/102.png', score: 1, color: '#FFE600' },
    status: 'SCHEDULED',
    startTime: '2026-10-11T02:00:00+07:00',
    stadium: 'Santiago Bernabéu',
    city: 'Madrid',
    referee: 'Jesús Gil Manzano',
    events: [
      { id: 'ev-146', minute: 28, type: 'GOAL', team: 'home', player: 'Vinícius Jr' },
      { id: 'ev-147', minute: 40, type: 'GOAL', team: 'away', player: 'Álex Baena' },
      { id: 'ev-148', minute: 59, type: 'GOAL', team: 'home', player: 'Kylian Mbappé' },
      { id: 'ev-149', minute: 73, type: 'GOAL', team: 'home', player: 'Vinícius Jr' }
    ],
    stats: { possession: [64, 36], shots: [18, 8], shotsOnTarget: [8, 3], expectedGoals: [2.7, 0.8], fouls: [8, 14], corners: [8, 3], offsides: [1, 2], yellowCards: [1, 3], redCards: [0, 0], passes: [620, 350], passAccuracy: [90, 78] }
  }
];
