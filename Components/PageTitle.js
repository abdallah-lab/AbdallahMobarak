import { colors } from "../public/js/options";

export default function PageTitle({ title }) {
  return (
    <>
      <div className="title">{title}</div>

      <style jsx>{`
        .title {
          color: ${colors.primaryColorDark};
          font-size: 2.2rem;
          text-align: center;
          padding: 1rem 0.5rem;
        }
      `}</style>
    </>
  );
}
