import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
      html.classList.add("menu-open");
    } else {
      document.body.style.overflow = "auto"; 
      html.classList.remove("menu-open");
    }
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="header">
      <div className="header__container">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="header__logo"
          onClick={closeMenu}
        >
          Katri<span>NN</span>e
        </Link>
        <nav className="header__menu menu">
          <div className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="menu__link"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  class="menu__link"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  class="menu__link"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <button
          class="icon-menu"
          type="button"
          aria-label="button menu"
          onClick={toggleMenu}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
