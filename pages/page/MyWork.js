import { useState } from "react";
import { myWork, myWorkCategory } from "../../public/js/myWork";
import NameBar from "../../Components/NameBar";
import { colors } from "../../public/js/options";
import { FaGlobeAmericas, FaFilePdf } from "react-icons/fa";
import Link from "next/link";
import PageTitle from "../../Components/PageTitle";
export default function MyWork() {
  return (
    <>
      <PageTitle title={"My Work"} />
      <div>
        {myWorkCategory.map((category) => {
          return (
            <div className="category">
              <NameBar title={category + " :"} />
              <div className="workBoxContainer">
                {myWork
                  .filter((work) => work.category === category)
                  .map((work) => (
                    <Box work={work} />
                  ))}
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .category {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }
        .workBoxContainer {
          width: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          padding: 1rem 0.2rem;
          -webkit-box-pack: space-evenly;
          -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
        }
      `}</style>
    </>
  );
}
const Box = ({ work }) => {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <div className="workBox">
        <div onClick={() => setFocus(!focus)}>
          <div className="workImg">
            <img src={`img/mywork/${work.img}.png`} alt={work.img} />
          </div>
          <div className="workTitle">{work.title}</div>
        </div>
        {focus && (
          <>
            <div className="workbody">
              <div>{work.body}</div>
              <div>
                {work.list && work.list.map((item) => <li>{item}</li>)}
                {work.dImg && (
                  <div className="dImg">
                    <img src={`/img/mywork/${work.dImg}.png`} alt={work.dImg} />
                  </div>
                )}
              </div>
            </div>
            {work.link && (
              <Link href={work.link}>
                <div className="linktext">
                  <span className="icon">
                    {work.icon === "web" && <FaGlobeAmericas />}
                    {work.icon === "pdf" && <FaFilePdf />}
                  </span>
                  <span className="text">{work.linkText}</span>
                </div>
              </Link>
            )}
          </>
        )}
        <div></div>
      </div>
      <style jsx>{`
        .workBox {
          margin: 0.5rem;
          padding: 10px;
          border: 1px solid ${colors.primaryColorDark};
          border-radius: 10px;
          -webkit-box-shadow: 2px 2px 10px lightgrey;
          box-shadow: 2px 2px 10px lightgrey;
          cursor: pointer;
          border-color: ${colors.secondaryColor};
          flex: 0 1 ${focus ? "64%" : "31%"};
          -webkit-box-flex: 0;
          -ms-flex: 0 1 ${focus ? "64%" : "31%"};
        }
        .workBox:hover {
          border-color: rgba(101, 103, 138, 1);
        }
        .workImg {
          width: 10rem;
          height: 10rem;
          margin: auto;
          margin-top: 20px;
        }
        .workImg img {
          width: 10rem;
        }
        .workTitle {
          padding-top: 0.5rem;
          text-align: center;
          color: ${colors.primaryColorDark};
          font-size: 1.6rem;
        }
        .workbody {
          padding: 0.8rem 0.2rem;
          color: ${colors.primaryColorDark};
          font-size: 1.1rem;
          line-height: 1.8rem;
          text-align: justify;
        }

        .linktext {
          color: grey;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .text {
          padding-bottom: 0.2rem;
        }
        .icon {
          padding: 0 0.5rem;
        }
        .dImg {
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
          max-width: 100%;
          margin: auto;
        }
        .dImg img {
          max-width: 100%;
        }
        @media only screen and (max-width: 900px) {
          .workBox {
            -webkit-box-flex: 0;
            -ms-flex: 0 1 46%;
            flex: 0 1 46%;
          }
        }
        @media only screen and (max-width: 500px) {
          .workBox {
            -webkit-box-flex: 0;
            -ms-flex: 0 1 100%;
            flex: 0 1 100%;
          }
        }
      `}</style>
    </>
  );
};
