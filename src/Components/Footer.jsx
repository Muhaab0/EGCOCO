import React from 'react'
import styled from "styled-components";
import {FiFacebook} from "react-icons/fi";
import {FaInstagram} from "react-icons/fa";
import {FiTwitter} from "react-icons/fi";



export default function Footer() {
  return (
    <Foter>
        <div className='footer'>
            <div className='text'>
                <p className='logo'>EGCOCO</p>
                <p>Digital Marketing Company,</p>
                <p>Cairo Egypt,</p>
            </div>
            <div className='center'> 
            <div className='links-container'>
                <div className='links'>
                    <a href='#'>About Us</a>
                    <a href='#'>Our Works</a>
                    <a href='#'>Blogs</a>
                    <a href='#'>Custom Package</a>
                </div>    
                <div className='links'>
                    <a href='#'>Contact Us</a>
                    <a href='#'>Services</a>
                    <a href='#'>FAQ</a>
                    <a href='#'>Policy</a>
                </div>
            </div>
            </div>
            <div className='platform'>
                <div className='icons'>
                <a href='#'>
                    <FiFacebook/>
                </a>
                <a href='#'>
                    <FaInstagram />
                </a>
                <a href='#'>
                    <FiTwitter />
                </a>
                </div>
                <p>INFO@EGCOCO.COM</p>
                <p>01000000000</p>
            </div>
        </div>
    </Foter>
  )
}

const Foter = styled.footer`
background:#222222;
font-weight: normal;
        height: 350px;
    padding-top: 50px;
    padding-bottom: 50px;
    border-top: solid 1px #ffbc00;
    color:white;
    .footer {
        width:80%;
        margin: auto;
        display:flex;
        justify-content: space-between;

    .text {
        .logo {
            font-weight: bold;
            font-size: 45px;
            margin-bottom: 20px;
            border-bottom: 1px solid white;
            padding-bottom: 15px;
            text-align: center;
            color: yellow;
            font-size: 40px;
}
        }
    
        .center {
            font-size: 1.1rem;
            .links-container {
                display: flex;
                gap: 45px;
                margin-top: 75px;
                .links {
                    display: flex;
                    flex-direction: column;
                    gap:25px;
                    a {
                        text-decoration: none;
                        list-style: none;
                        color:white;

                    }
                }

            }
        }
            .platform {
                .icons {
                    display: flex;
                    gap: 15px;
                    margin-bottom:36px;
                    a {
                        width:40px;
                        height:40px;
                        border-radius:50%;
                        border:solid 1px white;
                        position:relative;
                        color:white;
                        font-size:1.2rem;
                        svg {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }
                    }
                }
            }
    }
    @media (max-width: 1080px) {
        height:600px;
        .footer {
            flex-direction: column;
            gap: 50px;
            .center {
                margin: auto;
            }
            .platform {
                margin: auto;
            }
        }
        .logo {
            p {
                text-align:center;
            }
        }
    }
    .links-container {
     margin-top:0 !important;   
    }
`