document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.nav__mobile');

  // Scroll effect on nav
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  toggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggle?.classList.remove('active');
    });
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach(el => observer.observe(el));

  // FAQ accordion
  document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Contact form — FormSubmit.co delivers to hello@scan-perks.com (static site, no backend)
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');

  form?.addEventListener('submit', async e => {
    e.preventDefault();

    const endpoint = form.dataset.endpoint;
    if (!endpoint) return;

    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending…';
    if (statusEl) {
      statusEl.textContent = '';
      statusEl.className = 'form-status';
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        form.reset();
        if (statusEl) {
          statusEl.textContent = 'Message sent! We will reply to your email soon.';
          statusEl.className = 'form-status form-status--success';
        }
        btn.textContent = 'Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #22d3ee, #3b82f6)';
      } else {
        const msg = data.message || 'Could not send your message.';
        throw new Error(msg);
      }
    } catch (err) {
      if (statusEl) {
        statusEl.textContent =
          err.message === 'Could not send your message.'
            ? 'Could not send your message. Please email hello@scan-perks.com directly.'
            : `Could not send: ${err.message} Please email hello@scan-perks.com directly.`;
        statusEl.className = 'form-status form-status--error';
      }
      btn.textContent = original;
    } finally {
      btn.disabled = false;
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
      }, 4000);
    }
  });

  // Active nav link
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
    const href = link.getAttribute('href')?.replace(/\/$/, '') || '/';
    if (href === path || (path === '/' && href === '/')) {
      link.classList.add('active');
    }
  });

});
