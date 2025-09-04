export default function AsideMainContent() {
  const username = "Rado Hidayatulloh";

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
                Status User
              </p>
            </div>
            <div className="h-40 w-80 bg-white rounded-lg">
              <p className="title ml-5 text-md font-semibold mt-2">
                Jumlah Pemesanan
              </p>
            </div>
            <div className="h-40 w-80 bg-white rounded-lg">
              <p className="title ml-5 text-md font-semibold mt-2">
                Status Pesanan
              </p>
            </div>
          </div>
          <div className="SecondaryBox mt-20 flex gap-10">
            <div className="h-55 w-100 bg-white rounded-lg"></div>
            <div className="h-55 w-100 bg-white rounded-lg"></div>
          </div>
        </div>
      </aside>
    </>
  );
}
