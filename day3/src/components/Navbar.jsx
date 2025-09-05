import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "#f4f4f4",
        padding: "0px 52px",
        justifyContent: "space-between",
        alignItems: "center", 
        height: 100,
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
      }}
    >
      <h1>My School</h1>
      <ul
        style={{
          display: "flex",
          fontSize: 20,
          listStyle: "none",
          gap: 32,
          alignItems: 'center'
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/student"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Student
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            About
          </Link>
        </li>
        <li
          style={{
            backgroundColor: "#8B00F7",
            padding: "12px",
            borderRadius: 4,
          }}
        >
          <Link
            to="/contact-us"
            style={{
              textDecoration: "none",
              color: "white", 
            }}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
