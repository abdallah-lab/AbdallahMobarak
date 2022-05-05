import { talkAbout } from "../public/js/talkAbout";

export default function Marque() {
  return (
    <>
      <div className="marquee">
        <marquee>
          {talkAbout.map((talk) => (
            <>
              <span>&nbsp;&nbsp; |&nbsp;</span>
              <img src="/img/icon.png" alt="" className="img" />
              <span> | &nbsp;&nbsp; Talk about: {talk.title}</span>
            </>
          ))}
        </marquee>
      </div>

      <style jsx>{`
        .img {
          height: 1.4rem;
        }
        .marquee {
          position: fixed;
          background: rgba(251, 251, 216, 0.98);
          color: rgba(101, 103, 138, 1);
          bottom: 4.6rem;
          font-size: 1.3rem;
          height: 2.6rem;
          line-height: 2.6rem;
          width: 100%;
          border: 1px solid rgba(211, 192, 8, 1);
          border-width: 1px 0px 1px 0px;
        }
        .marquee::after {
          content: "";
          clear: both;
          display: table;
        }
      `}</style>
    </>
  );
}
