import { Match } from '../types/football';

export const NATIONS_LEAGUE_2026_MATCHES: Match[] = [
  // ==========================================
  // KẾT QUẢ VỪA DIỄN RA (FINISHED)
  // ==========================================
  {
    id: 'unl-cro-eng-0410',
    leagueId: 'unl',
    round: 'Nations League - Bảng A (Đại chiến)',
    homeTeam: {
      id: 'cro',
      name: 'Croatia',
      shortName: 'Croatia',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/cro.png',
      score: 0,
      color: '#C6363C'
    },
    awayTeam: {
      id: 'eng',
      name: 'Anh',
      shortName: 'Anh',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/eng.png',
      score: 7,
      color: '#002654'
    },
    status: 'FINISHED',
    startTime: '2026-10-04T01:45:00+07:00',
    stadium: 'Stadion Maksimir',
    city: 'Zagreb',
    referee: 'Clément Turpin (FRA)',
    events: [
      { id: 'ev-ce-1', minute: 12, type: 'GOAL', team: 'away', player: 'Harry Kane', detail: 'Đệm bóng cận thành từ đường căng ngang hiểm hóc của Saka' },
      { id: 'ev-ce-2', minute: 22, type: 'GOAL', team: 'away', player: 'Anthony Gordon', detail: 'Đá bồi cận thành nhân đôi cách biệt' },
      { id: 'ev-ce-3', minute: 34, type: 'PENALTY_GOAL', team: 'away', player: 'Harry Kane', detail: 'Đá phạt đền lạnh lùng đánh lừa thủ môn Croatia' },
      { id: 'ev-ce-4', minute: 45, extraMinute: 1, type: 'GOAL', team: 'away', player: 'Anthony Gordon', detail: 'Hoàn tất cú đúp với pha đệm bóng một chạm phút bù giờ' },
      { id: 'ev-ce-5', minute: 58, type: 'GOAL', team: 'away', player: 'Harry Kane', detail: 'Hoàn tất cú hat-trick siêu đẳng với pha dứt điểm chìm' },
      { id: 'ev-ce-6', minute: 67, type: 'GOAL', team: 'away', player: 'Jude Bellingham', detail: 'Sút xa sấm sét găm thẳng góc cao không thể cản phá' },
      { id: 'ev-ce-7', minute: 81, type: 'GOAL', team: 'away', player: 'Bukayo Saka', detail: 'Độc diễn qua hai hậu vệ cứa lòng chân trái ấn định 7-0' }
    ],
    stats: {
      possession: [38, 62],
      shots: [5, 21],
      shotsOnTarget: [1, 14],
      expectedGoals: [0.4, 4.8],
      fouls: [14, 7],
      corners: [2, 9],
      offsides: [2, 1],
      yellowCards: [3, 0],
      redCards: [0, 0],
      passes: [340, 680],
      passAccuracy: [76, 92]
    }
  },
  {
    id: 'unl-esp-cze-0410',
    leagueId: 'unl',
    round: 'Nations League - Bảng A',
    homeTeam: {
      id: 'esp',
      name: 'Tây Ban Nha',
      shortName: 'Tây Ban Nha',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/esp.png',
      score: 3,
      color: '#C6363C'
    },
    awayTeam: {
      id: 'cze',
      name: 'CH Séc',
      shortName: 'CH Séc',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/cze.png',
      score: 1,
      color: '#002B7F'
    },
    status: 'FINISHED',
    startTime: '2026-10-04T01:45:00+07:00',
    stadium: 'Estadio Santiago Bernabéu',
    city: 'Madrid',
    referee: 'Daniele Orsato (ITA)',
    events: [
      { id: 'ev-ec-1', minute: 22, type: 'GOAL', team: 'home', player: 'Lamine Yamal', detail: 'Bàn thắng sớm tuyệt mỹ từ pha cứa lòng chân trái' },
      { id: 'ev-ec-2', minute: 31, type: 'GOAL', team: 'away', player: 'Patrik Schick', detail: 'Đánh đầu dũng mãnh gỡ hòa cho CH Séc' },
      { id: 'ev-ec-3', minute: 48, type: 'GOAL', team: 'home', player: 'Dani Olmo', detail: 'Xoay compa dứt điểm chìm hiểm hóc vào góc xa' },
      { id: 'ev-ec-4', minute: 75, type: 'GOAL', team: 'home', player: 'Mikel Oyarzabal', detail: 'Băng vào tiếp bóng một chạm ấn định tỉ số 3-1' }
    ],
    stats: {
      possession: [68, 32],
      shots: [19, 7],
      shotsOnTarget: [9, 2],
      expectedGoals: [2.7, 0.8],
      fouls: [9, 13],
      corners: [8, 3],
      offsides: [1, 2],
      yellowCards: [1, 3],
      redCards: [0, 0],
      passes: [690, 280],
      passAccuracy: [91, 74]
    }
  },
  {
    id: 'unl-sui-svn-0410',
    leagueId: 'unl',
    round: 'Nations League - Bảng B',
    homeTeam: {
      id: 'sui',
      name: 'Thụy Sĩ',
      shortName: 'Thụy Sĩ',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/sui.png',
      score: 2,
      color: '#D52B1E'
    },
    awayTeam: {
      id: 'svn',
      name: 'Slovenia',
      shortName: 'Slovenia',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/svn.png',
      score: 1,
      color: '#005DA4'
    },
    status: 'FINISHED',
    startTime: '2026-10-04T01:45:00+07:00',
    stadium: 'St. Jakob-Park',
    city: 'Basel',
    referee: 'Slavko Vinčić (SVN)',
    events: [
      { id: 'ev-ss-1', minute: 28, type: 'GOAL', team: 'home', player: 'Breel Embolo', detail: 'Tì đè dũng mãnh dứt điểm chân phải mở tỉ số cho Thụy Sĩ' },
      { id: 'ev-ss-2', minute: 55, type: 'GOAL', team: 'away', player: 'Benjamin Šeško', detail: 'Pha chớp thời cơ dứt điểm chân phải gỡ hòa 1-1 cho Slovenia' },
      { id: 'ev-ss-3', minute: 73, type: 'GOAL', team: 'home', player: 'Zeki Amdouni', detail: 'Cứa lòng chân trái hiểm hóc ấn định chiến thắng 2-1 cho Thụy Sĩ' }
    ],
    stats: {
      possession: [57, 43],
      shots: [15, 9],
      shotsOnTarget: [6, 4],
      expectedGoals: [1.9, 1.1],
      fouls: [11, 15],
      corners: [6, 4],
      offsides: [2, 1],
      yellowCards: [2, 3],
      redCards: [0, 0],
      passes: [510, 390],
      passAccuracy: [85, 78]
    }
  },
  {
    id: 'unl-mkd-sco-0410',
    leagueId: 'unl',
    round: 'Nations League - Bảng B',
    homeTeam: {
      id: 'mkd',
      name: 'Bắc Macedonia',
      shortName: 'Bắc Macedonia',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/mkd.png',
      score: 0,
      color: '#D20000'
    },
    awayTeam: {
      id: 'sco',
      name: 'Scotland',
      shortName: 'Scotland',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/sco.png',
      score: 2,
      color: '#002B7F'
    },
    status: 'FINISHED',
    startTime: '2026-10-04T01:45:00+07:00',
    stadium: 'Toše Proeski Arena',
    city: 'Skopje',
    referee: 'Igor Pajac (CRO)',
    events: [
      { id: 'ev-ms-1', minute: 34, type: 'GOAL', team: 'away', player: 'Scott McTominay', detail: 'Đánh đầu chuẩn xác vào góc xa' },
      { id: 'ev-ms-2', minute: 69, type: 'GOAL', team: 'away', player: 'John McGinn', detail: 'Dứt điểm quyết đoán trong vòng cấm' }
    ],
    stats: {
      possession: [46, 54],
      shots: [7, 13],
      shotsOnTarget: [2, 7],
      expectedGoals: [0.6, 1.8],
      fouls: [12, 10],
      corners: [3, 7],
      offsides: [1, 2],
      yellowCards: [2, 1],
      redCards: [0, 0],
      passes: [410, 480],
      passAccuracy: [79, 84]
    }
  },
  {
    id: 'unl-fin-alb-0410',
    leagueId: 'unl',
    round: 'Nations League - Bảng B',
    homeTeam: {
      id: 'fin',
      name: 'Phần Lan',
      shortName: 'Phần Lan',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/fin.png',
      score: 2,
      color: '#002F6C'
    },
    awayTeam: {
      id: 'alb',
      name: 'Albania',
      shortName: 'Albania',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/alb.png',
      score: 1,
      color: '#C6363C'
    },
    status: 'FINISHED',
    startTime: '2026-10-04T01:45:00+07:00',
    stadium: 'Helsinki Olympic Stadium',
    city: 'Helsinki',
    referee: 'Maurizio Mariani (ITA)',
    events: [
      { id: 'ev-fa-1', minute: 24, type: 'GOAL', team: 'home', player: 'Teemu Pukki' },
      { id: 'ev-fa-2', minute: 61, type: 'GOAL', team: 'away', player: 'Armando Broja' },
      { id: 'ev-fa-3', minute: 79, type: 'GOAL', team: 'home', player: 'Joel Pohjanpalo' }
    ],
    stats: {
      possession: [51, 49],
      shots: [11, 10],
      shotsOnTarget: [5, 4],
      expectedGoals: [1.4, 1.2],
      fouls: [10, 13],
      corners: [5, 4],
      offsides: [1, 1],
      yellowCards: [1, 2],
      redCards: [0, 0],
      passes: [460, 440],
      passAccuracy: [82, 81]
    }
  },
  {
    id: 'unl-blr-smr-0310',
    leagueId: 'unl',
    round: 'Nations League - Bảng D',
    homeTeam: {
      id: 'blr',
      name: 'Belarus',
      shortName: 'Belarus',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/blr.png',
      score: 4,
      color: '#C6363C'
    },
    awayTeam: {
      id: 'smr',
      name: 'San Marino',
      shortName: 'San Marino',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/smr.png',
      score: 0,
      color: '#5B92E5'
    },
    status: 'FINISHED',
    startTime: '2026-10-03T23:00:00+07:00',
    stadium: 'Dinamo Stadium',
    city: 'Minsk',
    referee: 'Donatas Rumšas (LTU)',
    events: [
      { id: 'ev-bs-1', minute: 15, type: 'GOAL', team: 'home', player: 'Max Ebong' },
      { id: 'ev-bs-2', minute: 38, type: 'GOAL', team: 'home', player: 'Vitali Lisakovich' },
      { id: 'ev-bs-3', minute: 53, type: 'GOAL', team: 'home', player: 'Max Ebong' },
      { id: 'ev-bs-4', minute: 84, type: 'GOAL', team: 'home', player: 'Pavel Savitski' }
    ],
    stats: {
      possession: [72, 28],
      shots: [22, 2],
      shotsOnTarget: [10, 0],
      expectedGoals: [3.4, 0.1],
      fouls: [6, 16],
      corners: [9, 1],
      offsides: [3, 0],
      yellowCards: [0, 4],
      redCards: [0, 0],
      passes: [650, 180],
      passAccuracy: [89, 58]
    }
  },
  {
    id: 'unl-est-lux-0310',
    leagueId: 'unl',
    round: 'Nations League - Bảng C',
    homeTeam: {
      id: 'est',
      name: 'Estonia',
      shortName: 'Estonia',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/est.png',
      score: 1,
      color: '#0072CE'
    },
    awayTeam: {
      id: 'lux',
      name: 'Luxembourg',
      shortName: 'Luxembourg',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/lux.png',
      score: 0,
      color: '#00A3E0'
    },
    status: 'FINISHED',
    startTime: '2026-10-03T23:00:00+07:00',
    stadium: 'A. Le Coq Arena',
    city: 'Tallinn',
    referee: 'Juxhin Xhaja (ALB)',
    events: [
      { id: 'ev-el-1', minute: 49, type: 'GOAL', team: 'home', player: 'Rauno Sappinen' }
    ],
    stats: {
      possession: [45, 55],
      shots: [9, 11],
      shotsOnTarget: [4, 3],
      expectedGoals: [1.0, 0.9],
      fouls: [13, 11],
      corners: [4, 6],
      offsides: [2, 1],
      yellowCards: [2, 2],
      redCards: [0, 0],
      passes: [390, 470],
      passAccuracy: [77, 82]
    }
  },
  {
    id: 'unl-isl-bul-0410',
    leagueId: 'unl',
    round: 'Nations League - Bảng C',
    homeTeam: {
      id: 'isl',
      name: 'Iceland',
      shortName: 'Iceland',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/isl.png',
      score: 3,
      color: '#02529C'
    },
    awayTeam: {
      id: 'bul',
      name: 'Bulgaria',
      shortName: 'Bulgaria',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bul.png',
      score: 0,
      color: '#00966E'
    },
    status: 'FINISHED',
    startTime: '2026-10-04T01:45:00+07:00',
    stadium: 'Laugardalsvöllur',
    city: 'Reykjavík',
    referee: 'Luka Bilbija (BIH)',
    events: [
      { id: 'ev-ib-1', minute: 19, type: 'GOAL', team: 'home', player: 'Albert Guðmundsson' },
      { id: 'ev-ib-2', minute: 64, type: 'GOAL', team: 'home', player: 'Albert Guðmundsson' },
      { id: 'ev-ib-3', minute: 78, type: 'GOAL', team: 'home', player: 'Hákon Arnar Haraldsson' }
    ],
    stats: {
      possession: [60, 40],
      shots: [16, 6],
      shotsOnTarget: [8, 1],
      expectedGoals: [2.3, 0.5],
      fouls: [8, 14],
      corners: [7, 2],
      offsides: [1, 2],
      yellowCards: [1, 3],
      redCards: [0, 0],
      passes: [540, 360],
      passAccuracy: [86, 75]
    }
  },

  // ==========================================
  // CÁC TRẬN CẦU ĐINH NGÀY HÔM TRƯỚC (FINISHED)
  // ==========================================
  {
    id: 'unl-fra-ita-0310',
    leagueId: 'unl',
    round: 'Nations League - Đại chiến Bảng A',
    homeTeam: {
      id: 'fra',
      name: 'Pháp',
      shortName: 'Pháp',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/fra.png',
      score: 1,
      color: '#002654'
    },
    awayTeam: {
      id: 'ita',
      name: 'Italia',
      shortName: 'Italia',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ita.png',
      score: 1,
      color: '#005DA4'
    },
    status: 'FINISHED',
    startTime: '2026-10-03T01:45:00+07:00',
    stadium: 'Parc des Princes',
    city: 'Paris',
    referee: 'Anthony Taylor (ENG)',
    events: [
      { id: 'ev-fi-1', minute: 38, type: 'GOAL', team: 'home', player: 'Randal Kolo Muani', detail: 'Đánh đầu cận thành mở tỉ số cho Pháp' },
      { id: 'ev-fi-2', minute: 64, type: 'GOAL', team: 'away', player: 'Mateo Retegui', detail: 'Tì đè dứt điểm chéo góc gỡ hòa 1-1 cho Ý' }
    ],
    stats: {
      possession: [52, 48],
      shots: [14, 13],
      shotsOnTarget: [5, 5],
      expectedGoals: [1.6, 1.5],
      fouls: [11, 12],
      corners: [6, 5],
      offsides: [2, 2],
      yellowCards: [2, 2],
      redCards: [0, 0],
      passes: [530, 490],
      passAccuracy: [87, 85]
    }
  },
  {
    id: 'unl-bel-tur-0310',
    leagueId: 'unl',
    round: 'Nations League - Bảng A',
    homeTeam: {
      id: 'bel',
      name: 'Bỉ',
      shortName: 'Bỉ',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/bel.png',
      score: 3,
      color: '#ED2939'
    },
    awayTeam: {
      id: 'tur',
      name: 'Thổ Nhĩ Kỳ',
      shortName: 'Thổ Nhĩ Kỳ',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/tur.png',
      score: 0,
      color: '#E30A17'
    },
    status: 'FINISHED',
    startTime: '2026-10-03T01:45:00+07:00',
    stadium: 'King Baudouin Stadium',
    city: 'Brussels',
    referee: 'Felix Zwayer (GER)',
    events: [
      { id: 'ev-bt-1', minute: 14, type: 'GOAL', team: 'home', player: 'Kevin De Bruyne', detail: 'Đá phạt hàng rào đưa bóng vào góc cao mở tỉ số' },
      { id: 'ev-bt-2', minute: 42, type: 'GOAL', team: 'home', player: 'Romelu Lukaku', detail: 'Tì đè dũng mãnh dứt điểm chân trái nhân đôi cách biệt' },
      { id: 'ev-bt-3', minute: 78, type: 'GOAL', team: 'home', player: 'Jeremy Doku', detail: 'Đột phá tốc độ solo qua hai hậu vệ ghi bàn ấn định 3-0' }
    ],
    stats: {
      possession: [59, 41],
      shots: [16, 8],
      shotsOnTarget: [7, 2],
      expectedGoals: [2.5, 0.6],
      fouls: [9, 14],
      corners: [7, 3],
      offsides: [1, 1],
      yellowCards: [1, 3],
      redCards: [0, 0],
      passes: [570, 390],
      passAccuracy: [88, 77]
    }
  },
  {
    id: 'unl-ger-srb-0310',
    leagueId: 'unl',
    round: 'Nations League - Bảng A',
    homeTeam: {
      id: 'ger',
      name: 'Đức',
      shortName: 'Đức',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ger.png',
      score: 2,
      color: '#111111'
    },
    awayTeam: {
      id: 'srb',
      name: 'Serbia',
      shortName: 'Serbia',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/srb.png',
      score: 0,
      color: '#C6363C'
    },
    status: 'FINISHED',
    startTime: '2026-10-03T01:45:00+07:00',
    stadium: 'Signal Iduna Park',
    city: 'Dortmund',
    referee: 'Szymon Marciniak (POL)',
    events: [
      { id: 'ev-gs-1', minute: 25, type: 'GOAL', team: 'home', player: 'Jamal Musiala', detail: 'Pha xử lý ma thuật trong phạm vi hẹp dứt điểm góc xa' },
      { id: 'ev-gs-2', minute: 70, type: 'GOAL', team: 'home', player: 'Florian Wirtz', detail: 'Cú sút nối hiểm hóc làm bó tay thủ môn Serbia' }
    ],
    stats: {
      possession: [66, 34],
      shots: [18, 5],
      shotsOnTarget: [8, 1],
      expectedGoals: [2.2, 0.4],
      fouls: [8, 15],
      corners: [8, 2],
      offsides: [1, 2],
      yellowCards: [1, 2],
      redCards: [0, 0],
      passes: [670, 330],
      passAccuracy: [91, 75]
    }
  },
  {
    id: 'unl-gre-ned-0310',
    leagueId: 'unl',
    round: 'Nations League - Bảng A',
    homeTeam: {
      id: 'gre',
      name: 'Hy Lạp',
      shortName: 'Hy Lạp',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/gre.png',
      score: 2,
      color: '#0D5EAF'
    },
    awayTeam: {
      id: 'ned',
      name: 'Hà Lan',
      shortName: 'Hà Lan',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ned.png',
      score: 2,
      color: '#F36C21'
    },
    status: 'FINISHED',
    startTime: '2026-10-03T01:45:00+07:00',
    stadium: 'OPAP Arena',
    city: 'Athens',
    referee: 'Michael Oliver (ENG)',
    events: [
      { id: 'ev-gn-1', minute: 16, type: 'GOAL', team: 'away', player: 'Cody Gakpo', detail: 'Tạt cánh đánh đầu hiểm hóc mở tỉ số' },
      { id: 'ev-gn-2', minute: 38, type: 'GOAL', team: 'home', player: 'Vangelis Pavlidis', detail: 'Băng vào tiếp bóng tinh tế gỡ hòa 1-1' },
      { id: 'ev-gn-3', minute: 62, type: 'GOAL', team: 'away', player: 'Xavi Simons', detail: 'Cú sút xa trái phá tung nóc lưới' },
      { id: 'ev-gn-4', minute: 86, type: 'PENALTY_GOAL', team: 'home', player: 'Anastasios Bakasetas', detail: 'Đá phạt đền lạnh lùng gỡ hòa 2-2 nghẹt thở' }
    ],
    stats: {
      possession: [44, 56],
      shots: [12, 14],
      shotsOnTarget: [5, 6],
      expectedGoals: [1.5, 1.8],
      fouls: [14, 11],
      corners: [5, 6],
      offsides: [2, 1],
      yellowCards: [3, 2],
      redCards: [0, 0],
      passes: [410, 520],
      passAccuracy: [80, 86]
    }
  },

  // ==========================================
  // LỊCH THI ĐẤU TIẾP THEO (Đêm nay và rạng sáng mai 05/10 - 01h45 GMT+7)
  // ==========================================
  {
    id: 'unl-por-nor-0510',
    leagueId: 'unl',
    round: 'Nations League - Bảng A (Đại chiến)',
    homeTeam: {
      id: 'por',
      name: 'Bồ Đào Nha',
      shortName: 'Bồ Đào Nha',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/por.png',
      score: 2,
      color: '#E42518'
    },
    awayTeam: {
      id: 'nor',
      name: 'Na Uy',
      shortName: 'Na Uy',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/nor.png',
      score: 1,
      color: '#BA0C2F'
    },
    status: 'FINISHED',
    startTime: '2026-10-05T01:45:00+07:00',
    stadium: 'Estádio José Alvalade',
    city: 'Lisbon',
    referee: 'Daniele Orsato (ITA)',
    events: [
      { id: 'ev-pn-1', minute: 12, type: 'GOAL', team: 'home', player: 'João Félix', detail: 'Đệm bóng tinh tế mở tỉ số sau pha kiến tạo của Bernardo Silva' },
      { id: 'ev-pn-2', minute: 54, type: 'GOAL', team: 'away', player: 'Erling Haaland', detail: 'Tì đè dũng mãnh dứt điểm chân trái uy lực gỡ hòa 1-1' },
      { id: 'ev-pn-3', minute: 82, type: 'GOAL', team: 'home', player: 'Bruno Fernandes', detail: 'Cú sút xa trái phá từ cự ly 25m găm thẳng góc cao' }
    ],
    stats: {
      possession: [58, 42],
      shots: [15, 9],
      shotsOnTarget: [6, 4],
      expectedGoals: [2.1, 1.4],
      fouls: [10, 13],
      corners: [7, 4],
      offsides: [1, 2],
      yellowCards: [2, 2],
      redCards: [0, 0],
      passes: [580, 420],
      passAccuracy: [89, 81]
    }
  },
  {
    id: 'unl-ned-srb-0510',
    leagueId: 'unl',
    round: 'Nations League - Bảng A (Lượt 4)',
    homeTeam: {
      id: 'ned',
      name: 'Hà Lan',
      shortName: 'Hà Lan',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ned.png',
      score: 2,
      color: '#F36C21'
    },
    awayTeam: {
      id: 'srb',
      name: 'Serbia',
      shortName: 'Serbia',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/srb.png',
      score: 1,
      color: '#C6363C'
    },
    status: 'FINISHED',
    startTime: '2026-10-05T01:45:00+07:00',
    stadium: 'Johan Cruyff Arena',
    city: 'Amsterdam',
    referee: 'Slavko Vinčić (SVN)',
    events: [
      { id: 'ev-ns-1', minute: 18, type: 'GOAL', team: 'home', player: 'Cody Gakpo', detail: 'Cứa lòng chân phải kỹ thuật mở tỉ số cho Cơn lốc màu da cam' },
      { id: 'ev-ns-2', minute: 41, type: 'GOAL', team: 'away', player: 'Dušan Vlahović', detail: 'Tì đè dũng mãnh đánh đầu gỡ hòa 1-1 cho Serbia' },
      { id: 'ev-ns-3', minute: 62, type: 'GOAL', team: 'home', player: 'Memphis Depay', detail: 'Pha phối hợp một chạm dứt điểm hiểm hóc ấn định thắng lợi 2-1' }
    ],
    stats: {
      possession: [61, 39],
      shots: [16, 8],
      shotsOnTarget: [7, 3],
      expectedGoals: [2.3, 0.9],
      fouls: [10, 14],
      corners: [8, 3],
      offsides: [1, 2],
      yellowCards: [1, 3],
      redCards: [0, 0],
      passes: [610, 390],
      passAccuracy: [88, 79]
    }
  },
  {
    id: 'unl-gre-ger-0510',
    leagueId: 'unl',
    round: 'Nations League - Bảng A',
    homeTeam: {
      id: 'gre',
      name: 'Hy Lạp',
      shortName: 'Hy Lạp',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/gre.png',
      score: 0,
      color: '#0D5EAF'
    },
    awayTeam: {
      id: 'ger',
      name: 'Đức',
      shortName: 'Đức',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/ger.png',
      score: 0,
      color: '#111111'
    },
    status: 'SCHEDULED',
    startTime: '2026-10-05T01:45:00+07:00',
    stadium: 'Karaiskakis Stadium',
    city: 'Piraeus',
    referee: 'Anthony Taylor (ENG)',
    events: [],
    stats: {
      possession: [50, 50],
      shots: [0, 0],
      shotsOnTarget: [0, 0],
      expectedGoals: [0, 0],
      fouls: [0, 0],
      corners: [0, 0],
      offsides: [0, 0],
      yellowCards: [0, 0],
      redCards: [0, 0],
      passes: [0, 0],
      passAccuracy: [0, 0]
    }
  },
  {
    id: 'unl-wal-den-0510',
    leagueId: 'unl',
    round: 'Nations League - Bảng B',
    homeTeam: {
      id: 'wal',
      name: 'Wales',
      shortName: 'Wales',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/wal.png',
      score: 0,
      color: '#C8102E'
    },
    awayTeam: {
      id: 'den',
      name: 'Đan Mạch',
      shortName: 'Đan Mạch',
      logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/den.png',
      score: 0,
      color: '#C60C30'
    },
    status: 'SCHEDULED',
    startTime: '2026-10-05T01:45:00+07:00',
    stadium: 'Cardiff City Stadium',
    city: 'Cardiff',
    referee: 'Clément Turpin (FRA)',
    events: [],
    stats: {
      possession: [50, 50],
      shots: [0, 0],
      shotsOnTarget: [0, 0],
      expectedGoals: [0, 0],
      fouls: [0, 0],
      corners: [0, 0],
      offsides: [0, 0],
      yellowCards: [0, 0],
      redCards: [0, 0],
      passes: [0, 0],
      passAccuracy: [0, 0]
    }
  }
];
