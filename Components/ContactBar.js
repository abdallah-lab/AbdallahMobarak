import {
  FaWhatsapp,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import Link from "next/link";
import { colors } from "../public/js/options";

export default function ContactBar() {
  return (
    <>
      <div className="contactContainer">
        <span className="contact">Contact Me : </span>
        <span className="icon whatsapp">
          <Link
            className="itag"
            href="https://api.whatsapp.com/send?phone=96181026095"
          >
            <FaWhatsapp />
          </Link>
        </span>
        <span className="icon insta">
          <Link
            className="itag"
            href="https://www.instagram.com/abdallah.mobarak/"
          >
            <FaInstagram />
          </Link>
        </span>
        <span className="icon facebook">
          <Link
            className="itag"
            href="https://www.facebook.com/abdallah.mobarak.3"
          >
            <FaFacebook />
          </Link>
        </span>
        <span className="icon youtube">
          <Link className="itag" href="#">
            <FaYoutube />
          </Link>
        </span>
        <span className="icon twiter">
          <Link className="itag" href="#">
            <FaTwitter />
          </Link>
        </span>
      </div>
      <style jsx>{`
        .contactContainer {
          font-size: 1.6rem;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          padding: 0 0.5rem;
          color: ${colors.primaryColor};
          margin-top: 2rem;
          overflow: auto;
        }
        .contact {
          padding-bottom: 0.5rem;
        }

        .icon {
          padding: 0 0.2rem;
        }
        .whatsapp {
          color: #090;
        }
        .facebook {
          color: #3b5998;
        }
        .youtube {
          color: red;
        }
        .twiter {
          color: #00acee;
        }
        .insta {
          color: #8a3ab9;
        }
      `}</style>
    </>
  );
}
