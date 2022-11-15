import React,{ useState , useEffect } from 'react'
import styled from "styled-components"
import { VscArrowLeft } from "react-icons/vsc";
import { MdClose } from "react-icons/md";


export default function CustomPackage() {
  const [IsPopOpen, setIsPopOpen] = useState(); 

  return (
    <Section>

    
    <div className='icon'>

    <VscArrowLeft onClick={ () => setIsPopOpen(true) } />


    </div>
    
      <div className={`popup ${IsPopOpen ? "block" : "none" }`}>
            <div className='closeicon'>
      <MdClose onClick={() => setIsPopOpen(false)} />
      </div>

        <form>
        <div className='flex'>
        <label for="name">اسمك</label>
        <input type="text" name="name" value=""/>
        </div>
        <div className='flex'>
        <label for="email">بريدك الالكترني</label> 
        <input type="email" name="email" value=""/>
        </div>
        <input className='submit' type="submit" value="Submit"/>

        </form>



      <div className='buttons'>
        <button onClick={() => setIsPopOpen(false)}>اغلاق</button>
        <button onClick={(e) => setIsPopOpen(false)}>اضافع الي العربه</button>
    </div>

    </div>
    </Section>
  )
}



const Section = styled.section`
  .popup {
    position:relative;  
    background: #222222;
    width: 500px;
    height: 500px;
    margin: auto;
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50% , -50%);
    z-index:55566;
    border-radius:5px;

      form {
        display:flex;
        flex-direction:column;
        padding-right: 25px;
        padding-top: 25px;
        gap: 25px;
        label {
            width: 30%;
            font-size:20px;
          display:block;
        input {
          display:block;
        }
      }
      .submit {
        width: 30%;
        margin: auto;
      }
      }
    .closeicon {
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
        }:

}
.buttons {
            display:flex;
            gap:10px;
            position:absolute;
            bottom: 15px;
             left: 15px;
             button {
                cursor:pointer;
                background:#ffbc00;
                padding: 5px 15px;
                color:white;
                border-radius:8px;
                border:none;
                font-weight:bold;
                font-size:16px;
             }
        }

  }

`