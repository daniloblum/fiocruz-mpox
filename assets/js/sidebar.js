// DESKTOP

// Ajustar a altura da página quando for menor que a sidebar

// $(document).ready( function () {

(function () {
	let sidebarHeight = document.getElementsByClassName('sidebar');
	let contentHeight = document.getElementsByClassName('content');
	let pageTitle = document.getElementById('page-title');
	let footerHeight = document.getElementsByTagName('footer');
	let sectionsToDiscount = pageTitle.offsetHeight + footerHeight[0].offsetHeight;

	if (sidebarHeight[0].offsetHeight > contentHeight[0].offsetHeight) {
		let pageContent = document.getElementById('page-content');
		pageContent.style.minHeight = sidebarHeight[0].offsetHeight - sectionsToDiscount + 'px';
		//($(".sidebar").height() - ($(".header").height() + 2 * $("footer").height()))
	}
})();

// // MOBILE

const sidebarToggleOpen = document.querySelector('.mobile-toggle-open .mobile-toggle__button');
const sidebarToggleClose = document.querySelector('.mobile-toggle-close .mobile-toggle__button');
const sidebarShow = document.querySelector('.sidebar');
const content = document.querySelector('.content');
// var sidebarMobile = $('.sidebar');
// var btn = $('.btn');

function touchControl(event, obj) {
	if (event == true) {
		obj.style.touchAction = 'auto';
	}
}

sidebarToggleOpen.addEventListener('click', function () {
	if (!sidebarShow.classList.contains('show')) {
		console.log('nao tem show');
		sidebarShow.classList.add('show');

		// prevent scroll behind
		// document.querySelector(body).classList.add('prevent-scroll');
		// content.classList.add('touch-disable');
	}
});
sidebarToggleClose.addEventListener('click', function () {
	if (sidebarShow.classList.contains('show')) {
		console.log('tem show');
		sidebarShow.classList.remove('show');

		// content.classList.remove('prevent-scroll');
	}
});
