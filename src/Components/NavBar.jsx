import React from 'react'
import styled from "styled-components"
import logo from '../assets/Logo.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

export default function NavBar() {
   const navLinks = [
        "الرئيسيه",
        "عن الشركه",
        "تواصل معنا"
    ]
    

  return (
    <Nav className='flex j-center a-center'>
        <div className='navbar flex a-center j-between gap'>

    <div className='logo '>
        <img className="logo-img" src={logo} alt="logo" />
    </div>
    <div className='links'>
        <ul className='flex gap-2'>
    {
        navLinks.map((link) => {
            return(
                <li flex>
             {link} 
             </li>
        )})
    }
        </ul>
    </div>

        <div className='info flex gap-1 a-center j-center'>
        <div className="account flex gap-1 a-center j-center">
          <span>
            <BsPerson />
          </span>
          <span>حسابي</span>
        </div>
        <div className="search">
          <IoSearchOutline />
        </div>
           
        </div>
        </div>
    </Nav>
  )
}

const Nav = styled.nav`
    direction: rtl;
    cursor:pointer;
    color:white;
    background:#e71f44d4;
    padding:0.5rem;
    border-radius:2rem ;
    width: 98%;
    position:fixed;
    z-index:1111;
    margin: 0 -1rem;
    li {
        padding:1rem ;
        font-size: 1rem ;
    }
.logo {
    width:3.5rem;
    img {
        width:100%;
        border-radius:50%;
        
    }
}
    .info {
        .account {
            span {
            svg {
                color:#3c67a9;
                font-size:1.5rem;
            }
        }
    }
    .search {
        svg {
            color:white;
                font-size:1.5rem;
        }
    }
`;

