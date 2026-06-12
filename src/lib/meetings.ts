import { getCollection, type CollectionEntry } from 'astro:content';
import { siteConfig } from '../config/site';

export type MeetingStatus = 'scheduled' | 'weather-watch' | 'canceled';
export type MeetingEntry = CollectionEntry<'meetings'>['data'] & {
  id: string;
};

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: siteConfig.timezone,
});

const shortMonthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  timeZone: siteConfig.timezone,
});

const dayFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  timeZone: siteConfig.timezone,
});

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  timeZone: siteConfig.timezone,
});

const statusLabels: Record<MeetingStatus, string> = {
  scheduled: 'Scheduled',
  'weather-watch': 'Weather watch',
  canceled: 'Canceled',
};

export async function getMeetingSchedule() {
  const meetings = await getCollection('meetings');

  return meetings
    .map((entry) => ({
      id: entry.id,
      ...entry.data,
    }))
    .sort((a, b) => getMeetingDate(a).getTime() - getMeetingDate(b).getTime());
}

export function getMeetingDate(meeting: Pick<MeetingEntry, 'startsAt'>) {
  return new Date(meeting.startsAt);
}

export async function getUpcomingMeetings(now = new Date()) {
  const meetingSchedule = await getMeetingSchedule();
  return meetingSchedule.filter((meeting) => getMeetingDate(meeting).getTime() >= now.getTime());
}

export async function getNextMeeting(now = new Date()) {
  const upcomingMeetings = await getUpcomingMeetings(now);
  return upcomingMeetings.find((meeting) => meeting.status !== 'canceled') ?? null;
}

export function formatMeetingDate(meeting: Pick<MeetingEntry, 'startsAt'>) {
  return dateFormatter.format(getMeetingDate(meeting));
}

export function formatMeetingTime(meeting: Pick<MeetingEntry, 'startsAt'>) {
  return timeFormatter.format(getMeetingDate(meeting));
}

export function formatMeetingDateTime(meeting: Pick<MeetingEntry, 'startsAt'>) {
  return `${formatMeetingDate(meeting)} at ${formatMeetingTime(meeting)}`;
}

export function formatMeetingMonth(meeting: Pick<MeetingEntry, 'startsAt'>) {
  return shortMonthFormatter.format(getMeetingDate(meeting));
}

export function formatMeetingDay(meeting: Pick<MeetingEntry, 'startsAt'>) {
  return dayFormatter.format(getMeetingDate(meeting));
}

export function getMeetingStatusLabel(status: MeetingStatus) {
  return statusLabels[status];
}
