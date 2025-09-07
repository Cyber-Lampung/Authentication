export default function AsideMainContent() {
  const username = "Rado Hidayatulloh";

  const oWebsite = 10;

  return (
    <>
      <aside
        className="ml-47 h-screen w-full"
        style={{ background: "#0a0a77ff" }}
      >
        <div className="m-10">
          <div className="flex items-center justify-between">
            <h1 className="text-white font-bold text-3xl">
              Hello, {username} 👋
            </h1>
          </div>

          <div className="Container mt-20 flex gap-15">
            <div className="h-40 w-80 bg-white rounded-lg">
              <p className="title ml-5 text-md font-semibold mt-2">
                Jumlah Order
              </p>

              <div className="ml-5 mt-5 flex flex-col gap-2 text-xs">
                <p className=" font-semibold">
                  Order Website : {oWebsite} Project{" "}
                </p>
                <p className=" font-semibold">
                  Order UI UX Template : {oWebsite} Desain{" "}
                </p>
                <p className=" font-semibold">Order Vps : {oWebsite} Server </p>
              </div>
            </div>
            <div className="h-40 w-80 bg-white rounded-lg">
              <p className="title ml-5 text-md font-semibold mt-2">
                Jumlah Pending Per Project
              </p>

              <div className="ml-5 mt-5 flex flex-col gap-2 text-xs">
                <p className=" font-semibold">
                  Pending Website : {oWebsite} Project{" "}
                </p>
                <p className=" font-semibold">
                  Pending UI UX Template : {oWebsite} Desain{" "}
                </p>
                <p className=" font-semibold">
                  On Progress Vps : {oWebsite} Server{" "}
                </p>
              </div>
            </div>
            <div className="h-40 w-80 bg-white rounded-lg">
              <p className="title ml-5 text-md font-semibold mt-2">
                Status Pesanan
              </p>

              <div className="ml-5 mt-5 flex flex-col gap-2 text-xs">
                <p className=" font-semibold">
                  Done Website : {oWebsite} Project{" "}
                </p>
                <p className=" font-semibold">
                  Done UI UX Template : {oWebsite} Desain{" "}
                </p>
                <p className=" font-semibold">Done Vps : {oWebsite} Server </p>
              </div>
            </div>
          </div>
          <div className="SecondaryBox mt-20 flex gap-10">
            <div className="h-55 w-100 bg-white rounded-lg">
              <p className="m-3 ml-5 font-semibold font-sm">Feature Request</p>
            </div>
            <div className="h-55 w-100 bg-white rounded-lg">
              <p className="m-3 ml-5 font-semibold font-sm">
                Deadline Pemesanan
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
