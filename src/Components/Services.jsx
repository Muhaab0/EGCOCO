import React,{ useState , useEffect } from 'react'
import styled from "styled-components"
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import { content } from "./Contents/Servcontent";

export default function Services() {

const [IsPopOpen, setIsPopOpen] = useState(false);   

const [isClicked, setIsClicked] = useState(false);   
const [Current, setCurrent] = useState(0);


const [value, setValue] = useState([]); 



    const handleToggle = () => {
        setIsClicked(true);
    };

        useEffect(() => {   
            if (value) {
                localStorage.setItem("value", JSON.stringify(value));     
                if (value) {
                    setValue(value)
                }    
            }
            }, [value]);   

  return (
    <Section id="services"  state={isClicked ? 1 : 0} >
    <div className='col flex a-center j-center'>
        <div className='left-side main-padding'>
        <div className='text'>


            <h2> احصل علي خدماتك من ايجي كوكو               
                </h2>
        </div>
        </div>
        <div className='right-side '>
        <div className='inner'>
            <h3>ماذا تبحث عن؟</h3>
            <div className='links'>
            <ul className='pop'>

            <li  onClick={()=> { 
                
                handleToggle();
                setCurrent(1);
                 }}
                  >
                    <span>تحسين محركات البحث (ٍSEO)</span>
                    <div className={`info  ${isClicked && Current === 1 ? "flex" : "none" }`}>
                        <p  className='serv'  onClick={() => setIsPopOpen(true)}>عن الخدمه</p>
                        <p className='add' onClick={(e) => {setValue(Current)}}> <Link to="/CustomPackage">اطلب عرض سعر</Link> </p>
                    </div>

                </li>
                <li  onClick={()=> { 
                handleToggle();
                setCurrent(2);
                 }}
                  >
                    <span>تصميمات اللوجو</span>
                    <div className={`info  ${isClicked && Current === 2 ? "flex" : "none" }`}>
                        <p  className='serv'  onClick={() => setIsPopOpen(true)}>عن الخدمه</p>
                        <p className='add' onClick={(e) => {setValue(Current)}}><Link to="/CustomPackage">اطلب عرض سعر</Link></p>
                    </div>

                </li>
                <li  onClick={()=> { 
                handleToggle();
                setCurrent(3);
                 }}
                  >

                    <span> برمجه وتطوير المواقع</span>
                    <div className={`info  ${isClicked && Current === 3 ? "flex" : "none" }`}>
                        <p  className='serv'  onClick={() => setIsPopOpen(true)}>عن الخدمه</p>
                        <p className='add' onClick={(e) => {setValue(Current)}}> <Link to="/CustomPackage">اطلب عرض سعر</Link> </p>
                    
                    </div>

                </li>
                <li  onClick={()=> { 
                handleToggle();
                setCurrent(4);
                 }}
                  >

                    <span>تصميم الدعايه والاعلان</span>
                    <div className={`info  ${isClicked && Current === 4 ? "flex" : "none" }`}>
                        <p  className='serv'  onClick={() => setIsPopOpen(true)}>عن الخدمه</p>
                        <p className='add' onClick={(e) => {setValue(Current)}}> <Link to="/CustomPackage">اطلب عرض سعر</Link> </p>
                        </div>

                </li>

                <li  onClick={()=> { 
                handleToggle();
                setCurrent(5);
                 }}
                  >

                    <span>تصميم الفديوهات الاعلانيه </span>
                    <div className={`info  ${isClicked && Current === 5 ? "flex" : "none" }`}>
                        <p  className='serv' 
                         onClick={() => {
                          setIsPopOpen(true);
                          setCurrent(0);
                          setIsClicked(false);
                         }}
                         >عن الخدمه</p>
                      <p className='add' onClick={(e) => {setValue(Current)}}> <Link to="/CustomPackage">اطلب عرض سعر</Link> </p>
                        </div>


                </li>

                <li  onClick={()=> { 
                handleToggle();
                setCurrent(6);
                
                 }}
                  >
                    <span> تصميم متاجر اليكترونيه </span>
                    <div className={`info  ${isClicked && Current === 6 ? "flex" : "none" }`}>
                        <p  className='serv'  onClick={() => setIsPopOpen(true)}>عن الخدمه</p>
                        <p className='add' onClick={(e) => {setValue(Current)}}> <Link to="/CustomPackage">اطلب عرض سعر</Link> </p>
                        </div>

                </li>
                <li  onClick={()=> { 
                handleToggle();
                setCurrent(7);
                 }}
                  >
                    <span> تصميم خطه التسويق </span>
                    <div className={`info  ${isClicked && Current === 7 ? "flex" : "none" }`}>
                        <p className='serv' onClick={() => setIsPopOpen(true)}>عن الخدمه</p>
                        <p className='add' onClick={(e) => {setValue(Current)}}> <Link to="/CustomPackage">اطلب عرض سعر</Link> </p>
                        </div>

                </li>
            </ul>
        </div>
            </div>
        </div>        
            </div>

                 <div className={`popup ${IsPopOpen ? "block" : "none" }`}>

                 {
                    content.map((c ,i ) => {
                        if (c.id === Current) {
                            return(
                                <div className='popo' key={c.id}>
                                <div className='icon'>
                                <MdClose onClick={() => setIsPopOpen(false)} />
                                </div>

                                <div className='liner '>
                                    <div className='title'>{c.title}</div>                                    <div className='page'>{c.title1}</div>
                                </div>

                                    <div className='subtitle'>
                                    {c.subtitle}
                                    </div> 
                                <div className='text flex'>

                                    

                                    <div className='content'>
                                    <p>
                                        {c.content}
                                    </p>
                                    </div>
                                    <div className='prov'>
                                    <p>
                                    {c.prov}
                                    </p>
                                    </div>
                                </div>
                                    <div className='buttons'>
                                        <button onClick={() => setIsPopOpen(false)}>اغلاق</button>
                                        <button onClick={(e) =>
                                         {setValue(Current)
                                         setIsPopOpen(false)
                                         }}><Link to="/CustomPackage">اطلب عرض سعر</Link></button>
                                    </div>

                                </div>
                            )
                        }
                    } )
                 }
                    
                 </div>


    </Section>
  )
}




