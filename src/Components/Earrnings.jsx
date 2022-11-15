import React, { useState } from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./ReusableStyles";
import { images } from "./Slider";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const data = [
  { data: 4500 },
  {
    data: 5000,
  },
  {
    data: 4700,
  },
  {
    data: 4400,
  },
  {
    data: 4800,
  },
  {
    data: 5300,
  },
  {
    data: 5800,
  },
  {
    data: 6000,
  },
  {
    data: 6300,
  },
  {
    data: 6580,
  },
  {
    data: 6780,
  },
  {
    data: 6680,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 5900,
  },
  {
    data: 5700,
  },
  {
    data: 5500,
  },
  {
    data: 5300,
  },
  {
    data: 5100,
  },
  {
    data: 5090,
  },
  {
    data: 5300,
  },
  {
    data: 5800,
  },
  {
    data: 6000,
  },
  {
    data: 6300,
  },
  {
    data: 6780,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 6500,
  },
  {
    data: 6700,
  },
  {
    data: 7000,
  },
  {
    data: 7300,
  },
  {
    data: 7500,
  },
  {
    data: 7700,
  },
  {
    data: 8090,
  },
  {
    data: 8190,
  },
  {
    data: 7990,
  },

  {
    data: 7700,
  },
  {
    data: 7500,
  },
  {
    data: 7300,
  },
  {
    data: 7000,
  },
  {
    data: 6700,
  },
  {
    data: 6500,
  },
  {
    data: 6300,
  },
  {
    data: 6500,
  },
  {
    data: 6780,
  },
  {
    data: 6300,
  },
  {
    data: 6000,
  },
  {
    data: 5800,
  },

  {
    data: 5490,
  },
  {
    data: 6000,
  },
  {
    data: 8000,
  },
];
export default function Earnings() {

    

    const [currImg, setCurrImg] = useState(0);
  return (
    <Section>
      <div className="col flex">

      <div className="Chartes flex main-padding">

      <div className="left-sec">
        <div>
        <div className='text'>
          <h2>ارباح الشهر

          </h2>
        </div>
        </div>
      </div>

      <div className="right-sec">
      <div className="top">
        <div className="info">
          <h1>$682.5</h1>
          <div className="growth">
            <span>+2.45%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#ffc107"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      </div>
      </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
.col {
  border-top: solid 1px #ffbc00;
  flex-direction: column;

.Chartes {
  display:flex;
  width:100%;
  height:600px;
  padding:50px 0 !important;
  .left-sec {
    padding-top: 50px;
    padding-bottom: 50px;
    width:50%;
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
    width:30%;
    margin:auto;
}
  }
  .right-sec {
    width:60%;
    padding-left:25px;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  padding: 50px 0px 0px 1px;
  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      h1 {
        padding:12px;
        font-size: 2rem;
        background:#ffc107;
      }
      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        transition: 0.3s ease-in-out;

        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          border:none;
          color: #ffc107;
        }
      }
    }
  }
  .chart {
    height: 70%;
    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
}



  .carousel {
    background-color:#ffbc00;
    width: 100%;
    height: 600px;
    color:white;
}
      .right-sec {
          padding-top: 50px;
          padding-bottom: 50px;
          width:50%;
          height:100%;

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

      .left-sec {
        width:60%;
        margin-left: 25px;
.carouselInner {
    padding:5px;
    height: 100%;
    width: 100%;
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
@media (max-width: 1080px) {
  .col {
    background: #222222;
  flex-direction: column;
  
  .carousel {
    width: 70%;
    height: 460px;
    background-color: #222222;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    .carouselInner {

    border-radius: 10px;
    }
  }
    .Chartes {
    margin-top: 50px !important ;
    margin-bottom: 50px !important;
    border-radius:10px;
      width:70%;
      margin:auto;
    } 
}
  
 .carousel .right-sec .text h2 ,
.Chartes .left-sec .text h2 {
    font-size: 2.5rem !important;
}
    .right-sec {
    .info h1 {
    font-size: 1.8rem;
}
}
}
@media (max-width: 860px) {
  .carousel {
    flex-direction:column;
    height:700px;
    .right-sec {
      height:0;
      width:100%;
      .text {
      width:65% !important;
      margin:unset !important;
       h2 {
        font-size:2.5rem !important ;
      }
    }
      }
    
    .left-sec {
    width: 90%;
    height: 460px;
    margin: auto;
}
      .carouselInner {
        height:100%;
        margin-top: 25px;
      }
    }
  }
}

@media (max-width: 679px) {
  .Chartes  {
    gap: 20px;
    height:520px !important;
    flex-direction:column !important;
    .info h1 {
      font-size: 1.5rem !important;
    }
  }
   .carousel .right-sec {
    padding-top: 0 !important;
    
  }
 .Chartes .left-sec {
  padding-top: 0 !important;
  width:100% !important;
  height:0 !important;
 }
  .carousel .left-sec {
    padding-left:0 !important;
    width:98% !important;
  }
  .carousel .right-sec .text  ,
  .col .Chartes .left-sec .text {
    width: 65% !important;
    margin:unset !important;
 h2 {
    margin-right: 35px !important;
    font-size: 2rem !important;
 }

}
.Chartes {

.right-sec {
    padding:30px !important;
    width: 100%!important ;
  }
}
 }

  

`;