import React, { useState } from 'react';

import { ArrowButton } from '../../../pages/founding-members';

const NodeOperator = ({ setJsonData, setupData, t }) => {
  const [nodeName, setNodeName] = useState('');

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle FoundingMembersFormPage__form__input-title-mobile  margin-bottom-XS">
        Node Operator
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="The name of your node.."
        value={nodeName}
        onChange={e => setNodeName(e.target.value)}
      />
      <ArrowButton
        className="FoundingMembersFormPage__form__button"
        text={t('foundingMembers.general.next')}
        onClick={e => {
          if(nodeName){
            setJsonData(prev => [...prev, { ...setupData, nodeName }]);
          }
        }}
      />
    </>
  );
};

export default NodeOperator;
