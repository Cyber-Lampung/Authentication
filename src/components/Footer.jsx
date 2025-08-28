export default function Footer() {
  return (
    <>
      <footer className="bg-black h-100">
        <div className="boxFooter p-9">
          <div className="titleFooter">
            <h4 className="text-4xl text-white font-bold">WebDev Indo Store</h4>
          </div>
          <div className="mt-20 flex justify-center">
            <div className="boxFooterItems p-5 flex gap-50">
              <div className="box1">
                <h5 className="text-white font-bold text-1xl">
                  Tentang Kami :
                </h5>
                <div className="ml-15 text-white text-xs flex flex-col gap-5 mt-5">
                  <p>Profile Team Kami</p>
                  <p>Alamat kami </p>
                  <p>Testimony Produk Kami</p>
                </div>
              </div>
              <div className="box1">
                <h5 className="text-white font-bold text-1xl">Produk kami :</h5>
                <div className="ml-15 text-white text-xs flex flex-col gap-5 mt-5">
                  <p>Web Developer</p>
                  <p>Ui UX Desain</p>
                  <p>VPS ( virtual private server )</p>
                </div>
              </div>
              <div className="box1">
                <h5 className="text-white font-bold text-1xl">
                  Testimony Produk Kami :
                </h5>
                <div className="ml-15 text-white text-xs flex flex-col gap-5 mt-5">
                  <p>Testimony WebSite</p>
                  <p>Testimony Ui / UX Desain</p>
                  <p>Testimony VPS ( virtual private server )</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
