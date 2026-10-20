
import { Link, NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="div">
          <Link to="/" className="logo">
            Jawad
          </Link>
        </div>

        <div id="divtwo">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
