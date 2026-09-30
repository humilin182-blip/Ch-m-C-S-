import { Match } from '../types/football';

/**
 * Lịch thi đấu Serie A 2026 từ Tháng 10 đến hết Tháng 12/2026 (Vòng 6 đến Vòng 15 trước kỳ nghỉ Giáng sinh 27/12)
 * Đầy đủ các CLB hàng đầu Ý: Inter Milan, AC Milan, Juventus, Napoli, AS Roma, Lazio, Atalanta, Fiorentina...
 * Bao gồm các trận đại chiến rực lửa:
 * - Derby della Madonnina: AC Milan vs Inter Milan (01/11)
 * - Juventus vs Napoli (02/11)
 * - Đại chiến Scudetto: Napoli vs Inter Milan (22/11)
 * - Siêu kinh điển nước Ý: Juventus vs AC Milan (29/11)
 * - Derby della Capitale rực lửa thủ đô: Lazio vs AS Roma (29/11)
 * - Derby d'Italia trước Giáng sinh: Inter Milan vs Juventus (21/12)
 * Toàn bộ trận đấu có status: 'SCHEDULED' và hiển thị theo Giờ Việt Nam (Asia/Saigon GMT+7).
 */

interface SerieATeamDef {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  color: string;
  stadium: string;
  city: string;
}

export const SERIEA_TEAMS: Record<string, SerieATeamDef> = {
  inter: {
    id: 'inter',
    name: 'Inter Milan',
    shortName: 'Inter',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png',
    color: '#0068A8',
    stadium: 'San Siro (Giuseppe Meazza)',
    city: 'Milan'
  },
  milan: {
    id: 'milan',
    name: 'AC Milan',
    shortName: 'AC Milan',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/103.png',
    color: '#FB090B',
    stadium: 'San Siro',
    city: 'Milan'
  },
  juve: {
    id: 'juve',
    name: 'Juventus',
    shortName: 'Juventus',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/111.png',
    color: '#1a1a1a',
    stadium: 'Allianz Stadium',
    city: 'Turin'
  },
  napoli: {
    id: 'napoli',
    name: 'Napoli',
    shortName: 'Napoli',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png',
    color: '#0080C8',
    stadium: 'Stadio Diego Armando Maradona',
    city: 'Naples'
  },
  roma: {
    id: 'roma',
    name: 'AS Roma',
    shortName: 'AS Roma',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/104.png',
    color: '#9E1B32',
    stadium: 'Stadio Olimpico',
    city: 'Rome'
  },
  lazio: {
    id: 'lazio',
    name: 'Lazio',
    shortName: 'Lazio',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/112.png',
    color: '#87D8F7',
    stadium: 'Stadio Olimpico',
    city: 'Rome'
  },
  atalanta: {
    id: 'atalanta',
    name: 'Atalanta',
    shortName: 'Atalanta',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1255.png',
    color: '#1E71B8',
    stadium: 'Gewiss Stadium',
    city: 'Bergamo'
  },
  fiorentina: {
    id: 'fiorentina',
    name: 'Fiorentina',
    shortName: 'Fiorentina',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/109.png',
    color: '#4B2E83',
    stadium: 'Stadio Artemio Franchi',
    city: 'Florence'
  },
  bologna: {
    id: 'bologna',
    name: 'Bologna',
    shortName: 'Bologna',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/107.png',
    color: '#1B2C56',
    stadium: "Stadio Renato Dall'Ara",
    city: 'Bologna'
  },
  torino: {
    id: 'torino',
    name: 'Torino',
    shortName: 'Torino',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/239.png',
    color: '#8A1538',
    stadium: 'Stadio Olimpico Grande Torino',
    city: 'Turin'
  },
  genoa: {
    id: 'genoa',
    name: 'Genoa',
    shortName: 'Genoa',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3263.png',
    color: '#A51829',
    stadium: 'Stadio Luigi Ferraris',
    city: 'Genoa'
  },
  como: {
    id: 'como',
    name: 'Como 1907',
    shortName: 'Como',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2823.png',
    color: '#003366',
    stadium: 'Stadio Giuseppe Sinigaglia',
    city: 'Como'
  },
  parma: {
    id: 'parma',
    name: 'Parma',
    shortName: 'Parma',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/105.png',
    color: '#E6B800',
    stadium: 'Stadio Ennio Tardini',
    city: 'Parma'
  },
  udinese: {
    id: 'udinese',
    name: 'Udinese',
    shortName: 'Udinese',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/118.png',
    color: '#222222',
    stadium: 'Bluenergy Stadium',
    city: 'Udine'
  },
  monza: {
    id: 'monza',
    name: 'Monza',
    shortName: 'Monza',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6909.png',
    color: '#E30613',
    stadium: 'U-Power Stadium',
    city: 'Monza'
  },
  cagliari: {
    id: 'cagliari',
    name: 'Cagliari',
    shortName: 'Cagliari',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/108.png',
    color: '#A51829',
    stadium: 'Unipol Domus',
    city: 'Cagliari'
  },
  lecce: {
    id: 'lecce',
    name: 'Lecce',
    shortName: 'Lecce',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/240.png',
    color: '#DA291C',
    stadium: 'Stadio Via del Mare',
    city: 'Lecce'
  },
  sassuolo: {
    id: 'sassuolo',
    name: 'Sassuolo',
    shortName: 'Sassuolo',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/4066.png',
    color: '#00A650',
    stadium: 'Mapei Stadium',
    city: 'Reggio Emilia'
  },
  venezia: {
    id: 'venezia',
    name: 'Venezia',
    shortName: 'Venezia',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2824.png',
    color: '#E47526',
    stadium: 'Stadio Pier Luigi Penzo',
    city: 'Venice'
  },
  frosinone: {
    id: 'frosinone',
    name: 'Frosinone',
    shortName: 'Frosinone',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3748.png',
    color: '#FFD200',
    stadium: 'Stadio Benito Stirpe',
    city: 'Frosinone'
  }
};

