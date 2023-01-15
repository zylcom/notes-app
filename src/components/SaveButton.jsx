import ActionButton from "./ActionButton";
import PropTypes from "prop-types";
import { addNote } from "../utils/networkData";
import { GiCheckMark } from "react-icons/gi";
import { LocaleContext } from "../contexts";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function SaveButton({ noteTitle, body }) {
  const { context: locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  return (
    <ActionButton
      renderCondition={true}
      actionHandler={async () => {
        const { error } = await addNote({ title: noteTitle, body });

        if (!error) {
          navigate("/");
        }
      }}
    >
      <div className="flex w-full items-center justify-center gap-x-2 rounded bg-blue-500 p-1 px-4 hover:bg-island-green/50 active:scale-95">
        <span className="font-rubik">
          {locale === "id" ? "Simpan" : "Save"}
        </span>
        <GiCheckMark
          className="h-5 w-5"
          color="#00ffff"
          title={locale === "id" ? "Simpan catatan" : "Save note"}
        />
      </div>
    </ActionButton>
  );
}

SaveButton.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default SaveButton;
