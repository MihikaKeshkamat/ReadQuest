import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Navbar.css';
import list from '../list';
// import Shop from './Shop';
// import Card from './Card';
const Navbar = ({ size}) => {

    const [searchTerm, setSearchTerm] = useState(""); // User input for search
    const [suggestions, setSuggestions] = useState([]); // Holds the suggestions
    const [showSuggestions, setShowSuggestions] = useState(false); // Controls the dropdown visibility
    const searchBoxRef = useRef(null); // Ref for the search box and dropdown
    useEffect(() => {
        if (searchTerm) {
            // Filter suggestions based on the search term
            const results = list.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.price.toString().includes(searchTerm)
            );

            setSuggestions(results);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchTerm]);


    // Handle user clicking on a suggestion
    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.title); // Set the title to the search input
        setShowSuggestions(false); // Hide the suggestions box
    };



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
                setShowSuggestions(false); // Hide suggestions if clicked outside
            }
        };

        document.addEventListener("click", handleClickOutside); // Listen for outside clicks
        return () => {
            document.removeEventListener("click", handleClickOutside); // Cleanup listener on unmount
        };
    }, []);
    return (
        <>
            <nav>
                
                <div className="nav-box">
                <Link to="/" style={{ color: 'inherit'}} >
                    <span className="logo">
                        Read Quest
                    </span>
                </Link>
                    <div className="search-icon">
                        <input className="search-box" ref={searchBoxRef}
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // Update search term as user types
                            onFocus={() => setShowSuggestions(true)} // Show suggestions when input is focused
                        />
                        <span className="icon">🔍</span>
                        {showSuggestions && suggestions.length > 0 && (
                            <ul className="suggestions-dropdown">
                                {suggestions.map((suggestion) => (
                                    <li
                                        key={suggestion.id}
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion.title}
                                    </li>
                                ))}
                            </ul>
                        )}


                    </div>
                    <Link to="/SignUp" style={{ textDecoration: 'none' }} >
                        <div className="signup">
                            Sign Up
                        </div>
                    </Link>
                    <Link to="/cart"   style={{ textDecoration: 'none', color: 'inherit' }} >
                    <div className='cart' >
                        <span>
                            <i className='fas fa-cart-plus' ></i>
                        </span>
                        <span>{size}</span>
                    </div>
                    </Link>

                </div>
            </nav>

            {/* <Link to="/" style={{ textDecoration: 'none' }} > </Link> */}
            {/* <Shop /> */}

            {/* <Link to="/Card" style={{ textDecoration: 'none' }} >In shop </Link> */}
            {/* <Card /> */}

            {/* <Link to="/Shop" style={{ textDecoration: 'none', marginLeft: '10px' }}>Shop</Link>
            <Link to="/Card" style={{ textDecoration: 'none', marginLeft: '10px' }}>Cart ({size})</Link> */}
        </>
    )
}

export default Navbar;
