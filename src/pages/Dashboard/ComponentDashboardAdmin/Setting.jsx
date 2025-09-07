export default function Setting() {
  const title = "Setting Pages";

  return (
    <>
      <aside
        className="ml-47 h-screen w-full"
        style={{ background: "#0a0a77ff" }}
      >
        <div className="m-10">
          <h1 className="text-white font-bold text-3xl">{title}</h1>
        </div>

        <div className="m-10">
          <div className="title1 text-white text-xl font-semibold">
            <div>Server Management </div>
          </div>
          <div className="">
            <li className="text-white mt-5 ">
              Restart / Shutdown Server Induk :{" "}
            </li>
            <div className="flex gap-5 mt-5">
              <button className="border-2 p-1.5 text-xs font-semibold text-white rounded-xl cursor-pointer">
                Shutdown
              </button>
              <button className="border-2 p-1.5 text-xs font-semibold text-white rounded-xl cursor-pointer w-20">
                Restart
              </button>
              <button className="border-2 p-1.5 text-xs font-semibold text-white rounded-xl cursor-pointer w-20">
                Start
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
