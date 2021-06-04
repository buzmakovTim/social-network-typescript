import React from 'react';
import c from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../redux/state';
import { FriendsSideBar } from './FriendsSideBar/FriendsSideBar';
import { v1 } from 'uuid';

type NavBarPropsType = {
  friends: UserType[];
};

const Navbar = (props: NavBarPropsType) => {
  let n = props.friends.length;
  let friend1 = props.friends[0];
  let friend2 = props.friends[1];
  let friend3 = props.friends[2];

  const friends = [
    <FriendsSideBar key={v1()} friend={friend1} />,
    <FriendsSideBar key={v1()} friend={friend2} />,
    <FriendsSideBar key={v1()} friend={friend3} />,
  ];
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <NavLink to="/profile" activeClassName={c.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/dialogs" activeClassName={c.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/users" activeClassName={c.activeLink}>
          Find Users
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/news" activeClassName={c.activeLink}>
          News
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/music" activeClassName={c.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/settings" activeClassName={c.activeLink}>
          Settings
        </NavLink>
      </div>

      {/* 
      Friends
      */}
      <div className={c.titleFriend}>
        <h3>Friends</h3>
        <div className={c.friendBox}>{friends}</div>
      </div>
    </nav>
  );
};

export default Navbar;
