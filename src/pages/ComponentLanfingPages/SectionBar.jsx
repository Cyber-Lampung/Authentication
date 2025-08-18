import React from "react";

export default function SectionBar({ image1 }) {
  const Produk = {
    TitlePoduk: {
      produk1: "Sepatu Tenis Court Spec 2",
      Produk2: "Sepatu Nike",
      Produk3: "Sepatu New Basket",
    },
    Image: {
      SrcImage: {
        Produk: ["/adidas.png", "/nike.png"],
      },
      widthImage: "500px",
    },
    Description: {},
  };

  const HandelClick = () => {};

  return (
    <>
      <section>
        <aside>
          <div className="TitleSection ">
            <div className="h-140 bg-blue-700 w-170 mt-20 item-start flex pl-6 rounded-e-[350px]">
              <div onClick={HandelClick} className="image">
                <div className="mt-[-140px] ml-11">
                  <img
                    src={Produk.Image.SrcImage.Produk[0]}
                    alt=""
                    width={Produk.Image.widthImage}
                    className="rotate-[10deg]"
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
