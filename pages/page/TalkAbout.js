import { useState } from "react";
import { talkAbout } from "../../public/js/talkAbout";
import { colors } from "../../public/js/options";
import { FaCalendarCheck, FaSitemap } from "react-icons/fa";
import PageTitle from "../../Components/PageTitle";

export default function TalkAbout() {
  const [search, setSearch] = useState("");
  return (
    <>
      <PageTitle title={"We can talk about"} />
      <div>
        <div className="search">
          <input
            placeholder="Search"
            value={search}
            className="searchInput"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {talkAbout
          .filter((talk) => {
            return talk.title.toLowerCase().includes(search);
          })
          .map((talk, index) => (
            <TalkBox key={index} talk={talk} />
          ))}
      </div>
      <style jsx>{`
        .search {
          padding: 2rem;
        }
        .searchInput {
          font-size: 1.2rem;
          padding: 0.3rem 0.7rem;
          min-width: 100%;
          max-width: 100%;
        }
      `}</style>
    </>
  );
}
const TalkBox = ({ talk }) => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  return (
    <>
      <div className="talkBox">
        <div className="talkTitle">{talk.title}</div>
        <div className="talkDescription">
          <div className="cate">
            <span className="icon">
              <FaSitemap />
            </span>
            Category: {talk.category}
          </div>
          <div className="date">
            <span className="icon">
              <FaCalendarCheck />
            </span>
            Date: {talk.Date}
          </div>
        </div>
        {commentList.length > 0 && (
          <div className="commentList">
            {commentList.map((comment) => (
              <div className="commentListItem">{comment}</div>
            ))}
          </div>
        )}
        <div className="comment">
          <input
            className="commentInput"
            value={comment}
            placeholder="comment"
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13 && comment.length > 0) {
                setCommentList([...commentList, comment]);
                setComment("");
              }
            }}
          />
        </div>
      </div>
      <style jsx>{`
        .talkBox {
          border: 1px solid rgba(148, 148, 148, 0.88);
          border-width: 1px 0px 1px 0px;
          background-color: rgba(241, 240, 96, 0.04);
          padding: 2% 3%;
          margin-bottom: 1.6rem;
        }
        .talkTitle {
          color: rgba(101, 103, 138, 1);
          font-size: 1.4rem;
          text-indent: 1rem;
          text-align: justify;
          letter-spacing: 2px;
        }
        .talkDescription {
          font-size: 0.8rem;
          color: rgba(148, 148, 148, 1);
          padding: 0.5rem 1rem;
          letter-spacing: 1px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
        }
        .comment {
          padding: 0.5rem;
          padding-bottom: 0px;
        }
        .commentInput {
          font-size: 1rem;
          padding: 0.3rem 0.7rem;
          min-width: 100%;
          max-width: 100%;
        }
        .commentList {
          margin: 0 0.5rem;
          background: white;
          color: ${colors.primaryColorDark};
          border: 1px solid lightgrey;
        }
        .commentListItem {
          padding: 0.5rem;
          border-bottom: 1px solid lightgrey;
        }

        .commentInput::placeholder {
          color: lightgrey;
        }

        .icon {
          padding: 0 0.5rem;
        }

        @media only screen and (min-width: 800px) {
          .comment {
            padding: 0.5rem 20rem;
            padding-left: 1rem;
            padding-bottom: 0px;
          }
        }
      `}</style>
    </>
  );
};
