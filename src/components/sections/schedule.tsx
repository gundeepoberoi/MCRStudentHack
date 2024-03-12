const Schedule = () => {
  return (
    <section
      id="schedule"
      className="flex flex-col items-center min-h-screen w-full py-4"
    >
      <h1 className="text-5xl font-bold py-7">Schedule</h1>
      <div className="flex h-screen w-full gap-x-10 items-center justify-center">
        <div className="flex w-1/2 h-screen items-center justify-end bg-purple-500 px-5">
          <h1 className="text-center text-4xl uppercase font-bold">
            12<sup>th</sup> March
          </h1>
        </div>
        <div className="flex flex-col w-1/2 h-full bg-orange-500 snap-y snap-mandatory overflow-y-auto px-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex h-full shrink-0 snap-start items-center">
            <h1 className="text-wrap text-lg">Event 1</h1>
          </div>
          <div className="flex h-full shrink-0 snap-start items-center">
            <h1 className="text-wrap text-lg">Event 2</h1>
          </div>
          <div className="flex h-full shrink-0 snap-start items-center">
            <h1 className="text-wrap text-lg">Event 3</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
