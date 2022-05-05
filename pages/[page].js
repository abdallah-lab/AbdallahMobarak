import { useRouter } from "next/router";
import MainLayout from "../Layout/MainLayout";
import Home from "./page/Home";
import AboutMe from "./page/AboutMe";
import MyWork from "./page/MyWork";
import ForYou from "./page/ForYou";
import Reserve from "./page/Reserve";
import TalkAbout from "./page/TalkAbout";
import ContactMe from "./page/ContactMe";
import CommingSoon from "./page/CommingSoon";

export default function Page() {
  const router = useRouter();
  const { page } = router.query;
  const selectedPage = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "About Me":
        return <AboutMe />;
      case "My Work":
        return <MyWork />;
      case "For You":
        return <ForYou />;
      case "Reserve":
        return <Reserve />;
      case "Talk About":
        return <TalkAbout />;
      case "Contact Me":
        return <ContactMe />;
      case "commingSoon":
        return <CommingSoon />;
      default:
        return;
    }
  };
  return <MainLayout title={page} children={selectedPage()} />;
}
