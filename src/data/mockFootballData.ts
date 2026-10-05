import {
  League,
  Match,
  TeamStanding,
  HighlightItem,
  ExpertAnalysis,
  FriendRank,
  CommunityMessage
} from '../types/football';
import cyberHighlightImg from '../assets/images/cyber_match_highlight_1790513577902.jpg';
import cyberCleatsImg from '../assets/images/cyber_pitch_cleats_hero_1790513556958.jpg';
import cyberStadiumImg from '../assets/images/cyber_stadium_broadcast_1790513588901.jpg';

export const LEAGUES_DATA: League[] = [
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
    name: 'Serie A Enilive',
    shortName: 'Serie A',
    country: 'Ý',
    logo: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=80&q=80',
    flag: '🇮🇹',
    color: '#024494',
    season: '2026/2027'
  },
  {
    id: 'ligue1',
    name: 'Ligue 1 McDonald’s',
    shortName: 'Ligue 1',
    country: 'Pháp',
    logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=80&q=80',
    flag: '🇫🇷',
    color: '#091c3e',
    season: '2026/2027'
  }
];

export const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    id: 'hl-unl-cro-eng',
    matchId: 'unl-cro-eng-0410',
    title: 'Highlights: Croatia 0 - 7 Anh | Harry Kane lập hat-trick, Gordon lập cú đúp hủy diệt',
    duration: '12:40',
    league: 'UEFA Nations League',
    thumbnail: cyberHighlightImg,
    views: '5.2M lượt xem',
    date: 'Vừa xong',
    events: [
      { minute: '12\'', title: 'Harry Kane mở màn cơn mưa gôn với cú đệm lòng cận thành', timestampSec: 40 },
      { minute: '22\'', title: 'Anthony Gordon đá bồi cận thành nâng tỉ số lên 2-0', timestampSec: 90 },
      { minute: '34\'', title: 'Harry Kane đá phạt đền thành công nâng tỉ số lên 3-0', timestampSec: 180 },
      { minute: '45+1\'', title: 'Anthony Gordon hoàn tất cú đúp với pha đệm bóng một chạm', timestampSec: 280 },
      { minute: '58\'', title: 'Harry Kane hoàn tất cú hat-trick siêu hạng nâng tỉ số 5-0', timestampSec: 390 },
      { minute: '67\'', title: 'Jude Bellingham sút xa cháy lưới Croatia từ ngoài vòng cấm', timestampSec: 490 },
      { minute: '81\'', title: 'Bukayo Saka solo ma thuật ấn định chiến thắng không tưởng 7-0', timestampSec: 610 }
    ]
  },
  {
    id: 'hl-unl-por-nor',
    matchId: 'unl-por-nor-0510',
    title: 'Highlights: Bồ Đào Nha 2 - 1 Na Uy | Bruno Fernandes sút xa rực sáng, Haaland lập công',
    duration: '11:15',
    league: 'UEFA Nations League',
    thumbnail: cyberStadiumImg,
    views: '4.1M lượt xem',
    date: 'Mới nhất',
    events: [
      { minute: '12\'', title: 'João Félix đệm bóng một chạm tinh tế mở tỉ số cho Selecao', timestampSec: 45 },
      { minute: '54\'', title: 'Erling Haaland tì đè dũng mãnh dứt điểm gỡ hòa 1-1 cho Na Uy', timestampSec: 210 },
      { minute: '82\'', title: 'Bruno Fernandes nã đại bác ngoài vòng cấm ấn định chiến thắng 2-1', timestampSec: 450 }
    ]
  },
  {
    id: 'hl-epl-mci-sun',
    matchId: 'epl-r5-mci-sun',
    title: 'Highlights: Man City 5 - 3 Sunderland | Mưa bàn thắng mãn nhãn, Haaland cú đúp',
    duration: '13:05',
    league: 'Premier League',
    thumbnail: cyberCleatsImg,
    views: '3.6M lượt xem',
    date: 'Vòng 5',
    events: [
      { minute: '18\'', title: 'Haaland mở tỉ số cận thành cho Man City', timestampSec: 40 },
      { minute: '27\'', title: 'Jobe Bellingham sút xa sấm sét gỡ hòa 1-1 cho Sunderland', timestampSec: 130 },
      { minute: '34\'', title: 'Phil Foden cứa lòng chân trái góc xa đưa Man City dẫn 2-1', timestampSec: 220 },
      { minute: '52\'', title: 'Jeremy Doku solo tốc độ dứt điểm chéo góc', timestampSec: 340 },
      { minute: '61\'', title: 'Haaland hoàn tất cú đúp với pha đánh đầu dũng mãnh', timestampSec: 430 },
      { minute: '84\'', title: 'Kevin De Bruyne đá phạt hàng rào ấn định tỉ số 5-3', timestampSec: 580 }
    ]
  },
  {
    id: 'hl-laliga-bar-rac',
    matchId: 'laliga-r7-bar-rac',
    title: 'Highlights: Barcelona 7 - 2 Racing Santander | Raphinha lập hat-trick, Yamal bùng nổ',
    duration: '12:20',
    league: 'La Liga',
    thumbnail: cyberHighlightImg,
    views: '3.9M lượt xem',
    date: 'Vòng 7',
    events: [
      { minute: '14\'', title: 'Raphinha nã đại bác mở màn tỉ số cho Barca', timestampSec: 35 },
      { minute: '24\'', title: 'Lamine Yamal rê dắt solo tuyệt mỹ nâng tỉ số 2-0', timestampSec: 110 },
      { minute: '45\'', title: 'Lewandowski sút phạt đền thành công', timestampSec: 260 },
      { minute: '55\'', title: 'Yamal hoàn tất cú đúp với cú sút chìm góc hiểm', timestampSec: 360 },
      { minute: '62\'', title: 'Raphinha hoàn tất cú hat-trick đẳng cấp', timestampSec: 470 },
      { minute: '79\'', title: 'Dani Olmo xoay compa ấn định thắng lợi đậm đà 7-2', timestampSec: 610 }
    ]
  },
  {
    id: 'hl-ucl-bay-bod',
    matchId: 'ucl-md1-bay-bod',
    title: 'Highlights: Bayern Munich 5 - 0 Bodø/Glimt | Hùm Xám phô diễn sức mạnh vượt trội',
    duration: '10:50',
    league: 'Champion leauge',
    thumbnail: cyberStadiumImg,
    views: '2.8M lượt xem',
    date: 'Lượt 1 C1',
    events: [
      { minute: '16\'', title: 'Harry Kane đệm bóng cận thành mở tỉ số cho Bayern', timestampSec: 45 },
      { minute: '28\'', title: 'Michael Olise cứa lòng chân trái găm góc chết', timestampSec: 140 },
      { minute: '42\'', title: 'Jamal Musiala độc diễn qua ba cầu thủ ghi bàn 3-0', timestampSec: 280 },
      { minute: '58\'', title: 'Harry Kane hoàn tất cú đúp penalty chuẩn xác', timestampSec: 410 },
      { minute: '74\'', title: 'Leroy Sané đệm bóng cận thành ấn định 5-0 cho Bayern', timestampSec: 520 }
    ]
  }
];

