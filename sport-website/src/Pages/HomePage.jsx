import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import Aside from "../Components/Aside";
import Content from "../Components/Content";

const HomePage = () => {
  const { footerState, setFooterState } = useContext(DataContext);
  useEffect(() => {
    setFooterState(true);
  }, [footerState]);
  return (
    <>
      <main className="home-page">
        <Aside />
        <Content />
      </main>
    </>
  );
};

export default HomePage;
