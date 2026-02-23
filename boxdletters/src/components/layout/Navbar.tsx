import React, { useState } from 'react';
import styles from './styles/Navbar.module.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigator = useNavigate();
    const [searchText, setSearchText] = useState("")

    function Search(e: React.SyntheticEvent) {
        e.preventDefault(); //REVIEW - ver se mantem esse preventDefault
        navigator('/search', { state: { search: searchText } })
    }

    return (
        <nav className={styles.navbar} id="navbar">
            <Link to="/">
                <img className={styles.logo} src='/img/letterboxd-decal-dots-neg-rgb.svg' />
                <h2>Boxdletters</h2>
            </Link>

            <form>
                <div className={styles.search}>
                    <input type="text" placeholder="Search a movie" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)} />
                    <button type="submit" onClick={Search}><FaMagnifyingGlass /></button>
                </div>
            </form>
        </nav>
    )
}