import FlexBox from "./FlexBox";
import { myBrands } from "../public/js/Data";

export default function MyBrands() {
  return (
    <>
      <FlexBox
        title={"My Brands : "}
        folder={"mybrands"}
        withlink={myBrands}
        text={"Every brand means a life .."}
      />
    </>
  );
}
