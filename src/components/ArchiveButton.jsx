import ActionButton from "./ActionButton";
import PropTypes from "prop-types";
import { archiveNote } from "../utils/networkData";
import { LocaleContext, ThemeContext } from "../contexts";
import { MdArchive } from "react-icons/md";
import { useContext } from "react";

function ArchiveButton({ id, isArchived, navigate }) {
  const { context: theme } = useContext(ThemeContext);
  const { context: locale } = useContext(LocaleContext);

  return (
    <ActionButton
      renderCondition={id && !isArchived}
      actionName={locale === "id" ? "Arsipkan" : "Archive"}
      actionHandler={async () => {
        const { error } = await archiveNote(id);

        if (!error) {
          navigate("/");
        }
      }}
    >
      <MdArchive
        className="h-7 w-7"
        color={theme === "dark" ? "#73a9ad" : "#2f80ed"}
        title={locale === "id" ? "Arsipkan" : "Archive note"}
      />
    </ActionButton>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string,
  isArchived: PropTypes.bool,
  navigate: PropTypes.func.isRequired,
};

export default ArchiveButton;
