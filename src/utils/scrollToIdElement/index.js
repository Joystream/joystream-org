const scrollToIdElement = id => {
  const target = document.getElementById(id);
  if (!target) return;
  window.scrollTo({ top: target.offsetTop + 20, behavior: 'smooth' });
};

export default scrollToIdElement;
