import { Card, CardContent } from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";
import { ScheduleItems } from "@/lib/schedule";
import { useState } from "react";

const ScheduleHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
        <h2 className="font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 font-display text-2xl tracking-tight text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

const ScheduleLgScreenLayout = ({ data }: { data: ScheduleItems }) => {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[1.10] rounded-full blur-3xl -z-1 brightness-50" />
      {data.map((day, index) => (
        <div key={`date-${day.date}-${index}`} className="flex flex-col">
          <h3 className="text-2xl font-semibold tracking-tight z-10">
            <time dateTime={day.datetime}>{day.date}</time>
          </h3>
          <p className="mt-1.5 text-base tracking-tight z-10">{day.desc}</p>

          <Card className="mt-10 space-y-8 bg-gray-900 bg-gradient-to-b from-gray-900 to-gray-950 px-10 py-14 text-center flex flex-col grow isolate shadow-lg ring-1 ring-black/5 border-none backdrop-blur-sm text-white overflow-hidden">
            <Meteors number={20} className="bg-[#18D1D4] z-10" />
            <CardContent>
              <ol role="list" className="space-y-8">
                {day.events.map((event, index) => (
                  <li
                    key={`event-${event.title}-${index}`}
                    aria-label={event.title}
                  >
                    <h4 className="text-lg font-semibold tracking-tight">
                      {event.title}
                    </h4>
                    <p className="mt-1 tracking-tight">{event.description}</p>
                    <p className="mt-1 font-mono text-sm">
                      <time dateTime={event.time}>{event.time}</time>
                    </p>
                    <div
                      className={
                        index !== day.events.length - 1
                          ? "mx-auto mt-8 h-0.5 w-48 bg-white/60 rounded-full"
                          : "hidden"
                      }
                    ></div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

const ScheduleScreenLayout = ({ data }: { data: ScheduleItems }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-110 rounded-full blur-3xl -z-1 brightness-50 lg:hidden" />
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden">
        <div
          className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8"
          role="tablist"
          aria-orientation="vertical"
        >
          {data.map((day, index) => (
            <div
              key={`date-${day.date}-${index}`}
              className={
                selectedTab == index
                  ? `relative w-1/2 flex-none pr-4 sm:w-auto sm:pr-0`
                  : `relative w-1/2 flex-none pr-4 sm:w-auto sm:pr-0 opacity-50`
              }
            >
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                <time dateTime={day.datetime}>
                  <button
                    className="ui-not-focus-visible:outline-none"
                    id={`headlessui-tabs-tab-${day.date}`}
                    role="tab"
                    type="button"
                    aria-selected={selectedTab === index}
                    tabIndex={index}
                    data-headlessui-state={
                      selectedTab === index ? "selected" : ""
                    }
                    aria-controls={`headlessui-tabs-panel-${day.date}`}
                    onClick={() => setSelectedTab(index)}
                  >
                    <span className="absolute inset-0" />
                    {day.date}
                  </button>
                </time>
              </h3>
              <p className="mt-1.5 text-base tracking-tight text-white">
                {day.desc}
              </p>
            </div>
          ))}
        </div>

        <div>
          {data.map((day, index) => (
            <Card
              className={
                selectedTab === index
                  ? `space-y-8 bg-gray-900 bg-gradient-to-b from-gray-900 to-gray-950 px-10 py-14 text-center flex flex-col grow isolate shadow-lg ring-1 ring-black/5 border-none backdrop-blur-sm text-white overflow-hidden`
                  : `hidden`
              }
              key={`date-${day.date}-${index}`}
            >
              <Meteors number={20} className="bg-[#18D1D4] z-10" />
              <CardContent>
                <ol role="list" className="space-y-8">
                  {day.events.map((event, index) => (
                    <li
                      key={`event-${event.title}-${index}`}
                      aria-label={event.title}
                    >
                      <h4 className="text-lg font-semibold tracking-tight">
                        {event.title}
                      </h4>
                      <p className="mt-1 tracking-tight">{event.description}</p>
                      <p className="mt-1 font-mono text-sm">
                        <time dateTime={event.time}>{event.time}</time>
                      </p>
                      <div
                        className={
                          index !== day.events.length - 1
                            ? "mx-auto mt-8 h-0.5 w-24 bg-white/60 rounded-full"
                            : "hidden"
                        }
                      ></div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export { ScheduleHeader, ScheduleLgScreenLayout, ScheduleScreenLayout };
