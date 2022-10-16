import React from 'react'
import styled from "styled-components"

export default function Services() {
  return (
    <Section id="services">
    <div className='col flex a-center j-center'>
        <div className='left-side main-padding'>
        <div className='text'>


            <h2>Now A
                Part Of
                Brave
                Bison
                </h2>
        </div>
        </div>
        <div className='right-side '>
        <div className='inner'>
            <h3>What are you interested in?</h3>
            <div className='links'>
            <ul>
            
            <li>
                    <a href="#"><span>SEO</span></a>

                </li>

                <li>
                    <a href="#"><span>PaidSearch&Shopping</span></a>

                </li>
                <li>
                    <a href="#"><span>Creative Data & Audience Insights</span></a>

                </li>
                <li>
                    <a href="#"><span>Design&Build</span></a>

                </li>
                <li>
                    <a href="#"><span>Conversion Optimistion & UX</span></a>

                </li>
            </ul>
            <ul>
                <li>
                    <a href="#"><span>Commerce Systems Insightstegration</span></a>

                </li>
                <li>
                    <a href="#"><span>Content Marketing</span></a>

                </li>
                <li>
                    <a href="#"><span>Display</span></a>

                </li>
                <li>
                    <a href="#"><span>Affiliates</span></a>

                </li>
                
                <li>
                    <a href="#"><span>Analytics</span></a>

                </li>
                </ul>
        </div>
            </div>
        </div>
            </div>

    </Section>
  )
}



const Section = styled.section`
color:white;
.col {
    height: 680px;
}
.left-side {
    padding-top: 50px;
    padding-bottom: 50px;
    width:50%;
 background:#ffbc00;   
    height:100%;

    .text {
    h2 {
    font-size: 4rem;
    width: 45%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    width:30%;
    margin:auto;
}
}

.right-side {
    background:#222222;
    width:50%;
    height:100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 50px;
    .inner {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
    h3 {
        font-size:30px;
        margin-bottom: 30px;
    }
    .links {
        display:flex;
        ul {
            width: 40%;
            margin-left: 60px;
        li {
            width: 200px;
            position:relative;
            counter-increment: num;
            padding-right:50px;
            padding-top: 50px;
            a {
                width: 60px;
             color:white;
            list-style:none;
            text-decoration:none;
            &:before {
                content: "0" counter(num);
                position:absolute;
                color: #333333;
                font-size: 3rem;
                content: "0" counter(num);
                top: 29px;
                left: 9.8rem;
                font-size: 3.8rem;
                &:hover {
                    color:white;
                }
                    }
                }
            span {
                font-size: 21px;
                }

            }
            }
            
        
}
}

@media (max-width: 1080px) {
    .col {
        flex-direction:column   !important;
        height:unset;

    }
    .right-side {
        h3 {
            margin-right: 70px;
        }
    width:100% !important;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-right:unset;
    .inner {
        align-items:normal;
    }
        .links {
            li {
                padding-right: 60px !important;
                
            }
            display: flex;
            align-items: center;
            justify-content: space-evenly;
                a {
                &:before {
                    top: 29px !important;
                    left: 10rem!important;
                    font-size: 3.8rem!important;
                            }
                }
                }
    }
    .left-side {
    width:100%!important;
    padding-top: 100px;
    padding-bottom: 100px;
     .text {
    width: 50%;
    margin:unset;
    h2 {
        font-size:3.5rem;
    }
    }
}  
}

        
@media (max-width: 679px) {
    .left-side {
    h2 {
    font-size: 2.5rem !important;
    }

        }
        .right-side {
            h3 {
                margin-right: 35px;
                font-size: 25px !important;
            }
    .links {

    a {
        span {            
                font-size:16px !important ;
            }
            &:before {
                left: 10rem!important;
                    font-size: 3rem!important;
                            }
    }
    }
}
}

`