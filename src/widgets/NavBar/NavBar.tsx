import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav style={{ height: "50px", backgroundColor: "blue" }}>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default NavBar;
