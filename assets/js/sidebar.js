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


// CONSTRUTOR DOS ITENS DA SIDEBAR

document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.querySelector(".sidebar__section-accordion");
  if (!sidebarContainer) return;

  const currentPath = window.location.pathname;

  // Função recursiva para renderizar itens
  function renderItems(items, parentId, typeLevel = "module", parentAccordionId = "") {
    return items.map((item, index) => {
      if (item.type === "link") {
        const iconClass = item.icon ? `icon-${item.icon}` : "";
        return `
          <a href="${item.path}" class="list-group-item link-item ${iconClass} ${currentPath === item.path ? "active" : ""}">
            ${item.title}
          </a>
        `;
      }

      if (item.type === "accordion") {
        const accordionId = `${parentId}-${index}`;
        const isActive = item.items.some(
          child =>
            (child.type === "link" && child.path === currentPath) ||
            (child.type === "accordion" && hasActiveChild(child.items))
        );

        const accordionClass = typeLevel === "module" ? "accordion-module" : "accordion-lesson";

        // Define data-bs-parent somente para aulas (typeLevel === "lesson")
        const dataParentAttr = typeLevel === "lesson" && parentAccordionId ? `data-bs-parent="#${parentAccordionId}"` : "";

        return `
          <div class="accordion-item ${accordionClass}">
            <h2 class="accordion-header" id="${accordionId}-header">
              <button class="accordion-button ${isActive ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#${accordionId}">
                ${item.title}
              </button>
            </h2>
            <div id="${accordionId}" class="accordion-collapse collapse ${isActive ? "show" : ""}" ${dataParentAttr}>
              <div class="accordion-body list-group">
                ${renderItems(item.items, accordionId, "lesson", accordionId)}
              </div>
            </div>
          </div>
        `;
      }

      return `<span class="list-group-item disabled">Tipo desconhecido</span>`;
    }).join("");
  }

  // Função recursiva para verificar se algum filho está ativo
  function hasActiveChild(items) {
    return items.some(item =>
      (item.type === "link" && item.path === currentPath) ||
      (item.type === "accordion" && hasActiveChild(item.items))
    );
  }

  // Renderiza os módulos
  sidebarContainer.innerHTML = `
    <div class="accordion" id="sidebarAccordion">
      ${course.modules.map((module, moduleIndex) => {
        const moduleId = `module-${moduleIndex}`;
        const isActive = module.items.some(item =>
          (item.type === "link" && item.path === currentPath) ||
          (item.type === "accordion" && hasActiveChild(item.items))
        );

        return `
          <div class="accordion-item accordion-module">
            <h2 class="accordion-header" id="${moduleId}-header">
              <button class="accordion-button ${isActive ? "" : "collapsed"}"
                type="button" data-bs-toggle="collapse"
                data-bs-target="#${moduleId}">
                ${module.title}
              </button>
            </h2>
            <div id="${moduleId}"
                 class="accordion-collapse collapse ${isActive ? "show" : ""}"
                 data-bs-parent="#sidebarAccordion">
              <div class="accordion-body list-group">
                <div class="accordion" id="${moduleId}-lessons">
                  ${renderItems(module.items, moduleId, "lesson", `${moduleId}-lessons`)}
                </div>
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
});
