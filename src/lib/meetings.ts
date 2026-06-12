import { siteConfig } from '../config/site';
import type { MeetingScheduleEntry, MeetingStatus } from '../data/meetings';
import { meetingSchedule } from '../data/meetings';

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

export function getMeetingDate(meeting: Pick<MeetingScheduleEntry, 'startsAt'>) {
  return new Date(meeting.startsAt);
}

export function getUpcomingMeetings(now = new Date()) {
  return meetingSchedule.filter((meeting) => getMeetingDate(meeting).getTime() >= now.getTime());
}

export function getNextMeeting(now = new Date()) {
  return getUpcomingMeetings(now).find((meeting) => meeting.status !== 'canceled') ?? null;
}

export function formatMeetingDate(meeting: Pick<MeetingScheduleEntry, 'startsAt'>) {
  return dateFormatter.format(getMeetingDate(meeting));
}

export function formatMeetingTime(meeting: Pick<MeetingScheduleEntry, 'startsAt'>) {
  return timeFormatter.format(getMeetingDate(meeting));
}

export function formatMeetingDateTime(meeting: Pick<MeetingScheduleEntry, 'startsAt'>) {
  return `${formatMeetingDate(meeting)} at ${formatMeetingTime(meeting)}`;
}

export function formatMeetingMonth(meeting: Pick<MeetingScheduleEntry, 'startsAt'>) {
  return shortMonthFormatter.format(getMeetingDate(meeting));
}

export function formatMeetingDay(meeting: Pick<MeetingScheduleEntry, 'startsAt'>) {
  return dayFormatter.format(getMeetingDate(meeting));
}

export function getMeetingStatusLabel(status: MeetingStatus) {
  return statusLabels[status];
}
