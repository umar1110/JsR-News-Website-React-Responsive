import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class SmCategoriesMenu extends Component {
    closeMenu = () => {
        document.querySelector("#categories-menu").classList.add("hidden");
    }
    render() {
        return (
            <>
                <div id="categories-menu" className="categories-menu md:hidden fixed flex flex-col items-center top-0 right-0 h-[100vh] w-[40%] bg-gray-700 text-white">
                    <button onClick={this.closeMenu} className="closeMenu text-2xl  absolute text-white left-3 top-1">
                        X
                    </button>


                    <h4 className='uppercase font-bold text-2xl py-6'>Categories</h4>
                    <ul className='list-none capitalize text-xl space-y-4'>
                        <li><Link to="/business" >Business </Link></li>
                        <li><Link to="/entertainment" >Entertainment </Link></li>
                        <li><Link to="/general" >General </Link></li>
                        <li><Link to="/health" >health</Link></li>
                        <li><Link to="/science" >science</Link></li>
                        <li><Link to="/sports" >sports</Link></li>
                        <li><Link to="/technology" >technology</Link></li>
                    </ul>

                </div>
            </>
        )
    }
}
