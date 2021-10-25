import React from 'react'
import { Link } from 'react-router-dom'

const SingleMeal = (props) => {

    return (
        <div className=" bg-gray-100">
            <nav className="flex items-center justify-between p-6 h-16 bg-gray-900 shadow-sm, shadow-lg">
                <div className="py-5 px-3  to-blue-500 text-sm font-semibold text-white cursor-pointer hover:text-green-400">LOGO</div>
                <ul>
                <li className="space-x-5 text-lg">
                    <Link to="/home" className="hidden sm:inline-block text-white hover:text-yellow-500">Home</Link>
                    <Link to="/about" className="hidden sm:inline-block text-white hover:text-yellow-500">About</Link>
                    <Link to="/service" className="hidden sm:inline-block text-white hover:text-yellow-500">Servics</Link>
                    <Link to="/products" className="hidden sm:inline-block text-white hover:text-yellow-500">Products</Link>
                </li>
                <div className="sm:hidden space-y-1 hover:cursor-pointer">
                    <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
                    <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
                    <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
                </div>
                </ul>
            </nav>
        </div>
    )
}

export default SingleMeal
