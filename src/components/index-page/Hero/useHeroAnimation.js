import React, { useEffect, useRef } from 'react';

import sourceImages from './images';
import StepsImage1 from '../../../assets/images/landing/hero/main-sequence-layer1.webp';
import StepsImage2 from '../../../assets/images/landing/hero/main-sequence-layer2.webp';
import StepsImage3 from '../../../assets/images/landing/hero/main-sequence-layer3.webp';
import StepsImage4 from '../../../assets/images/landing/hero/main-sequence-layer4.webp';

const ILLUSTRATION_CANVAS_WIDTH = 1080;
const ILLUSTRATION_CANVAS_HEIGHT = 656;

const drawImage = (canvasRef, image, drawOver = false, options) => {
  const context = canvasRef.current.getContext('2d');
  const img = new Image();
  img.src = image;
  img.onload = () => {
    if(!drawOver)
      context.clearRect(0, 0, ILLUSTRATION_CANVAS_WIDTH, ILLUSTRATION_CANVAS_HEIGHT);

    if(options?.toAnimate) {
      context.drawImage(img, 0, options.yOffset, ILLUSTRATION_CANVAS_WIDTH, options.heightToRender, 0, options.yOffset, ILLUSTRATION_CANVAS_WIDTH, options.heightToRender);
    } else {
      context.drawImage(img, 0, 0);
    }
  };
};

const INITIAL_ANIMATION_FRACTION = 0.175;
const STEPS_ANIMATION_FRACTION = 0.13;
const STEPS_ANIMATION_WAIT_FRACTION = 0.05;
const FINAL_ANIMATION_FRACTION = 0.175;
const STEPS_ANIMATION_FRAMES = [StepsImage1, StepsImage2, StepsImage3, StepsImage4, sourceImages[sourceImages.length - 1]];

// HELPER FUNCTIONS
const calculateFrameIndex = (scrollFraction, numberOfFrames) => {
  return Math.min(numberOfFrames - 1, Math.floor(scrollFraction * numberOfFrames));
};

const preloadImages = (images) => {
  for(let image of images) {
    const img = new Image();
    img.src = image;
  }
};

