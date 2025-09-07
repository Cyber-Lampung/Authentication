import {
  ArrowDownUp,
  CheckCircle,
  Cpu,
  Diagram3,
  Memory,
  Thermometer,
} from "react-bootstrap-icons";

export default function VpsStatus() {
  const title = "Vps Status Pages";

  return (
    <>
      <aside
        className="ml-47 h-screen w-full"
        style={{ background: "#0a0a77ff" }}
      >
        <div className="m-10">
          <h1 className="text-white font-bold text-3xl">{title}</h1>
        </div>

        <div className="m-10 pt-5">
          <div className="boxVps flex gap-10">
            <div className="w-80 h-40 bg-white rounded-xl">
              <div className="">
                <div>
                  <p className="text-sm pt-2 pl-5 font-semibold">
                    List Server Pembelian
                  </p>
                  <div className="m-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="text-red-500" />
                      <p className="font-semibold text-xs">
                        Total Cpu Usage :{" "}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Memory />
                      <p className="text-xs font-semibold">
                        Total Ram Usage :{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer />
                      <p className="text-xs font-semibold">
                        temperatur Usage :{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-40 bg-white rounded-xl">
              <div className="">
                <div>
                  <p className="text-sm pt-2 pl-5 font-semibold">
                    List Server Pembelian
                  </p>
                  <div className="m-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <ArrowDownUp className="text-red-500" />
                      <p className="font-semibold text-xs">
                        Total Bandwith In/Out Usage :{" "}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Diagram3 />
                      <p className="text-xs font-semibold">
                        Total Connection Active :{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle />
                      <p className="text-xs font-semibold">Request Sukses : </p>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-40 bg-white rounded-xl">
              <div className="">
                <div>
                  <p className="text-sm pt-2 pl-5 font-semibold">
                    List Server Pembelian
                  </p>
                  <div className="m-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Memory className="text-red-500" />
                      <p className="font-semibold text-xs">Disk Usage : </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Diagram3 />
                      <p className="text-xs font-semibold">
                        Total Vps Active :{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle />
                      <p className="text-xs font-semibold">Server Up Time : </p>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
