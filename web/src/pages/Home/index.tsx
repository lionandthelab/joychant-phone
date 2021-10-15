import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      {/* <ScrollToTop /> */}
      <ContentBlock
        type="image_left"
        title={""}
        content={""}
        icon="dp1.png"
        id="dp1"
      />
      <ContentBlock
        type="image_right"
        title={""}
        content={""}
        icon="dp2.png"
        id="dp2"
      />
      <ContentBlock
        type="image_left"
        title={""}
        content={""}
        icon="dp3.png"
        id="dp3"
      />
      <ContentBlock
        type="image_right"
        title={""}
        content={""}
        icon="dp4.png"
        id="dp4"
      />
      <ContentBlock
        type="image_left"
        title={""}
        content={""}
        icon="dp5.png"
        id="dp5"
      />
      {/* <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="joychantphone_logo.png"
        id="intro"
      /> */}
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
      {/* <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="joychantphone_intro.png"
        id="about"
      /> */}
      {/* <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
