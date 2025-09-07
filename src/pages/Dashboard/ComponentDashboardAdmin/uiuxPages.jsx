import React, { useState } from "react";
import {
  ArrowRight,
  ClockFill,
  Image,
  ListCheck,
  Person,
  Printer,
} from "react-bootstrap-icons";
import Input from "../../../components/Input";

export default function AsideMainContent() {
  const title = "UI UX Desain Pages";
  const [input, SetInput] = useState("");

  return (
    <>
      <aside
        className="ml-47 h-screen w-full"
        style={{ background: "#0a0a77ff" }}
      >
        <div className="m-10">
          <h1 className="text-white font-bold text-3xl">{title}</h1>
        </div>

        <div className="flex gap-10">
          <div className="ContainerBox ml-10">
            <div className="w-80 h-40 bg-white rounded-xl">
              <h2 className="mt-5 text-sm font-semibold p-4">Template </h2>

              <div className="mt-2">
                <div className="ml-5 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Image />
                    <p className="text-xs font-semibold">
                      Template Digunakan :{" "}
                    </p>
                  </div>
                  <div className="flex font-semibold items-center gap-3 ">
                    <ListCheck className="text-red-800" />
                    <p className="text-xs">Tamplate Tersedia : </p>
                  </div>
                  <div className="mt-3 flex items-center gap-3 border-2 w-25 p-1 rounded-lg cursor-pointer">
                    <button className="text-[10px] font-bold cursor-pointer">
                      Lihat Semua
                    </button>
                    <ArrowRight className="text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ContainerBox ml-10">
            <div className="w-80 h-40 bg-white rounded-xl">
              <h2 className="mt-5 text-sm font-semibold p-4">
                Pending Project{" "}
              </h2>

              <div className="mt-2">
                <div className="ml-5 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Image />
                    <p className="text-xs font-semibold">
                      Jumlah Pending Project :{" "}
                    </p>
                  </div>
                  <div className="flex font-semibold items-center gap-3 ">
                    <ClockFill />
                    <p className="text-xs">Deadline Project : </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ContainerBox ml-10">
            <div className="w-80 h-40 bg-white rounded-xl">
              <h2 className="mt-5 text-sm font-semibold p-4">Template </h2>

              <div className="mt-2">
                <div className="ml-5 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Image />
                    <p className="text-xs font-semibold">Template Populer : </p>
                  </div>
                  <div className="flex font-semibold items-center gap-3 ">
                    <Person />
                    <p className="text-xs">Jumlah Pengguna : </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-9 mt-20">
          <h2 className="text-xl font-bold text-white">Order Project</h2>

          <div>
            <form className="mt-5">
              <Input
                placeholder="search user"
                value={input}
                className="border-2 mt-4 p-1 border-white text-white text-sm font-semibold rounded-lg w-50 outline-none"
                onChange={(e) => SetInput(e.target.value)}
              />
            </form>
            <div>
              <table className="w-full mt-10 text-center">
                <tr className="text-md">
                  <th>No</th>
                  <th>Nama Pemesan</th>
                  <th>Nomor Pemesan</th>
                  <th>Pemilihan Desain</th>
                  <th>Status</th>
                  <th>Print Pdf</th>
                  <th>Save</th>
                  {/* <td>Print Pdf</td> */}
                </tr>
                <tr className="text-xs">
                  <td>1</td>
                  <td>Rado Hidayatulloh</td>
                  <td>0895620232913</td>
                  <td>Landing Page</td>
                  <td>
                    <select className="bg-white text-black p-1.5 text-xs font-semibold rounded-lg">
                      <option>Done</option>
                      <option>Pending</option>
                      <option>On Progres</option>
                    </select>
                  </td>
                  <td className="">
                    <span className="flex justify-center cursor-pointer">
                      <Printer className="text-xl" />
                    </span>
                  </td>
                  <td>
                    <button className="p-1 border-2 w-25 rounded-lg text-xs">
                      Save
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
