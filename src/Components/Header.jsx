import React from 'react'
import styled from "styled-components";
import digital from '../assets/digital1.mp4';
import Typical from "react-typical";
export default function Header() {
  return (
    <Section>
        <div className='section'>
        <div className='video'>
            <video autoPlay  muted loop>
            <source src={digital} type="video/mp4"/> 
             </video>
        </div>
        
            <div className='content'>
            <h2 className='COCO font'>EGCOCO</h2>
            <div className='text'>

                <h2>نحن شركة تسويق اليكتروني</h2>
                    <p>


                        <Typical
                        loop={1}
                        wrapper="p"
                        steps={[
                            " تواصل معنا للمزيد الان",
                        ]}
                        />
                    </p>
            </div>
            </div>
        
        </div>

    </Section>
  )
}

const Section = styled.section`
    color:white;
    position: relative;
    .section {
        .video {
                z-index:-100;
                filter:grayscale(100%);
                margin:auto;
                width:100%;
                video{
                    width:100%;
            }

        }

        .content{
            right:15rem;
            position: absolute;
            top: 11rem;
            .COCO {
                position: relative;
                font-size: 4rem;
                color: #ffffff;
                line-height: .9em;
                font-weight: normal;
                display: block;
                bottom: 4rem;

                &:before {
                content: "";
                position: absolute;
                bottom: -1rem;
                background: #ffbc00;
                width: 100%;
                height: 1px;
                display: flex;
}

                }
}
            }
        .text {
            background: #000000e0;
            
            padding: 1rem;
            max-width: 30rem;
            border-radius: 0.5rem;
                        }
            h2 {
                font-size:1.5rem;
            }
            p {
                font-weight:bold;
                color:#ffbc00;
                b{
                    border-bottom:#000000e0 1px solid;
                }
            }
        
            .button {
                position: absolute;
                top: 15rem;
                right: 50%;
                transform: translatex(50%);
                padding: 1rem;
               
                button {
                    background: #000000e0;
                    padding: 0.5rem 2rem;
                    border: none;
                    color: white;
                    cursor: pointer;
                    font-size: 1.5rem;
                    &::hover{
                    background:red;
                }
                }
                }
            
            @media (max-width: 1200px) {
                .content {
                    right: 3rem !important;
                    top: 10rem !important;
                    .COCO {
                        bottom:2rem !important;
                        font-size:3rem!important;
                    }
                }
            
                @media (max-width: 697px) {
                    .content {
                        right: 1rem !important;
                        top: 6rem !important;
                    .COCO {
                    font-size:2rem  !important;
                }
                .text {
                    h2 {
                        font-size: 1rem !important;
                        }
                    }
                }
                    }
                }
    
`;