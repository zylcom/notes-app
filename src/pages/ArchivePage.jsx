import HeaderComponent from "../components/HeaderComponent";
import LoadingSpinner from "../components/LoadingSpinner";
import NavBar from "../components/NavBar";
import NoteList from "../components/NoteList";
import PropTypes from "prop-types";
import { useNote } from "../hooks";
import { getArchivedNotes } from "../utils/networkData";
import { LocaleContext } from "../contexts";
import { useContext } from "react";

function ArchivePage({ keyword, searchNote, keywordChange, onLogoutHandler }) {
  const { context: locale } = useContext(LocaleContext);
  const [notes, isLoading] = useNote(getArchivedNotes);
  const filteredNotes = searchNote(keyword, notes);

  if (notes === null) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <HeaderComponent keyword={keyword} onChangeHandler={keywordChange} />

      <NavBar onLogoutHandler={onLogoutHandler} />

      <main className="grid grid-cols-1 gap-5 px-4 pt-6 pb-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:pl-20 xl:grid-cols-5">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <NoteList
            notes={filteredNotes}
            emptyMessage={
              locale === "id" ? "Arsip kosong!" : "Archives is empty!"
            }
          />
        )}
      </main>
    </>
  );
}

ArchivePage.propTypes = {
  keyword: PropTypes.string.isRequired,
  searchNote: PropTypes.func.isRequired,
  keywordChange: PropTypes.func.isRequired,
  onLogoutHandler: PropTypes.func,
};

export default ArchivePage;
