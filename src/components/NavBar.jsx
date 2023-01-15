import AddNoteButton from "./AddNoteButton";
import ArchiveButton from "./ArchiveButton";
import ArchivedButton from "./ArchivedButton";
import DeleteButton from "./DeleteButton";
import HomeButton from "./HomeButton";
import PropTypes from "prop-types";
import UnarchiveButton from "./UnarchiveButton";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function NavBar({ isArchived, onLogoutHandler }) {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <nav className="fixed bottom-0 z-10 flex w-full items-center justify-around gap-3 bg-slate-200 backdrop-blur-lg dark:bg-cool-balaclavas-are-forever lg:flex lg:h-screen lg:w-16 lg:flex-col">
      <HomeButton location={location} />

      <ArchivedButton location={location} id={id} />

      <AddNoteButton location={location} id={id} />

      <ArchiveButton id={id} navigate={navigate} isArchived={isArchived} />

      <UnarchiveButton id={id} navigate={navigate} isArchived={isArchived} />

      <DeleteButton
        location={location}
        isArchived={isArchived}
        id={id}
        navigate={navigate}
      />

      <LogoutButton
        location={location}
        navigate={navigate}
        onLogoutHandler={onLogoutHandler}
      />
    </nav>
  );
}

NavBar.propTypes = {
  isArchived: PropTypes.bool,
  onLogoutHandler: PropTypes.func,
};

export default NavBar;
