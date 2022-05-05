import { colors } from "../public/js/options";

export default function NameBar({ title }) {
  return (
    <>
      <div className="title">{title}</div>
      <style jsx>{`
        .title {
            background-color: rgba(241, 240, 96, 0.13);
            border: solid ${colors.primaryColor};
            border-width: 1px 0px;
            color: ${colors.primaryColorDark};
            font-size: 1.7rem;
            padding: 5px 5px 5px 20px;
        }
      `}</style>
    </>
  );
}
