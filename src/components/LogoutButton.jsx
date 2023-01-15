import ActionButton from "./ActionButton";
import PropTypes from "prop-types";
import { HiLogout } from "react-icons/hi";
import { LocaleContext, ThemeContext } from "../contexts";
import { useContext } from "react";

function LogoutButton({ location, onLogoutHandler }) {
  const { context: theme } = useContext(ThemeContext);
  const { context: locale } = useContext(LocaleContext);

  return (
    <ActionButton
      renderCondition={location === "/" || location === "/archives"}
      actionName={locale === "id" ? "Keluar" : "Logout"}
      actionHandler={onLogoutHandler}
    >
      <HiLogout
        className="h-7 w-7"
        color={theme === "dark" ? "#ff7171" : "#ff0000"}
        title={locale === "id" ? "Keluar" : "Logout"}
      />
    </ActionButton>
  );
}

LogoutButton.propTypes = {
  location: PropTypes.string.isRequired,
  onLogoutHandler: PropTypes.func,
};
export default LogoutButton;
