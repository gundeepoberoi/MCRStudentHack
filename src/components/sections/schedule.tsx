const Schedule = () => {
  return (
    <section
      id="schedule"
      className="flex flex-col items-center min-h-screen w-full py-4"
    >
      <h1 className="text-4xl font-bold">Schedule</h1>
      <div className="flex flex-auto h-screen w-full gap-x-10 items-center justify-center snap-y snap-mandatory">
        <div className="flex basis-full h-full items-center justify-end">
          <h1 className="text-7xl uppercase font-bold">
            12<sup>th</sup> March
          </h1>
        </div>
        <div className="flex flex-col basis-full bg-orange-500 h-full items-center">
          <div className="snap-start">
            <h1 className="text-wrap">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              corporis illum ipsum quo perspiciatis maxime non dignissimos amet
              ab error? Doloremque quod laboriosam deleniti sit harum.
              Laudantium expedita sed illo! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Libero corporis illum ipsum quo
              perspiciatis maxime non dignissimos amet ab error? Doloremque quod
              laboriosam deleniti sit harum. Laudantium expedita sed illo! Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Libero
              corporis illum ipsum quo perspiciatis maxime non dignissimos amet
              ab error? Doloremque quod laboriosam deleniti sit harum.
              Laudantium expedita sed illo!
            </h1>
          </div>
          <div className="snap-start">
            <h1 className="text-wrap">Hello World</h1>
          </div>
          <div className="snap-start">
            <h1 className="text-wrap">Hakuna Matata</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
