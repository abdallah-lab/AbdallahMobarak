import NameBar from "./NameBar";
import { colors } from "../public/js/options";
import Link from "next/link";
export default function FlexBox({ title, text, folder, number, withlink }) {
  return (
    <>
      <div className="flexContainer">
        <NameBar title={title} />
        <div className="scrollbar">
          {withlink
            ? withlink.map((n) => (
                <Link href={n.link}>
                  <img
                    src={`img/${folder}/${n.img}.png`}
                    alt=""
                    className="img"
                  />
                </Link>
              ))
            : Array.from(Array(number).keys()).map((n) => (
                <img src={`img/${folder}/${n}.png`} alt="" className="img" />
              ))}
          <div className="text">{text}</div>
        </div>
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
        .img {
          padding-right: 1rem;
          height: 9rem;
        }
        .text {
          padding: 1rem;
          width: 14rem;
          font-size: 1.5rem;
          -ms-flex-item-align: center;
          -ms-grid-row-align: center;
          align-self: center;
          text-align: center;
          color: ${colors.primaryColorDark};
        }
      `}</style>
    </>
  );
}
