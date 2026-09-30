import { Match } from '../types/football';

/**
 * Lịch thi đấu Ligue 1 2026 từ Tháng 10 đến hết Tháng 12/2026 (Vòng 6 đến Vòng 15 trước kỳ nghỉ đông Giáng sinh)
 * Đầy đủ các CLB hàng đầu nước Pháp: Paris Saint-Germain, Olympique de Marseille, Lyon, Monaco, Lille, Lens, Nice, Rennes...
 * Bao gồm các trận đại chiến rực lửa:
 * - Siêu đại chiến nước Pháp (Choc des Olympiques / Le Classique): PSG vs Lyon (26/10)
 * - Derby rực lửa miền Bắc nước Pháp: Lille vs Lens (31/10)
 * - Trận cầu đinh: Nice vs Paris Saint-Germain (21/11)
 * - Derby thủ đô nước Pháp: Paris Saint-Germain vs Paris FC (12/12)
 * - Loạt trận khép lại năm 2026 trước kỳ nghỉ đông Giáng sinh (20 - 23/12)
 * Toàn bộ trận đấu có status: 'SCHEDULED' và hiển thị theo Giờ Việt Nam (Asia/Saigon GMT+7).
 */

interface Ligue1TeamDef {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  color: string;
  stadium: string;
  city: string;
}

export const LIGUE1_TEAMS: Record<string, Ligue1TeamDef> = {
  psg: {
    id: 'psg',
    name: 'Paris Saint-Germain',
    shortName: 'PSG',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png',
    color: '#004170',
    stadium: 'Parc des Princes',
    city: 'Paris'
  },
  marseille: {
    id: 'marseille',
    name: 'Olympique de Marseille',
    shortName: 'Marseille',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/166.png',
    color: '#00A3E0',
    stadium: 'Stade Vélodrome',
    city: 'Marseille'
  },
  lyon: {
    id: 'lyon',
    name: 'Olympique Lyonnais',
    shortName: 'Lyon',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/167.png',
    color: '#DA0812',
    stadium: 'Groupama Stadium',
    city: 'Lyon'
  },
  monaco: {
    id: 'monaco',
    name: 'AS Monaco',
    shortName: 'Monaco',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/174.png',
    color: '#E51B24',
    stadium: 'Stade Louis II',
    city: 'Monaco'
  },
  lille: {
    id: 'lille',
    name: 'Lille OSC',
    shortName: 'Lille',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/164.png',
    color: '#EE2524',
    stadium: 'Decathlon Arena - Stade Pierre-Mauroy',
    city: 'Lille'
  },
  lens: {
    id: 'lens',
    name: 'RC Lens',
    shortName: 'Lens',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/177.png',
    color: '#ED1C24',
    stadium: 'Stade Bollaert-Delelis',
    city: 'Lens'
  },
  nice: {
    id: 'nice',
    name: 'OGC Nice',
    shortName: 'Nice',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/273.png',
    color: '#1a1a1a',
    stadium: 'Allianz Riviera',
    city: 'Nice'
  },
  rennes: {
    id: 'rennes',
    name: 'Stade Rennais',
    shortName: 'Rennes',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/176.png',
    color: '#E2001A',
    stadium: 'Roazhon Park',
    city: 'Rennes'
  },
  strasbourg: {
    id: 'strasbourg',
    name: 'RC Strasbourg Alsace',
    shortName: 'Strasbourg',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/181.png',
    color: '#009FE3',
    stadium: 'Stade de la Meinau',
    city: 'Strasbourg'
  },
  parisfc: {
    id: 'parisfc',
    name: 'Paris FC',
    shortName: 'Paris FC',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6835.png',
    color: '#002B49',
    stadium: 'Stade Charléty',
    city: 'Paris'
  },
  toulouse: {
    id: 'toulouse',
    name: 'Toulouse FC',
    shortName: 'Toulouse',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/178.png',
    color: '#5C2D91',
    stadium: 'Stadium de Toulouse',
    city: 'Toulouse'
  },
  lehavre: {
    id: 'lehavre',
    name: 'Le Havre AC',
    shortName: 'Le Havre',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/165.png',
    color: '#6BA4B8',
    stadium: 'Stade Océane',
    city: 'Le Havre'
  },
  lemans: {
    id: 'lemans',
    name: 'Le Mans FC',
    shortName: 'Le Mans',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/162.png',
    color: '#E30613',
    stadium: 'Stade Marie-Marvingt',
    city: 'Le Mans'
  },
  brest: {
    id: 'brest',
    name: 'Stade Brestois 29',
    shortName: 'Brest',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2026.png',
    color: '#EE2737',
    stadium: 'Stade Francis-Le Blé',
    city: 'Brest'
  },
  angers: {
    id: 'angers',
    name: 'Angers SCO',
    shortName: 'Angers',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2032.png',
    color: '#222222',
    stadium: 'Stade Raymond Kopa',
    city: 'Angers'
  },
  lorient: {
    id: 'lorient',
    name: 'FC Lorient',
    shortName: 'Lorient',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/274.png',
    color: '#F15A22',
    stadium: 'Stade du Moustoir',
    city: 'Lorient'
  },
  auxerre: {
    id: 'auxerre',
    name: 'AJ Auxerre',
    shortName: 'Auxerre',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/161.png',
    color: '#0055A5',
    stadium: "Stade de l'Abbé-Deschamps",
    city: 'Auxerre'
  },
  troyes: {
    id: 'troyes',
    name: 'ES Troyes AC',
    shortName: 'Troyes',
    logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/182.png',
    color: '#005BAC',
    stadium: "Stade de l'Aube",
    city: 'Troyes'
  }
};

