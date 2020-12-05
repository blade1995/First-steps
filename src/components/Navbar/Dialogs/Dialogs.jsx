import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
  <div className={s.dialogs}>
    <div className={s.dialogs__items}>
      
      <div className={s.dialog}>
       <NavLink to='/dialogs/1'> Nicola </NavLink>
      </div>
      <div className={s.dialog}>
      <NavLink to='/dialogs/2'> Giustino </NavLink>
      </div>
      <div className={s.dialog}>
      <NavLink to='/dialogs/3'> Anna </NavLink>
      </div>
      <div className={s.dialog}>
      <NavLink to='/dialogs/4'> Tania </NavLink>
      </div>
      <div className={s.dialog}>
      <NavLink to='/dialogs/5'> Anton </NavLink>
      </div>
    </div>
    <div className={s.messages}>
      <div className={s.message}>Hello, where are you.</div>
      <div className={s.message}>I don't know.</div>
      <div className={s.message}>See you tomorrow.</div>
      <div className={s.message}>Never mind, it's ok.</div>
      <div className={s.message}>I miss you.</div>
    </div>
  </div>
  );
}
export default Dialogs;
