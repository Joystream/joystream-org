import React, { useEffect, useState } from 'react';
import Input from '../../Input';

import './style.scss';
import { Slider } from '../../Slider';
import importAll from '../../../utils/importAll';
import {
  GIT_GLOSSARY_FOLDER,
  GIT_REPOSITY,
  GIT_USER_NAME,
} from '../../../../gitconfig';
import axios from 'axios';
import TextSlider from '../../TextSlider';
import GlossaryCard from '../../GlossaryCard';

const logoSlides = importAll(
  require.context('../../../assets/images/slides/logo', false, /\.png$/)
);

function GlossaryTeams() {
  const [glossary, setGlossary] = useState([]);
  const [sliderText, setSliderText] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://raw.githubusercontent.com/${GIT_USER_NAME}/${GIT_REPOSITY}/main/${GIT_GLOSSARY_FOLDER}/glossary.json`
      );
      setGlossary(response.data);
    };

    fetchData();
  }, []);

  const data = () => glossary.map((data) => data.title.charAt(0));

  useEffect(() => {
    const FristString = data();

    let uniqueArr = FristString.reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);

    setSliderText(uniqueArr);
  }, [data, glossary]);

  console.log(sliderText);

  const [searchText, setSearchText] = useState('');
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
            {glossary.map((res, index) => {
              return (
                <GlossaryCard
                  title={res.title}
                  content={res.content}
                  key={index}
                />
              );
            })}
          </div>
          <button className="GlossaryTeams__body__slider__button">
            Show all Glossary terms ({glossary.length})
          </button>
        </div>
      </div>
    </div>
  );
}

export default GlossaryTeams;
