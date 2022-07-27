document.querySelectorAll('.artist__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(a){
    const path = a.currentTarget.dataset.path;

    document.querySelectorAll('.artist__btn').forEach(function(btn) {
      btn.classList.remove('tab__btn--active')});
      a.currentTarget.classList.add('tab__btn--active');

    document.querySelectorAll('.catalog__tab').forEach(function(tabsBtn) {
      tabsBtn.classList.remove('tab__content--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('tab__content--active');
  });
});

// скролл мобильный

(() => {
	const MOBILE_WIDTH = 961;

	function getWindowWidth () {
	  return Math.max(
	    document.body.scrollWidth,
	    document.documentElement.scrollWidth,
	    document.body.offsetWidth,
	    document.documentElement.offsetWidth,
	    document.body.clientWidth,
	    document.documentElement.clientWidth
	  );
	}

	function scrollToContent (link, isMobile) {
		if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
			return;
		}

	  const href = link.getAttribute('href').substring(1);
	  const scrollTarget = document.getElementById(href);
	  const elementPosition = scrollTarget.getBoundingClientRect().top;

	  window.scrollBy({
	      top: elementPosition,
	      behavior: 'smooth'
	  });
	}

	document.querySelectorAll('.artist__btn').forEach(link => {
	  link.addEventListener('click', function(e) {
	      e.preventDefault();

	      scrollToContent(this, true);
	  });
	});
})();
