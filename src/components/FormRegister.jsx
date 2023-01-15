import SubmitButton from "./SubmitButton";
import { LocaleContext } from "../contexts";
import { register } from "../utils/networkData";
import { useContext } from "react";
import { useInput } from "../hooks";
import { useNavigate } from "react-router-dom";

function FormRegister() {
  const { context: locale } = useContext(LocaleContext);
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange, setPassword] = useInput("");
  const [
    passwordConfirmation,
    onPasswordConfirmationlChange,
    setPasswordConfirmation,
  ] = useInput("");
  const navigate = useNavigate();

  async function onSubmitHandler(e) {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      alert(
        locale === "id"
          ? "Konfirmasi sandi dan kata sandi tidak cocok!"
          : "Confirm password and password is not match"
      );

      setPassword("");
      setPasswordConfirmation("");

      return;
    }

    const { error } = await register({ name, email, password });

    if (!error) {
      navigate("/login");
    }
  }

  return (
    <form action="" className="py-16" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="mb-2.5 w-full rounded-md border border-mine-rock bg-transparent p-3 placeholder:font-rubik placeholder:text-base placeholder:font-light focus:outline-none"
        placeholder={locale === "id" ? "Nama" : "Name"}
        value={name}
        onChange={onNameChange}
        required
      />

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
        className="mb-2.5 w-full rounded-md border border-mine-rock bg-transparent p-3 placeholder:font-rubik placeholder:text-base placeholder:font-light focus:outline-none"
        placeholder={locale === "id" ? "Kata sandi" : "Password"}
        value={password}
        onChange={onPasswordChange}
        required
      />

      <input
        type="password"
        className="mb-14 w-full rounded-md border border-mine-rock bg-transparent p-3 placeholder:font-rubik placeholder:text-base placeholder:font-light focus:outline-none"
        placeholder={locale === "id" ? "Konfirmasi sandi" : "Confirm password"}
        value={passwordConfirmation}
        onChange={onPasswordConfirmationlChange}
        required
      />

      <SubmitButton text={locale === "id" ? "Daftar" : "Register"} />
    </form>
  );
}

export default FormRegister;
