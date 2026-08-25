export const HEARTHTIS_URL = "https://hearthis.at/themasterdj/";
export const WHATSAPP_NUMBER = "27000000000";
export const AVATAR_URL =
  "https://img.hearthis.at/6/7/5/_/uploads/9440945/image_user/w800_q70_ptrue_v2_----1626856366576.jpg";

export type RecentTrack = {
  slug: string;
  artClass: string;
  lines: string[];
  title: string;
  artist: string;
  time: string;
};

export const RECENT: RecentTrack[] = [
  { slug: "30-years-of-soul", artClass: "art-soul", lines: ["30 Years", "of Soul"], title: "30 Years of Soul", artist: "The Master", time: "18:42" },
  { slug: "straightouta90s", artClass: "art-90s", lines: ["Straight", "Outta 90s"], title: "Straight Outta 90s", artist: "The Master", time: "17:58" },
  { slug: "the-master-disco-mix", artClass: "art-disco", lines: ["The Master", "Disco Mix"], title: "The Master Disco Mix", artist: "The Master", time: "17:15" },
  { slug: "sunday-lounge-sessions", artClass: "art-lounge", lines: ["Sunday Lounge", "Sessions"], title: "Sunday Lounge Sessions", artist: "The Master", time: "15:02" }
];