export default function useHeroAnimation(canvasRef, illustrationWrapperRef, animationInfo, setIsAnimationDone, setMessageToShow) {
  const lastRenderedImageIndex = useRef();

  const isStepAnimationAfter = (nextCacheValue) => {
    let previousFrameIndex = Number(lastRenderedImageIndex.current.split('-')[3]);
    const nextFrameIndex = Number(nextCacheValue.split('-')[3]);

    if(isNaN(previousFrameIndex)) {
      previousFrameIndex = 0;
    }

    return nextFrameIndex >= previousFrameIndex;
  };

  const isValueInCache = (value) => lastRenderedImageIndex.current === value;

  const setCacheValue = (value) => {
    console.log('Cache value updated with: ', value);
    lastRenderedImageIndex.current = value;
  };

  useEffect(() => {
    // preload images
    preloadImages(sourceImages);
    preloadImages(STEPS_ANIMATION_FRAMES);
  }, []);

  useEffect(() => {
    if(animationInfo && illustrationWrapperRef.current) {
      const { scrollPosition } = animationInfo;

      const mainScrollFraction = scrollPosition / illustrationWrapperRef.current.clientHeight;

      if(mainScrollFraction >= 0 && mainScrollFraction <= INITIAL_ANIMATION_FRACTION) {
        const scrollFraction = mainScrollFraction / INITIAL_ANIMATION_FRACTION;
        const frameIndex = calculateFrameIndex(scrollFraction, sourceImages.length);
        const cacheValue = `initial-animation-${frameIndex}`;

        if(!isValueInCache(cacheValue)) {
          requestAnimationFrame(() => {
            drawImage(canvasRef, sourceImages[frameIndex]);
          });

          setMessageToShow(null);
          setCacheValue(cacheValue);
          setIsAnimationDone(false);
        }
      }

      const fullStepAnimationFraction = STEPS_ANIMATION_FRACTION * STEPS_ANIMATION_FRAMES.length;
      const fullStepAnimationEndFractionBoundary = fullStepAnimationFraction + INITIAL_ANIMATION_FRACTION;

      if(mainScrollFraction > INITIAL_ANIMATION_FRACTION && mainScrollFraction <= fullStepAnimationEndFractionBoundary) {
        const fullStepAnimationScrollFraction = (mainScrollFraction - INITIAL_ANIMATION_FRACTION) / fullStepAnimationFraction;

        // Here we find which of the steps images we want to render:
        const imageIndex = Math.floor(fullStepAnimationScrollFraction * STEPS_ANIMATION_FRAMES.length);

        const STEP_SIZE = 1;
        const IMAGE_STEP_SIZE_REMAINDER = ILLUSTRATION_CANVAS_HEIGHT % STEP_SIZE;

        // Here we calculate the scroll fraction:
        // Note: For this specific animation it goes over 1.0, when it does the animation is essentially to stall while showing text.
        const scrollFraction = (mainScrollFraction - (INITIAL_ANIMATION_FRACTION + STEPS_ANIMATION_FRACTION*imageIndex)) / (STEPS_ANIMATION_FRACTION - STEPS_ANIMATION_WAIT_FRACTION);

        // Calculate which frame to show 1 - 131 (650 / 5)
        const frameIndex = calculateFrameIndex(scrollFraction, (ILLUSTRATION_CANVAS_HEIGHT - IMAGE_STEP_SIZE_REMAINDER) / STEP_SIZE) + 1;
        const cacheValue = `step-one-animation-${frameIndex}-${scrollFraction.toFixed(2)}`;

        let yOffset = (ILLUSTRATION_CANVAS_HEIGHT - IMAGE_STEP_SIZE_REMAINDER) - (frameIndex * STEP_SIZE);
        let heightToRender = IMAGE_STEP_SIZE_REMAINDER + (frameIndex * STEP_SIZE);

        if(!isValueInCache(cacheValue)) {
          let imageToRender = STEPS_ANIMATION_FRAMES[imageIndex];

          if(!isStepAnimationAfter(cacheValue)) {
            const newImageIndex = imageIndex - 1;
            imageToRender = newImageIndex == - 1 ? sourceImages[sourceImages.length - 1] :  STEPS_ANIMATION_FRAMES[Math.max(0, newImageIndex)];
            yOffset = 0;
            heightToRender = (ILLUSTRATION_CANVAS_HEIGHT - heightToRender) + STEP_SIZE;
          }

          requestAnimationFrame(() => {
            drawImage(canvasRef, imageToRender, true, { toAnimate: true, yOffset: yOffset, heightToRender });
          });

          // TODO: This can still be adjusted to find the sweet spot!
          setMessageToShow(scrollFraction > 0.75 ? imageIndex : null);
          setCacheValue(cacheValue);
          setIsAnimationDone(false);
        }
      }

      if(mainScrollFraction > fullStepAnimationEndFractionBoundary) {
        const scrollFraction = (mainScrollFraction - fullStepAnimationEndFractionBoundary) / FINAL_ANIMATION_FRACTION;
        const frameIndex = sourceImages.length - calculateFrameIndex(scrollFraction, sourceImages.length);
        const cacheValue = `final-animation-${frameIndex}`;

        if(!isValueInCache(cacheValue)) {
          requestAnimationFrame(() => {
            drawImage(canvasRef, sourceImages[frameIndex]);
          });

          // TODO: Check if this is optimal!
          setIsAnimationDone(frameIndex <= 22);
          setMessageToShow(null);
          setCacheValue(cacheValue);
        }
      }
    }
  }, [animationInfo, canvasRef, illustrationWrapperRef, setIsAnimationDone, setMessageToShow]);
}
