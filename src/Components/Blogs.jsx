import React from "react";
import styled from "styled-components";
import img6 from "../assets/img6.jpg";
import img5 from "../assets/img5.jpg";
import { VscArrowLeft } from "react-icons/vsc";
import {
  RiGoogleFill,
  RiAppleFill,
  RiAmazonFill,
  RiBitCoinFill,
} from "react-icons/ri";    
export default function Blogs() {
  const data = [
    {
      date: "July 2012",
      name: "Google",
      description:
      " الإيجابية المتميزة والتي تقودك نحو الوصول إلى الحصول على التفضيلات المتميزة داخل نتائج محركات البحث. كل ذلك يتحقق لك من خلال شركة متخصصة في كتابة محتوى عربي حصري."+

      "شركة “بلانز” أفضل شركة متميزة تساعدك في الحصول على كتابة محتوى حصري متميز يقودك نحو تحقيق أهدافك. كل ذلك يتم تقديمه لك من خلال فريق متميز يقدم لك العديد من الخدمات الهامة التي تساعدك على كتابة المحتوى الحصري."+
      
      "كيف تكتب محتوى عربي حصري؟تحديد لك شركة “بلانز” العديد من المميزات الهامة التي تساعدك في كتابة المحتوى بطريقة احترافية والتي من خلالها تستطيع أن تصل إلى النتيجة الأفضل. وبالتالي يجب أن تهتم بالعديد من القواعد المتميزة التي تقودك نحو كتابة محتوى احترافي متميز كل ذلك يتم تقديمه لك من خلال الأتي"+
      
      "القاعدة الأولى عدم النسخ:أولى الخطوات التي يجب أن تضعها في اعتبارك هو الابتعاد تمامًا عن الـ copy paste وذلك من أجل الوصول إلى أفضل نتيجة. وبالتالي أنت بحاجة إلى معرفة العديد من الجوانب المتميزة حيث يجب أن تهتم بهذه القاعدة جيدًا من أجل أن تكون مفضلًا لدى جوجل لابد من إتباع قاعدة عدم النسخ والتي من خلالها تستطيع أن تحقق أهدافك بدقة شديدة. كل ذلك يمكنك معرفته من خلال الاهتمام كثيرًا بكتابة المحتوى والاهتمام بكيفية تحديدها. كل هذه العوامل تساعدك على أنت تراعي الكثير من العوامل عند الكتابة." +
      
      "القاعدة الثانية تجنب الأخطاء الإملائية:واحدة من أهم الجوانب المتميزة التي يجب أن تضعها في اعتبارك هو أن تقوم بكتابة محتوى خالي من الأخطاء الإملائية والتي من خلالها تستطيع أن تتعرف على عدة تفاصيل هامة من خلال كتابة المقال خالى من الأخطاء إملائية. لهذا يجب أن تقوم بمراجعة المحتوى أكثر من مرة ومراعاة الهمزات والأخطاء في الكلمات والألفاظ."+
      
      "القاعدة الثالثة الحشو:أحد القواعد الرئيسية التي تجعلك تكتب محتوى متميز هو أن تبتعد تمامًا عن حشو المقالات. وبالتالي أنت بحاجة إلى فهم العديد من التفاصيل الهامة والمتميزة والتي تقودك نحو الوصول إلى أفضل النتائج. كل هذه التفاصيل تساعدك على تقديم معلومات متميزة تساعد القارئ. "+
      
      "القاعدة الرابعة التجدد:من الضروري أن تقوم بكتابة محتوى دقيق متجدد يتواكب مع الرؤية المستقبلية للجمهور يساعدك على تحقيق أهدافك. العمل على تحديد العديد من التفاصيل الدقيقة من خلال تكيف المحتوى مع الرؤية السائدة."+
      
     " القاعدة الخامسة جمهورك: "+
      "من أهم القواعد التي يجب أن تهتم بها والتي من خلالها تستطيع أن تصل إلى القيمة الأفضل وبالتالي فهم الجمهور واحد من أهم القواعد التي تساعدك على كتابة المحتوى بدقة واحترافية ويساعدك على تقديم المعلومات التي تهم الجمهور. وبالتالي يكون التأثير من يكون أكبر والفاعلية والتفاعل على المحتوى يكون أفضل."+
      
      "القاعدة السادسة الوسيلة:"+
      "أحد الركائز الأساسية التي يتم الاهتمام بها والتي تساعدك على كتابة محتوى متميز وتساعد على تحقيق العديد من التأثير. حيث يعد اختيار الوسيلة الأنسب يضمن لك الفاعلية الكبيرة من المحتوى وبالتالي أحد القواعد التي يجب أن تهتم بها هي اختيار الوسيلة الأنسب."+
      
     " هذه مجموعة من القواعد الهامة التي تساعدك على كتابة محتوى عربي متميز. والتي تقدمها لك شركة “بلانز” أفضل شركة كتابة محتوى في الوطن العربي. فقط تواصل معنا واحصل على الخدمة."+
      
      
      
     " ما المقصود بالمحتوى؟"+
 "     المحتوى هو كل مادة يتم تقديمها للمتلقي سواء كانت مكتوبة أومسموعة أو مرئية"+
      
"        ما هي بلانز للمحتوى العربي؟"+
     " بلانز هي أول شركة عربية متخصصة في تقديم المحتوى العربي على الإنترنت."+
      
"        ما الخدمات التي تقدمها بلانز لكتابة المحتوى؟",
      icon: <img src={img6} alt="image" />  ,
    },
    {
      date: "July 2014",
      date: "July 2022",
      name: "Muhaab",
      description:
        "Content Here!",
      icon: "Pic Here!",
    },
    {
      date: "July 2022",
      name: "Muhaab",
      description:
        "Content Here",
      icon: "Picture Here" ,
    },
    {
      date: "July 2022",
      name: "Muhaab",
      description:
        "Content Here!",
      icon: "Pic Here!",
    },
    {
      date: "July 2022",
      name: "Muhaab",
      description:
        "Content Here!",
      icon: "Pic Here!",
    },
    {
      date: "July 2022",
      name: "Muhaab",
      description:
        "Content Here!",
      icon: "Pic Here!",
    },
    {
      date: "July 2022",
      name: "Muhaab",
      description:
        "Content Here!",
      icon: "Pic Here!",
    },
    {
      date: "July 2022",
      name: "Muhaab",
      description:
        "Content Here!",
      icon: "Pic Here!",
    },
    {
      date: "July 2022",
      name: "Muhaab",
      description:
        "Content Here!",
      icon: "Pic Here!",
    },
  ];
  return (
    <Section className="flex column gap">     
    <div className="container">

        <div className='text'>
        <h2> EgCOCO Blogs                
            </h2>
    </div> 
        </div>
      <div className="roadmap flex gap">
        {data.map(({ date, name, description, icon }, index) => {
          return (
            <div className="map flex column gap-1 a-start" key={index}>
              <div className="icon flex j-center a-center">{icon}</div>
              <div className="content">
              <p className="description subdue">{description}</p>
              </div>
              <div className="info">
              <div className="click"><a href="#">  الانتقال الي البوست <VscArrowLeft /> </a></div>
              <div className="data">
              <h3 className="date">Date {date}</h3>
              <h3 className="name">By {name}</h3>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
background:#222222;
height:950px;
padding-top:50px;
padding-bottom:50px;
.container {
width:50%;
.text {
    h2 {
    font-size: 4rem;
    width: 110%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    width:30%;
    margin:auto;
}
}

  .roadmap {
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 4rem;
    width: 80%;
    margin: auto;

    &::-webkit-scrollbar {
      height: 4px;
      background:black;
    }
    &::-webkit-scrollbar-thumb {
      background:white;
    }

    .map {
      height: 610px;
    min-width: 400px;
    position: relative;
    min-height: max-content;
    background: #ffbc00;
    padding: 20px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset;
}
}
        .content {
          text-align: right;
          position: absolute;
          top: 225px;
          left: 0;
          padding: 10px;
          height: 100%;
          margin-right: 10px;
}
        
        .info {
          left: 0;
          bottom: 0;
          position: absolute;
          padding: 10px;
          display: flex;
          flex-direction:column;
          width:100%;
          .click {
            margin:auto;
            padding: 10px;
            border-radius: 5px;
            background: black;
            a {
              text-decoration: none;
              color: white;

            }
        }
          }
          .data {
            display:flex;
            gap: 10px;
            justify-content: space-between;
            width: 100%;
          }
        
        .description {
          font-size: 1.4rem;
          height: 50%;
          overflow: auto;
          padding-bottom: 10px;
          font-weight: normal;
          &::-webkit-scrollbar {
            width:4px;
            background:white;
    }
        &::-webkit-scrollbar-thumb  {
          background:black;

    }
        }
      .icon {
        background-color: var(--roadmap-icon);
        width: 400px;
        height: 220px;
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translatex(-50%);
        filter: drop-shadow(5px 1px 8px black) contrast(0.5);
        transition:2s;
        cursor:pointer;
      }
        .icon:hover {
          filter:drop-shadow(5px 1px 10px white);
        }
        

        img {
          width: 100%;
          height: 100%
                  }

    @media (max-width: 1080px) {
      .description {
          font-size: 1.2rem!important;
      }
      .roadmap {
        gap:3rem!important;
      }
      .map {
        min-width:370px!important;
        .icon {
          width:370px;
        }
      }
    .text {
    width: 65% !important;
    margin:unset !important;
    h2 {
        margin-right:70px !important;
        font-size:3rem !important;
    }
    }
    }
    

    @media (max-width: 679px) {
      .roadmap {
        gap:2rem!important;
      }
      .map {
        min-width:350px!important;
        height: 510px!important;
        .icon {
          width:350px;
        }
         .description {
        font-size: 1.2rem;
        height: 40%;
      }
    }
      }
`;