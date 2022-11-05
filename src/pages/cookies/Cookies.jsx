import React from "react";
import Sidebar from "../../components/sidebar/SidebarCol";
import Navbar from "../../components/navbar/Navbar";
import PageTitle from "../../components/pageTitle/PageTitle";
import { CookieCard } from "../../components/Card/Card";

import "./cookies.css";

const Cookies = () => {
  return (
    <div className="cookies">
      <Sidebar />
      <div className="cookiesContainer">
        <Navbar />
        <div className="content">
          <PageTitle
            title="Facebook Cookie Verification"
            description="Description here"
          />

          <CookieCard />
        </div>
      </div>
    </div>
  );
};

export default Cookies;
