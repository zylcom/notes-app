import { HiLogin, HiUserAdd } from "react-icons/hi";
import { Link } from "react-router-dom";
import { LocaleContext } from "../contexts";
import { useContext } from "react";

function LandingPage() {
  const { context: locale } = useContext(LocaleContext);

  return (
    <div className="min-h-screen p-3 lg:flex lg:items-center lg:justify-center lg:p-5">
      <img
        src="/images/svg/undraw_taking_notes.svg"
        alt=""
        className="m-auto p-5 sm:w-2/3 lg:w-1/2"
      />
      <div>
        <h1 className="py-5 text-center text-4xl font-semibold">
          {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
        </h1>

        <p className="text-center text-sm">
          {locale === "id"
            ? "Silakan masuk/daftar terlebih dahulu untuk bisa menggunakan aplikasi ini."
            : "Please login/register first to use this app."}
        </p>

        <div className="flex justify-center py-14">
          <Link
            to="/login"
            className="text-bold flex items-center gap-x-2 rounded-l-lg bg-black p-3 text-2xl text-white"
          >
            {locale === "id" ? "Masuk" : "Login"}
            <HiLogin className="h-5 w-5 rotate-180" />
          </Link>

          <Link
            to="/register"
            className="text-bold flex items-center gap-x-2 rounded-r-lg bg-byzantine-night-blue p-3 text-2xl text-white"
          >
            {locale === "id" ? "Daftar" : "Register"}
            <HiUserAdd className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
