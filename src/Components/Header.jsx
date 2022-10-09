import React from 'react'
import styled from "styled-components";
import home from '../assets/Home.jpg';
import Typical from "react-typical";
export default function Header() {
  return (
    <Section>
        <div className='section'>
        <div className='image'>
            <img src={home} alt="home" />
        </div>
            <div className='text'>
                <h2>نحن شركة تسويق اليكتروني</h2>
                <h2>خدماتنا, </h2>
                    <p>


                        <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            " تصميمات و انشاء المواقع",
                            3000,
                           "فيديوهات مقاليه متحركه",
                            3000,
                            "تهيئة محركات البحث",
                            3000,
                            " ادارة صفحات السوشيال ميديا ",
                            3000,
                            "تصميم جرافيك",
                            3000,
                            " تواصل معنا للمزيد",
                            3000,
                        ]}
                        />
                    </p>
            </div>
            <div className='button'>
                        <button>احجز الان</button>
            </div>
        </div>

    </Section>
  )
}

const Section = styled.section`
    color:white;
    padding-top:5rem;
    position: relative;
    .section {
        .image {
            margin-left:2px;
            width:1250px;
                height:550px;
            img{
                margin-right: 25px;
                width:100%;
                height:100%;
                border-radius: 0.5rem;

            }

        }
        .text {
            margin-right:2rem;
            background: #e71f4494;
            position: absolute;
            top: 11rem;
            padding: 1rem;
            max-width: 30rem;
            border-radius: 0.5rem;
                        }
            h2 {
                font-size:1.5rem;
            }
            p {
                border-bottom:red 1px solid;
                font-weight:bold;
                color:yellow;
            }
            .button {
                position: absolute;
                top: 20rem;
                right: 50%;
                transform: translatex(50%);
                padding: 1rem;
               
                button {
                    background: #e71f4494;
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
            }
            
            
    
`;