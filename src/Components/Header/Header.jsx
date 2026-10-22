
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./header.css";

export default function Header() {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Navbar background animation
      tl.from(".header", {
        y: -35,
        opacity: 0,
        duration: 0.7,
      });

      // Logo animation
      tl.from(
        ".logo",
        {
          x: -35,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      );

      // Navigation links animation
      tl.from(
        "#divtwo a",
        {
          y: -15,
          opacity: 0,
          duration: 0.45,
          stagger: 0.12,
        },
        "-=0.25"
      );

      // Navigation link hover animation
      const links = gsap.utils.toArray("#divtwo a");

      links.forEach((link) => {
        const enter = () => {
          gsap.to(link, {
            y: -3,
            duration: 0.2,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(link, {
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          });
        };

        link.addEventListener("mouseenter", enter);
        link.addEventListener("mouseleave", leave);
      });
    },
    { scope: headerRef }
  );

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav">
        <div className="div">
          <Link to="/jawad" className="logo">
            Jawad
          </Link>
        </div>

        <div id="divtwo">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/projects">
            Projects
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
