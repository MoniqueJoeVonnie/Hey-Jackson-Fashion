import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import CheapestBooks from "../components/CheapestBooks";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <CheapestBooks />
      <Explore />
    </>
  );
};

export default Home;
