/* ============================================================
   HOLISTIC WELLNESS CLUB — script.js
   ============================================================ */

/* ============================================================
   ANNOUNCEMENT BAR CONFIGURATION
   ============================================================
   TO SHOW the announcement bar:
     1. Set ANNOUNCEMENT_ACTIVE = true
     2. Edit ANNOUNCEMENT_TEXT with your offer message
   
   TO HIDE the announcement bar:
     1. Set ANNOUNCEMENT_ACTIVE = false
   
   That's it. No other changes needed.
   ============================================================ */

const ANNOUNCEMENT_ACTIVE = false; // <-- CHANGE TO true TO ENABLE

const ANNOUNCEMENT_TEXT = "Limited Offer: Get your first consultation FREE this month. Limited slots available — Book now!";

/* ============================================================
   DO NOT EDIT BELOW THIS LINE (unless you know what you're doing)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- ANNOUNCEMENT BAR ---
  const bar = document.getElementById('announcement-bar');
  const barText = document.getElementById('announcement-text');
  const closeBtn = document.getElementById('announcement-close');

  if (ANNOUNCEMENT_ACTIVE && bar && barText) {
    barText.textContent = ANNOUNCEMENT_TEXT;
    bar.classList.remove('hidden');

    closeBtn.addEventListener('click', () => {
      bar.style.opacity = '0';
      bar.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        bar.style.display = 'none';
      }, 300);
    });
  }

  // --- NAVBAR SCROLL SHADOW ---
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // --- HAMBURGER MENU ---
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when any link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

});