function createLigue1Match(
  id: string,
  round: string,
  homeKey: string,
  awayKey: string,
  startTime: string,
  referee = 'Clément Turpin',
  customStadium?: string,
  isHighlight = false
): Match {
  const home = LIGUE1_TEAMS[homeKey] || LIGUE1_TEAMS['psg'];
  const away = LIGUE1_TEAMS[awayKey] || LIGUE1_TEAMS['marseille'];

  return {
    id,
    leagueId: 'ligue1',
    round: `Ligue 1 - ${round}`,
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
      expectedGoals: isHighlight ? [1.75, 1.4] : [1.3, 1.15],
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

export const LIGUE1_2026_SCHEDULE: Match[] = [
  // ==========================================
  // VÒNG 6 (10/10 - 12/10/2026)
  // ==========================================
  createLigue1Match('l1-r6-len-lyo', 'Vòng 6', 'lens', 'lyon', '2026-10-10T01:45:00+07:00', 'Benoît Bastien'),
  createLigue1Match('l1-r6-lil-leh', 'Vòng 6', 'lille', 'lehavre', '2026-10-10T22:15:00+07:00', 'Willy Delajod'),
  createLigue1Match('l1-r6-psg-lem', 'Vòng 6', 'psg', 'lemans', '2026-10-11T01:45:00+07:00', 'Clément Turpin'),
  createLigue1Match('l1-r6-mon-tou', 'Vòng 6', 'monaco', 'toulouse', '2026-10-11T01:45:00+07:00', 'Thomas Léonard'),
  createLigue1Match('l1-r6-bre-ang', 'Vòng 6', 'brest', 'angers', '2026-10-11T01:45:00+07:00', 'Marc Bollengier'),
  createLigue1Match('l1-r6-lor-pfc', 'Vòng 6', 'lorient', 'parisfc', '2026-10-11T01:45:00+07:00', 'Jérémie Pignard'),
  createLigue1Match('l1-r6-nic-str', 'Vòng 6', 'nice', 'strasbourg', '2026-10-11T20:00:00+07:00', 'Jérôme Brisard'),
  createLigue1Match('l1-r6-ren-aux', 'Vòng 6', 'rennes', 'auxerre', '2026-10-11T22:15:00+07:00', 'Eric Wattellier'),
  createLigue1Match('l1-r6-tro-mar', 'Vòng 6', 'troyes', 'marseille', '2026-10-12T01:45:00+07:00', 'Ruddy Buquet'),

  // ==========================================
  // VÒNG 7 (17/10 - 19/10/2026)
  // ==========================================
  createLigue1Match('l1-r7-str-psg', 'Vòng 7', 'strasbourg', 'psg', '2026-10-17T22:15:00+07:00', 'François Letexier'),
  createLigue1Match('l1-r7-lem-tou', 'Vòng 7', 'lemans', 'toulouse', '2026-10-18T20:00:00+07:00', 'Gaël Angoula'),
  createLigue1Match('l1-r7-lil-bre', 'Vòng 7', 'lille', 'brest', '2026-10-18T20:00:00+07:00', 'Hakim Ben El Hadj'),
  createLigue1Match('l1-r7-tro-len', 'Vòng 7', 'troyes', 'lens', '2026-10-18T20:00:00+07:00', 'Bastien Dechepy'),
  createLigue1Match('l1-r7-ang-mar', 'Vòng 7', 'angers', 'marseille', '2026-10-18T22:15:00+07:00', 'Jérôme Brisard'),
  createLigue1Match('l1-r7-lor-mon', 'Vòng 7', 'lorient', 'monaco', '2026-10-18T22:15:00+07:00', 'Jérémy Stinat'),
  createLigue1Match('l1-r7-lyo-nic', 'Vòng 7 🔥 Trận cầu tâm điểm: Olympique Lyonnais vs Nice', 'lyon', 'nice', '2026-10-19T01:45:00+07:00', 'Clément Turpin', undefined, true),

  // ==========================================
  // VÒNG 8 (25/10 - 26/10/2026)
  // ==========================================
  createLigue1Match('l1-r8-mon-lil', 'Vòng 8 🔥 Đại chiến top 4: AS Monaco vs Lille', 'monaco', 'lille', '2026-10-25T21:00:00+07:00', 'Benoît Bastien', undefined, true),
  createLigue1Match('l1-r8-ren-str', 'Vòng 8', 'rennes', 'strasbourg', '2026-10-25T23:00:00+07:00', 'Thomas Léonard'),
  createLigue1Match('l1-r8-mar-bre', 'Vòng 8', 'marseille', 'brest', '2026-10-25T23:00:00+07:00', 'Willy Delajod'),
  createLigue1Match('l1-r8-psg-lyo', 'Vòng 8 🔥 Siêu đại chiến nước Pháp: Paris Saint-Germain vs Olympique Lyonnais', 'psg', 'lyon', '2026-10-26T02:45:00+07:00', 'François Letexier', undefined, true),

  // ==========================================
  // VÒNG 9 (31/10 - 02/11/2026)
  // ==========================================
  createLigue1Match('l1-r9-leh-psg', 'Vòng 9', 'lehavre', 'psg', '2026-10-31T01:00:00+07:00', 'Eric Wattellier'),
  createLigue1Match('l1-r9-lil-len', 'Vòng 9 🔥 Derby rực lửa miền Bắc: Lille vs Lens', 'lille', 'lens', '2026-10-31T03:05:00+07:00', 'Clément Turpin', undefined, true),
  createLigue1Match('l1-r9-lyo-ang', 'Vòng 9', 'lyon', 'angers', '2026-11-01T21:00:00+07:00', 'Benoît Millot'),
  createLigue1Match('l1-r9-mon-pfc', 'Vòng 9', 'monaco', 'parisfc', '2026-11-01T23:00:00+07:00', 'Marc Bollengier'),
  createLigue1Match('l1-r9-mar-tou', 'Vòng 9', 'marseille', 'toulouse', '2026-11-02T02:45:00+07:00', 'Jérôme Brisard'),

  // ==========================================
  // VÒNG 10 (07/11 - 09/11/2026 trước FIFA Days)
  // ==========================================
  createLigue1Match('l1-r10-psg-tro', 'Vòng 10 🔥 Tâm điểm: PSG vs Troyes', 'psg', 'troyes', '2026-11-07T23:00:00+07:00', 'Jérémy Stinat'),
  createLigue1Match('l1-r10-ren-lil', 'Vòng 10 🔥 Trận cầu đinh: Rennes vs Lille', 'rennes', 'lille', '2026-11-08T21:00:00+07:00', 'Benoît Bastien', undefined, true),
  createLigue1Match('l1-r10-nic-mon', 'Vòng 10', 'nice', 'monaco', '2026-11-08T23:00:00+07:00', 'François Letexier'),
  createLigue1Match('l1-r10-len-mar', 'Vòng 10 🔥 Đại chiến: Lens vs Olympique Marseille', 'lens', 'marseille', '2026-11-09T02:45:00+07:00', 'Clément Turpin', undefined, true),

  // ==========================================
  // VÒNG 11 (21/11 - 23/11/2026 sau FIFA Days)
  // ==========================================
  createLigue1Match('l1-r11-nic-psg', 'Vòng 11 🔥 Đại chiến kịch tính: Nice vs Paris Saint-Germain', 'nice', 'psg', '2026-11-21T23:00:00+07:00', 'Clément Turpin', undefined, true),
  createLigue1Match('l1-r11-mon-ren', 'Vòng 11', 'monaco', 'rennes', '2026-11-22T21:00:00+07:00', 'Thomas Léonard'),
  createLigue1Match('l1-r11-lil-lyo', 'Vòng 11 🔥 Trận cầu đinh: Lille vs Lyon', 'lille', 'lyon', '2026-11-22T23:00:00+07:00', 'François Letexier', undefined, true),
  createLigue1Match('l1-r11-mar-str', 'Vòng 11', 'marseille', 'strasbourg', '2026-11-23T02:45:00+07:00', 'Willy Delajod'),

  // ==========================================
  // VÒNG 12 (28/11 - 30/11/2026)
  // ==========================================
  createLigue1Match('l1-r12-mar-lyo', 'Vòng 12 🔥 Siêu đại chiến nước Pháp (Choc des Olympiques): Marseille vs Lyon', 'marseille', 'lyon', '2026-11-29T02:45:00+07:00', 'François Letexier', undefined, true),
  createLigue1Match('l1-r12-psg-mon', 'Vòng 12 🔥 Đại chiến đỉnh cao: Paris Saint-Germain vs AS Monaco', 'psg', 'monaco', '2026-11-29T23:00:00+07:00', 'Clément Turpin', undefined, true),
  createLigue1Match('l1-r12-len-nic', 'Vòng 12', 'lens', 'nice', '2026-11-30T02:45:00+07:00', 'Benoît Bastien'),

  // ==========================================
  // VÒNG 13 (05/12 - 07/12/2026)
  // ==========================================
  createLigue1Match('l1-r13-lyo-ren', 'Vòng 13: Lyon vs Rennes', 'lyon', 'rennes', '2026-12-05T23:00:00+07:00', 'Eric Wattellier'),
  createLigue1Match('l1-r13-mon-len', 'Vòng 13 🔥 Monaco vs Lens', 'monaco', 'lens', '2026-12-06T02:45:00+07:00', 'Jérôme Brisard'),
  createLigue1Match('l1-r13-mar-lil', 'Vòng 13 🔥 Đại chiến: Marseille vs Lille', 'marseille', 'lille', '2026-12-06T23:00:00+07:00', 'François Letexier', undefined, true),
  createLigue1Match('l1-r13-str-nic', 'Vòng 13: Strasbourg vs Nice', 'strasbourg', 'nice', '2026-12-07T02:45:00+07:00', 'Marc Bollengier'),

  // ==========================================
  // VÒNG 14 (12/12 - 14/12/2026) - DERBY THỦ ĐÔ PARIS
  // ==========================================
  createLigue1Match('l1-r14-psg-pfc', 'Vòng 14 🔥 Siêu Derby thủ đô nước Pháp: Paris Saint-Germain vs Paris FC', 'psg', 'parisfc', '2026-12-12T23:00:00+07:00', 'Clément Turpin', undefined, true),
  createLigue1Match('l1-r14-nic-mar', 'Vòng 14 🔥 Derby miền Nam: Nice vs Marseille', 'nice', 'marseille', '2026-12-13T02:45:00+07:00', 'Benoît Bastien', undefined, true),
  createLigue1Match('l1-r14-ren-mon', 'Vòng 14: Rennes vs Monaco', 'rennes', 'monaco', '2026-12-13T21:00:00+07:00', 'Willy Delajod'),
  createLigue1Match('l1-r14-lil-tro', 'Vòng 14: Lille vs Troyes', 'lille', 'troyes', '2026-12-14T02:45:00+07:00', 'Jérôme Brisard'),

  // ==========================================
  // VÒNG 15 (20/12 - 23/12/2026 Loạt trận trước Giáng sinh)
  // ==========================================
  createLigue1Match('l1-r15-mar-psg', 'Vòng 15 🔥 Siêu kinh điển nước Pháp (Le Classique): Marseille vs Paris Saint-Germain', 'marseille', 'psg', '2026-12-21T02:45:00+07:00', 'François Letexier', undefined, true),
  createLigue1Match('l1-r15-lyo-mon', 'Vòng 15 🔥 Trận cầu rực lửa khép lại năm 2026: Lyon vs Monaco', 'lyon', 'monaco', '2026-12-21T23:00:00+07:00', 'Clément Turpin', undefined, true),
  createLigue1Match('l1-r15-len-ren', 'Vòng 15: Lens vs Rennes', 'lens', 'rennes', '2026-12-22T02:45:00+07:00', 'Benoît Bastien'),
  createLigue1Match('l1-r15-nic-lil', 'Vòng 15 🔥 Trận cầu tâm điểm top 4: Nice vs Lille', 'nice', 'lille', '2026-12-22T23:00:00+07:00', 'Thomas Léonard', undefined, true),
  createLigue1Match('l1-r15-pfc-str', 'Vòng 15: Paris FC vs Strasbourg', 'parisfc', 'strasbourg', '2026-12-23T02:45:00+07:00', 'Eric Wattellier')
];