function createSerieAMatch(
  id: string,
  round: string,
  homeKey: string,
  awayKey: string,
  startTime: string,
  referee = 'Daniele Orsato',
  customStadium?: string,
  isHighlight = false
): Match {
  const home = SERIEA_TEAMS[homeKey] || SERIEA_TEAMS['inter'];
  const away = SERIEA_TEAMS[awayKey] || SERIEA_TEAMS['milan'];

  return {
    id,
    leagueId: 'seriea',
    round: `Serie A - ${round}`,
    homeTeam: {
      id: home.id,
      name: home.name,
      shortName: home.shortName,
      logo: home.logo,
      score: 0,
      color: home.color
    },
    awayTeam: {
      id: away.id,
      name: away.name,
      shortName: away.shortName,
      logo: away.logo,
      score: 0,
      color: away.color
    },
    status: 'SCHEDULED',
    startTime,
    stadium: customStadium || home.stadium,
    city: home.city,
    referee,
    events: [],
    stats: {
      possession: [50, 50],
      shots: [0, 0],
      shotsOnTarget: [0, 0],
      expectedGoals: isHighlight ? [1.65, 1.45] : [1.25, 1.1],
      fouls: [0, 0],
      corners: [0, 0],
      offsides: [0, 0],
      yellowCards: [0, 0],
      redCards: [0, 0],
      passes: [0, 0],
      passAccuracy: [0, 0]
    }
  };
}

