import React from "react";

import Profile from "../../components/Profile/Profile";
import AboutPlan from "../../components/AboutPlan/AboutPlan";
import BackLink from "../../components/BackLink/BackLink";

function Management() {
  return (
    <main>
      <BackLink text="Назад" link="/" />
      <Profile/>
      <AboutPlan/>
    </main>
  );
}

export default Management;
