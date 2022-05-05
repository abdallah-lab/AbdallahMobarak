import Bee from "../../Components/Bee";
import { colors } from "../../public/js/options";

export default function ContactMe() {
  return (
    <>
      <div className="call">
        <div>Call me on +96170097533</div>
        <div>Whatsapp me on +96181026095</div>
      </div>
      <Bee />
      <style jsx>{`
        .call {
          padding: 1rem;
          color: ${colors.primaryColor};
        }
      `}</style>
    </>
  );
}
