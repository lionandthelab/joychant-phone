import { lazy } from "react";

import RewardContent from "../../content/RewardContent.json";
import FundingContent from "../../content/FundingContent.json";
import DoFundingContent from "../../content/DoFundingContent.json";

const FundingForm = lazy(() => import("../../components/FundingForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Funding = () => {
  return (
    <Container>
      {/* <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="joychantphone_logo.png"
        id="intro"
      /> */}
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
        type="image_right"
        title={""}
        content={""}
        icon="dp5.png"
        id="dp5"
      />
      <FundingForm
        title={DoFundingContent.title}
        content={DoFundingContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Funding;
