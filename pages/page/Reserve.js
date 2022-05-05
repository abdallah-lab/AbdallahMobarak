import { useState, useEffect } from "react";
import { colors } from "../../public/js/options";
import NameBar from "../../Components/NameBar";
import PageTitle from "../../Components/PageTitle";
import Calendar from "../../Components/Calendar";
import { row as mytime } from "../../public/js/mytime";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Link from "next/link";
import {
  TutorialCategory,
  Tutorials as ImportedTutorial
} from "../../public/js/Data";

export default function Reserve() {
  const [tutorials, setTutorials] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTut, setSelectedTut] = useState({});
  const [row, setRow] = useState(mytime);
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedTime, setSelectedTime] = useState([]);

  useEffect(() => {
    var a = 1;
    ImportedTutorial.map((tutorial) => (tutorial.id = a++));
    ImportedTutorial.map((tutorial) => (tutorial.hours = 0));
    setTutorials(ImportedTutorial);
  }, []);

  const setHours = (id, hours) => {
    var prevTut = tutorials.filter((tutorial) => tutorial.hours !== 0);
    const previd = prevTut.length > 0 ? prevTut[0].id : id;

    if (id === previd) {
      prevTut.length > 0
        ? setSelectedTut(prevTut[0])
        : setSelectedTut(tutorials.filter((tutorial) => tutorial.id === id)[0]);
      selectedTut.hours < hours && setOpen(true);
      setTutorials(
        tutorials.map((tutorial) => {
          if (tutorial.id === id) {
            tutorial.hours = hours;
            return tutorial;
          } else {
            return tutorial;
          }
        })
      );
      setSelectedHours(hours / 2);
    } else {
      alert("you can have one couse at a time");
    }
  };
  const setTime = (day, hour) => {
    var newRow = row.filter((r) => r.day === day)[0];
    if (selectedHours > selectedTime.length || newRow[hour].selected === 1) {
      newRow[hour].selected === 1
        ? setSelectedTime(
            selectedTime.filter((obj) => obj !== day + " " + hour)
          )
        : setSelectedTime([...selectedTime, day + " " + hour]);
      newRow = {
        ...newRow,
        [hour]: { ...newRow[hour], selected: newRow[hour].selected ? 0 : 1 }
      };
      setRow(row.map((r) => (r.day === day ? newRow : r)));
    } else {
      alert(
        "You have just reserved " +
          selectedHours * 2 +
          " hours, and each period represents 2 hours"
      );
    }
  };
  return (
    <>
      <PageTitle title={"Reserve Tutoring Time"} />
      <div>
        {TutorialCategory.map((category) => (
          <>
            <NameBar title={category + " Tutorials"} />
            <div className="scrollbar">
              {tutorials
                .filter((tutorial) => category === tutorial.category)
                .map((tutorial) => (
                  <Tutorial setHours={setHours} tutorial={tutorial} />
                ))}
            </div>
          </>
        ))}
      </div>
      {selectedTut.hours ? (
        <div className="cont">
          <div className="reseBar" onClick={() => setOpen(!open)}>
            <div>Reserve Now</div>
            <div className="icon">{open ? <FaAngleDown /> : <FaAngleUp />}</div>
          </div>
          <div className={`reseBody ${open && "open"}`}>
            <div className="coursetext">
              <span className="course">
                <span className="courseName">{selectedTut.name}</span>course
              </span>
              <span className="control">
                <Control tutorial={selectedTut} setHours={setHours} />
              </span>
            </div>
            <div>
              <Calendar row={row} setTime={setTime} />{" "}
            </div>
            {selectedTime.length === selectedHours ? (
              <Link
                href={`https://wa.me/+96181026095?text=${
                  "I need " +
                  selectedTut.hours +
                  " hours of " +
                  selectedTut.name +
                  " on " +
                  selectedTime
                }`}
              >
                <div className="btn">Send</div>
              </Link>
            ) : (
              <div className="note">
                Each period means two hours, select one for every 2 hours
              </div>
            )}
          </div>
        </div>
      ) : null}
      <style jsx>{`
        .scrollbar {
          width: 100%;
          overflow: auto;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          margin-bottom: 1rem;
          padding: 0.2rem 1rem;
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
        .cont {
          width: 100%;
          position: fixed;
          bottom: 0;
          margin-left: auto;
          margin-right: auto;
          max-height: 80%;
          max-width: 450px;
          left: 50%;
          -webkit-transform: translate(-50%, 0);
          -ms-transform: translate(-50%, 0);
          transform: translate(-50%, 0);
          z-index: 10;
        }
        .reseBar {
          width: 100%;
          background: rgba(62, 64, 116, 1);
          font-size: 1.5rem;
          color: white;
          padding: 0.2rem;
          text-align: center;
          border-radius: 0.5rem 0.5rem 0 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .reseBody {
          height: 0rem;
          background: white;
          transition: height 1s;
          border: 1px solid ${colors.primaryColor};
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
        .open {
          padding: 1rem;
          height: 26rem;
        }
        .icon {
          padding: 0 0.3rem;
          margin-top: 0.2rem;
        }
        .coursetext {
          border: solid ${colors.secondaryColor};
          border-width: 1px 0;
          padding: 0.2rem;
          color: grey;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          font-size: 1rem;
        }

        .course {
          padding-right: 1rem;
          -webkit-box-flex: 1;
          -ms-flex: 1 1 100%;
          flex: 1 1 100%;
          font-size: 1rem;
        }
        .courseName {
          color: ${colors.primaryColorDark};
          padding: 0 0.2rem;
          font-size: 1.2rem;
        }

        .control {
          width: 8rem;
          -webkit-box-flex: 1;
          -ms-flex: 1 1 50%;
          flex: 1 1 50%;
        }

        .btn {
          font-size: 1.2rem;
          background: ${colors.primaryColorDark};
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
          color: white;
          padding: 0.3rem 1.3rem;
          margin: auto;
          border-radius: 0.3rem;
        }
        .disabled {
          background: grey;
        }
        .note {
          color: grey;
        }
      `}</style>
    </>
  );
}

