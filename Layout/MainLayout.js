import Head from "../Components/Head";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function MainLayout({ title, children }) {
  return (
    <>
      <Head title={title} />
      <body>
        <Header />
        <NavBar title={title} />
        <main>{children}</main>
        <Footer />
      </body>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            text-decoration: unset;
            outline: none;
            -webkit-tap-highlight-color: transparent;
            -ms-overflow-style: none;
          }
          body {
            width: 100vw;
          }
          main {
            min-height: 40vh;
            width: 100vw;
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
}
