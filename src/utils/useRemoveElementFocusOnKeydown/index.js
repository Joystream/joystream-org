import { useEffect } from 'react';

const removeElementFocus = (event, elementRef, keyArray) => {
  if(elementRef.current && keyArray.includes(event.key)) {
    elementRef.current.blur();
  }
};

const useRemoveElementFocusOnKeydown = (elementRef, keyArray) => {
  useEffect(() => {
    const eventListener = (event) => removeElementFocus(event, elementRef, keyArray);
    
    global.addEventListener('keydown', eventListener);

    return () => {
      global.removeEventListener('keydown', eventListener);
    }
  }, []);
}

export default useRemoveElementFocusOnKeydown;