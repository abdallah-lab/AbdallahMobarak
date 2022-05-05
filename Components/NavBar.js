import { useEffect, useState } from "react";
import Link from "next/link";
import { colors } from "../public/js/options";

export default function NavBar({ title }) {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setHidden(true);
  }, [title]);
  const nav = [
    { title: "Home" },
    { title: "About Me" },
    { title: "My Work" },
    { title: "For You" },
    { title: "Reserve" },
    { title: "Talk About" },
    { title: "Contact Me" }
  ];
  return (
    <>
      <div className="nvContainer">
        <div onClick={() => setHidden(!hidden)} className="nv">
          <i className="fa fa-2x fa-navicon"></i>
        </div>
        <div className="navbar">
          <ul className={`max ${hidden && "displayNone"}`}>
            {nav.map((obj) => {
              return (
                <Link href={`/${obj.title}`}>
                  <li className={`navli ${title === obj.title && "active"}`}>
                    {obj.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .nvContainer {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
          z-index: 5;
        }
        .nv {
          background-color: ${colors.grey};
          padding: 0.4rem 0.8rem;
          color: white;
          font-size: 1rem;
          display: none;
          border-bottom: 1px solid ${colors.greyDark};
        }
        .nv i {
          padding: 0px 5px 0px 5px;
          border: 1px solid #bbb;
          border-radius: 5px;
          -webkit-box-shadow: 1px 1px 5px grey;
          box-shadow: 1px 1px 5px grey;
          cursor: pointer;
        }
        .navbar {
          border-top: 1px solid ${colors.secondaryColor};
          border-bottom: 2px solid ${colors.secondaryColor};
          background-color: ${colors.grey};
          margin: auto;
          font-size: 1.3rem;
          z-index: 1;
        }
        .max {
          width: 100%;
          margin: auto;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          list-style-type: none;
          padding: 0px;
          overflow: auto;
          color: white;
        }
        .navli {
          -webkit-box-flex: 1;
          -ms-flex: 1 1 100%;
          flex: 1 1 100%;
          margin: 1px;
          padding: 0.5rem 1rem;
          overflow-wrap: unset;
          text-align: center;
        }
        .navli a {
          display: block;
          text-align: center;
          overflow-wrap: unset;
        }

        .active {
          color: white;
          background-color: ${colors.primaryColor};
        }
        @media only screen and (max-width: 900px) {
          .navbar {
            border: 0px;
          }
          .nv {
            display: block;
          }
          .navli {
            display: block;
            width: 100%;
            margin: auto;
            float: none;
          }
          .navli a {
            display: block;
            color: white;
            width: 100%;
          }
          .max {
            display: block;
          }
          .displayNone {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
