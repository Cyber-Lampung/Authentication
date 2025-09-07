import React from "react";
import "../css/PagesWebsite.css";
import * as Icon from "react-bootstrap-icons";

export default function AsideMainContent() {
  const title = "Website Order Pages";

  return (
    <>
      <aside
        className="ml-47 h-screen w-full"
        style={{ background: "#0a0a77ff" }}
      >
        <div className="m-10">
          <h1 className="text-white font-bold text-3xl">{title}</h1>
        </div>

        <div className="m-auto w-[90%] mt-15">
          <table className="text-center w-[100%]">
            <tr className=" text-white border-2 border-orange-400 p-2 font-semibold gap-20">
              <th>No</th>
              <th>Nama Pemesan</th>
              <th>Nomor Wa</th>
              <th>Pilihan Website</th>
              <th>Status Pembayaran</th>
              <th>Status Pengerjaan</th>
              <th>Print Pdf</th>
              <th>Save</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Rado Hidayatulloh</td>
              <td>0895620232913</td>
              <td>Website Landing Page</td>
              <td>50%</td>
              <td>
                <select className="Check items-center text-black">
                  <option>Done</option>
                  <option>Panding</option>
                  <option>On Progres</option>
                </select>
              </td>
              <td>
                <span className="flex justify-center cursor-pointer">
                  <Icon.Printer className="text-xl" />
                </span>
              </td>
              <td>
                <button
                  onClick={() => {
                    const td = document.querySelectorAll("td");
                    td.forEach((data) => {});
                  }}
                  className="border-2 w-30 p-1 rounded-lg cursor-pointer"
                >
                  Save
                </button>
              </td>
            </tr>
          </table>
        </div>
      </aside>
    </>
  );
}
