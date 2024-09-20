import React from 'react'
import { NavLink, Outlet, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className='sidebar bg-[#fff] shadow rounded-[12px] w-[100%] h-[100%]'>
        <ul className='sidebar_menu flex flex-col justify-around w-[100%] h-[100%]'>
            <li className='hover:border-y-[1px] hover-border w-[100%] h-[20%] flex justify-center items-center'>
                <img src="../images/icons/icons8-electronic-100.png" alt="" className='w-[25px]'/>
                <NavLink className="text-[18px] hover:text-[#D10024]"  to="/products">Hamısı</NavLink>
            </li>
            <li className='hover:border-y-[1px] hover-border w-[100%] h-[20%] flex justify-center items-center'>
                <img src="../images/icons/icons8-laptop-100.png" alt="" className='w-[25px]'/>
                <NavLink className="text-[18px] hover:text-[#D10024]" to="/products/computers">Notbuklar</NavLink>
            </li>
            <li className='hover:border-y-[1px] hover-border w-[100%] h-[20%] flex justify-center items-center'>
                <img src="../images/icons/icons8-phone-100.png" alt="" className='w-[25px]'/>
                <NavLink className="text-[18px] hover:text-[#D10024]" to="/products/phones">Smartfonlar</NavLink>
            </li>
            <li className='hover:border-y-[1px] hover-border w-[100%] h-[20%] flex justify-center items-center'>
                <img src="../images/icons/icons8-compact-camera-100.png" alt="" className='w-[25px]'/>
                <NavLink className="text-[18px] hover:text-[#D10024]" to="/products/cameras">Fotoaparatlar</NavLink>
            </li>
            <li className='hover:border-y-[1px] hover-border w-[100%] h-[20%] flex justify-center items-center'>
                <img src="../images/icons/icons8-game-100.png" alt="" className='w-[25px]'/>
                <NavLink className="text-[18px] hover:text-[#D10024]" to="/products/games">Video oyunlar</NavLink>
            </li>
            <li className='hover:border-y-[1px] hover-border w-[100%] h-[20%] flex justify-center items-center'>
                <img src="../images/icons/icons8-headphones-100.png" alt="" className='w-[25px]'/>
                <NavLink className="text-[18px] hover:text-[#D10024]" to="/products/accessories">Aksesuarlar</NavLink>
            </li>       
        </ul>
    </div>
  )
}

export default Sidebar