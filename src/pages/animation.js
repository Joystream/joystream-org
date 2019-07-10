import React from 'react';

import AnimatedList from '../components/AnimatedList';

const AnimationPage = () => {
  return (
    <div
      style={{
        height: '3000px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <AnimatedList>
        <div style={{ padding: '20px', backgroundColor: 'purple' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at
          aut doloribus expedita inventore, ipsa nostrum officiis quod rerum
          similique tempore unde ut voluptas? Aliquam earum officiis sequi
          soluta voluptate?
        </div>
      </AnimatedList>
      <AnimatedList>
        <div style={{ padding: '20px', backgroundColor: 'pink' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at
          aut doloribus expedita inventore, ipsa nostrum officiis quod rerum
          similique tempore unde ut voluptas? Aliquam earum officiis sequi
          soluta voluptate?
        </div>
      </AnimatedList>
    </div>
  );
};

export default AnimationPage;