export const EXPERT_ANALYSES: ExpertAnalysis[] = [
  {
    id: 'exp-unl-cro-eng',
    matchId: 'unl-cro-eng-0410',
    authorName: 'BLV Quang Huy',
    authorTitle: 'Chuyên gia & Nhà bình luận bóng đá quốc tế',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80',
    predictedScore: 'Croatia 0 - 7 Anh (Chính xác)',
    confidenceRate: 98,
    title: 'Cơn địa chấn lớn nhất lịch sử Nations League: Khi Tam Sư biến Maksimir thành sân tập',
    summary: 'Tuyển Anh đã tạo nên chiến thắng hủy diệt 7-0 không tưởng ngay tại Zagreb. Harry Kane lập hat-trick, Anthony Gordon lập cú đúp cùng hai siêu phẩm của Jude Bellingham và Bukayo Saka đã làm sụp đổ hoàn toàn khối phòng ngự của Croatia.',
    tacticalKeyPoints: [
      'Gareth Southgate/Lee Carsley áp dụng sơ đồ pressing tầm cao nghẹt thở 4-3-3',
      'Khai thác triệt để khoảng trống sau lưng hai hậu vệ cánh của Croatia',
      'Khả năng chuyển đổi trạng thái (transition) với tốc độ tia chớp của Saka và Gordon',
      'Harry Kane lùi sâu chia bài và tận dụng hoàn hảo các cơ hội trong vòng cấm'
    ],
    keyClash: {
      playerHome: 'Luka Modrić (Croatia)',
      playerAway: 'Jude Bellingham (Anh)',
      analysis: 'Bellingham với sức trẻ, thể lực sung mãn và khả năng tranh chấp vượt trội đã hoàn toàn áp đảo cựu quả bóng Vàng Modrić ở khu trung tuyến.'
    },
    oddsHomeWin: 4.80,
    oddsDraw: 3.50,
    oddsAwayWin: 1.75
  },
  {
    id: 'exp-unl-por-nor',
    matchId: 'unl-por-nor-0510',
    authorName: 'BLV Anh Ngọc',
    authorTitle: 'Chuyên gia bóng đá châu Âu',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
    predictedScore: 'Bồ Đào Nha 2 - 1 Na Uy (Chính xác)',
    confidenceRate: 92,
    title: 'Bồ Đào Nha 2 - 1 Na Uy: Bản lĩnh Selecao và siêu phẩm phút 82 của Bruno Fernandes',
    summary: 'Cuộc so tài đỉnh cao giữa Ronaldo và Haaland đã diễn ra vô cùng kịch tính. Dù Haaland gỡ hòa 1-1 cho Na Uy ở phút 54, nhưng khoảnh khắc thiên tài của Bruno Fernandes ở phút 82 với cú nã đại bác ngoài vòng cấm đã giữ trọn vẹn 3 điểm ở lại Lisbon.',
    tacticalKeyPoints: [
      'Bồ Đào Nha áp đảo hoàn toàn về thời lượng kiểm soát bóng (58%)',
      'Bernardo Silva và Bruno Fernandes điều tiết nhịp độ và khai thác tốt hành lang trong',
      'Na Uy nguy hiểm trong các tình huống bóng dài nhắm vào Haaland nhưng thiếu người tiếp ứng ở tuyến hai',
      'Khả năng dứt điểm từ xa tạo đột biến mang lại bàn thắng quyết định'
    ],
    keyClash: {
      playerHome: 'Bruno Fernandes (Bồ Đào Nha)',
      playerAway: 'Erling Haaland (Na Uy)',
      analysis: 'Haaland nổ súng khẳng định đẳng cấp sát thủ, nhưng sự toàn diện và bàn thắng vàng của Bruno Fernandes đã định đoạt kết quả trận chiến.'
    },
    oddsHomeWin: 1.85,
    oddsDraw: 3.65,
    oddsAwayWin: 4.10
  },
  {
    id: 'exp-epl-mci-sun',
    matchId: 'epl-r5-mci-sun',
    authorName: 'BLV Quang Huy',
    authorTitle: 'Chuyên gia & Nhà bình luận bóng đá quốc tế',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80',
    predictedScore: 'Man City 5 - 3 Sunderland (Chính xác)',
    confidenceRate: 90,
    title: 'Man City 5 - 3 Sunderland: Cơn mưa 8 bàn thắng điên rồ tại Etihad',
    summary: 'Man City phô diễn hỏa lực tấn công hủy diệt với cú đúp của Haaland cùng các pha lập công của Foden, Doku và De Bruyne. Dù Sunderland thi đấu quật khởi nhờ bàn thắng của Jobe Bellingham, Isidor và Mayenda nhưng không thể cưỡng lại sức mạnh của nhà ĐKVĐ.',
    tacticalKeyPoints: [
      'Man City tung ra tới 24 cú sút và 13 lần trúng đích',
      'Kevin De Bruyne vào sân tạo ra sự khác biệt lớn với cú đá phạt thần sầu',
      'Sunderland kiên cường phản công chuyển đổi trạng thái chớp nhoáng',
      'Erling Haaland tiếp tục dẫn đầu danh sách vua phá lưới EPL'
    ],
    keyClash: {
      playerHome: 'Erling Haaland (Man City)',
      playerAway: 'Jobe Bellingham (Sunderland)',
      analysis: 'Cả hai đều ghi dấu ấn đậm nét, nhưng bản năng sát thủ trong vòng cấm của Haaland giúp Man City làm chủ cuộc chơi.'
    },
    oddsHomeWin: 1.25,
    oddsDraw: 6.50,
    oddsAwayWin: 11.00
  },
  {
    id: 'exp-1',
    matchId: 'match-laliga-1',
    authorName: 'BLV Quang Huy',
    authorTitle: 'Chuyên gia & Nhà bình luận bóng đá quốc tế',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80',
    predictedScore: 'Barcelona 2 - 2 Real Madrid',
    confidenceRate: 85,
    title: 'Đại chiến El Clásico: Cuộc đấu trí đỉnh cao giữa bẫy việt vị và tốc độ sấm sét',
    summary: 'Barcelona dưới thời Hansi Flick đang duy trì khối đội hình dâng rất cao và bẫy việt vị nghẹt thở. Trong khi đó, Real Madrid sở hữu mũi đinh ba Mbappé - Vinícius - Bellingham sẵn sàng trừng phạt bất kỳ khoảng trống nào phía sau lưng hàng thủ.',
    tacticalKeyPoints: [
      'Barca kiểm soát trung tuyến bằng khả năng điều phối nhịp của Pedri và Casadó',
      'Real Madrid chủ động phòng ngự khu vực tầng trung (mid-block) và phất bóng dài vượt tuyến',
      'Yếu tố thể lực ở 20 phút cuối hiệp 2 sẽ mang tính định đoạt cuộc chiến',
      'Trọng tài Gil Manzano nổi tiếng nghiêm khắc, có thể xuất hiện thẻ phạt sớm'
    ],
    keyClash: {
      playerHome: 'Lamine Yamal (Barca)',
      playerAway: 'Ferland Mendy (Real)',
      analysis: 'Yamal có khả năng rê bóng 1v1 đẳng cấp hàng đầu châu Âu hiện tại. Liệu thể lực và kinh nghiệm dằn dặn của Mendy có phong tỏa được ngôi sao trẻ này?'
    },
    oddsHomeWin: 2.35,
    oddsDraw: 3.60,
    oddsAwayWin: 2.80
  },
  {
    id: 'exp-2',
    matchId: 'match-bundesliga-1',
    authorName: 'BLV Anh Ngọc',
    authorTitle: 'Nhà báo thể thao & Thành viên ban bầu chọn Quả bóng Vàng',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
    predictedScore: 'Bayern Munich 3 - 1 Dortmund',
    confidenceRate: 80,
    title: 'Der Klassiker rực lửa Allianz Arena: Kane và Musiala sẽ thị uy sức mạnh',
    summary: 'Bayern đang khát khao khẳng định lại vị thế thống trị tuyệt đối tại Bundesliga. Hàng thủ Dortmund thường bộc lộ điểm yếu khi chịu áp lực pressing tầm cao liên tục của Hùm Xám.',
    tacticalKeyPoints: [
      'Harry Kane lùi sâu kiến thiết tạo không gian cho Olise và Musiala băng cắt',
      'Dortmund cần trông cậy vào các pha phản công biên chớp nhoáng của Adeyemi',
      'Điểm tựa khán đài Allianz Arena luôn là cơn ác mộng đối với đội bóng vùng Ruhr'
    ],
    keyClash: {
      playerHome: 'Harry Kane (Bayern)',
      playerAway: 'Nico Schlotterbeck (Dortmund)',
      analysis: 'Schlotterbeck phải giữ cự ly bọc lót hoàn hảo, nếu bị Kane lôi kéo khỏi vòng cấm thì khoảng trống sẽ bị các tiền đạo cánh Bayern khai thác triệt để.'
    },
    oddsHomeWin: 1.55,
    oddsDraw: 4.50,
    oddsAwayWin: 5.20
  }
];

