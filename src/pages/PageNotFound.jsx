import { LocaleContext } from "../contexts";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

function PageNotFound() {
  const { context: locale } = useContext(LocaleContext);

  return (
    <main className="h-screen">
      <div className="flex items-center justify-center [&>img]:absolute [&>img]:top-1/4">
        <img src="/images/svg/404_1.svg" alt="" className="animate-glitch1" />
        <img src="/images/svg/404_2.svg" alt="" className="animate-glitch2" />
        <img src="/images/svg/404_3.svg" alt="" className="animate-glitch3" />
        <img src="/images/svg/404_4.svg" alt="" className="animate-glitch4" />
        <img src="/images/svg/404_5.svg" alt="" className="animate-glitch5" />
        <img src="/images/svg/404_6.svg" alt="" className="animate-glitch6" />
      </div>

      <div className="flex w-full justify-center">
        <h2 className="absolute bottom-5 text-center font-plex-mono text-xl sm:bottom-14 lg:bottom-36">
          {locale === "id"
            ? "Oops, halaman yang kamu cari tidak ditemukan! "
            : "Opps, the page you are looking for was not found! "}
          <NavLink to="/" className="text-blue-500 underline">
            {locale === "id" ? "Kembali ke Beranda" : "Back to home"}
          </NavLink>
        </h2>
      </div>
    </main>
  );
}

export default PageNotFound;