export const SERIEA_2026_SCHEDULE: Match[] = [
  // ==========================================
  // VÒNG 6 (10/10 - 13/10/2026)
  // ==========================================
  createSerieAMatch('sa-r6-gen-fio', 'Vòng 6', 'genoa', 'fiorentina', '2026-10-10T20:00:00+07:00', 'Michael Fabbri'),
  createSerieAMatch('sa-r6-int-par', 'Vòng 6', 'inter', 'parma', '2026-10-10T23:00:00+07:00', 'Simone Sozza'),
  createSerieAMatch('sa-r6-nap-fro', 'Vòng 6', 'napoli', 'frosinone', '2026-10-11T01:45:00+07:00', 'Marco Guida'),
  createSerieAMatch('sa-r6-com-rom', 'Vòng 6', 'como', 'roma', '2026-10-11T17:30:00+07:00', 'Davide Massa'),
  createSerieAMatch('sa-r6-laz-mon', 'Vòng 6', 'lazio', 'monza', '2026-10-11T20:00:00+07:00', 'Maurizio Mariani'),
  createSerieAMatch('sa-r6-lec-bol', 'Vòng 6', 'lecce', 'bologna', '2026-10-11T20:00:00+07:00', 'Antonio Rapuano'),
  createSerieAMatch('sa-r6-sas-mil', 'Vòng 6', 'sassuolo', 'milan', '2026-10-11T23:00:00+07:00', 'Andrea Colombo'),
  createSerieAMatch('sa-r6-cag-juv', 'Vòng 6', 'cagliari', 'juve', '2026-10-12T01:45:00+07:00', 'Daniele Chiffi'),
  createSerieAMatch('sa-r6-ata-ven', 'Vòng 6', 'atalanta', 'venezia', '2026-10-12T23:30:00+07:00', 'Gianluca Manganiello'),
  createSerieAMatch('sa-r6-tor-udi', 'Vòng 6', 'torino', 'udinese', '2026-10-13T01:45:00+07:00', 'Livio Marinelli'),

  // ==========================================
  // VÒNG 7 (17/10 - 20/10/2026)
  // ==========================================
  createSerieAMatch('sa-r7-bol-int', 'Vòng 7', 'bologna', 'inter', '2026-10-17T23:00:00+07:00', 'Marco Di Bello'),
  createSerieAMatch('sa-r7-rom-gen', 'Vòng 7', 'roma', 'genoa', '2026-10-18T01:45:00+07:00', 'Fabio Maresca'),
  createSerieAMatch('sa-r7-ven-nap', 'Vòng 7', 'venezia', 'napoli', '2026-10-18T17:30:00+07:00', 'Daniele Doveri'),
  createSerieAMatch('sa-r7-udi-lec', 'Vòng 7', 'udinese', 'lecce', '2026-10-18T20:00:00+07:00', 'Federico La Penna'),
  createSerieAMatch('sa-r7-fio-com', 'Vòng 7', 'fiorentina', 'como', '2026-10-18T20:00:00+07:00', 'Rosario Abisso'),
  createSerieAMatch('sa-r7-mil-ata', 'Vòng 7 🔥 Trận cầu đinh: AC Milan vs Atalanta', 'milan', 'atalanta', '2026-10-18T23:00:00+07:00', 'Daniele Orsato', undefined, true),
  createSerieAMatch('sa-r7-juv-laz', 'Vòng 7 🔥 Đại chiến: Juventus vs Lazio', 'juve', 'lazio', '2026-10-19T01:45:00+07:00', 'Davide Massa', undefined, true),
  createSerieAMatch('sa-r7-mon-cag', 'Vòng 7', 'monza', 'cagliari', '2026-10-19T20:30:00+07:00', 'Luca Pairetto'),
  createSerieAMatch('sa-r7-par-tor', 'Vòng 7', 'parma', 'torino', '2026-10-20T01:45:00+07:00', 'Matteo Marchetti'),

  // ==========================================
  // VÒNG 8 (24/10 - 26/10/2026)
  // ==========================================
  createSerieAMatch('sa-r8-nap-rom', 'Vòng 8 🔥 Đại chiến: Napoli vs AS Roma', 'napoli', 'roma', '2026-10-24T23:00:00+07:00', 'Maurizio Mariani', undefined, true),
  createSerieAMatch('sa-r8-int-fio', 'Vòng 8 🔥 Trận cầu đinh: Inter Milan vs Fiorentina', 'inter', 'fiorentina', '2026-10-25T18:30:00+07:00', 'Simone Sozza', undefined, true),
  createSerieAMatch('sa-r8-ata-gen', 'Vòng 8', 'atalanta', 'genoa', '2026-10-25T21:00:00+07:00', 'Andrea Colombo'),
  createSerieAMatch('sa-r8-tor-com', 'Vòng 8', 'torino', 'como', '2026-10-25T21:00:00+07:00', 'Gianluca Aureliano'),
  createSerieAMatch('sa-r8-cag-bol', 'Vòng 8', 'cagliari', 'bologna', '2026-10-25T23:00:00+07:00', 'Alberto Santoro'),
  createSerieAMatch('sa-r8-lec-juv', 'Vòng 8', 'lecce', 'juve', '2026-10-26T00:00:00+07:00', 'Marco Guida'),
  createSerieAMatch('sa-r8-udi-mil', 'Vòng 8', 'udinese', 'milan', '2026-10-26T02:45:00+07:00', 'Michael Fabbri'),

  // ==========================================
  // VÒNG 9 (Vòng đấu giữa tuần 28/10 - 30/10/2026)
  // ==========================================
  createSerieAMatch('sa-r9-mil-bol', 'Vòng 9 (Giữa tuần)', 'milan', 'bologna', '2026-10-29T00:30:00+07:00', 'Fabio Maresca'),
  createSerieAMatch('sa-r9-gen-juv', 'Vòng 9 (Giữa tuần)', 'genoa', 'juve', '2026-10-29T02:45:00+07:00', 'Daniele Doveri'),
  createSerieAMatch('sa-r9-mon-nap', 'Vòng 9 (Giữa tuần)', 'monza', 'napoli', '2026-10-29T02:45:00+07:00', 'Antonio Rapuano'),
  createSerieAMatch('sa-r9-rom-tor', 'Vòng 9 (Giữa tuần)', 'roma', 'torino', '2026-10-29T02:45:00+07:00', 'Daniele Chiffi'),
  createSerieAMatch('sa-r9-emp-int', 'Vòng 9 (Giữa tuần)', 'como', 'inter', '2026-10-30T02:45:00+07:00', 'Livio Marinelli'),
  createSerieAMatch('sa-r9-ata-mon', 'Vòng 9 (Giữa tuần)', 'atalanta', 'parma', '2026-10-30T02:45:00+07:00', 'Gianluca Manganiello'),

  // ==========================================
  // VÒNG 10 (31/10 - 03/11/2026) - ĐẠI CHIẾN MILAN & JUVE VS NAPOLI
  // ==========================================
  createSerieAMatch('sa-r10-udi-rom', 'Vòng 10', 'udinese', 'roma', '2026-10-31T21:00:00+07:00', 'Michael Fabbri'),
  createSerieAMatch('sa-r10-mil-int', 'Vòng 10 🔥 Siêu đại chiến Milan (Derby della Madonnina): AC Milan vs Inter Milan', 'milan', 'inter', '2026-11-01T02:45:00+07:00', 'Daniele Orsato', undefined, true),
  createSerieAMatch('sa-r10-bol-mon', 'Vòng 10', 'bologna', 'monza', '2026-11-01T21:00:00+07:00', 'Federico La Penna'),
  createSerieAMatch('sa-r10-laz-cag', 'Vòng 10', 'lazio', 'cagliari', '2026-11-02T00:00:00+07:00', 'Marco Di Bello'),
  createSerieAMatch('sa-r10-juv-nap', 'Vòng 10 🔥 Trận cầu tâm điểm: Juventus vs Napoli', 'juve', 'napoli', '2026-11-02T02:45:00+07:00', 'Davide Massa', undefined, true),
  createSerieAMatch('sa-r10-ata-par', 'Vòng 10', 'atalanta', 'parma', '2026-11-03T02:45:00+07:00', 'Simone Sozza'),

  // ==========================================
  // VÒNG 11 (21/11 - 23/11/2026 sau FIFA Days) - TÂM ĐIỂM SCUDETTO
  // ==========================================
  createSerieAMatch('sa-r11-nap-int', 'Vòng 11 🔥 Đại chiến Scudetto: Napoli vs Inter Milan', 'napoli', 'inter', '2026-11-22T02:45:00+07:00', 'Maurizio Mariani', undefined, true),
  createSerieAMatch('sa-r11-rom-ata', 'Vòng 11', 'roma', 'atalanta', '2026-11-22T21:00:00+07:00', 'Marco Guida'),
  createSerieAMatch('sa-r11-fio-juv', 'Vòng 11 🔥 Đại chiến truyền kiếp: Fiorentina vs Juventus', 'fiorentina', 'juve', '2026-11-23T02:45:00+07:00', 'Daniele Doveri', undefined, true),
  createSerieAMatch('sa-r11-mil-udi', 'Vòng 11', 'milan', 'udinese', '2026-11-23T23:00:00+07:00', 'Andrea Colombo'),

  // ==========================================
  // VÒNG 12 (28/11 - 30/11/2026) - JUVENTUS VS MILAN & DERBY LAZIO VS ROMA
  // ==========================================
  createSerieAMatch('sa-r12-juv-mil', 'Vòng 12 🔥 Siêu kinh điển nước Ý: Juventus vs AC Milan', 'juve', 'milan', '2026-11-29T02:45:00+07:00', 'Davide Massa', undefined, true),
  createSerieAMatch('sa-r12-laz-rom', 'Vòng 12 🔥 Derby thủ đô rực lửa (Derby della Capitale): Lazio vs AS Roma', 'lazio', 'roma', '2026-11-29T23:00:00+07:00', 'Daniele Orsato', undefined, true),
  createSerieAMatch('sa-r12-int-ata', 'Vòng 12 🔥 Trận cầu đinh: Inter Milan vs Atalanta', 'inter', 'atalanta', '2026-11-30T02:45:00+07:00', 'Simone Sozza', undefined, true),
  createSerieAMatch('sa-r12-nap-tor', 'Vòng 12', 'napoli', 'torino', '2026-11-30T21:00:00+07:00', 'Fabio Maresca'),

  // ==========================================
  // VÒNG 13 (05/12 - 07/12/2026)
  // ==========================================
  createSerieAMatch('sa-r13-int-tor', 'Vòng 13 🔥 Trận cầu then chốt: Inter Milan vs Torino', 'inter', 'torino', '2026-12-06T02:45:00+07:00', 'Marco Guida'),
  createSerieAMatch('sa-r13-juv-mon', 'Vòng 13: Juventus vs Monza', 'juve', 'monza', '2026-12-06T21:00:00+07:00', 'Antonio Rapuano'),
  createSerieAMatch('sa-r13-mil-laz', 'Vòng 13 🔥 Đại chiến: AC Milan vs Lazio', 'milan', 'lazio', '2026-12-07T02:45:00+07:00', 'Daniele Doveri', undefined, true),
  createSerieAMatch('sa-r13-nap-ata', 'Vòng 13 🔥 Trận cầu đỉnh cao: Napoli vs Atalanta', 'napoli', 'atalanta', '2026-12-07T21:00:00+07:00', 'Maurizio Mariani', undefined, true),

  // ==========================================
  // VÒNG 14 (12/12 - 14/12/2026)
  // ==========================================
  createSerieAMatch('sa-r14-rom-int', 'Vòng 14 🔥 Đại chiến đỉnh cao: AS Roma vs Inter Milan', 'roma', 'inter', '2026-12-13T02:45:00+07:00', 'Simone Sozza', undefined, true),
  createSerieAMatch('sa-r14-ata-juv', 'Vòng 14 🔥 Trận cầu đinh: Atalanta vs Juventus', 'atalanta', 'juve', '2026-12-13T21:00:00+07:00', 'Davide Massa', undefined, true),
  createSerieAMatch('sa-r14-fio-mil', 'Vòng 14 🔥 Fiorentina vs AC Milan', 'fiorentina', 'milan', '2026-12-14T02:45:00+07:00', 'Marco Di Bello'),
  createSerieAMatch('sa-r14-bol-nap', 'Vòng 14: Bologna vs Napoli', 'bologna', 'napoli', '2026-12-14T21:00:00+07:00', 'Michael Fabbri'),

  // ==========================================
  // VÒNG 15 (20/12 - 23/12/2026 Loạt trận trước Giáng sinh)
  // ==========================================
  createSerieAMatch('sa-r15-int-juv', "Vòng 15 🔥 Siêu đại chiến trước Giáng sinh (Derby d'Italia): Inter Milan vs Juventus", 'inter', 'juve', '2026-12-21T02:45:00+07:00', 'Daniele Orsato', undefined, true),
  createSerieAMatch('sa-r15-mil-nap', 'Vòng 15 🔥 Đại chiến khép lại lượt đi: AC Milan vs Napoli', 'milan', 'napoli', '2026-12-21T21:00:00+07:00', 'Maurizio Mariani', undefined, true),
  createSerieAMatch('sa-r15-rom-fio', 'Vòng 15: AS Roma vs Fiorentina', 'roma', 'fiorentina', '2026-12-22T02:45:00+07:00', 'Daniele Chiffi'),
  createSerieAMatch('sa-r15-laz-ata', 'Vòng 15 🔥 Đại chiến top 4: Lazio vs Atalanta', 'lazio', 'atalanta', '2026-12-22T23:00:00+07:00', 'Simone Sozza', undefined, true),
  createSerieAMatch('sa-r15-tor-bol', 'Vòng 15: Torino vs Bologna', 'torino', 'bologna', '2026-12-23T02:45:00+07:00', 'Fabio Maresca')
];
