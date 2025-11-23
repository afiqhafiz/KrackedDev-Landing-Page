import React from "react";
import LandingPage from "./pages/home";
import ChallengePage from "./pages/challenge";

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/challenge",
    element: <ChallengePage />,
  },
];

