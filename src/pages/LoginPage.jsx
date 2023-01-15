import FormLogin from "../components/FormLogin";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LocaleContext } from "../contexts";
import { useContext } from "react";

function LoginPage({ loginSuccess }) {
  const { context: locale } = useContext(LocaleContext);

  return (
    <div className="p-5 sm:px-20 md:px-32 lg:px-52 xl:px-80">
      <h2 className="py-5 text-4xl font-bold">
        {locale === "id" ? "Ayo masuk" : "Lets sign you in"}
      </h2>

      <p className="text-2xl font-light">
        {locale === "id" ? "Selamat datang kembali." : "Welcome back."}
      </p>

      <FormLogin loginSuccess={loginSuccess} />

      <p className="text-center text-base font-light">
        {locale === "id" ? "Belum punya akun? " : "Don't have an account? "}
        <Link to="/register" className="font-bold">
          {locale === "id" ? "Daftar sekarang" : "Register now"}
        </Link>
      </p>
    </div>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
