import React from 'react';
import FAQ from '../../components/FAQ';

const Info = props => {
  // most roles only have a head with text
  const { role, text, faq, md } = props;
  return (
    <>
      <h1>{role}</h1>
      <div>{text}</div>
      <Details markdown={md} />
      <Questions faq={faq} />
    </>
  );
};

export default Info;

const Questions = props => {
  const { faq } = props;
  if (!faq) return <div />;
  return <FAQ faq={faq} />;
};

const Details = props => {
  const { markdow } = props;
  if (!markdown) return <div />;
  return <Markdown plugins={[gfm]} children={markdown} />;
};
