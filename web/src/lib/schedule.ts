export type ShowId = "house" | "lounge" | "hiphop" | "disco" | "rotation";

export type ShowRule = {
  id: ShowId;
  name: string;
  days: number[];
  fromMin: number;
  toMin: number;
};

export const SHOWS: ShowRule[] = [
  { id: "house", name: "All-Day House", days: [6], fromMin: 0, toMin: 1439 },
  { id: "lounge", name: "Sunday Lounge Sessions", days: [0], fromMin: 0, toMin: 1439 },
  { id: "hiphop", name: "Real Hip Hop Lives", days: [1, 2, 3, 4, 5], fromMin: 1080, toMin: 1319 },
  { id: "disco", name: "Disco Heat", days: [5], fromMin: 1320, toMin: 1439 },
  { id: "rotation", name: "The Master Rotation", days: [0, 1, 2, 3, 4, 5, 6], fromMin: -1, toMin: 9999 }
];

export function getOnAirShow(date: Date = new Date()): ShowRule {
  const day = date.getDay();
  const mins = date.getHours() * 60 + date.getMinutes();
  for (const rule of SHOWS) {
    if (rule.days.includes(day) && mins >= rule.fromMin && mins <= rule.toMin) return rule;
  }
  return SHOWS[SHOWS.length - 1];
}
