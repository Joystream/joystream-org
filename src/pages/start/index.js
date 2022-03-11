export default function RedirectToOnboarding() {
  if (typeof window !== 'undefined') {
    window.location = '/start-here/what-is-joystream';
  }

  return null;
}
