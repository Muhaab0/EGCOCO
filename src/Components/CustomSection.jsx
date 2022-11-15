import React from 'react'
import styled from "styled-components"
import { VscArrowLeft } from "react-icons/vsc";
import {Link} from "react-router-dom"
import CustomPackage from "./Contents/CustomPackage";

export default function CustomSection() {
  return (
<Section>
<div className='custom main-padding'>
        <div className='text'>
            <h2>اختار عرض السعر بنفسك</h2>

        <div className='icon'>

        <Link to="/CustomPackage"><VscArrowLeft /></Link> 

        </div>
        </div>
        </div>


        </Section>
  )
}

const Section = styled.section`
 background:#ffbc00;
 height:450px;
.custom {
    padding-top: 35px;
    padding-bottom: 50px;
    width:50%;   
    height:100%;

    .text {
    h2 {
    font-size: 3rem;
    width: 110%;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    width:30%;
    margin:auto;
}
.icon {
    margin-top: 50px;
    font-size: 5rem;
    margin-right: 60px;
    cursor:pointer;
    font-weight:normal;
    a {

    color:white;
    }
}
}

@media (max-width: 1080px) { 
    height:400px;
    .custom {
    width:100%!important;
     .text {
    margin:unset;
    h2 {
    padding-top: 50px;
    padding-bottom: 25px;
        margin-right:70px;
        font-size:2.5rem;
    }
    .icon {
        margin-top:25px;
        margin-right:70px;
        font-size:4rem;
    }
    }
}  
}

@media (max-width: 669px) { 
    height:300px;
    .custom {
.text {
    width: 65% !important;
    margin:unset !important;
 h2 {
    margin-right: 35px !important;
    font-size: 2rem !important;
 }
 .icon {
    font-size:3rem;
 }
}
}
    }
    `