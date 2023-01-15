import PropTypes from "prop-types";

function ActionButton({
  renderCondition,
  actionName,
  actionHandler,
  children,
}) {
  return (
    <>
      {renderCondition ? (
        <button className="flex flex-col items-center" onClick={actionHandler}>
          {children}
          <span className="font-rubik text-xs">{actionName}</span>
        </button>
      ) : null}
    </>
  );
}

ActionButton.propTypes = {
  renderCondition: PropTypes.bool,
  actionName: PropTypes.string,
  actionHandler: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default ActionButton;
