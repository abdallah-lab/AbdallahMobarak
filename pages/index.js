import { useEffect } from "react";
import { useRouter } from "next/router";
export default function IndexPage() {
  const Router = useRouter();
  useEffect(() => {
    Router.push("./Home");
  });
  return <></>;
}
