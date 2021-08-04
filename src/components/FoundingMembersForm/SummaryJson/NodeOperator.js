import React, { useState } from 'react';
import cn from 'classnames';

import { ArrowButton } from '../../../pages/founding-members';

const NodeOperator = ({ setJsonData, summaryType, t }) => {
  const [nodeName, setNodeName] = useState('');

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        Node Operator <span style={{ color: '#FF3861FF' }}>*</span>
      </h3>
      <input
        className="FoundingMembersFormPage__form__input margin-bottom-M"
        placeholder="The name of your node.."
        value={nodeName}
        onChange={e => setNodeName(e.target.value)}
      />
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button', {
          'FoundingMembersFormPage__form__button--inactive': !nodeName,
        })}
        text={t('foundingMembers.general.next')}
        onClick={e => {
          if (nodeName) {
            setJsonData(prev => ({ ...prev, nodeName }));
          }
        }}
      />
    </>
  );
};

export default NodeOperator;
