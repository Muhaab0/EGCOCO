import React from 'react'
import styled from "styled-components"
import { VscArrowLeft } from "react-icons/vsc";

export default function CustomSection() {
  return (
<Section>
<div className='custom main-padding'>
        <div className='text'>
            <h2>Choose Your Custom Package</h2>
        <div className='icon'>
            <VscArrowLeft />
        </div>
        </div>
        </div>
        </Section>
  )
}

const Section = styled.section`
 background:#ffbc00;
 height:600px;
.custom {
    padding-top: 50px;
    padding-bottom: 50px;
    width:50%;   
    height:100%;

    .text {
    h2 {
    font-size: 4rem;
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
    font-size: 6rem;
    margin-right: 60px;
    cursor:pointer;
    font-weight:normal;
}
}

@media (max-width: 1080px) { 
    height:500px;
    .custom {
    width:100%!important;
     .text {
    margin:unset;
    h2 {
    padding-top: 50px;
    padding-bottom: 25px;
        margin-right:70px;
        font-size:3rem;
    }
    .icon {
        margin-right:70px;
        font-size:4rem;
    }
    }
}  
}
`