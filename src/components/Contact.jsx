import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import HandelContact from "../service/pesanSend";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [username, setUser] = useState("");
  const [pesan, setPesan] = useState("");

  const animation = {
    img: ["image/animation4.png"],
  };

  return (
    <>
      <article className="flex justify-center mt-20 mb-40">
        <div className="boxForm border-2 border-black w-100 h-110 rounded-3xl">
          <div className="isiForm">
            <div>
              <img
                src={animation.img[0]}
                alt=""
                className="relative top-[-60px]"
              />
              <div className="text-center">
                <p className="relative top-[-157px] font-bold text-2xl text-white">
                  Contact Kami
                </p>
              </div>
            </div>
            <div className="relative top-[-80px] w-[90% ] left-5 ">
              <div className="flex flex-col gap-8">
                <Input
                  placeholder="Email"
                  className="border-2 p-2 text-xs w-85 rounded-lg outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <Input
                  placeholder="Username"
                  className="border-2 p-2 text-xs w-70 rounded-lg outline-none"
                  value={username}
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                />
                <Input
                  placeholder="Pesan Anda"
                  className="border-2 p-2 text-xs w-80 rounded-lg outline-none"
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  type="text"
                />
                <div className="flex justify-center ">
                  <Button
                    name="Kirim Sekarang"
                    className="text-sm font-semibold cursor-pointer border-2 p-2 rounded-lg"
                    type="submit"
                    onClick={() => {
                      HandelContact(email, username, pesan);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
