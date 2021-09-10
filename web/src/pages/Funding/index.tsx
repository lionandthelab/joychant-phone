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
        type="image"
        title={FundingContent.title}
        content={FundingContent.text}
        icon="fund.png"
        id="product"
      />
      <ContentBlock
        type="image"
        title={RewardContent.title}
        content={RewardContent.text}
        icon="reward.png"
        id="product"
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
