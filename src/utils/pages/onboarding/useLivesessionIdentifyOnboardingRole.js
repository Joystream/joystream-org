import React, { useEffect } from 'react';

const setCustomProperty = () => {
  // If __ls is undefined we wait for 200ms and then check again until
  // it is loaded. Then we set a custom property with the role.

  if(typeof __ls !== "undefined") {
    const role = localStorage.getItem('JoystreamRole') ?? "Undecided";

    console.log("Your role: ", { role });

    /* eslint-disable no-undef */
    __ls("setCustomParams", { params: { role } });
  } else {
    setTimeout(setCustomProperty, 200);
  }
}

const useLivesessionIdentifyOnboardingRole = () => {
  useEffect(() => { setCustomProperty() }, []);
};

export default useLivesessionIdentifyOnboardingRole;