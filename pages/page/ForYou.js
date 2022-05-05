import { useState } from "react";
import { colors } from "../../public/js/options";
import PageTitle from "../../Components/PageTitle";
import NameBar from "../../Components/NameBar";
import Link from "next/link";
import {
  books,
  links,
  libraryCategory,
  libraryList
} from "../../public/js/forYou";
import { FaBook, FaPaperclip } from "react-icons/fa";
export default function ForYou() {
  return (
    <>
      <PageTitle title={"Many Important Things For You"} />
      <NameBar title={"Important books for you :"} />
      <div className="scrollbar">
        {books.map((book) => (
          <div className="book">
            <Link href={book.link}>
              <img src={`/img/foryou/${book.img}`} alt="" className="img" />
            </Link>
          </div>
        ))}
      </div>
      <NameBar title={"Library for you :"} />
      <div>
        {libraryCategory.map((category) => (
          <File category={category} />
        ))}
      </div>
      <NameBar title={"Links for you :"} />
      <div className="scrollbar">
        {links.map((link) => (
          <div className="link">
            <Link href={link.link}>
              <img src={`/img/foryou/${link.img}`} alt="" className="img" />
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .flexContainer {
          margin: 0.5rem 0rem;
        }
        .scrollbar {
          width: 100%;
          overflow-x: scroll;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-flow: row;
          flex-flow: row;
          padding: 1rem;
        }
        .scrollbar::-webkit-scrollbar-track {
          webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          background-color: #ffffff;
        }
        .scrollbar::-webkit-scrollbar {
          height: 5px;
          width: 5px;
          background-color: #f5f5f5;
        }
        .scrollbar::-webkit-scrollbar-thumb {
          border-radius: 10px;
          webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          background-color: #f1f060;
        }
        .book {
          border: 1px solid rgba(101, 103, 138, 1);
          border-radius: 1.2rem;
          width: 12rem;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: 16rem;
          margin: 0.3rem;
        }
        .book img {
          border-radius: 20px;
          width: 100%;
        }

        .link {
          border: 1px solid rgba(101, 103, 138, 1);
          border-radius: 1.2rem;
          width: 12rem;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: 12rem;
          margin: 0.3rem;
        }
        .link img {
          border-radius: 20px;
          width: 100%;
        }
      `}</style>
    </>
  );
}
const File = ({ category }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <div className="libraryTitle" onClick={() => setHidden(!hidden)}>
        <span className="icon">
          <FaBook />
        </span>
        {category}
      </div>
      {!hidden && (
        <div>
          {libraryList
            .filter((file) => file.category === category)
            .map((file) => (
              <Link href={file.link}>
                <div className="file">
                  <span className="icon">
                    <FaPaperclip />
                  </span>
                  {file.Title}
                </div>
              </Link>
            ))}
        </div>
      )}
      <style jsx>{`
        .libraryTitle {
          background-color: rgba(252, 252, 252, 1);
          color: ${colors.primaryColorDark};
          border: 1px solid rgba(101, 103, 138, 1);
          border-width: 1px 0px 1px 0px;
          font-size: 25px;
          padding: 5px 5px 5px 25px;
          margin: 5px 0px 5px 0px;
          cursor: pointer;
        }

        .file {
          color: rgba(62, 64, 116, 1);
          font-family: asap;
          font-size: 20px;
          padding: 5px 5px 5px 20px;
          margin: 0px 20px 0px 20px;
          border: solid rgba(101, 103, 138, 1);
          border-width: 0px 0px 0.5px 0.5px;
        }
        .icon {
          margin: auto 0.2rem;
        }
      `}</style>
    </>
  );
};
