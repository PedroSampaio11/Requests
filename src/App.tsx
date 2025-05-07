import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Main } from "./Components/Main";
import { PageContainer } from "./Components/PageContainer";
export const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <PageContainer>
      <Main />
    </PageContainer>
  );
};
