import PropTypes from "prop-types";

function ToggleSwitch({ onClickHandler, title, children }) {
  return (
    <button
      className="flex h-7 w-7 items-center justify-center rounded-full bg-dark-tone-ink hover:scale-110 active:scale-90 dark:bg-bleached-silk"
      onClick={onClickHandler}
      title={title}
    >
      {children}
    </button>
  );
}

ToggleSwitch.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ToggleSwitch;
