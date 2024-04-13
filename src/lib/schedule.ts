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
        time: "09:00AM - 11:00AM",
        title: "Registration & Icebreaker",
        description: "Register for the hackathon and learn more about your fellow contestants.",
      },
      {
        time: "11:00AM - 11:45AM",
        title: "Opening Ceremony",
        description: "Attend the opening ceremony to kick off the hackathon.",
      },
      {
        time: "12:00PM",
        title: "Hackathon Begins",
        description: "Start hacking.",
      },
      {
        time: "01:00PM",
        title: "Lunch",
        description: "🍱🍪🥟",
      },
      {
        time: "02:00PM Onwards",
        title: "Workshops",
        description: "2PM Origami, 3PM Lockpicking, 4PM CV review, 5PM Booking.com challenge",
      },
      {
        time: "06:00PM",
        title: "Dinner",
        description: "🌯🥙🥤",
      },
      {
        time: "07:00PM Onwards",
        title: "Evening Events",
        description: "7PM Cup-stacking, 8:30PM Film-Screening, 11PM Ball pit minigame",
      },
    ],
  },
  {
    date: "April 14",
    datetime: "2024-04-14",
    desc: "Day 2 of hackathon.",
    events: [
      {
        time: "12:00AM",
        title: "Midnight Snack",
        description: "🍕🍰🍜",
      },
      {
        time: "01:00AM - 02:30AM",
        title: "Minecraft Hunger Games",
        description: "May the odds be ever in your favour.",
      },
      {
        time: "07:30AM",
        title: "Breakfast",
        description: "🍩🥐☕",
      },
      {
        time: "08:30AM - 09:30AM",
        title: "Scavenger Hunt",
        description: "Wakey wakey it's scavenger hunt time.",
      },
      {
        time: "10:00AM - 12:00PM",
        title: "Submission opens",
        description: "Submit your projects before 12PM.",
      },
      {
        time: "12:00PM",
        title: "Judging & Paper Aeroplane Competition",
        description: "🍱🍪🥟 and judging begins",
      },
      {
        time: "01:45PM",
        title: "Lunch",
        description: "🍱🍪🥟",
      },
      {
        time: "02:30PM - 03:30PM",
        title: "Project Showcase",
        description: "It's time to show off your cosmic projects🥶🥶.",
      },
      {
        time: "03:30PM - 04:00PM",
        title: "Closing Ceremony",
        description: "Winners announced and closing ceremony.",
      },
    ],
  },
];

export { scheduleList, type ScheduleItems };
