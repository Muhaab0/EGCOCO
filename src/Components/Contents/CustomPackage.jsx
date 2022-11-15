import React from 'react'
import styled from "styled-components"

function Pop() {
  return (


    <Section>
        <div className='info'>
          <p>اطلب عرض السعر الان -  01000000</p>
        </div>
        <div className='container flex'>

          <div className='text'>
            <p className='first'>مرحبا بك في عرض اسعار خدمات ايجي كوكو</p>
            <p className='second'>من فضلك اترك بياناتك و عرض سعرك و سيتم التواصل معكم في اقرب وقت</p>
          </div>

          <form>
        <input type="text" name="name" placeholder="الاسم" required/>
        <input type="email" name="email" placeholder="البريد" required/>
        <input type="num" name="mobile" placeholder="رقم الموبايل" required/>



        <div className='boxes'>


        <div className='flex box'>
          <label for="Seo">تحسين محركات البحث</label>
          <input type="checkbox"  name="SEO" value="Seo"/> <br/>
        </div>

        <div className='flex box'>
          <label for="logo">تصميمات اللوجو</label>
          <input type="checkbox" name="logo" value="logo"/> <br/>
        </div>
          

        <div className='flex box'>
          <label for="programing">برمجه وتطوير المواقع</label>
          <input type="checkbox" name="programing" value="programing"/> <br/>
        </div>

          <div className='flex box'>
          <label for="ads">تصميم الدعايه والاعلان</label>
          <input type="checkbox" name="ads" value="ads"/> <br/>
          </div>
          

          <div className='flex box'>
          <label for="motion">تصميم الفديوهات الاعلانيه</label>
          <input type="checkbox" name="motion" value="motion"/> <br/>
          </div>

          <div className='flex box'>
          <label for="store"> تصميم متاجر اليكترونيه </label>
          <input type="checkbox" name="store" value="store"/> <br/>
          </div>

          <div className='flex box'>
          <label for="marketing">تصميم خطه التسويق</label>
          <input type="checkbox" name="marketing" value="marketing"/> <br/>
          </div>

        
        </div>      
        <textarea id="w3review" name="w3review" rows="6" cols="30"placeholder='اترك رسالتك هنا'></textarea>
        <input className='submit' type="submit" value="Submit"/>
        </form>
        
        </div>
        

    </Section>
  )
}

export default Pop



const Section = styled.section`
  background:#222222;
  height:1000px;
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
      margin-left:60px;
      margin-right:60px;
    .text {
      .first {
        font-weight:bold;
        font-size:25px;
        color:#ffbc00;
      }
      .second {
        font-weight:normal;
          width:70%;
        margin-top:20px;
        font-size:20px;
      }

    }
    form {
        display:flex;
        flex-direction:column;
        padding-right: 25px;
        padding-top: 25px;
        gap: 25px;
        align-items: center;
        input {
          padding:3px;
          font-size:20px;
          border: #ffbc00 1px solid;
           background: transparent;
           color:white;
        }
        .boxes {
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        height: 150px;
        gap: 20px;
        width: 100%;
        align-items: flex-start;
        border: 1px solid #ffbc00;
        width: 590px;
        padding: 15px;
        
        .box {
          font-size: 18px;
          gap:10px;
          input[type="checkbox"] { 
            appearance: none;
            font: inherit;
            color: currentColor;
            width: 1em;
            height: 1em;
            border-radius: 0.15em;
            transform: translateY(-0.075em);
            &::before {
              content: "";
              position:absolute;
              
              width: 0.60em;
              height: 0.65em;
              transform: scale(0);
              transition: 120ms transform ease-in-out;
              box-shadow: inset 1em 1em #ffbc00;
            }
            
            }
            input[type="checkbox"]:checked::before {
             transform: scale(1) !important;
            }
          }
          }
        }
        
    }
        
        textarea {
          background:transparent;
        border: 1px solid #ffbc00;
        font-size:20px;
        color:white;
        padding:5px;

        }

      
      .submit {
        width: 30%;
        margin: auto;
        cursor:pointer;
        &:hover {
          background:#ffbc00;
        }
      }

      
@media (max-width: 1080px) { 
  .container  {
    flex-direction:column;
    .text {

    }
  }
}

@media (max-width: 679px) { 
  height:1100px;
  .info {
    padding:20px;
    p {
      font-size:24px!important;
    }
  }
  .container {
    .text {
      .first {
        font-size:21px;
      }
      .second {
        font-size:18px;
      }
    }
    form {
      input {
        padding:1px;
      }
    }
    .boxes {
      flex-wrap:nowrap!important;
      border:none!important;
      gap:15px!important;
      height:auto!important;
      width:auto!important;
    }
    textarea {
      font-size:16px!important;
    }
    .submit {
      font-size:16px!important;
    }
  }


  }
      
  
`