const Section = styled.section`
color:white;

.col {
    
    height: 700px;
}
.left-side {
    padding-top: 50px;
    padding-bottom: 50px;
    width:50%;
 background:#ffbc00;   
    height:100%;

    .text {
    h2 {
    font-size: 3rem;
    width: 110%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    width:20%;
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
        font-size: 2.5rem;
        margin-bottom: 30px;
    }
    .links {
        display:flex;
        gap:25px;
        width:80%;
        ul {
            width: 100%;
            margin-left: 60px;
            height: 600px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            column-gap: 80px;
    }
        li {
            cursor:pointer;
            width: 50%;
            position:relative;
            counter-increment: num;
            padding-right:50px;
            padding-top: 50px;
                font-weight: bold;
            a {
                width: 60px;
             color:white;
            list-style:none;
            text-decoration:none;
            }
            &::before {
                content: "0" counter(num);
                position:absolute;
                color: #333333;
                font-size: 3rem;
                content: "0" counter(num);
                top: 29px;
                margin-right:-4.5rem;
                font-size: 3.8rem;
                cursor:pointer;
                
                    }
                
            span {
                font-size: 23px;
                width: 20px;
                display: flex;
                flex-direction: column;
            }
            .info {
                position:absolute;
                z-index:50;
                left:50%;
                transform:translatex(-50%);
                align-items:center;
                justify-content:space-between;
                flex-direction:row;
                width: 200px;
                    text-align: center;
                    gap:3px;
                p {
                    font-size:15px;
                    font-weight:bold;
                    background:#ffbc00;
                    transition:0.5s;
                    &:hover {
                    background:#ff8900;
                    }
                }
                .serv {
                    width:50%;
                    border-left:solid black 1px;
                }
                .add {
                    width:50%;

                }
            }
            }    
}
li:hover::before {
    color:#ffbc00 !important;
} 
}

.popup {
    position:relative;  
    background: #ffbc00;
    width: 600px;
    height: 500px;
    margin: auto;
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50% , -50%);
    z-index:55566;
    max-width:100%;
    .popo {

    }
    .icon {
    cursor:pointer;
        width:25px;
        height:25px;
        border-radius:50%;
        border:solid 1px white;
        svg {
        font-size:20px;
        display:flex;
        align-item:center;
        justify-content:center;
        width: 100%;
        }
    }
    .liner {
        margin-top:10px;
        border-bottom: solid white 1px;
        padding-bottom: 10px;
        
    }
        margin-top: 10px;
        margin-right: 20px;
        .title {
        font-weight:bold;
        margin-right: 10px;
        background:#222222;
        padding: 5px 15px;
        display: inline-block;
        border-radius:8px;
        }
        .subtitle {
           width: 100%;
            padding: 15px;
            font-size: 21px;
            border: 0.5px solid #222;
            height: 106px;
        }
        }
        .text {
            margin-top: 10px;
            margin-right: 20px;
            align-item:center;
            justify-content:space-between;
            gap: 15px;
            padding: 0 15px;
            font-size: 20px;
            .content {
                overflow:auto;
                width:60%;
                font-weight: normal;
                p {
                    overflow: scroll;
                    max-height: 240px;
                    &::-webkit-scrollbar {
                    width:5px;
                    background:transparent;
                    }
                    &::-webkit-scrollbar-thumb  {
                    background:black;
                    

                    }
                }
            }
            .prov {
                overflow:auto;
                width:40%;
                font-weight: normal;
                p {
                    overflow: scroll;
                    max-height:240px;
                    &::-webkit-scrollbar {
                    width:5px;
                    background:transparent;
                    }
                    &::-webkit-scrollbar-thumb  {
                    background:black;
                    
                    }
                }
            }

        }
        .buttons {
            display:flex;
            gap:10px;
            position:absolute;
            bottom: 20px;
             left: 10px;
             button {
                cursor:pointer;
                background:#222222;
                padding: 5px 15px;
                color:white;
                border-radius:8px;
                border:none;
                font-weight:bold;
                font-size:16px;
                a {
                    text-decoration:none;
                color:white;
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
            font-size: 2.5rem !important;
            margin-right: 70px;
        }
    width:100% !important;
    padding-right:unset;
    .inner {
        align-items:normal;
    }
        .links {
            width: 65%;
            margin: auto;
            li {
                padding-right: 60px !important;
                
                &:before {
                    top: 29px !important;
                    
                            }
            }
            display: flex;
            align-items: center;
            justify-content: space-evenly;
                 
                
                }
    }
    .left-side {
    width:100%!important;
    padding-top: 150px;
    padding-bottom: 150px;
     .text {
    width: 65%;
    margin:unset;
    h2 {
        margin-right:70px;
        font-size:2.5rem;
    }
    }
}  
        .popup {
            
        }
}

        
@media (max-width: 679px) {
    .left-side {
        padding-top: 100px !important;
        padding-bottom: 100px !important;
    h2 {
        margin-right:35px !important;
    font-size: 2rem !important;
    }

        }
    
        .right-side {
            h3 {
                margin-right: 35px;
                font-size: 2rem !important;
            }
    .links {

    a {
        span {            
                font-size:18px !important ;
            }
    }
            li {
                span {
                    font-size:20px!important;
                }
            &:before {
                
                    font-size: 3.3rem!important;
            }
                            }
    }
    }
    .info {
        width:160px!important;
        p {
            font-size:12px!important;
        }
    }
    .popup {
        .text {
            margin-right:0;
        }
     .subtitle {
        font-size:18px;
    }
    }
}



`