import ActionButton from "./ActionButton";
import PropTypes from "prop-types";
import { LocaleContext, ThemeContext } from "../contexts";
import { MdUnarchive } from "react-icons/md";
import { unarchiveNote } from "../utils/networkData";
import { useContext } from "react";

function UnarchiveButton({ id, isArchived, navigate }) {
  const { context: theme } = useContext(ThemeContext);
  const { context: locale } = useContext(LocaleContext);

  return (
    <ActionButton
      renderCondition={id && isArchived}
      actionName={locale === "id" ? "Batalkan arsip" : "Unarchive"}
      actionHandler={async () => {
        const { error } = await unarchiveNote(id);

        if (!error) {
          navigate("/archives");
        }
      }}
    >
      <MdUnarchive
        className="h-7 w-7"
        color={theme === "dark" ? "#73a9ad" : "#475048"}
        title={locale === "id" ? "Batalkan pengarsipan" : "Unarchive note"}
      />
    </ActionButton>
  );
}

UnarchiveButton.propTypes = {
  id: PropTypes.string,
  isArchived: PropTypes.bool,
  navigate: PropTypes.func.isRequired,
};

export default UnarchiveButton;
