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
        time: "10:00AM - 11:00AM",
        title: "Registration",
        description: "Register for the hackathon on site.",
      },
      {
        time: "11:00AM - 12:00PM",
        title: "Opening Ceremony",
        description: "Attend the opening ceremony to kick off the hackathon.",
      },
      {
        time: "12:00PM",
        title: "Hackathon Begins",
        description: "Start hacking.",
      },
      {
        time: "12:30PM",
        title: "Lunch",
        description: "🍔🍕🥪",
      },
      {
        time: "01:00PM Onwards",
        title: "Workshops",
        description: "Series of workshops by our sponsors and partners.",
      },
      {
        time: "06:00PM",
        title: "Dinner",
        description: "🍔🍕🥪",
      },
      {
        time: "12:00AM",
        title: "Midnight Snack",
        description: "🍔🍕🥪",
      },
    ],
  },
  {
    date: "April 14",
    datetime: "2024-04-14",
    desc: "Day 2 of hackathon.",
    events: [
      {
        time: "01:00AM Onwards",
        title: "Leisure Activities",
        description: "Fun activities to keep you awake.",
      },
      {
        time: "08:00AM",
        title: "Breakfast",
        description: "🍔🍕🥪",
      },
      {
        time: "10:00AM - 12:00PM",
        title: "Submission",
        description: "Submit your projects.",
      },
      {
        time: "12:30PM",
        title: "Lunch and Judging",
        description: "🍔🍕🥪 and judging begins",
      },
      {
        time: "03:00PM - 04:00PM",
        title: "Closing Ceremony",
        description: "Winners announced and closing ceremony.",
      },
    ],
  },
];

export { scheduleList, type ScheduleItems };
