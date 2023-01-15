import PropTypes from "prop-types";
import SubmitButton from "./SubmitButton";
import { LocaleContext } from "../contexts";
import { login } from "../utils/networkData";
import { useContext } from "react";
import { useInput } from "../hooks";
import { useNavigate } from "react-router-dom";

function FormLogin({ loginSuccess }) {
  const { context: locale } = useContext(LocaleContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const navigate = useNavigate();

  async function onSubmitHandler(e) {
    e.preventDefault();

    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
      navigate("/");
    }
  }

  return (
    <form action="" className="py-16" onSubmit={onSubmitHandler}>
      <input
        type="email"
        className="mb-2.5 w-full rounded-md border border-mine-rock bg-transparent p-3 placeholder:font-rubik placeholder:text-base placeholder:font-light focus:outline-none"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        required
      />

      <input
        type="password"
        className="mb-14 w-full rounded-md border border-mine-rock bg-transparent p-3 placeholder:font-rubik placeholder:text-base placeholder:font-light focus:outline-none"
        placeholder={locale === "id" ? "Kata sandi" : "Password"}
        value={password}
        onChange={onPasswordChange}
        required
      />

      <SubmitButton text={locale === "id" ? "Masuk" : "Login"} />
    </form>
  );
}

FormLogin.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default FormLogin;
