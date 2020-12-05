import React from "react";
import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src="https://previews.123rf.com/images/sellingpix/sellingpix1509/sellingpix150900088/45453244-social-team-work-sphere-logo-design-vector-template-with-abstract-characters-people-holding-hands-fr.jpg" />
      </div>
    </header>
  );
};
export default Header;
