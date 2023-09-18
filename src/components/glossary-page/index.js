import React, { useEffect } from "react";

import GlossaryHead from "./Glosaary_head";
import GlossaryBody from "./Glossary_body";

import "./style.scss";

const Glossary = ({ data, headClick, cardSelect }) => {
  if (!data) return <div className="Glossary">Loading...</div>;
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  return (
    <div className="Glossary">
      <GlossaryHead head={data.title} onclick={headClick} />
      <GlossaryBody data={data} selectCard={cardSelect} />
    </div>
  );
};

export default Glossary;
