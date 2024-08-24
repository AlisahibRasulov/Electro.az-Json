import React from 'react'
import { NavLink, Outlet, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul className='sidebar_menu flex flex-col'>
            <li>
                <NavLink>Hamısı</NavLink>
            </li>
            <li>
                <NavLink>Notbuklar</NavLink>
            </li>
            <li>
                <NavLink>Smartfonlar</NavLink>
            </li>
            <li>
                <NavLink>Fotoaparatlar</NavLink>
            </li>
            <li>
                <NavLink>Video oyunlar</NavLink>
            </li>
            <li>
                <NavLink>Aksesuarlar</NavLink>
            </li>       
        </ul>
    </div>
  )
}

export default Sidebar