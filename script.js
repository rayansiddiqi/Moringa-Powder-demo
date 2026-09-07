document.addEventListener('DOMContentLoaded', function () {

  // Initialize Lucide icons
  if (window.lucide) lucide.createIcons();

  /* ---------- Mobile menu ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var menuIconOpen = document.getElementById('menuIconOpen');
  var menuIconClose = document.getElementById('menuIconClose');
  var menuOpen = false;

  menuToggle.addEventListener('click', function () {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    menuIconOpen.style.display = menuOpen ? 'none' : 'block';
    menuIconClose.style.display = menuOpen ? 'block' : 'none';
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      menuIconOpen.style.display = 'block';
      menuIconClose.style.display = 'none';
    });
  });

  /* ---------- Cart / shopping bag icon scrolls to product ---------- */
  document.getElementById('cartBtn').addEventListener('click', function () {
    document.querySelector('#product').scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- Quantity selector ---------- */
  var qty = 1;
  var qtyValueEl = document.getElementById('qtyValue');
  document.getElementById('qtyMinus').addEventListener('click', function () {
    qty = Math.max(1, qty - 1);
    qtyValueEl.textContent = qty;
  });
  document.getElementById('qtyPlus').addEventListener('click', function () {
    qty = qty + 1;
    qtyValueEl.textContent = qty;
  });

  /* ---------- Add to bag ---------- */
  var cartCount = 0;
  var cartBadge = document.getElementById('cartBadge');
  var addToBagLabel = document.getElementById('addToBagLabel');
  document.getElementById('addToBagBtn').addEventListener('click', function () {
    cartCount += qty;
    cartBadge.textContent = cartCount;
    addToBagLabel.textContent = 'Added \u00B7 ' + cartCount + ' in bag';
  });

  /* ---------- Reviews carousel ---------- */
  var reviews = [
    { quote: "The colour and freshness are unlike any moringa I have tried. A spoonful in my morning chaas has become a ritual.", name: "Meera R.", place: "Bengaluru" },
    { quote: "Clean taste, beautiful packaging, and no bitterness. It blends wonderfully into our family smoothies.", name: "Ananya S.", place: "Mumbai" },
    { quote: "I appreciate knowing where it comes from. The powder is vibrant, fine, and genuinely feels farm fresh.", name: "Rohan M.", place: "Pune" }
  ];
  var reviewIndex = 0;
  var reviewQuote = document.getElementById('reviewQuote');
  var reviewName = document.getElementById('reviewName');
  var reviewPlace = document.getElementById('reviewPlace');

  function renderReview() {
    var r = reviews[reviewIndex];
    reviewQuote.textContent = '\u201C' + r.quote + '\u201D';
    reviewName.textContent = r.name;
    reviewPlace.textContent = r.place + ' \u00B7 Verified buyer';
  }

  document.getElementById('reviewPrev').addEventListener('click', function () {
    reviewIndex = (reviewIndex + reviews.length - 1) % reviews.length;
    renderReview();
  });
  document.getElementById('reviewNext').addEventListener('click', function () {
    reviewIndex = (reviewIndex + 1) % reviews.length;
    renderReview();
  });

  /* ---------- Contact form ---------- */
  var contactForm = document.getElementById('contactForm');
  var contactSubmitLabel = document.getElementById('contactSubmitLabel');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    contactSubmitLabel.innerHTML = '<i data-lucide="check"></i> Message received';
    if (window.lucide) lucide.createIcons();
  });

  /* ---------- Newsletter form ---------- */
  var newsletterForm = document.getElementById('newsletterForm');
  var newsletterIcon = document.getElementById('newsletterIcon');
  var newsletterSuccess = document.getElementById('newsletterSuccess');
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    newsletterIcon.setAttribute('data-lucide', 'check');
    if (window.lucide) lucide.createIcons();
    newsletterSuccess.style.display = 'block';
  });

});
