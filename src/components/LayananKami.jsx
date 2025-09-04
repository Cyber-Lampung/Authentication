import Button from "./Button";

export default function LayananKami() {
  const Background = {
    img: ["image/animation3.png", "image/animation4.png"],
  };

  return (
    <>
      <article
        className="h-150 mb-40 mt-30 w-[90%] m-auto rounded-3xl"
        style={{ background: "#040438ff" }}
      >
        <div className="relative top-30 z-0">
          <img
            src={Background.img[0]}
            className="absolute w-[8000px] right-10 "
            alt=""
          />
        </div>
        <div>
          <div>
            <h3 className="text-3xl text-center pt-10 text-white font-bold">
              Layanan Kami
            </h3>
          </div>
          <div className="cardList mt-25 flex justify-center gap-30 relative z-20">
            <div className="BoxCard w-60 h-75 bg-white rounded-3xl">
              <div>
                <img src={Background.img[1]} alt="" />
                <p className="relative top-[-61px] font-bold text-center text-white">
                  Website
                </p>
              </div>
              <div className="text-center">
                <Button
                  name="GO TO WEBSITE STORE"
                  className="text-xs font-bold cursor-pointer border-2 p-3 mt-15 rounded-lg"
                />
              </div>
            </div>
            <div className="BoxCard w-60 h-75 bg-white rounded-3xl">
              <div>
                <img src={Background.img[1]} alt="" />
                <p className="relative top-[-61px] font-bold text-center text-white">
                  UI UX Desain
                </p>
              </div>
              <div className="text-center">
                <Button
                  name="GO TO UI UX STORE"
                  className="text-xs font-bold cursor-pointer border-2 p-3 mt-15 rounded-lg"
                />
              </div>
            </div>
            <div className="BoxCard w-60 h-75 bg-white rounded-3xl">
              <div>
                <img src={Background.img[1]} alt="" />
                <div className="absolute z-0">
                  <img
                    src={Background.img[1]}
                    alt=""
                    className="relative top-[-100px] w-60"
                  />
                </div>
                <div className="absolute">
                  <p className="relative top-[-56px] flex left-13 font-bold text-center text-xs text-white z-40">
                    VPS <br /> ( Virtual Private Server )
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Button
                  name="GO TO WEBSITE STORE"
                  className="text-xs font-bold cursor-pointer border-2 p-3 mt-22 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
