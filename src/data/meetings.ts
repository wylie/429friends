export type MeetingStatus = 'scheduled' | 'weather-watch' | 'canceled';

export interface MeetingScheduleEntry {
  date: string;
  time: string;
  startsAt: string;
  status: MeetingStatus;
  notes: string;
}

export const meetingSchedule: MeetingScheduleEntry[] = [
  {
    date: '2026-06-14',
    time: '10:30 AM',
    startsAt: '2026-06-14T10:30:00-04:00',
    status: 'scheduled',
    notes: 'Outdoor Meeting for Worship followed by informal community time.',
  },
  {
    date: '2026-07-12',
    time: '10:30 AM',
    startsAt: '2026-07-12T10:30:00-04:00',
    status: 'scheduled',
    notes: 'Bring a chair and settle into the backyard circle a few minutes early.',
  },
  {
    date: '2026-08-09',
    time: '10:30 AM',
    startsAt: '2026-08-09T10:30:00-04:00',
    status: 'weather-watch',
    notes: 'Outdoor plans may shift if heavy rain or storms are forecast.',
  },
  {
    date: '2026-09-13',
    time: '10:30 AM',
    startsAt: '2026-09-13T10:30:00-04:00',
    status: 'scheduled',
    notes: 'Children are welcome alongside adults throughout the meeting.',
  },
  {
    date: '2026-10-11',
    time: '10:30 AM',
    startsAt: '2026-10-11T10:30:00-04:00',
    status: 'scheduled',
    notes: 'Expect fall weather and bring a layer if the morning is cool.',
  },
  {
    date: '2026-11-08',
    time: '10:30 AM',
    startsAt: '2026-11-08T10:30:00-05:00',
    status: 'scheduled',
    notes: 'Daylight saving time has ended; the meeting still begins at 10:30 AM local time.',
  },
  {
    date: '2026-12-13',
    time: '10:30 AM',
    startsAt: '2026-12-13T10:30:00-05:00',
    status: 'scheduled',
    notes: 'Bundle up for a winter gathering and stay for warm conversation afterward.',
  },
  {
    date: '2027-01-10',
    time: '10:30 AM',
    startsAt: '2027-01-10T10:30:00-05:00',
    status: 'scheduled',
    notes: 'A new year begins with the same quiet circle and open welcome.',
  },
];
