import React from "react";
import Script from "next/script";

const Home = () => {
  return (
    <div className="flex justify-center items-start">
      <Script src ="typewriter.js" strategy="lazyOnload"></Script>
      <h1 id="typewriter" className="text-3xl font-bold p-5 text-white"></h1>
    </div>
  );
};

export default Home;
