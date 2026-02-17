import styles from './Navbar.module.css'
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className={styles.navbar} id="navbar">
            <Link to="/">
                <img className={styles.logo} src='/img/letterboxd-decal-dots-neg-rgb.svg' />
                <h2>Boxdletters</h2>
            </Link>

            <form>
                <input type="text" placeholder="Search a movie" />
                <button type="submit"><BiSolidSearchAlt2 /></button>
            </form>
        </nav>
    )
}