import React from 'react';
import c from './Dialogs.module.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

// We need to pass props with Dialogs Array

const Dialogs = (props: any) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <div className={c.dialog + ' ' + c.active}>
          <NavLink to="/dialogs/1">Tim</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/2">Paul</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/3">Kevin</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/4">Dima</NavLink>
        </div>
        <div className={c.dialog}>
          <NavLink to="/dialogs/5">Oleg</NavLink>
        </div>
      </div>

      {/* We need to pass props with array or messages */}
      <div className={c.messages}>
        <div className={c.message}>Hi</div>
        <div className={c.message}>How are you?</div>
        <div className={c.message}>What's up?</div>
        <div className={c.message}>Hi hi hi</div>
        <div className={c.message}>YO!</div>
      </div>
    </div>
  );
};

export default Dialogs;
