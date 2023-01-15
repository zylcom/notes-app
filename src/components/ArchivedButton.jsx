import NavLinkButton from "./NavLinkButton";
import PropTypes from "prop-types";
import { BsArchiveFill } from "react-icons/bs";
import { LocaleContext, ThemeContext } from "../contexts";
import { useContext } from "react";

function ArchivedButton({ location, id }) {
  const { context: theme } = useContext(ThemeContext);
  const { context: locale } = useContext(LocaleContext);

  return (
    <NavLinkButton
      path="/archives"
      renderCondition={location !== `/notes/${id}/edit`}
      pathName={locale === "id" ? "Arsip" : "Archives"}
    >
      <BsArchiveFill
        className="h-7 w-7"
        color={theme === "dark" ? "#94b3fd" : "#1a954e"}
        title={locale === "id" ? "Daftar arsip" : "Archive list"}
      />
    </NavLinkButton>
  );
}

ArchivedButton.propTypes = {
  location: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default ArchivedButton;
