import React from 'react'
import styled from "styled-components"

function Contactus() {
  return (
    <Section>
    <div className='info'>
      <p>عن شركه ايجي كوكو</p>
    </div>

    <div className='cotent'>
        <form>
            <div className='form'>
        <input type="text" name="name" placeholder="الاسم" required/>
        <input type="email" name="email" placeholder="البريد" required/>
        <input type="num" name="mobile" placeholder="رقم الموبايل" required/>
        <input type="submit" className='sub' />
            </div>

            <div className='contact'>
            <p className='con'>يمكنك العثور علينا</p>
            <div className='information'>
            <div className="email">
                <p>البريد الاليكتروني</p>
                <p>info@EGCOCO.com</p>
            </div>

                <div className='phone'>
                <p>رقم الموبايل</p>
                <p>+0100000</p>
                </div>

            </div>
            </div>
        </form>
    </div>
    </Section>
  )
}

export default Contactus


const Section = styled.section`
    
background:#222222;
  height:800px;
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
  .cotent {
    margin:auto;
    max-width:700px;
    height:300px;
    margin-top:60px;
    form {
        display:flex;
    }
    .form {
        width:60%;  
        input {
            background:transparent;
            border:solid 1px #ffbc00;
            font-size:20px;
            padding:5px;
            color:white;
            margin:10px;
        }
        input[type="text"] {
            width:95%;
        } 
        input[type="email"] ,  input[type="num"] { 
            width:45%;
        }
        input[type="submit"] {
            padding: 5px 20px;
            font-size: 18px;
        }
        }
    }
    .contact {
        font-weight:normal;
        margin-left:10px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
        width: 35%;
        height: 210px;
        margin-top: 8px;
        padding-top:10px;
        .con {
            text-align:center;
            padding:5px 10px;
            background:#ffbc00;
        }
        .information {
            margin-top: 10px;
        

        .email {
            margin: 5px 10px;
        }
        .phone {
            margin: 5px 10px;
        }
    }
}

@media (max-width: 679px) { 
    .info {
          padding:20px;
        p {
            font-size:24px;
        }
    }


form {
    flex-direction:column;
    .form {
    margin:auto;
        input {
            padding:1px!important;
            font-size: 18px!important;
        }

        input[type="text"] {
            width:90%!important;
        } 
        input[type="email"] ,  input[type="num"] { 
            width:40%!important;
        }

    }
        .sub {
            font-size:16px!important;
            width:30%;
        }
    }
    .contact {
    margin:auto;
        padding-top:20px;

        width: 200px;
        .con {
            padding:3px;
            font-size: 19px;
        }
        .information {
            p {
                font-size:17px;
            }
        }
    }
}
  
  

`