import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PlayoffBracket from "../components/Playoff/PlayoffBracket";
function PostSeason() {
  return (
    <>
      <NavBar />
      <div>PostSeason</div>
      <PlayoffBracket />
      <Footer />
    </>
  );
}

export default PostSeason;