const Tutorial = ({ tutorial, setHours }) => {
  return (
    <>
      <div className="tutorial">
        <img
          src={`img/reserve/${tutorial.img}.png`}
          alt={tutorial.img}
          className="img"
        />
        <Control tutorial={tutorial} setHours={setHours} />
      </div>
      <style jsx>{`
        .img {
          height: 9rem;
        }
        .tutorial {
          border: 1px solid black;
          padding: 0.3rem;
          border-radius: 0.3rem;
          margin: 0.5rem;
        }
      `}</style>
    </>
  );
};
const Control = ({ tutorial, setHours }) => {
  return (
    <>
      {tutorial.hours === 0 ? (
        <div
          className="tutorialbtn"
          onClick={() => setHours(tutorial.id, tutorial.hours + 2)}
        >
          Reserve
        </div>
      ) : (
        <div className="tutorialbtns">
          <div
            className="plus"
            onClick={() => setHours(tutorial.id, tutorial.hours + 2)}
          >
            +
          </div>

          <div className="hours">{tutorial.hours}</div>

          <div
            className="min"
            onClick={() => setHours(tutorial.id, tutorial.hours - 2)}
          >
            -
          </div>
        </div>
      )}
      <style jsx>{`
        .tutorialbtn {
          font-size: 1.2rem;
          color: white;
          border-radius: 0.3rem;
          padding: 0.3rem;
          background: ${colors.primaryColorDark};
          text-align: center;
        }

        .tutorialbtn:hover {
          cursor: pointer;
        }

        .tutorialbtns {
          font-size: 1.8rem;
          font-width: bold;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .plus,
        .min {
          color: white;
          border-radius: 5rem;
          height: 1.6rem;
          width: 1.6rem;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -ms-flex-item-align: center;
          align-self: center;
        }

        .plus {
          background: ${colors.primaryColorDark};
        }

        .min {
          background: grey;
        }

        .hours::after {
          content: " hours";
          font-size: 0.8rem;
        }
      `}</style>
    </>
  );
};
