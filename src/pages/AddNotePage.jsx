import NavBar from "../components/NavBar";
import SaveButton from "../components/SaveButton";
import { LocaleContext } from "../contexts";
import { useContext, useState } from "react";
import { useInput } from "../hooks";

function AddNotePage() {
  const { context: locale } = useContext(LocaleContext);
  const [title, onTitleChange] = useInput("");
  const [body, setBody] = useState("");

  function onInputHandler(event) {
    setBody(event.target.innerHTML);
  }

  return (
    <>
      <NavBar />

      <main className="min-h-screen px-4 pt-6 pb-20 font-plex-mono lg:pl-20">
        <input
          type="text"
          className="mb-5 w-full border-b border-dark-tone-ink/50 bg-transparent p-1 text-3xl font-bold placeholder:text-dark-tone-ink focus:outline-none focus:ring-0 dark:border-white/20 dark:placeholder:text-bleached-silk dark:focus:border-white"
          placeholder={locale === "id" ? "Judul Catatan" : "Note Title"}
          value={title}
          onChange={onTitleChange}
        />

        <div
          className="h-[50vh] overflow-auto rounded border border-dark-tone-ink/30 p-1 text-sm empty:before:content-[attr(data-placeholder)] dark:border-white/20"
          data-placeholder={
            locale === "id" ? "Catatan hari ini ...." : "Today's note ...."
          }
          onInput={onInputHandler}
          contentEditable
        />

        <div className="float-right my-5">
          <SaveButton noteTitle={title} body={body} />
        </div>
      </main>
    </>
  );
}

export default AddNotePage;
