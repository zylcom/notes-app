import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function NavLinkButton({ path, renderCondition, pathName, children }) {
  return (
    <>
      {renderCondition ? (
        <NavLink
          to={path}
          className={({ isActive }) =>
            `${
              isActive ? "[&>span]:underline" : ""
            } flex flex-col items-center py-2 px-2`
          }
        >
          {children}
          <span className="font-rubik text-xs">{pathName}</span>
        </NavLink>
      ) : null}
    </>
  );
}

NavLinkButton.propTypes = {
  path: PropTypes.string.isRequired,
  renderCondition: PropTypes.bool.isRequired,
  pathName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default NavLinkButton;
