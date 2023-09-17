import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { AiOutlineMenu as Menu } from "react-icons/ai";

const NavBar = () => {
    const [active, setActive] = useState(false);

    return (
        <nav className={styles.navBar + " " + (active ? styles.active : "")}>
            <Menu onClick={() => setActive(!active)} />
            <a href="#">Community</a>
            <a href="#">Get Involved</a>
            <a href="#">Careers</a>
            <a href="#">Projects</a>
        </nav>
    );
};

export default NavBar;
