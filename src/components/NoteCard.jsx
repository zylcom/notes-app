import parser from "html-react-parser";
import PropTypes from "prop-types";
import { getRandomColor } from "../utils/localData";
import { Link } from "react-router-dom";
import { LocaleContext } from "../contexts";
import { showFormattedDate } from "../utils";
import { useContext, useRef } from "react";

function NoteCard({ id, title, createdAt, body }) {
  const { context: locale } = useContext(LocaleContext);
  const randomColor = useRef(getRandomColor());

  return (
    <div
      className={`relative ${randomColor.current.background} h-full p-5 font-plex-mono duration-500 before:absolute before:bottom-0 before:right-0 before:border-b-[length:18px] before:border-l-[length:18px] before:border-white dark:before:border-b-dark-tone-ink ${randomColor.current.borderColor} text-white before:transition-all before:content-[''] before:hover:border-b-[length:30px] before:hover:border-l-[length:30px]`}
    >
      <Link to={`/notes/${id}`}>
        <h2 className="truncate text-xl font-bold underline" title={title}>
          {title}
        </h2>
      </Link>

      <span className="block pb-5 text-xs font-extralight">
        {showFormattedDate(createdAt, locale)}
      </span>

      <div className="h-44 overflow-hidden break-words text-sm font-light">
        {parser(body)}
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteCard;
