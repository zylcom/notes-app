import PropTypes from "prop-types";

function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="w-full rounded-md bg-black p-3 text-lg font-medium text-white"
    >
      {text}
    </button>
  );
}

SubmitButton.propTypes = { text: PropTypes.string.isRequired };

export default SubmitButton;
