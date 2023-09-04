
import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar(props) {
    
   const openMenu = () => {
        document.querySelector("#categories-menu").classList.remove("hidden");
    }
   
   
    const navbarStyle = {
        backgroundColor: props.mode === "dark" ? "black" : "rgb(55 65 81)",
        height: '70px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
    };
    const modeChangeButtonStyle = {
        backgroundColor:props.mode === "dark" ? "white" : "black",
        color:props.mode === "dark" ? "black" : "white",
    }


    return(
            <div style={
                navbarStyle
            }>

                <div className="right">
                    <Link to="/" className="text-3xl font-bold font-mono px-5">JsR-NewS</Link>

                </div>

                <div className="left px-5 space-x-6 items-center flex">

                    <ul className="left-lg-screen space-x-4 hidden capitalize  md:flex items-center">

                        <li><Link to="/business" >Business </Link></li>
                        <li><Link to="/entertainment" >Entertainment </Link></li>
                        <li><Link to="/general" >General </Link></li>
                        <li><Link to="/health" >health</Link></li>
                        <li><Link to="/science" >science</Link></li>
                        <li><Link to="/sports" >sports</Link></li>
                        <li><Link to="/technology" >technology</Link></li>


                        {/* <select name="NewsSelect" id="news-select" className="w-30 rounded-[5px] border-none text-black " >
                            <option value="all-news" >All News</option>
                            <option value="weather-news">Weather News</option>
                            <option value="sports-news" >Sports News</option>
                        </select> */}
                    </ul>
                    <button id="mode-text" onClick={props.changeMode} className={` p-2 rounded-md`} style={modeChangeButtonStyle}>Dark Mode</button>
                    <div className="menu-btn flex md:hidden">

                        <button onClick={openMenu} type="submit"  >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>

                        </button>
                    </div>
                </div>



            </div>
            

        );
    }

