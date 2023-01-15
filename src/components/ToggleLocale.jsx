import ToggleSwitch from "./ToggleSwitch";
import { LocaleContext, ThemeContext } from "../contexts";
import { RiTranslate2 } from "react-icons/ri";
import { useContext } from "react";

function ToggleLocale() {
  const { context: theme } = useContext(ThemeContext);
  const { context: locale, toggleContext: toggleLocale } =
    useContext(LocaleContext);

  return (
    <ToggleSwitch
      onClickHandler={toggleLocale}
      title={locale === "id" ? "Bahasa" : "Language"}
    >
      <RiTranslate2
        color={theme === "dark" ? "#121212" : "#f3f3f3"}
        title={locale === "id" ? "Bahasa" : "Language"}
      />
    </ToggleSwitch>
  );
}

export default ToggleLocale;
