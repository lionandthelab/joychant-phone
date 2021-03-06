import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate, "http://ec2-54-180-187-155.ap-northeast-2.compute.amazonaws.com:4000/funding"
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="center" align="middle">
        {/* <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col> */}
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Row>
                  <Input
                    type="text"
                    name="name"
                    label="이름"
                    placeholder="이름을 입력해주세요"
                    value={values.name || ""}
                    onChange={handleChange}
                  />
                  <ValidationType type="name" />
                </Row>
                <Input
                  type="text"
                  label="연락처"
                  name="cellphone"
                  placeholder="전화번호를 입력해주세요"
                  value={values.cellphone || ""}
                  onChange={handleChange}
                />
                <ValidationType type="cellphone" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  label="금액"
                  name="amount"
                  placeholder="원하시는 금액을 입력해주세요"
                  value={values.amount || ""}
                  onChange={handleChange}
                />
                <ValidationType type="amount" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("신청하기")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
