import FormRegister from "../components/FormRegister";
import { Link } from "react-router-dom";
import { LocaleContext } from "../contexts";
import { useContext } from "react";

function RegisterPage() {
  const { context: locale } = useContext(LocaleContext);

  return (
    <div className="p-5 sm:px-20 md:px-32 lg:px-52 xl:px-80">
      <h2 className="py-5 text-4xl font-bold">
        {locale === "id" ? "Daftar akun" : "Lets register account"}
      </h2>

      <p className="text-2xl font-light">
        {locale === "id" ? "Halo, selamat datang." : "Hello, welcome."}
      </p>

      <FormRegister />

      <p className="text-center text-base font-light">
        {locale === "id" ? "Sudah punya akun? " : "Already have an account? "}
        <Link to="/login" className="font-bold">
          {locale === "id" ? "Masuk" : "Login"}
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;
