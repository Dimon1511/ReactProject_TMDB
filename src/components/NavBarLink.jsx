import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavBarLink.module.css";

function NavBarLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      {children}
    </NavLink>
  );
}

NavBarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default NavBarLink;
