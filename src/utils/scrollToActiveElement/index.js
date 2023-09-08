import { offset } from '../../components/roadmap-page/QuarterPanel';

const scrollToActiveElement = (id) => {
  const target = document.getElementById(id);
  if (!target) return;
  window.scrollTo({ top: target.offsetTop - offset + 20, behavior: 'smooth' });
};

export default scrollToActiveElement;
