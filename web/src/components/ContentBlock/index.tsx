import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import ImageContentBlock from "./ImageContentBlock";
import ImageLeftContentBlock from "./ImageLeftContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "image_left") return <ImageLeftContentBlock {...props} />;
  if (props.type === "image_right") return <ImageContentBlock {...props} />;
  return null;
};

export default ContentBlock;
