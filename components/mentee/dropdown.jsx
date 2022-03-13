import { useCallback, useEffect, useRef, useState } from "react";
import { IC_LocationArrow } from "../../icons";
import styles from "./dropdown.module.scss";

const Dropdown = ({ options }) => {
  const dropdownRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleDropdown = useCallback(() => {
    const dropdown = dropdownRef.current;
    if (dropdown.classList.contains(styles.open)) {
      dropdown.classList.remove(styles.open);
    } else {
      dropdown.classList.add(styles.open);
    }
  }, []);

  const handleClickOption = (event) => {
    const li = event.target.closest("li");
    const index = Number(li.dataset.index);
    setCurrentIndex(index);
    setSelectedIndex(index);
    toggleDropdown();
  };

  useEffect(() => {
    const moveFocus = (callback) => {
      let nextIndex = callback(selectedIndex);
      if (nextIndex >= options.length) {
        nextIndex = 0;
      } else if (nextIndex < 0) {
        nextIndex = options.length - 1;
      }

      setSelectedIndex(nextIndex);
    };

    const controlDropdown = (event) => {
      const dropdown = dropdownRef.current;
      if (!dropdown.classList.contains(styles.open)) {
        return;
      }

      if (event.key === "Escape") {
        toggleDropdown();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        moveFocus((prev) => prev - 1);
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        moveFocus((prev) => prev + 1);
      } else if (event.key === "Enter") {
        setCurrentIndex(selectedIndex);
      }
    };

    window.addEventListener("keydown", controlDropdown);

    return () => {
      window.removeEventListener("keydown", controlDropdown);
    };
  }, [toggleDropdown, selectedIndex, options]);

  const handleMouseEnterOption = (event) => {
    const li = event.target.closest("li");
    const index = Number(li.dataset.index);
    setSelectedIndex(index);
  };

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button
        className={styles.select}
        onClick={toggleDropdown}
        aria-label="지역 변경"
      >
        <span>{options[currentIndex]}</span>
        <IC_LocationArrow />
      </button>
      <ul className={styles.options}>
        {options.map((option, index) => (
          <li
            key={index}
            data-index={index}
            className={index === selectedIndex ? styles.selected : ""}
            onMouseEnter={handleMouseEnterOption}
          >
            <button onClick={handleClickOption}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
