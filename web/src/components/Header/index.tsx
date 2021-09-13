import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { useHistory } from "react-router-dom";

const Header = ({ t }: any) => {
  const history = useHistory();
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        {/* <CustomNavLinkSmall onClick={() => history.push("/")}>
          <Span>{t("소개")}</Span>
        </CustomNavLinkSmall> */}
        {/* <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span>{t("사전예약")}</Span>
        </CustomNavLinkSmall> */}
        <CustomNavLinkSmall 
          style={{ width: "100px" }}
          onClick={() => history.push("/funding")}>
          <Span>
            <Button>{t("펀딩하기")}</Button>
          </Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "100px" }}
          onClick={() => history.push("/")}
        >
          <Span>
            <Button color="white">{t("사전예약")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="center">
          {/* <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="joychantphone_simple_logo.png" width="238px" height="64px" />
          </LogoContainer> */}
          <NotHidden>
            <MenuItem />
          </NotHidden>
          {/* <Burger onClick={showDrawer}>
            <Outline />
          </Burger> */}
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>메뉴</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
