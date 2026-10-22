
import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import "./Jawad.css";

import css from "../../assets/css.JPG";
import js from "../../assets/js.JPG";
import react from "../../assets/react.JPG";
import node from "../../assets/node.JPG";
import ex from "../../assets/ex.JPG";
import db from "../../assets/db.JPG";

export default function Jawad() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // FULL STACK animation
      tl.from(".fullstack", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      // Technology icons animation
      tl.from(
        ".iconbox img",
        {
          y: 35,
          scale: 0.5,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
        },
        "-=0.3"
      );

      // DEVELOPER animation
      tl.from(
        ".developer",
        {
          y: 70,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.2"
      );

      // Dots reveal animation
      gsap.from(".dot1 .dot, .dot1 .red", {
        scale: 0.3,
        opacity: 0,
        duration: 0.4,
        stagger: {
          amount: 1.2,
          from: "random",
        },
        delay: 0.3,
      });

      // Red dots pulse animation
      gsap.to(".dot1 .red", {
        scale: 1.5,
        opacity: 0.5,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: "sine.inOut",
      });

      // Technology icons hover animation
      gsap.utils.toArray(".iconbox img").forEach((icon) => {
        const enter = () =>
          gsap.to(icon, {
            y: -8,
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });

        const leave = () =>
          gsap.to(icon, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

        icon.addEventListener("mouseenter", enter);
        icon.addEventListener("mouseleave", leave);

        // Clean up event listeners
        return () => {
          icon.removeEventListener("mouseenter", enter);
          icon.removeEventListener("mouseleave", leave);
        };
      });
    },
    { scope: heroRef }
  );

  // Three dot patterns
  const renderDots = (section) =>
    Array.from({ length: 85 }, (_, i) => (
      <div
        key={`${section}-${i}`}
        className={i === 76 || i === 78 ? "red" : "dot"}
      />
    ));

  return (
    <div className="hero" ref={heroRef}>
      <div className="hero1">
        <div className="upper">
          <h1 className="fullstack">FULL</h1>
          <h1 className="fullstack">STACK</h1>

          <div className="iconbox">
            <div className="box1">
              <img src={css} alt="CSS" className="icon" />
            </div>

            <div className="box2">
              <img src={js} alt="JavaScript" className="icon" />
            </div>

            <div className="box3">
              <img src={react} alt="React" className="icon" />
            </div>
          </div>
        </div>

        <div className="lover">
          <div className="iconbox">
            <div className="box1">
              <img src={node} alt="Node.js" className="icon" />
            </div>

            <div className="box2">
              <img src={ex} alt="Express.js" className="icon" />
            </div>

            <div className="box3">
              <img src={db} alt="MongoDB" className="icon" />
            </div>
          </div>

          <h1 className="developer">DEVELOPER</h1>
        </div>

        <div>
          <Link to="/about"></Link>
        </div>
      </div>

      <div className="hero2">
        <div className="dot1">{renderDots(1)}</div>
        <div className="dot1">{renderDots(2)}</div>
        <div className="dot1">{renderDots(3)}</div>
      </div>
    </div>
  );
}
