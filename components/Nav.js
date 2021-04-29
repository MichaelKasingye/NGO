import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import DrawerMenu from "../Components/DrawerMenu";
import DrawerMenuUser from "../Components/DrawerMenuUser";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
});

//SEARCH
function search(e) {
  e.preventDefault();
}

function Navi() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false, 
     
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerMenuUser />
      <Divider />
      <DrawerMenu />
    </div>
  );

  return (
    <nav className={navStyles.nav}>
      <Link href="/">
        <span className={navStyles.logo}>Support</span>
      </Link>
      <div>
        <div className={navStyles.offMenu}>
          <ul className={navStyles.links}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={navStyles.menuIcon}>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                {" "}
                <strong className="drawer"></strong>
                <MenuIcon />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navi;
