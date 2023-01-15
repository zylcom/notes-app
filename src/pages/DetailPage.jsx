import LoadingSpinner from "../components/LoadingSpinner";
import NavBar from "../components/NavBar";
import parser from "html-react-parser";
import PageNotFound from "./PageNotFound";
import useNote from "../hooks/useNote";
import { getNote } from "../utils/networkData";
import { LocaleContext } from "../contexts";
import { showFormattedDate } from "../utils";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { context: locale } = useContext(LocaleContext);
  const { id } = useParams();
  const [note, isLoading] = useNote(getNote, id);

  if (note === null) {
    return <PageNotFound />;
  }

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <NavBar isArchived={note.archived} />

          <div className="min-h-screen lg:pl-20">
            <div className="px-3 pt-10 pb-20 font-plex-mono">
              <h1 className="text-2xl font-bold">{note.title}</h1>
              <span className="block pb-5 text-xs font-normal dark:font-extralight">
                {showFormattedDate(note.createdAt, locale)}
              </span>

              <div className="break-words text-sm font-normal dark:font-light">
                {parser(note.body)}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DetailPage;
