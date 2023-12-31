import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// search takes in fetchData only b/c this is a requirement on the instructions, I do not use that function here
const Search = ({fetchData}) => {
    const search = useRef();
    let navigate = useNavigate();

    // 1. event handler for search icon click and for user pressing enter/return
    // 2. useRef captures seach query input from input element
    // 3. when a form submission or on click event triggers search, all we do from this component is naviate to the correct route;
    //    search will execute on route change
    const handleSubmit = (e) => {
        e.preventDefault();
        let query = search.current.value;
        navigate(`search/${query}`);
    }

    return (
        <form className="search-form">
            <input type="search" name="search" placeholder="Search" onSubmit={handleSubmit} ref={search} required/>
            <button type="submit" className="search-button" onClick={handleSubmit}>
                <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </button>
        </form>
    );
}

export default Search;