import React from "react";
import {ReactComponent as SearchIcon} from "../../assets/Search-icon.svg"
import styles from "./Search.module.css";

function Search({placeholder, searchData}) {

const onSubmit = (e)=> {
    e.preventDefault();
}

    return (
        <form className= {styles.wrapper} onSubmit ={onSubmit}>
            <input className={styles.Search} required placeholder={placeholder} />
            <button className={styles.SearchButton} type="submit">
                <SearchIcon />
            </button>
        </form>
    )
}
export default Search;