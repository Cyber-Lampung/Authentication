import { ArrowRight } from "react-bootstrap-icons";

export default function SectionBar() {
  const image = {
    Img: [
      "image/animation1.png",
      "image/contentRight.png",
      "image/animation2.png",
    ],
  };

  return (
    <>
      <article className="relative top-[-50px] ">
        <div className="flex items-center justify-center h-screen gap-70">
          <div className="Contentleft">
            <h1 className="text-4xl font-bold ">
              Buat Bisnis anda dikenal oleh banyak orang.
            </h1>
            <h2 className="text-lg font-bold text-blue-600">
              mulai membuat website dan pasarkan bisnis anda.
            </h2>
            <p className="w-150 font-semibold text-sm mt-5">
              kami adalah penyedia pembuatan jasa website berbagai macam dari
              website untuk umkm, company, sekolah dll
            </p>
            <div className=" items-center justify-content gap-4 mt-10 w-40 cursor-pointer ">
              <div className="flex items-center gap-4 border-2 p-2 w-50 rounded-lg hover:bg-blue-400 hover:text-white hover:delay-300 hover:duration-300">
                <p className="text-md font-semibold">Pesan Sekarang</p>
                <ArrowRight className="text-3xl " />
              </div>
            </div>
            <div className="relative left-130 top-[-90px]">
              <img src={image.Img[0]} alt="" width="190px" />
            </div>
          </div>
          <div className="contentRight">
            <img src={image.Img[1]} alt="" width="300px" />
          </div>
        </div>
        <div className="mt-[-200px] flex justify-center">
          <img src={image.Img[2]} alt="" />
        </div>
      </article>
    </>
  );
}
