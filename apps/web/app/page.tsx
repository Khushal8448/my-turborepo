import { Button } from "@repo/ui/button";
import React from "react";

type Props = {};

const Home: React.FC = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100dvh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button appName="Web app">Hi Boy</Button>
    </div>
  );
};

export default Home;
