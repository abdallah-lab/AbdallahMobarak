import { colors } from "../../public/js/options";
import { FaAngleDown } from "react-icons/fa";
import MyBrands from "../../Components/MyBrands";
import Marque from "../../Components/Marque";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="decor down1">
          <img src="/img/decor.png" alt="" className="decorImg" />
        </div>
        <div className="down">
          <FaAngleDown />
        </div>
        <div className="decor rotate">
          <img src="/img/decor.png" alt="" className="decorImg" />
        </div>
        <div className="Btitle">
          <span>Strategic HIS Manager</span>
        </div>
        <div className="line">
          <img src="/img/linee.png" alt="" className="decorImg" />
        </div>
        <div className="describe">
          <span>
            if you need to promote your business you must Contact Me, your job
            will advance in a great strides
          </span>
        </div>
        <div className="decor down2">
          <img src="/img/decor.png" alt="" className="decorImg" />
        </div>
        <MyBrands />
        <Marque />
      </div>
      <style jsx>{`
        .container {
          padding-top: 2rem;
        }
        .decor {
          padding: 0.5rem 2rem;
          width: 90%;
          max-width: 30rem;
          margin: auto;
        }
        .decorImg {
          width: 100%;
        }
        .rotate {
          -webkit-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
          transform: rotate(180deg);
        }
        .line {
          width: 70%;
          margin: auto;
        }
        .down {
          font-size: 2rem;
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
          color: grey;
          margin: auto;
          margin-bottom: 6rem;
        }
        .Btitle {
          font-size: 5rem;
          text-align: center;
          color: rgba(62, 64, 116, 1);
        }

        .describe {
          font-size: 1.1rem;
          text-align: center;
          color: ${colors.primaryColor};
        }

        .down1 {
          margin-bottom: 5rem;
        }
        .down2 {
          margin-bottom: 16rem;
          width: 70vw;
          max-width: 25rem;
        }
        @media only screen and (max-width: 840px) {
          .top_wl {
            width: 100%;
          }
          .Btitle {
            font-size: 3rem;
          }
          .line {
            width: 70%;
          }
        }
        @media only screen and (max-width: 500px) {
          .top_w {
            width: 90%;
          }
          .Btitle {
            font-size: 2.2rem;
          }
          .line {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
}
