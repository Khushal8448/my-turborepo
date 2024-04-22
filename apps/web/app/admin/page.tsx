import React from "react";
import { Admin } from "@repo/ui/admin";

const page = () => {
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
      <Admin />
    </div>
  );
};

export default page;
