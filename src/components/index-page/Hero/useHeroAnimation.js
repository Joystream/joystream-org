import React, { useEffect, useRef } from "react";

import sourceImages from './images';
import StepsImage1 from '../../../assets/images/landing/hero/main-sequence-layer1.webp';
import StepsImage2 from '../../../assets/images/landing/hero/main-sequence-layer2.webp';
import StepsImage3 from '../../../assets/images/landing/hero/main-sequence-layer3.webp';
import StepsImage4 from '../../../assets/images/landing/hero/main-sequence-layer4.webp';

const ILLUSTRATION_CANVAS_WIDTH = 1080;
const ILLUSTRATION_CANVAS_HEIGHT = 656;

const drawImage = (canvasRef, image, toAnimate = false, drawOver = false) => {
  const context = canvasRef.current.getContext('2d');
  const img = new Image();
  img.src = image;
  img.onload = () => {
    if(!drawOver)
      context.clearRect(0, 0, ILLUSTRATION_CANVAS_WIDTH, ILLUSTRATION_CANVAS_HEIGHT);

    if(toAnimate) {
      animateSingleImage(context, img);
    } else {
      context.drawImage(img, 0, 0);
    }
  }
}

const STEP_SIZE = 10;
const IMAGE_STEP_SIZE_REMAINDER = ILLUSTRATION_CANVAS_HEIGHT % STEP_SIZE;

const animateSingleImage = (context, image, prevHeight = 0) => {
  const firstNumber = (ILLUSTRATION_CANVAS_HEIGHT - IMAGE_STEP_SIZE_REMAINDER) - prevHeight;
  const secondNumber = IMAGE_STEP_SIZE_REMAINDER + prevHeight;

  context.drawImage(image, 0, firstNumber, ILLUSTRATION_CANVAS_WIDTH, secondNumber, 0, firstNumber, ILLUSTRATION_CANVAS_WIDTH, secondNumber);

  if(secondNumber == ILLUSTRATION_CANVAS_HEIGHT)
    return;

  let nextHeight = prevHeight + STEP_SIZE;

  setTimeout(() => {
    requestAnimationFrame(() => animateSingleImage(context, image, nextHeight))
  }, 3);
}

// const INITIAL_ANIMATION_FINAL_POSITION = 1050;
// const STEPS_ANIMATIONS_FINAL_POSITION = 1850;
// const FINAL_ANIMATION_FINAL_POSITION = 2500;
const INITIAL_ANIMATION_FRACTION = 0.41;
const STEPS_ANIMATION_FRACTION = 0.31;
const FINAL_ANIMATION_FRACTION = 0.28;
const STEPS_ANIMATION_FRAMES = [StepsImage1, StepsImage2, StepsImage3, StepsImage4];

// HELPER FUNCTIONS
const calculateFrameIndex = (scrollFraction, numberOfFrames) => {
  return Math.min(numberOfFrames - 1, Math.floor(scrollFraction * numberOfFrames));
}

// This one is to calculate scroll fraction based off of absolute values.
const calculateAnimationScrollFraction = (animationStartingPosition, animationFinalPosition, currentScrollPosition) => {
  const fullAnimationHeight = animationFinalPosition - animationStartingPosition;
  const currentRelativeAnimationHeight = currentScrollPosition - animationStartingPosition;

  return currentRelativeAnimationHeight / fullAnimationHeight;
}

export default function useHeroAnimation(canvasRef, illustrationWrapperRef, animationInfo, setIsAnimationDone, setMessageToShow) {
  const lastRenderedImageIndex = useRef();

  const isValueInCache = (value) => lastRenderedImageIndex.current === value;

  const setCacheValue = (value) => {
    console.log("Cache value updated with: ", value);
    lastRenderedImageIndex.current = value
  };

  useEffect(() => {
    // preload images
    for(let i = 0; i < sourceImages.length; i++) {
      const img = new Image();
      img.src = sourceImages[i];
    }
  }, [])

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
            console.log("Requested animation: ", cacheValue);
            drawImage(canvasRef, sourceImages[frameIndex]);
          });

          setMessageToShow(null);
          setCacheValue(cacheValue);
        }
      }

      // Steps animations
      const stepsAnimationEndFractionBoundary = STEPS_ANIMATION_FRACTION + INITIAL_ANIMATION_FRACTION;

      if(mainScrollFraction > INITIAL_ANIMATION_FRACTION && mainScrollFraction <= stepsAnimationEndFractionBoundary) {
        const scrollFraction = (mainScrollFraction - INITIAL_ANIMATION_FRACTION) / STEPS_ANIMATION_FRACTION;
        const frameIndex = calculateFrameIndex(scrollFraction, STEPS_ANIMATION_FRAMES.length);
        const cacheValue = `steps-animation-${frameIndex}`;

        if(!isValueInCache(cacheValue)) {
          requestAnimationFrame(() => {
            drawImage(canvasRef, STEPS_ANIMATION_FRAMES[frameIndex], true, true);
          });

          setMessageToShow(frameIndex);
          setCacheValue(cacheValue);
        }
      }

      const finalAnimationEndFractionBoundary = stepsAnimationEndFractionBoundary + FINAL_ANIMATION_FRACTION;

      if(mainScrollFraction > stepsAnimationEndFractionBoundary && mainScrollFraction <= finalAnimationEndFractionBoundary) {
        const scrollFraction = (mainScrollFraction - stepsAnimationEndFractionBoundary) / FINAL_ANIMATION_FRACTION;
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
  }, [animationInfo]);
}