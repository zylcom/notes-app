import NavLinkButton from "./NavLinkButton";
import { IoHome } from "react-icons/io5";
import { LocaleContext } from "../contexts";
import { useContext } from "react";

function HomeButton() {
  const { context: locale } = useContext(LocaleContext);

  return (
    <NavLinkButton
      path="/"
      renderCondition={true}
      pathName={locale === "id" ? "Beranda" : "Home"}
    >
      <IoHome
        className="h-7 w-7"
        color="#54bab9"
        title={locale === "id" ? "Beranda" : "Home"}
      />
    </NavLinkButton>
  );
}

export default HomeButton;
