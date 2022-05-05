import { colors } from "../../public/js/options";
import { ListofAreas, skills } from "../../public/js/Data";
import FlexBox from "../../Components/FlexBox";
import MyBrands from "../../Components/MyBrands";

export default function AboutMe() {
  return (
    <>
      <div className="container">
        <div className="part">
          <div className="title">About Me</div>
          <div className="about_par">
            <p>
              &nbsp;&nbsp;Hi, This is Abdallah Mobarak, I'm Lebanese national.
              I'm very glad you visit my web page, I'm a Biomedical engineer
              (Isfahan University), HealthCare IT Master (Tehran University).
              Design is my true passion in the life, and I love creating new
              things.
            </p>
            <p>
              Whether you have a project or you need a website and uniform style
              for your business, I am an excellent choice for you. I specialize
              in all of the following areas:
            </p>
            {ListofAreas.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <p>
              To me cooperation and group-work is the best way to have a success
              project, it's easy to contact me on my social media or on
              whatsapp.
            </p>
          </div>
        </div>

        <div className="part">
          <div className="title">My Skills</div>
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="s_title">{skill.title}</div>
              <div className="skillContainer">
                <div className="skill" style={{ width: `${skill.percent}` }}>
                  {skill.percent}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MyBrands />
      <FlexBox
        title={"I Use : "}
        folder={"iuse"}
        number={32}
        text={"& much more ..."}
      />

      <style jsx>{`
        .container {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          padding: 1.2rem 0;
        }
        .part {
          padding: 1.2rem;
          text-align: justify;
          margin: 2%;
          border: 1px solid ${colors.secondaryColor};
          border-radius: 10px;
          background-color: white;
          -webkit-box-shadow: 2px 2px 10px grey;
          box-shadow: 2px 2px 10px grey;
          height: -webkit-fit-content;
          height: -moz-fit-content;
          height: fit-content;
          -webkit-box-flex: 1;
          -ms-flex: 1 1 16rem;
          flex: 1 1 16rem;
        }
        p {
          padding: 0.8rem 0;
        }
        .title {
          font-size: 3rem;
          font-family: alice;
          color: ${colors.primaryColor};
          margin-bottom: 1.3rem;
        }

        .about_par {
          color: ${colors.primaryColor};
          font-size: 1.2rem;
          font-family: "Josefin Slab";
          line-height: 2rem;
          padding: 0.6rem;
        }

        .skillContainer {
          width: 100%;
          background-color: #ddd;
          margin-bottom: 3%;
        }

        .skill {
          font-size: 1.2em;
          text-align: right;
          padding-right: 20px;
          line-height: 35px;
          color: rgba(241, 240, 96, 1);
          background-color: rgba(151, 152, 179, 1);
          border: 1px solid rgba(241, 240, 96, 1);
        }

        .s_title {
          color: ${colors.primaryColor};
          font-size: 1.5em;
          font-family: "Josefin Slab";
        }
      `}</style>
    </>
  );
}
