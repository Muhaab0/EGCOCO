import React from 'react'
import styled from "styled-components"
import { useState } from "react";
import { images } from "../Slider";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";


import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ReactCSSTransitionGroup from 'react-transition-group';

function Aboutus() {
    const [currImg, setCurrImg] = useState(0);
    const [iswhy, setiswhy] = useState(false);
    const [Current, setCurrent] = useState(0);

    const whywe = [
        {
            subtitle:"لسه ي حماده",
            title:"لسه ي حماده"
        },

        {
            subtitle:"لسه ي حماده",
            title:"لسه ي حماده"
        },


        {
            subtitle:"لسه ي حماده",
            title:"لسه ي حماده"
        }


    ]
    
    const whywefunc = (i) => {
        if (Current === i) {
            setiswhy(current => !current)

        } 
    }
    return(
    <Section>
        <div className='info'>
          <p>عن شركه ايجي كوكو</p>
        </div>
        <div className='container flex'>
        <div className='text'>
            <p className='first'>معنا في EGCoCo سوف تتعامل مع فريق متكامل من محترفي التسويق للترويج لمنتجك ونشاطك</p>
            <p className='second'>وذو حس عالي بالسوق لإستهداف فئة العملاء المناسبة لشركتك وضمان نجاح حملاتك الإعلانية بمختلف أنواعها للترويج لأي شيء يخص علامتك التجارية او مؤسستك بإستخدام وسائل مختلفة بشكل احترافي وفعال مثل :<br/>
                                    1-التسويق عبر شبكات التواصل الاجتماعي  ( Social Media Marketing )
                                    <br/>2-التسويق عبر البريد الإلكتروني  ( E-mail Marketing )
                                    <br/> 3-تسويق المحتوى  ( Content Marketing )
                                    <br/> 4-التسويق المتكامل للمنتج( Inbound Marketing )
                                    <br/> 5-زيادة الزوار: ( Lead Generation )
                                    اغتنم الفرصة الآن للترويج بإحترافية!</p>

                                    <div className='button'>
                                        <button>تواصل معنا</button>
                                    </div>
            </div>

                <div className="carousel  flex ">
                <div className="left-sec">
                <div
                className="carouselInner"
                style={{ backgroundImage: `url(${images[currImg].img})` }}
                >



                <div
                    className="right"
                    onClick={() => {
                    currImg > 0 && setCurrImg(currImg - 1);
                    }}
                >
                    <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                </div>

                
                <div className="center">
                <div className="spans">
                    <span className={currImg == 0 ? "active" : "none"} ></span>
                    <span className={currImg == 1 ? "active" : "none"}  ></span>
                    <span className={currImg == 2 ? "active" : "none"}  ></span>
                    <span className={currImg == 3 ? "active" : "none"}  ></span>
                    <span className={currImg == 4 ? "active" : "none"}  ></span>
                    <span className={currImg == 5 ? "active" : "none"}  ></span>
                </div>
                </div> 


                <div
                    className="left"
                    onClick={() => {
                    currImg < images.length - 1 && setCurrImg(currImg + 1);
                    
                    }}
                >
                    <ArrowBackIosIcon style={{ fontSize: 30 }} />
  </div>


</div>

</div>
</div>



            </div>
                <div className='whywe'>
                        <h2>لماذا ايجي كوكو يجب ان تكون اختيارك الاول</h2>
            {
                whywe.map((why , i) => {
                    return(
                        <div className='content'>
                    <div className='sub' onClick={ () =>{
                     whywefunc(i);
                     setCurrent(i);
                    }}>{why.subtitle}
                    <div className="icons">
                        
                            {iswhy && Current === i ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        
                    </div>

                    </div>
                    <div className={`title ${iswhy && Current === i ? "" : "none"}`}>{why.title}</div>
                        </div>
                    )
                })
            }
                </div>
        
        </Section>

      )
    }
    export default Aboutus
    
    
    
    
    const Section = styled.section`

background:#222222;
  height:1400px;
  padding-top:150px;
  .info {
    background:#ffbc00;
    padding:30px;
    p{
      width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 28px;
    }
  }

  .container {
      margin-top:60px;
      margin-left:20px  ;
      margin-right:60px;
      gap: 10px;
    .text {
        width:52%;
      .first {
        font-weight:bold;
        font-size:25px;
        color:#ffbc00;
      }
      .second {
        font-weight:normal;
        margin-top: 15px;
        font-size: 20px;
        line-height: 1.6;
      }
      .button {
      margin-top: 15px;
      margin-right: 30px;
      cursor:pointer;
      button {
        padding:5px;
        background:#ffbc00;
        color:white;
        font-size:20px;
        border-radius:15px;
        border: none;

      }
      }
}
    }


    .carousel {
    width: 60%;
    color:white;
}
      .left-sec {
        width: 500px;
        height: 500px;
       margin: auto;

.carouselInner {
    height: 100%;
    max-width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    
}

.carouselInner .left {
    flex: 5%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.3);
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
}

.carouselInner .center {
    flex: 90%;
    position:relative;
    .spans {
    display:flex;
    justify-content:center;
    position: absolute;
    bottom: 5px;
    right: 50%;
    transform: translatex(50%);
}
    }
        .active {
            background:black;
        }
    span {
        width:10px;
        height:10px;
        border-radius:50%;
        border: solid 1px #222222;
        margin-right:5px;
    }


h1 {
    font-size: 5rem;
}

p {
    font-size: 2rem;
}

h1, p {
    background-color: rgb(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 9px;
}

.carouselInner .right {
    flex: 5%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.3);
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
}
      }

      .whywe {
        padding:120px 60px;
            transition:0.5s;
            h2 {
                text-align: center;
                margin-bottom: 50px
            }
        .content {

            .sub{
                cursor:pointer;
                padding: 15px;
                background: #ffbc00;
                border: solid 1px #ffbc;
                font-size: 25px;
                    position: relative;
                .icons {
                    position: absolute;
                    left: 10px;
                    top: 50%;
                    transform: translatey(-50%);
                    font-size: 30px;

}
                }
            }
            .title {
                padding: 25px 15px;
                border: solid 1px #ffbc;
                font-size: 20px;
            }
        }

        @media screen and (min-width: 280px) and (max-width: 1080px) {
            height: 1700px;
            .container {
                flex-direction:column;
            .text {
              width:100%;  
               margin-bottom:50px;
            }
            .carousel  {
              width:100%;  

            }
        }
            }

            @media (max-width: 679px) { 
                height:2000px;
                .info {
                    padding:20px;
                    p {
                        font-size:24px;
                    }
                }
                .container {
                    margin-right: 20px!important;
                }
                .text {
                    .first {
                        font-size:21px!important;
                    }
                    .second {
                        font-size:18px!important;
                    }
                }
                .button {
                    button {
                        font-size:18px!important;
                    }
                }
                .left-sec .carouselInner {
                    height:68%;
                }

                .whywe {
                    padding: 0px 20px;
                    h2 {
                        font-size:25px;
                    }
                    .content {
                        .sub {
                            font-size:21px;
                            padding:10px;
                            .icon {
                                font-size:20px;
                            }
                        }
                        .title {
                            font-size:18px;
                            padding: 15px 10px;
                        }
                    }
            }
                }
      
    `