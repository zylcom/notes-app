import PropTypes from "prop-types";
import { LocaleContext } from "../contexts";
import { useContext } from "react";

function SearchBar({ keyword, keywordChange }) {
  const { context: locale } = useContext(LocaleContext);

  return (
    <div className="relative z-20 w-full pl-4 pr-24 lg:px-4">
      <input
        type="text"
        placeholder={
          locale === "id" ? "Telusuri catatan Anda" : "Browse your notes"
        }
        className="w-full rounded bg-bleached-silk px-2 py-1 font-rubik text-sm text-dark-tone-ink placeholder:italic focus:outline-none focus:ring-0"
        value={keyword}
        onChange={keywordChange}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
