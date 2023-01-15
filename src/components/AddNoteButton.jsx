import NavLinkButton from "./NavLinkButton";
import PropTypes from "prop-types";
import { BsPlusSquareFill } from "react-icons/bs";
import { LocaleContext, ThemeContext } from "../contexts";
import { useContext } from "react";

function AddNoteButton({ location, id }) {
  const { context: theme } = useContext(ThemeContext);
  const { context: locale } = useContext(LocaleContext);

  return (
    <NavLinkButton
      path="/notes/new"
      renderCondition={
        location !== "/notes/new" &&
        location !== `/notes/${id}` &&
        location !== `/notes/${id}/edit`
      }
      pathName={locale === "id" ? "Tambah" : "New"}
    >
      <BsPlusSquareFill
        className="h-7 w-7"
        color={theme === "dark" ? "#faf4b7" : "#5f7161"}
        title={locale === "id" ? "Tambah catatan" : "Add new note"}
      />
    </NavLinkButton>
  );
}

AddNoteButton.propTypes = {
  location: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default AddNoteButton;
