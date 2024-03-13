interface Events {
  title: string;
  description: string;
  time: string;
}

interface ScheduleItem {
  date: string;
  datetime: string;
  desc: string;
  events: Events[];
}

interface ScheduleItems extends Array<ScheduleItem> {}

const scheduleList: ScheduleItems = [
  {
    date: "April 13",
    datetime: "2024-04-13",
    desc: "Day 1 of hackathon.",
    events: [
      {
        time: "9:00AM - 10:00AM",
        title: "Some event title",
        description: "Some event description.",
      },
      {
        time: "10:00AM - 11:00AM",
        title: "Some event title",
        description: "Some event description.",
      },
    ],
  },
  {
    date: "April 14",
    datetime: "2024-04-14",
    desc: "Day 2 of hackathon.",
    events: [
      {
        time: "9:00AM - 10:00AM",
        title: "Some event title",
        description: "Some event description.",
      },
    ],
  },
];

export { scheduleList, type ScheduleItems };
