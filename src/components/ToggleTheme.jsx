import ToggleSwitch from "./ToggleSwitch";
import { FiSun } from "react-icons/fi";
import { IoMoonSharp } from "react-icons/io5";
import { LocaleContext, ThemeContext } from "../contexts";
import { useContext } from "react";

function ToggleTheme() {
  const { context: theme, toggleContext: toggleTheme } =
    useContext(ThemeContext);
  const { context: locale } = useContext(LocaleContext);

  return (
    <ToggleSwitch
      onClickHandler={toggleTheme}
      title={locale === "id" ? "Tema" : "Theme"}
    >
      {theme === "dark" ? (
        <FiSun className="h-5 w-5" color="#121212" />
      ) : (
        <IoMoonSharp className="h-5 w-5" color="#f3f3f3" />
      )}
    </ToggleSwitch>
  );
}

export default ToggleTheme;
