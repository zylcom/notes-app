import ActionButton from "./ActionButton";
import PropTypes from "prop-types";
import { deleteNote } from "../utils/networkData";
import { IoTrash } from "react-icons/io5";
import { LocaleContext, ThemeContext } from "../contexts";
import { useContext } from "react";

function DeleteButton({ location, isArchived, navigate, id }) {
  const { context: theme } = useContext(ThemeContext);
  const { context: locale } = useContext(LocaleContext);

  return (
    <ActionButton
      renderCondition={location === `/notes/${id}`}
      actionName={locale === "id" ? "Hapus" : "Delete"}
      actionHandler={async () => {
        let redirectPath = isArchived ? "/archives" : "/";

        const { error } = await deleteNote(id);

        if (!error) {
          navigate(redirectPath);
        }
      }}
    >
      <IoTrash
        className="h-7 w-7"
        color={theme === "dark" ? "#ff7171" : "#ff0000"}
        title={locale === "id" ? "Hapus catatan" : "Delete note"}
      />
    </ActionButton>
  );
}

DeleteButton.propTypes = {
  location: PropTypes.string.isRequired,
  isArchived: PropTypes.bool,
  navigate: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default DeleteButton;
