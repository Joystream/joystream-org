import React, { useState } from 'react';

const useImageFallback = (imageList, placeholder) => {
  const [imgData, setImgData] = useState({
    src: imageList?.length === 0 ? '' : imageList[0],
    index: 0,
  });

  const onError = e => {
    console.log('Error happened!');

    if (imageList === undefined || imageList.length === 0 || imgData.index === imageList.length - 1) {
      if (placeholder) {
        e.currentTarget.src = placeholder;
      }

      return;
    }

    setImgData(prev => ({
      src: imageList[prev.index + 1],
      index: prev.index + 1,
    }));
  };

  return [imgData.src, onError];
};

export default useImageFallback;
