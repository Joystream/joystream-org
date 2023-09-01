import React, { useCallback, useEffect, useState } from "react";
import Input from "../../Input";

import { ReactComponent as SearchIcon } from "../../../assets/svg/Search.svg";

import "./style.scss";

import TextSlider from "../../TextSlider";
import GlossaryCard from "../../GlossaryCard";
import { Slider } from "../../Slider";

function GlossaryTeams({ glossary, sliderText, cardOnClick }) {
  const [searchText, setSearchText] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [filteredData, setFilteredData] = useState(glossary);

  const textList = sliderText.map((str, index) => {
    return <div key={index}>{str}</div>;
  });

  const filterData = useCallback((search) => {
    const filtered = glossary.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  });

  const onSearchInput = (e) => {
    filterData(e);
    setSearchText(e);
    if (filterData.length === glossary.length) setShowAll(true);
    else setShowAll(false);
  };

  useEffect(() => {
    filterData(searchText);
  }, [glossary]);

  const onSelectCarousel = (e) => {
    filterData(e);
  };

  return (
    <div className="GlossaryTeams">
      <div>
        <div className="GlossaryTeams__head__panel">
          <div className="GlossaryTeams__head__panel__title">
            Glossary terms
          </div>
          <div className="GlossaryTeams__head__panel__subtitle">
            You can access, learn and discover all terms related to all projects
            here
          </div>
        </div>
        <div className="GlossaryTeams__search__panel">
          <div className="GlossaryTeams__search__panel__input">
            <SearchIcon className="GlossaryTeams__search__panel__icon" />
            <Input
              className="GlossaryTeams__search__panel__inputbox"
              placeholder="Find interesting words..."
              type="text"
              name="interesting_words"
              required
              onChange={(e) => onSearchInput(e.target.value)}
              value={searchText}
            />
          </div>
        </div>
      </div>
      <div className="GlossaryTeams__body">
        <div className="GlossaryTeams__body__slider">
          <Slider
            slides={sliderText}
            onclick={onSelectCarousel}
            className="GlossaryTeams__body__slider__body"
            slideClassName="GlossaryTeams__body__slider__slide"
            sliderClassName="GlossaryTeams__body__slider__slider"
          />
          <div className="GlossaryTeams__body__slider__cards">
            {filteredData
              .slice(0, showAll ? glossary.length : 4)
              .map((res, index) => {
                return (
                  <GlossaryCard
                    onclick={() => cardOnClick(index)}
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
