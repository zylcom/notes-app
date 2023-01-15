import PropTypes from "prop-types";
import SearchBar from "./SearchBar";

function HeaderComponent({ keyword, onChangeHandler }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark-tone-ink bg-slate-300 py-3 backdrop-blur-3xl dark:border-white/40 dark:bg-white/5 ">
      <SearchBar keyword={keyword} keywordChange={onChangeHandler} />
    </header>
  );
}

HeaderComponent.propTypes = {
  keyword: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default HeaderComponent;
