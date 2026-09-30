const form = document.querySelector('#rsvp-form');
const success = document.querySelector('#success');
const another = document.querySelector('#another');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const rsvps = JSON.parse(localStorage.getItem('bigHornRsvps') || '[]');
  rsvps.push({ ...data, submittedAt: new Date().toISOString() });
  localStorage.setItem('bigHornRsvps', JSON.stringify(rsvps));
  form.hidden = true;
  success.hidden = false;
  success.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

another.addEventListener('click', () => {
  form.reset();
  form.hidden = false;
  success.hidden = true;
  document.querySelector('#rsvp-heading').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
