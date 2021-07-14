const sendFormData = async encrypted => {
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  try {
    // REVERT THIS BACK AFTER DEVELOPMENT

    // await fetch('/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: encode({
    //     'form-name': 'founding-members',
    //     data: encrypted,
    //   }),
    // });
  } catch (e) {
    console.log(e);
  }
};

export default sendFormData;