export const INITIAL_COMMUNITY_MESSAGES: CommunityMessage[] = [
  {
    id: 'msg-1',
    user: 'CyberStriker99',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=64&q=80',
    fanOf: 'Man City',
    content: 'Foden đá trận này cháy quá anh em ơi! Cú sút chân trái đúng thương hiệu không thể cản phá! 🔥⚽',
    timestamp: '2 phút trước',
    reactionCount: 24,
    userLiked: true
  },
  {
    id: 'msg-2',
    user: 'HalaMadrid_VN',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=64&q=80',
    fanOf: 'Real Madrid',
    content: 'Mbappé vẫn quá nhanh, Real chỉ cần một khoảnh khắc phản công là có bàn thắng. Hiệp 2 còn căng lắm!',
    timestamp: '3 phút trước',
    reactionCount: 18
  },
  {
    id: 'msg-3',
    user: 'GunnerHanoi',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=64&q=80',
    fanOf: 'Arsenal',
    content: 'Nhìn Saka ghi bàn xong ăn mừng xúc động ghê, trận sau gặp Man City nhất định phải giữ phong độ này.',
    timestamp: '5 phút trước',
    reactionCount: 15
  },
  {
    id: 'msg-4',
    user: 'VLeague_Fanatic',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=64&q=80',
    fanOf: 'Hà Nội FC',
    content: 'Derby thủ đô chiều nay Hàng Đẫy chắc chắn chật kín chỗ. Chờ đợi màn đối đầu Quang Hải vs Văn Quyết!',
    timestamp: '8 phút trước',
    reactionCount: 31
  }
];

export const FRIENDS_LEADERBOARD: FriendRank[] = [
  { rank: 1, name: 'Nguyễn Minh Tuấn (Bạn)', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=64&q=80', correctPredictions: 24, totalPoints: 720, accuracyRate: '82%' },
  { rank: 2, name: 'Trần Hoàng Long', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=64&q=80', correctPredictions: 22, totalPoints: 660, accuracyRate: '78%' },
  { rank: 3, name: 'Lê Thanh Tùng', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=64&q=80', correctPredictions: 20, totalPoints: 590, accuracyRate: '74%' },
  { rank: 4, name: 'Phạm Văn Nam', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80', correctPredictions: 19, totalPoints: 550, accuracyRate: '71%' },
  { rank: 5, name: 'Đặng Quốc Anh', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=64&q=80', correctPredictions: 17, totalPoints: 490, accuracyRate: '68%' }
];
