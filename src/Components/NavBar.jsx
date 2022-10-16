import React,{ useState } from 'react'
import styled from "styled-components"
import logo from '../assets/Logo.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const html = document.querySelector("html");
    html.addEventListener("click", (e) => setIsNavOpen(false));

   const navLinks = [
        "الرئيسيه",
        "عن الشركه",
        "تواصل معنا"
    ]
    

  return (
    <Nav  state={isNavOpen ? 1 : 0} className='flex j-center  a-center'>
        <div className='navbar flex a-center'>
    <div className='logo '>
        <img className="logo-img" src={logo} alt="logo" />
    </div>

    <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>

    <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul className='flex gap-2'>
    {
        navLinks.map((link) => {
            return(
                <li key={link} flex>
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
  .toggle {
    display: none;
  }
  justify-content:space-even;
    direction: rtl;
    color:white;
    background:#00000000;
    padding:0.5rem 0rem;
    border-radius:2rem ;
    width: 100%;
    position:fixed;
    z-index:1111;
    li {
        cursor:pointer;
        padding:1rem ;
        font-size: 1rem ;
        opacity: 0.7;
        transition: 0.5s ease-in-out;
        &:hover {
        opacity: initial;
    }
    }
    .navbar {
      gap:15rem;
    }
.logo {
  flex:1;
    cursor:pointer;
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
              cursor:pointer;
                color:#3c67a9;
                font-size:1.5rem;
            }
        }
    }
    .search {
        svg {
          cursor:pointer;
            color:white;
                font-size:1.5rem;
        }
    }
    }


    @media screen and (min-width: 280px) and (max-width: 1080px) {
        .toggle {
          cursor:pointer;
      padding-right: 1rem;
      display: block;
      z-index: 51;
      svg {
        font-size:1.2rem;
        color: white;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      z-index: 10;
      position: fixed;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "40%" : "0%")};
      height: 100vh;
      background-color: #000000eb;
      opacity: 0;
      visibility: hidden;
      transition: 0.7s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
            color: white;
        }
      }
    }
    }
    @media (max-width: 769px) {
                .logo {
                  width:2.5rem;
                }
                .navbar {
                  gap:4rem;
                }
            }
`;
