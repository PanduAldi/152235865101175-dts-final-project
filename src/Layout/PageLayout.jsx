import React from "react";
import { ThemeProvider } from "react-bootstrap";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

const PageLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <HeaderComponent />
        {children}
        <FooterComponent />
      </ThemeProvider>
    </>
  );
};

export default PageLayout;
