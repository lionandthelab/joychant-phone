import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import ImageContentBlock from "./ImageContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "image") return <ImageContentBlock {...props} />;
  return null;
};

export default ContentBlock;
