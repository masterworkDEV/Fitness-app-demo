import React from "react";
import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

const AboutPage = () => {
  const { footerState, setFooterState } = useContext(DataContext);
  useEffect(() => {
    setFooterState(false);
  }, [footerState]);
  return (
    <div>
      <span>Available Games</span>
    </div>
  );
};

export default AboutPage;
