import NoteCard from "./NoteCard";
import PropTypes from "prop-types";

function NoteList({ notes, emptyMessage }) {
  return notes.length < 1 ? (
    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
      {emptyMessage}
    </span>
  ) : (
    notes.map((note) => <NoteCard key={note.id} {...note} />)
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  emptyMessage: PropTypes.string.isRequired,
};

export default NoteList;
