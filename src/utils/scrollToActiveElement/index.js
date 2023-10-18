import { offset } from '../../components/roadmap-page/QuarterPanel';

const scrollToActiveElement = id => {
  const target = document.getElementById(id);
  if (!target) return;
  window.scrollTo({ top: 0, behavior: 'instant' });
  window.scrollTo({ top: target.offsetTop - offset + 45, behavior: 'smooth' });
};

export default scrollToActiveElement;
