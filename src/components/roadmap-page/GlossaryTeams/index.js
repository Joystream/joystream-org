import React, { useState } from "react";
import Input from "../../Input";

import "./style.scss";

import TextSlider from "../../TextSlider";
import GlossaryCard from "../../GlossaryCard";

function GlossaryTeams({ glossary, sliderText }) {
  const [searchText, setSearchText] = useState("");
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="GlossaryTeams">
      <div>
        <div className="GlossaryTeams__head__panel">
          <div className="GlossaryTeams__head__panel__title">
            Glossary teams
          </div>
          <div className="GlossaryTeams__head__panel__subtitle">
            You can access, learn and discover all terms related to all projects
            here
          </div>
        </div>
        <div className="GlossaryTeams__search__panel">
          <Input
            className="GlossaryTeams__search__panel__input"
            placeholder="Find interesting words..."
            type="text"
            name="interesting_words"
            required
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>
      </div>
      <div className="GlossaryTeams__body">
        <div className="GlossaryTeams__body__slider">
          <TextSlider
            slides={sliderText}
            slideClassName="GlossaryTeams__body__slider__slide"
          />
          <div className="GlossaryTeams__body__slider__cards">
            {glossary
              .slice(0, showAll ? glossary.length : 4)
              .map((res, index) => {
                return (
                  <GlossaryCard
                    title={res.title}
                    content={res.content}
                    key={index}
                  />
                );
              })}
          </div>
          {showAll ? (
            <></>
          ) : (
            <button
              className="GlossaryTeams__body__slider__button"
              onClick={() => setShowAll(true)}
            >
              Show all Glossary terms ({glossary.length})
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default GlossaryTeams;
