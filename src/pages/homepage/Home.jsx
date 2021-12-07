import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-9">
          <Posts />
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
