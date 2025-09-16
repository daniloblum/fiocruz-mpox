// Stick Header

window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	const titleHeight = document.querySelector('.header').scrollHeight;

	if (window.scrollY > 150) {
		header.classList.add('header--sticky');
	} else {
		header.classList.remove('header--sticky');
	}
});

// (function () {
// 	// Popover
// 	$(function () {
// 		$('[data-toggle="popover"]').popover(options);
// 	});

// 	// Tooltip
// 	$(function () {
// 		$('[data-toggle="tooltip"]').tooltip(options);
// 	});
// })();

// Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

// Botão de copiar podcast

const copyButton = document.querySelectorAll('.copy-to-clip');

copyButton.forEach(btn => {
	btn.addEventListener('click', () => {
		copyToClipboard(btn);
		// tooltipShow(btn);

		tooltipFeedback(btn);
	});
});

function copyToClipboard(e) {
	const textToCopy = e.getAttribute('data-link');
	const textarea = document.createElement('textarea');
	textarea.setAttribute('readonly', '');
	textarea.style.position = 'absolute';
	textarea.value = textToCopy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
}
function tooltipFeedback(b) {
	let feedback = $('[data-toggle="tooltip"]');

	// feedback.tooltip('show');

	b.addEventListener('mouseout', () => {
		feedback.tooltip('hide');
	});
}

// Lightbox (insert the class "lightbox" into <figure>)

const imageToLightbox = document.querySelectorAll('.lightbox');

imageToLightbox.forEach(image => {
	image.addEventListener('click', () => {
		if (!image.classList.contains('lightbox--show')) {
			const getImage = image.querySelector('img');
			const getImageSrc = getImage.getAttribute('src');
			const imageLightbox = document.createElement('div');

			imageLightbox.classList.add('lightbox__image');

			document.body.appendChild(imageLightbox);
			imageLightbox.innerHTML = `<img src="${getImageSrc}"/>`;
			console.log(getImageSrc);

			image.classList.add('lightbox--show');

			document.body.style.overflow = 'hidden';
			document.body.style.userSelect = 'none';

			closeLightbox(imageLightbox);
		}

		function closeLightbox(e) {
			const lightboxOpen = document.querySelector('.lightbox__image');
			e.addEventListener('click', () => {
				document.body.removeChild(e);
				image.classList.remove('lightbox--show');
				document.body.style.overflow = 'auto';
				document.body.style.userSelect = 'auto';
			});
		}
	});
});

// Lightbox Scroll (insert the class "lightbox-scroll" into <figure>)

const imageToLightboxWithScroll = document.querySelectorAll(".lightbox-scroll");

imageToLightboxWithScroll.forEach((imageScroll) => {
  imageScroll.addEventListener("click", () => {
    if (!imageScroll.classList.contains("lightbox-scroll--show")) {
      const getImageScroll = imageScroll.querySelector("img");
      const getImageScrollSrc = getImageScroll.getAttribute("src");
      const imageLightboxScroll = document.createElement("div");

      imageLightboxScroll.classList.add("lightbox-scroll__image");

      document.body.appendChild(imageLightboxScroll);
      imageLightboxScroll.innerHTML = `<img src="${getImageScrollSrc}"/>`;
      console.log(getImageScrollSrc);

      imageScroll.classList.add("lightbox-scroll--show");

      document.body.style.overflow = "hidden";
      document.body.style.userSelect = "none";

      closeLightboxScroll(imageLightboxScroll);
    }

    function closeLightboxScroll(s) {
      const lightboxScrollOpen = document.querySelector(".lightbox-scroll__image");
      s.addEventListener("click", () => {
        document.body.removeChild(s);
        imageScroll.classList.remove("lightbox-scroll--show");
        document.body.style.overflow = "auto";
        document.body.style.userSelect = "auto";
      });
    }
  });
});

// Boxes - inserir o título de acordo com o atributo

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
	const boxAttribute = box.getAttribute('data-box');

	const boxLabel = box.querySelector('.label');

	boxLabel.innerHTML = boxAttribute;
});



// Modal - Criação dos modais principais
const modalInfos = {
	creditos: {
		ariaLabel: 'creditos',
		modalSize: 'modal-lg',
		modalTitle: 'Créditos',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<span class="h5 mb-3 d-block">Ministério da Saúde</span>

					<div class="mb-5">
						<p class="mb-1">Nísia Trindade Lima</p>
						<p class="small text-muted"><em>Ministra</em></p>
					</div>

					<span class="h5 mb-3 d-block">Fundação Oswaldo Cruz – Fiocruz</span>
					
					<div class="mb-5">
						<p class="mb-1">Mario Moreira</p>
						<p class="small text-muted"><em>Presidente</em></p>
						<p class="mb-1">Cristiani Vieira Machado</p>
						<p class="small text-muted"><em>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</em></p>
					</div>

					<span class="h5 mb-3 d-block">Campus Virtual Fiocruz</span>

					<div class="mb-5">

						<p class="mb-1">Ana Cristina da Matta Furniel</p>
						<p class="small text-muted"><em>Coordenadora-geral</em></p>
						<p class="mb-1">Rosane Mendes</p>
						<p class="small text-muted"><em>Coordenadora-adjunta</em></p>
						<p class="mb-1">Adélia Araújo</p>
						<p class="small text-muted"><em>Coordenadora de produção</em></p>
						<p class="mb-1">Renata Bernardes David</p>
						<p class="small text-muted"><em>Gerente de produção</em></p>
						<p class="mb-1">Isabela Schincariol</p>
						<p class="small text-muted"><em>Assessora de comunicação</em></p>
					
						<p class="mb-1">Fernanda Sousa</p>
						<p class="small text-muted"><em>Designer Educacional</em></p>
					
						<span class="h6 mb-3 d-block">Design de Interface</span>
						
						<p class="mb-1">Aline Polycarpo</p>
						<p class="small text-muted"><em>Designer de Interface e Interação</em></p>
						<p class="mb-1">Danilo Blum</p>
						<p class="small text-muted"><em>Designer de Interface e Front-end</em></p>
						<p class="mb-1">Luciana Nunes</p>
						<p class="small text-muted"><em>Designer de Interface e Interação</em></p>
						
						<span class="h6 mb-3 d-block">Recursos Audiovisuais</span>
						
						<p class="mb-1">Teo Venerando</p>
						<p class="small text-muted"><em>Edição audiovisual</em></p>
						
						<span class="h6 mb-3 d-block">Animação</span>

						<p class="mb-1">Bruno Athaydes</p>
						<p class="small text-muted"><em>Motion designer</em></p>
						<p class="mb-1">Rose Renovato</p>
						<p class="small text-muted"><em>Locutora</em></p>
											
						<span class="h6 mb-3 d-block">Recursos Educacionais</span>
						
						<p class="mb-1">Carmélia Brito</p>
						<p class="small text-muted"><em>Bibliotecária</em></p>
						<p class="mb-1">Natália Rasina</p>
						<p class="small text-muted"><em>Audiodescrição</em></p>
						<p class="mb-1">Maria Angélica Marcondes Drska</p>
						<p class="small text-muted"><em>Revisão de Português	</em></p>
						
						<span class="h6 mb-3 d-block">Suporte Técnico de Tecnologia da Informação</span>
					
						<p class="mb-1">Bruno Alexandre de Oliveira</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>
						<p class="mb-1">Eduardo Xavier da Silva</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>
						<p class="mb-1">Adriano Lourenço</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>
						<p class="mb-1">Orlando Terra</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>
						<p class="mb-1">Fábio Carneiro</p>
						<p class="small text-muted"><em>Designer gráfico e web designer</em></p>
					</div>

					<span class="h5 mb-3 d-block">Instituto Nacional de Infectologia - INI/FIOCRUZ</span>
					
					<div class="mb-5">
						<p class="mb-1">Valdiléa Gonçalves Veloso dos Santos</p>
						<p class="small text-muted"><em>Diretora</em></p>

						<span class="h6 mb-3 d-block">Coordenadora geral</span>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="small text-muted"><em>Plataforma de Pesquisa Clínica INI/ Fiocruz</em></p>
						
						<span class="h6 mb-3 d-block">Coordenadores acadêmicos</span>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto </p>
						<p class="small text-muted"><em>Plataforma de Pesquisa Clínica INI/Fiocruz</em></p>
					
						<span class="h6 mb-3 d-block">Conteudistas</span>

						<p class="small"><strong>Módulo 1 | Conceitos, histórico e diretrizes</strong></p>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto</p>
						<p class="small text-muted"><em>Tecnologista em Saúde Pública - INI/ Fiocruz</em></p>
						
						<p class=" small"><strong>Módulo 2 | Regulamentação e Fluxos de Tramitação</strong></p>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="mb-1">Marcella Feitosa da Silva Barboza</p>
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto</p>
						<p class="small text-muted"><em>Tecnologista em Saúde Pública - INI/ Fiocruz</em></p>
						
						<p class="small"><strong>Moçambique</strong></p>
						
						<p class="mb-1">Alcina Zitha Tauancha</p>
						<p class="small text-muted"><em>Farmacêutica-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>
						
						<p class="mb-1">Anchelda Santinho Mulimela</p>
						<p class="small text-muted"><em>Revisão Linguistica-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>						
						
						<p class="mb-1">Igor Doby</p>
						<p class="small text-muted"><em>Médico-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>

						<p class="small"><strong>Módulo 3 | Atores em pesquisa clínica</strong></p>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto</p>
						<p class="small text-muted"><em>Tecnologista em Saúde Pública - INI/ Fiocruz</em></p>

						<p class="mb-1">Ferão Américo Mandlate</p>
						<p class="small text-muted"><em>Psicólogo-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>

						<p class="mb-1">Jaciara Nissai Sallé Mussa</p>
						<p class="small text-muted"><em>Psicológa-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>
						
						<p class="mb-1">Yolanda Veronica Feliciano Manganhe</p>
						<p class="small text-muted"><em>Antropóloga-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>
						
						<p class="small"><strong>Módulo 4 | Eventos adversos</strong></p>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto</p>
						<p class="small text-muted"><em>Tecnologista em Saúde Pública - INI/ Fiocruz</em></p>
					
						<span class="h6 mb-3 d-block">Avaliação Final</span>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto </p>
						<p class="small text-muted"><em>Tecnologista em Saúde Pública - INI/ Fiocruz</em></p>
					
						<span class="h6 mb-3 d-block">Revisores Técnicos</span>
						
						<p class="mb-1">Valdiléa Gonçalves Veloso dos Santos</p>
						<p class="small text-muted"><em>Diretora do Instituto Nacional de Infectologia Evandro Chagas - INI/FIOCRUZ</em></p>
					</div>
					
					<div class="">
						<p class="mb-1"><strong>A inclusão do conteúdo referente à regulamentação de Moçambique é resultado de uma parceria no âmbito do Programa Coopbras (Programa de Cooperação em Ensino e Pesquisa Internacional), apoiada pela Coordenação de Aperfeiçoamento de Pessoal de Nível Superior/Brasil/CAPES (código de financiamento 001)</strong></p>
					</div>
				</div>
			</div>
		`,
	},
	bibliografia: {
		ariaLabel: 'bibliografia',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-11">
					<div class="mb-5">
						<!-- Accordion -->
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item1" aria-expanded="true" aria-controls="collapse1-item1">Módulo 1</button>
								</h5>
								<div id="collapse1-item1" class="accordion-collapse collapse" aria-labelledby="heading1-item1" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ANDRADE, M. V. <em>et al.</em> Indicadores e medidas em saúde: conceitos e aplicações para as informações disponíveis no Brasil. <em>In</em>: SALDANHA, R. F.; PEDROSO, M. M.; MAGALHÃES, M. A. F. M. <strong>Avaliação de impacto das políticas de saúde</strong>: um guia para o SUS. Brasil: Ministério da Saúde, Secretaria de Ciência, Tecnologia, Inovação e Complexo da Saúde, 2023. cap. 3, p. 81-123. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/avaliacao_impacto_politicas_saude_guia_sus.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/avaliacao_impacto_politicas_saude_guia_sus.pdf</a>. Acesso em: 09 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BARRETO, M. L. Desigualdades em saúde: uma perspectiva global. <strong>Ciência & Saúde Coletiva</strong>, v. 22, n. 7, p. 2097-2108, 2017. Disponível em: <a href="https://www.scielo.br/j/csc/a/XLS4hCMT6k5nMQy8BJzJhHx/" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csc/a/XLS4hCMT6k5nMQy8BJzJhHx/</a>. Acesso em: 09 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Constituição (1988)</strong>. Constituição da República Federativa do Brasil. Brasília, DF: Senado, 1988.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei n° 8.080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências. <strong>Diário Oficial da União</strong>, Brasília, DF, 20 set. 1990a. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/leis/l8080.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/leis/l8080.htm</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAVALCANTE, R. B.; PINHEIRO, M. M. K. Contexto atual da construção da Política Nacional de Informação e Informática em Saúde (PNIIS). <strong>Tendências da Pesquisa Brasileira em Ciência da Informação</strong>, v. 7, n. 1, p. 45-59, 2014. Disponível em: <a href="https://revistas.ancib.org/index.php/tpbci/article/view/347/347" target="_blank" rel="noopener noreferrer">https://revistas.ancib.org/index.php/tpbci/article/view/347/347</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COELHO-NETO, G. C.; CHIORO, A. Afinal, quantos Sistemas de Informação em Saúde de base nacional existem no Brasil? <strong>Cadernos de Saúde Pública</strong>, v. 37, n. 7, 2021. Disponível em: <a href="https://www.scielo.br/j/csp/a/RzNmvjHqmLhPHZp6gfcdC6H/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csp/a/RzNmvjHqmLhPHZp6gfcdC6H/?format=pdf&lang=pt</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COELI, C. M. <em>et al.</em> Sistemas de Informação em Saúde. <em>In</em>: MEDRONHO, R. A. (org.). <strong>Epidemiologia</strong>. 2. ed. São Paulo: Atheneu, 2009. cap. 29, p. 525-534.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FARIA, L. L. F. <strong>Saúde digital nas cidades inteligentes no Brasil</strong>: abordagens, articulações possíveis, avanços e desafios. 2023. 178 f. Dissertação (Mestrado em Saúde Pública) - Escola Nacional de Saúde Pública Sergio Arouca, Fundação Oswaldo Cruz, Rio de Janeiro, 2023. Disponível em: <a href="https://www.arca.fiocruz.br/handle/icict/62767" target="_blank" rel="noopener noreferrer">https://www.arca.fiocruz.br/handle/icict/62767</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JANNUZZI, P. M. Estatísticas e políticas públicas orientadas por evidências no Brasil: caso das políticas de desenvolvimento social nos anos 2000. <strong>Revista Brasileira de Geografia</strong>, v. 64, n. 1, p. 37-54, 2019.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MORAES, I. H. S. <strong>Política, tecnologia e informação em saúde</strong>: a utopia da emancipação. Salvador: Instituto de Saúde Coletiva/UFBa e Casa da Qualidade, 2002.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MORAES, I. H. S.; FORNAZIN, M. Nem tecnoforia nem tecnofobia: abordagem crítica da incorporação das tecnologias digitais na saúde. <em>In</em>: PAIM, Jairnilson Silva; ALMEIDA-FILHO, Naomar (org.). <strong>Saúde coletiva</strong>: teoria e prática. 2. ed. Rio de Janeiro: Medbook, 2022. v. 1, p. 670-691.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MORAES, I.; GOMEZ, M. Informação e informática em saúde: caleidoscópio contemporâneo da saúde. <strong>Ciência & Saúde Coletiva</strong>, v. 12, n. 3, p. 553-565, 2007. Disponível em: <a href="https://www.scielo.br/j/csc/a/45Nb5fbzVr3YDqJRKLhbvWk/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csc/a/45Nb5fbzVr3YDqJRKLhbvWk/?format=pdf&lang=pt</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PROADESS. <strong>Projeto de Avaliação do Desempenho do Sistema de Saúde</strong>. Laboratório de Informação em Saúde. Instituto de Comunicação e Informação Científica e Tecnológica em Saúde. Fundação Oswaldo Cruz). Rio de Janeiro: Fiocruz, 2024. Disponível em: <a href="https://www.proadess.icict.fiocruz.br/index.php" target="_blank" rel="noopener noreferrer">https://www.proadess.icict.fiocruz.br/index.php</a>. Acesso em: 09 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RIBEIRO, M. C. S. A.; BARATA, R. B. Condições de saúde da população brasileira. <em>In</em>: GIOVANELLA, L. (org.). <strong>Políticas e sistema de saúde no Brasil</strong>. 2. ed. rev. e ampliada. Rio de Janeiro: Editora Fiocruz: Centro Brasileiro de Estudos da Saúde, 2012. cap. 5, p. 143-181.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REDE INTERAGENCIAL DE INFORMAÇÕES PARA A SAÚDE - RIPSA. (org.). <strong>Indicadores básicos para a saúde no Brasil</strong>: conceitos e aplicações. 2. ed. Brasília: Organização Pan-Americana da Saúde, Escritório Regional para as Américas da Organização Mundial da Saúde, 2008. Disponível em: <a href="http://tabnet.datasus.gov.br/tabdata/livroidb/2ed/indicadores.pdf" target="_blank" rel="noopener noreferrer">http://tabnet.datasus.gov.br/tabdata/livroidb/2ed/indicadores.pdf</a>. Acesso em: 08 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RISI, J. B. Informação em saúde no Brasil: a contribuição da Ripasa. <strong>Ciência & Saúde Coletiva</strong>, v. 11, p. 1049-1053, 2006. Disponível em: <a href="https://www.scielo.br/j/csc/a/YntJzFbXMN69KJkfsNvfMNn/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csc/a/YntJzFbXMN69KJkfsNvfMNn/?format=pdf&lang=pt</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ROUQUAYROL, M. Z. Contribuição da epidemiologia. <em>In</em>: CAMPOS, G. W. S. <em>et al.</em> (org.). <strong>Tratado de saúde coletiva</strong>. 2. ed. São Paulo: Hucitec, 2021. p. 343-398.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VIANA, A. L. d’A.; BAPTISTA, T. W. F. Análise de políticas de saúde. <em>In</em>: GIOVANELLA, L. (org.). <strong>Políticas e sistema de saúde no Brasil</strong>. 2. ed. rev. ampliada. Rio de Janeiro: Editora Fiocruz: Centro Brasileiro de Estudos da Saúde, 2012. cap. 2, p. 59-88.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VERMELHO, L. L.; COSTA, A. J. L.; KALE, P. L. Indicadores de saúde. <em>In</em>: MEDRONHO, R. A. (editor-chefe). <strong>Epidemiologia</strong>. 2. ed. São Paulo: Atheneu, 2009. cap. 3, p. 31-82.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item2">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item2" aria-expanded="false" aria-controls="collapse1-item2">Módulo 2</button>
								</h5>
								<div id="collapse1-item2" class="accordion-collapse collapse" aria-labelledby="heading1-item2" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGUIAR, A. C. Informação e atividades de desenvolvimento científico, tecnológico e industrial: tipologia proposta com base em análise funcional. <strong>Ci. Inf</strong>., Brasília, DF, v. 20, n. 1, p. 8, jan./jun. 1991.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ARAÚJO, C. A. A. Correntes teóricas da ciência da informação. <strong>Ci. Inf</strong>., Brasília, DF, v. 38, n. 3, p. 192-204, set./dez., 2009. Disponível em <a href="https://doi.org/10.1590/S0100-19652009000300013" target="_blank" rel="noopener noreferrer">https://doi.org/10.1590/S0100-19652009000300013</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BAPTISTA, P. I. C. F. <strong>Do papiro ao e-book</strong>: uma história social dos suportes da informação. 2014. 48 f. Monografia de conclusão de curso (Graduação em Biblioteconomia e Gestão de Unidade de Informação). Universidade Federal do Rio de Janeiro, Rio de Janeiro. Disponível em: <a href="https://pantheon.ufrj.br/bitstream/11422/265/1/Pedro%20Ivo%20BiblioTCCpdf.pdf" target="_blank" rel="noopener noreferrer">https://pantheon.ufrj.br/bitstream/11422/265/1/Pedro%20Ivo%20BiblioTCCpdf.pdf</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MENEZES, Sabrina. Fonte de informação: definição, tipologia e confiabilidade. <strong>Blog da BIBENG</strong>, 10 ago. 2021. Disponível em: <a href="https://www.ufrgs.br/bibeng/fontes-de-informacao-definicao-tipologia-confiabilidade/#:~:text=Fontes%20de%20informa%C3%A7%C3%A3o%20s%C3%A3o%20essenciais,localizar%20informa%C3%A7%C3%B5es%20e%20dados%20confi%C3%A1veis" target="_blank" rel="noopener noreferrer">https://www.ufrgs.br/bibeng/fontes-de-informacao-definicao-tipologia-confiabilidade/#:~:text=Fontes%20de%20informa%C3%A7%C3%A3o%20s%C3%A3o%20essenciais,localizar%20informa%C3%A7%C3%B5es%20e%20dados%20confi%C3%A1veis</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAFEZEIRO, I.; COSTA, L. C.; KUBRUSLY, R. S. Ciência da Computação, Ciência da Informação, Sistemas de Informação: uma reflexão sobre o papel da informação e da interdisciplinaridade na configuração das tecnologias e das ciências. <strong>Perspec. Ci. Inf</strong>., v. 21, n. 3, p. 111–133, jul. 2016. Disponível em: <a href="https://doi.org/10.1590/1981-5344/2681" target="_blank" rel="noopener noreferrer">https://doi.org/10.1590/1981-5344/2681</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAMPELLO, B. Aula Fontes de Informação I. <em>In</em>: <strong>Curso de Bacharelado em Biblioteconomia na Modalidade a Distância</strong> - Departamento de Biblioteconomia. UAB: Brasília/DF, 2018. </li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GOMES, L. B. <em>et al.</em> As origens do pensamento sistêmico: das partes para o todo. <strong>Pensando fam.</strong>, Porto Alegre, v. 18, n. 2, p. 3-16, dez. 2014.Disponível em: <a href="http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1679-494X2014000200002&lng=pt&nrm=iso" target="_blank" rel="noopener noreferrer">http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1679-494X2014000200002&lng=pt&nrm=iso</a>. Acesso em: 09 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GUIMARÃES, M. C. S.; SILVA, C. H.; SANTANA, R. A. L. Uma abordagem de educação para saúd e a partir da informação científica e tecnológica. <strong>R. Eletr. de Com. Inf. Inov. Saúde</strong>. Rio de Janeiro, v. 6, n. 2, jun., 2012. Disponível em <a href="www.reciis.icict.fiocruz.br" target="_blank" rel="noopener noreferrer">www.reciis.icict.fiocruz.br</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LE COADIC, Y. F. <strong>A Ciência da informação</strong>. 2. ed. Brasília: Briquet de Lemos, 2004.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REDE INTERAGENCIAL DE INFORMAÇÕES PARA A SAÚDE – RIPSA. <strong>Indicadores básicos de saúde no Brasil</strong>: conceitos e aplicações. Brasília: Organização Pan-Americana da Saúde, 2002.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SARACEVIC, T. Ciência da informação: origem, evolução e relações <strong>Perspec. Ci. Inf.</strong>, Belo Horizonte, v. 1, n. 1, p. 41-62, jan./jun. 1996.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SENRA, N. C. <strong>A Coordenação da Estatística Nacional</strong>. O Equilíbrio entre o Desejável e o Possível. 1998. Tese (Doutorado em Ciência da Informação) - Escola de Comunicação – ECO, Universidade Federal do Rio de Janeiro – UFRJ e Instituto Brasileiro de Informação em Ciência e Tecnologia – IBICT, Conselho Nacional de Desenvolvimento Científico e Tecnológico – CNPq, Rio de Janeiro, 1998. Disponível em: <a href="https://ridi.ibict.br/bitstream/123456789/665/1/nelsonsenra1998.pdf" target="_blank" rel="noopener noreferrer">https://ridi.ibict.br/bitstream/123456789/665/1/nelsonsenra1998.pdf</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SILVA, C. H. S. <strong>Fontes em Informação Científica e Tecnológica em Saúde</strong> - ICTS - Aula no curso de especialização em ICTS, FIOCRUZ, Rio de Janeiro, junho 2022. </li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BUENO, S. B.; BLATMANN, U. Fontes de Informação on-line no contexto da área de ciências da saúde. <strong>Pesquisa Brasileira em Ciência da Informação e Biblioteconomia</strong>, v 1, n 1, 2006. Disponível em: <a href="https://brapci.inf.br/#/v/238971" target="_blank" rel="noopener noreferrer">https://brapci.inf.br/#/v/238971</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BUENO, S. B.; BLATMANN, U. Fontes de Informação online no contexto da área de ciências da saúde. <strong>RDBCI:Revista Digital de Biblioteconomia e Ciência da Informação</strong>, v 3, n 1, 2005. Disponível em: <a href="https://brapci.inf.br/#/v/40186" target="_blank" rel="noopener noreferrer">https://brapci.inf.br/#/v/40186</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BUSH, V. As We May Think. <strong>The Atlantic Monthly</strong>, July1945. Disponível em: <a href="https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/" target="_blank" rel="noopener noreferrer">https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/</a></li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAMPELLO, B. S.; CENDÓN, B. V.; KREMER, J. M. (org.). <strong>Fontes de Informação para pesquisadores e profissionais</strong>. Belo Horizonte: Ed. UFMG, 2000.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAMPELLO, Bernadete. Enciclopédias. <em>In</em>: CAMPELLO, B.; CALDEIRA, P. T. (org.). <strong>Introdução às Fontes de Informação</strong>. 2. ed. Belo Horizonte: Autêntica, 2008. (Coleção Ciência da Informação; v. 2).</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GOMEZ, M. N. G.; CANONGIA, C. (org.). <strong>Contribuição para políticas de ICT</strong>. Brasília, DF: IBICT,2001.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OLIVEIRA, A. R. F.; ALENCAR, M. S. M. O uso de aplicativos de saúde para dispositivos móveis como fontes de informação e educação em saúde. <strong>Revista Digital de Biblioteconomia e Ciência da Informação</strong>, v. 15, n.1, 2017. Disponível em: <a href="https://brapci.inf.br/#/v/40893" target="_blank" rel="noopener noreferrer">https://brapci.inf.br/#/v/40893</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OLIVEIRA, C. M.; <em>et al.</em> Typology of health information soucers: decision making support. <strong>Asklepion: Informação em Saúde</strong>, v. 2, n.1, 2022. Disponível em: <a href="https://asklepionrevista.info/asklepion/article/view/38" target="_blank" rel="noopener noreferrer">https://asklepionrevista.info/asklepion/article/view/38</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ROBREDO, J. Do documento impresso à informação nas nuvens: reflexões. <strong>Liinc em Revista</strong>, v. 7, n.1, p. 19-42, 2011. Disponível em: <a href="http://www.ibict.br/liinc" target="_blank" rel="noopener noreferrer">http://www.ibict.br/liinc</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTANA, R. A. L. <strong>Sistema Nacional de Informações Tóxico-Farmacológicas</strong>: o desafio da padronização dos dados. 2005. Dissertação (Mestrado em Saúde Pública) - Escola Nacional de Saúde Pública, Fundação Oswaldo Cruz, Rio de Janeiro, 2005.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTOS, V. P. S.; COELHO, M. T. A. D.; RODRIGUES JUNIOR, N. M. Fontes de Informação em Saúde. <strong>Revista Fontes Documentais</strong>, v. 3, n. 1, 2020. Disponível em: <a href="https://brabci.info.br/index/php/res/v/15116" target="_blank" rel="noopener noreferrer">https://brabci.info.br/index/php/res/v/15116</a>.</li>
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTOS, V. P. S.; COELHO, M. T. A. D.; RODRIGUES JUNIOR, N. M. Fontes de Informação em Saúde: influenciam no conhecimento do HVi/AIDS? <strong>Revista Fontes Documentais</strong>, v 3, n. Ed Especial, 2020. Disponível em: <a href="https://periodicos.ufba.br/index.php/RFD/article/view/57818" target="_blank" rel="noopener noreferrer">https://periodicos.ufba.br/index.php/RFD/article/view/57818</a>.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item3">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item3" aria-expanded="false" aria-controls="collapse1-item3">Módulo 3</button>
								</h5>
								<div id="collapse1-item3" class="accordion-collapse collapse" aria-labelledby="heading1-item3" data-bs-parent="">
									<div class="accordion-body">
										<span class='d-block'><strong>Aula 1</strong></span>
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right"
													data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Nota Informativa nº
														6/2022-CGGAP/DESF/SAPS/MS</strong>. Brasília, DF: MS, 2022. Disponível em:<a
														href=' https://www.gov.br/saude/pt-br/composicao/saps/publicacoes/notas-tecnicas/nota-informativa-no-6-2022-cggap-desf-saps-ms'
														target='_blank' rel="noopener noreferrer">
														https://www.gov.br/saude/pt-br/composicao/saps/publicacoes/notas-tecnicas/nota-informativa-no-6-2022-cggap-desf-saps-ms</a>.
													Acesso em: 10 jan. 2025.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right"
													data-aos-easing="ease-out" data-aos-duration="1200">MONTERASTELLI, A. O que se sabe sobre a varíola do
													macaco em homens bi e homossexuais. <strong>Outra Saúde</strong>, São Paulo, 04/07/2022. Seção Saúde Global.
													Disponível em: <a
														href='https://outraspalavras.net/outrasaude/o-que-se-sabe-sobre-a-variola-dos-macacos-em-homens-gays-e-bissexuais/'
														target='_blank'
														rel="noopener noreferrer">https://outraspalavras.net/outrasaude/o-que-se-sabe-sobre-a-variola-dos-macacos-em-homens-gays-e-bissexuais/</a>.
													Acesso em: 10 jan. 2025. </li>
											</ul>
										</div>



										<span class='d-block'><strong>Aula 2</strong></span>
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right"
													data-aos-easing="ease-out" data-aos-duration="1200">CYRINO, A. P.; TEIXEIRA, R. R. Saúde pública, mudança de comportamento e criação: da educação sanitária à emergência da inteligência coletiva em saúde. <em>In:</em> BERTUCCI, L. M. <strong>Saúde e Educação</strong>: um encontro plural. Rio de Janeiro: Editora Fiocruz, 2017.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MIZUKAMI, M. <strong>Ensino:</strong> as abordagens do processo. São Paulo: EPU, 1986.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MOREL, C.; LOPES, M.; PEREIRA, I. <em>In:</em> MOREL, C.; PEREIRA, I.; LOPES, M. (orgs.). <strong>Educação em saúde:</strong> material didático para formação técnica de agentes comunitários de saúde. Rio de Janeiro: EPSJV, 2020. p. 71-78.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">NESPOLI, G. Da educação sanitária à educação popular em saúde. <em>In:</em> BORNSTEIN, V. et al. (org.). <strong>Curso de Aperfeiçoamento em Educação Popular em Saúde:</strong> textos de apoio. Rio de Janeiro: EPSJV, 2016. p. 47-51.</li>
											</ul>
										</div>

										<span class='d-block'><strong>Aula 3</strong></span>
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right"
													data-aos-easing="ease-out" data-aos-duration="1200">ARAÚJO, R. S. de; CRUZ, P. J. S. C. <strong>Educação popular como prática social e profissional</strong>.  João Pessoa, PB: Editora do CCTA, 2018. Disponível em: <a href='http://www.edpopsus.epsjv.fiocruz.br/sites/default/files/conteudo/midia/arquivos/livroweb.pdf' target='_blank' rel="noopener noreferrer">http://www.edpopsus.epsjv.fiocruz.br/sites/default/files/conteudo/midia/arquivos/livroweb.pdf</a>f. Acesso em:2 dez. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BONETTI, O. P.; ODEH, M. M.; CARNEIRO, F. F. Questioning the Institutionalization of Popular Education in Health in the Unified Health System (SUS – acronym in Portuguese). <strong>Interface</strong> (Botucatu). 18 Supl 2:1413-1426, 2014.  Disponível em: <a href='https://www.scielo.br/j/icse/a/zFggwz3TY3nRfkvFDzvNt6H/?format=pdf&lang=pt' target='_blank' rel="noopener noreferrer">https://www.scielo.br/j/icse/a/zFggwz3TY3nRfkvFDzvNt6H/?format=pdf&lang=pt</a>. Acesso em: 8 dez. 2024. </li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. <strong>Plano de contingência Nacional para Monkeypox:</strong> Centro de Operações de Emergência em Saúde Pública: COE Monkeypox. Versão 2. [Internet]. Brasília, DF: MS, 2022 [citado 29 de março de 2023]. 32 p. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/svsa/resposta-a-emergencias/coes/monkeypox/plano-de-contingencia/plano-de-contingencia/view' target='_blank' rel="noopener noreferrer">https://www.gov.br/saude/pt-br/composicao/svsa/resposta-a-emergencias/coes/monkeypox/plano-de-contingencia/plano-de-contingencia/view</a>. Acesso em: 15 dez. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DANTAS, V. L.; LINHARES, A. M. B. Círculos de cultura: problematização da realidade e protagonismo popular. <strong>Caderno de Educação Popular em Saúde</strong>, Brasília, DF. Ministério da Saúde, [<em>s. d.</em>].</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREIRE, P. <strong>Pedagogia do oprimido</strong>. 17. ed. Rio de Janeiro: Paz e Terra, 1987.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MINISTÉRIO DA SAÚDE. Secretaria de Gestão Estratégica e Participativa. Departamento de Apoio à Gestão Participativa. <strong>Manual para equipes de saúde:</strong> o trabalho educativo nos grupos. Brasília, DF: MS, 2007. <a href='http://www.edpopsus.epsjv.fiocruz.br/sites/default/files/conteudo/midia/arquivos/caderno-educacao-popular-saude-p1.pdf' target='_blank' rel="noopener noreferrer">http://www.edpopsus.epsjv.fiocruz.br/sites/default/files/conteudo/midia/arquivos/caderno-educacao-popular-saude-p1.pdf</a>. Acesso em: 10 jan. 2025.</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REDEPOP. <strong>Educação popular e saúde no brasil e os coletivos de educação popular e saúde:</strong> contextos históricos. Rio de Janeiro: REDEPOP, [<em>s. d.</em>].</li>

												<li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WORLD HEALTH ORGANIZATION. WHO. <strong>Clinical management and infection prevention and control for monkeypox:</strong> interim rapid response guidance [online]. Geneva: WHO; 2022a [citado 27 de março de 2023]. 56 p. Disponível em: <a href='https://www.who.int/publications/i/item/WHO-MPX-Clinical-and-IPC-2022.1' target='_blank' rel="noopener noreferrer">https://www.who.int/publications/i/item/WHO-MPX-Clinical-and-IPC-2022.1</a>. Acesso em: 10 dez. 2024.</li>
											</ul>
										</div>
										
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item4">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item4" aria-expanded="false" aria-controls="collapse1-item4">Módulo 4</button>
								</h5>
								<div id="collapse1-item4" class="accordion-collapse collapse" aria-labelledby="heading1-item4" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei no 8080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências. <strong>Diário Oficial da União</strong>, 20 set. 1990. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/leis/l8080.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/leis/l8080.htm</a>. Acesso em 7 de julh. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 8.142, de 28 de dezembro de 1990. Dispõe sobre a participação da comunidade na gestão do Sistema Único de Saúde (SUS) e sobre as transferências intergovernamentais de recursos financeiros na área da saúde e dá outras providências. <strong>Diário Oficial da União</strong>, 31 dez. 1990. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/leis/l8142.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/leis/l8142.htm</a>. Acesso em 7 de julh. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Decreto nº 100, de 16 de abril de 1991</strong> [Revogado]. Institui a Fundação Nacional de Saúde e dá outras providências. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/decreto/1990-1994/d0100.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/decreto/1990-1994/d0100.htm</a>. Acesso em 7 de julh. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Gabinete do Ministro. <strong>Portaria nº 589, de 20 de maio de 2015</strong>. Institui a Política Nacional de Informação e Informática em Saúde (PNIIS). Disponível em:  <a href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/2015/prt0589_20_05_2015.html" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/saudelegis/gm/2015/prt0589_20_05_2015.html</a>. Acesso em 10 de julh. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Gabinete do Ministro. Portaria nº 1.768, de 30 de julho de 2021. Altera o Anexo XLII da Portaria de Consolidação GM/MS nº 2, de 28 de setembro de 2017, para dispor sobre a Política Nacional de Informação e Informática em Saúde (PNIIS). <strong>Diário Oficial da União</strong>: Seção 1, Brasília, DF, n. 144, p. 45, 02 ago. 2021. Disponível em: <a href="https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-1.768-de-30-de-julho-de-2021-335472332" target="_blank" rel="noopener noreferrer">https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-1.768-de-30-de-julho-de-2021-335472332</a>. Acesso em: 10 de jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria-Executiva. Departamento de Monitoramento e Avaliação do SUS. <strong>Política Nacional de Informação e Informática em Saúde</strong>. Brasília: Ministério da Saúde, 2016. 56 p. Disponível em: <a href="https://www.gov.br/saude/pt-br/composicao/seidigi/publicacoes/pniis-2016.pdf/view" target="_blank" rel="noopener noreferrer">https://www.gov.br/saude/pt-br/composicao/seidigi/publicacoes/pniis-2016.pdf/view</a>. Acesso em: 15 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Gabinete do Ministro. Portaria nº 1.434, de 28 de maio de 2020. Institui o Programa Conecte SUS e altera a Portaria de Consolidação nº 1/GM/MS, de 28 de setembro de 2017, para instituir a Rede Nacional de Dados em Saúde e dispor sobre a adoção de padrões de interoperabilidade em saúde. <strong>Diário Oficial da União</strong>: Seção 1, Brasília, DF, n. 102, p. 231, 29 maio 2020. Disponível em: <a href="https://www.in.gov.br/en/web/dou/-/portaria-n-1.434-de-28-de-maio-de-2020-259143327" target="_blank" rel="noopener noreferrer">https://www.in.gov.br/en/web/dou/-/portaria-n-1.434-de-28-de-maio-de-2020-259143327</a>. Acesso em: 7 de jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Gabinete do Ministro. <strong>Portaria nº 545, de 20 de maio de 1993</strong>. Estabelece normas e procedimentos reguladores do processo de descentralização da gestão das ações e serviços de saúde, através da Norma Operacional Básica - SUS 01/93. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/1993/prt0545_20_05_1993.html" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/saudelegis/gm/1993/prt0545_20_05_1993.html</a>. Acesso em 7 de julh. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>A experiência brasileira em sistemas de informação em saúde</strong>. Ministério da Saúde, Organização Pan-Americana da Saúde, Fundação Oswaldo Cruz. Brasília: Editora do Ministério da Saúde, 2009. (Série B. Textos Básicos de Saúde).</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria Executiva. Departamento de Informática do SUS. <strong>DATASUS Trajetória 1991-2002</strong>. Brasília: Ministério da Saúde, 2002. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/trajetoria_datasus.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/trajetoria_datasus.pdf</a>. Acesso em: 10 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Decreto n° 4.194, de 11 de abril de 2002</strong> [Revogado]. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/decreto/2002/d4194.htm#:~:text=DECRETO%20N%C2%BA%204.194%2C%20DE%2011%20DE%20ABRIL%20DE%202002.&text=Aprova%20a%20Estrutura%20Regimental%20e,que%20lhe%20confere%20o%20art" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/decreto/2002/d4194.htm#:~:text=DECRETO%20N%C2%BA%204.194%2C%20DE%2011%20DE%20ABRIL%20DE%202002.&text=Aprova%20a%20Estrutura%20Regimental%20e,que%20lhe%20confere%20o%20art</a>. Acesso em: 10 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria Executiva. Departamento de Informação e Informática do SUS. <strong>Política Nacional de Informação e Informática em Saúde Proposta Versão 2.0</strong>. Brasília, 29 mar. 2024.  Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/PoliticaInformacaoSaude29_03_2004.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/PoliticaInformacaoSaude29_03_2004.pdf</a>. Acesso em: 15 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAVALCANTE, R. B.; PINHEIRO, M. M. K. Política Nacional de Informação e Informática em Saúde: avanços e limites atuais. <strong>Perspectivas em Gestão & Conhecimento</strong>, v. 1, n. 2, p. 91–104, 2011. Disponível em: <a href="https://periodicos.ufpb.br/ojs2/index.php/pgc/article/view/10487" target="_blank" rel="noopener noreferrer">https://periodicos.ufpb.br/ojs2/index.php/pgc/article/view/10487</a>. Acesso em: 15 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FONSECA, F. C. S. Sistemas de Informação da Atenção à Saúde: da fragmentação à interoperabilidade. <em>In</em>: BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Regulação, Avaliação e Controle. <strong>Sistemas de Informação da Atenção à Saúde</strong>: contextos históricos, avanços e perspectivas no SUS. Organização Pan-Americana da Saúde: Brasília, 2015. p. 9-22.166 p. Disponível em: <a href="https://www.escoladesaude.pr.gov.br/arquivos/File/sistemas_informacao_atencao_saude_contextos_historicos.pdf" target="_blank" rel="noopener noreferrer">https://www.escoladesaude.pr.gov.br/arquivos/File/sistemas_informacao_atencao_saude_contextos_historicos.pdf</a></li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAVALCANTE, R. B.; PINHEIRO, M. M. K. Política Nacional de Informação e Informática em Saúde: avanços e limites atuais. <strong>Perspectivas em Gestão & Conhecimento</strong>, v. 1, n. 2, p. 91-104, 2011. Disponível em: <a href="https://periodicos.ufpb.br/ojs2/index.php/pgc/article/view/10487" target="_blank" rel="noopener noreferrer">https://periodicos.ufpb.br/ojs2/index.php/pgc/article/view/10487</a>. Acesso em: 10 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COELHO NETO, G. C.; CHIORO, A. Afinal, quantos Sistemas de Informação em Saúde de base nacional existem no Brasil?. <strong>Cadernos de Saúde Pública</strong>, v. 37, n. 7, 2021. Disponível em: <a href="https://www.scielo.br/j/csp/a/RzNmvjHqmLhPHZp6gfcdC6H/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csp/a/RzNmvjHqmLhPHZp6gfcdC6H/?format=pdf&lang=pt</a></li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CONFERÊNCIA NACIONAL DE SAÚDE. <strong>Relatório Final da 5ª Conferência Nacional de Saúde</strong> (CNS). Brasília, 1975. Disponível em: <a href="https://www.gov.br/conselho-nacional-de-saude/pt-br/centrais-de-conteudo/publicacoes/relatorios/relatorio-final-da-5a-conferencia-nacional-de-saude/view#:~:text=A%205%C2%AA%20Confer%C3%AAncia%20Nacional%20de,Nacional%20de%20Vigil%C3%A2ncia%20Epidemiol%C3%B3gica%3B%204" target="_blank" rel="noopener noreferrer">https://www.gov.br/conselho-nacional-de-saude/pt-br/centrais-de-conteudo/publicacoes/relatorios/relatorio-final-da-5a-conferencia-nacional-de-saude/view#:~:text=A%205%C2%AA%20Confer%C3%AAncia%20Nacional%20de,Nacional%20de%20Vigil%C3%A2ncia%20Epidemiol%C3%B3gica%3B%204</a>. Acesso em 10 de julh. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JANNNUZZI, P. M. Estatísticas e Políticas Públicas orientadas por evidências no Brasil: o caso das Políticas de Desenvolvimento Social nos anos 2000. <strong>Revista Brasileira de Geografia</strong>, v. 64, n. 1, p. 37-54, 2019. Disponível em: <a href="https://rbg.ibge.gov.br/index.php/rbg/article/view/2096" target="_blank" rel="noopener noreferrer">https://rbg.ibge.gov.br/index.php/rbg/article/view/2096</a>. Acesso em: 7 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JORGE, M. H. P.; LAURENTI, R.; GOTLIEB, S. L. D. O sistema de Informações sobre Mortalidade – SIM: Concepção, Implantação e Avaliação. <em>In</em>: BRASIL. Ministério da Saúde. <strong>A experiência brasileira em sistemas de informação em saúde</strong>. Ministério da Saúde, Organização Pan-Americana da Saúde, Fundação Oswaldo Cruz. Brasília: Editora do Ministério da Saúde, 2009.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MARIN, H. F. Sistemas de informação em saúde: considerações gerais. <strong>J. Health Inform.</strong>, v. 2, n. 1, p. 20-4, 2010. Disponível em: <a href="https://jhi.sbis.org.br/index.php/jhi-sbis/article/view/4/52" target="_blank" rel="noopener noreferrer">https://jhi.sbis.org.br/index.php/jhi-sbis/article/view/4/52</a>. Acesso em: 7 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MENICUCCI, T. M. G. História da reforma sanitária brasileira e do Sistema Único de Saúde: mudanças, continuidades e a agenda atual. <strong>História, Ciências, Saúde-Manguinhos</strong>, Rio de Janeiro, v. 21, n. 1, p. 77–92, jan. 2014. Disponível em: <a href="https://www.scielo.br/j/hcsm/a/bVMCvZshr9RxtXpdh7YPC5x/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/hcsm/a/bVMCvZshr9RxtXpdh7YPC5x/?format=pdf&lang=pt</a></li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REZENDE, F. A. V. S.; SOARES, M. F.; REIS, A. C. Os sistemas de informação em Saúde no Sistema Único de Saúde. <em>In</em>: LEANDRO, B. D. S.; REZENDE, F. A. V. S; PINTO, J. M. C. <strong>Informações e registros em saúde e seus usos no SUS</strong>. Rio de Janeiro: Editora Fiocruz, 2020.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RISI JUNIOR, J. B. Informação e Saúde no Brasil: a contribuição da Ripsa. <strong>Ciência & Saúde Coletiva</strong>, v. 11, n. 4, p. 1049-1053, 2006. Disponível em: <a href="http://www.scielo.br/pdf/csc/v11n4/32340.pdf" target="_blank" rel="noopener noreferrer">http://www.scielo.br/pdf/csc/v11n4/32340.pdf</a>. Acesso em: 7 jul. 2024.</li>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VIACAVA, F. Informações em saúde: a importância dos inquéritos populacionais. <strong>Ciência & Saúde Coletiva</strong>, v. 7, n. 4, p. 607-621, 2002. Disponível em: <a href="https://www.scielo.br/j/csc/a/j8mV4fvjSk7K9brzbdCj77J/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csc/a/j8mV4fvjSk7K9brzbdCj77J/?format=pdf&lang=pt</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Fim do Accordion -->
					</div>
					
				</div>
			</div>
		`,
	},
	glossario: {
		ariaLabel: 'glossario',
		modalSize: 'modal-lg',
		modalTitle: 'Glossário',
		modalBody: `
			<div class="aba">
				<ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="pills-atores-tab" data-bs-toggle="pill" data-bs-target="#pills-atores" type="button" role="tab" aria-controls="pills-atores" aria-selected="true">Atores</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-seguranca-tab" data-bs-toggle="pill" data-bs-target="#pills-seguranca" type="button" role="tab" aria-controls="pills-seguranca" aria-selected="false">Segurança</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-processos-tab" data-bs-toggle="pill" data-bs-target="#pills-processos" type="button" role="tab" aria-controls="pills-processos" aria-selected="false">Processos</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-documentos-tab" data-bs-toggle="pill" data-bs-target="#pills-documentos" type="button" role="tab" aria-controls="pills-documentos" aria-selected="false">Documentos</button>
					</li>
				</ul>
				<div class="tab-content p-0" id="pills-tabContent">
					<!-- Atores -->
					<div class="tab-pane fade show active" id="pills-atores" role="tabpanel" aria-labelledby="pills-atores-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-a" aria-expanded="true" aria-controls="collapse1-a">A</button>
								</h2>
								<div id="collapse1-a" class="accordion-collapse collapse" aria-labelledby="heading1-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>ANVISA</strong></p>
										<p>Agência Nacional de Vigilância Sanitária, autarquia que exerce atividades de regulação, normatização, controle e fiscalização na área de vigilância sanitária.</p>
										<p><strong>Autoridade Nacional Reguladora do Medicamento (ANARME) ou Entidade Reguladora de Moçambique</strong></p>
										<p>Instituição pública, dotada de personalidade jurídica, autonomia administrativa, financeira e patrimonial, que desempenha funções de regulamentação, supervisão, fiscalização e sancionamento, nos termos definidos pela Lei.</p>
										<p><strong>Autoridades Regulatórias</strong></p>
										<p>Instituições que têm poder regulatório, ou seja, autoridades que analisam os dados submetidos e conduzem inspeções. Podem também serem denominadas autoridades competentes.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-c" aria-expanded="false" aria-controls="collapse1-c">C</button>
								</h2>
								<div id="collapse1-c" class="accordion-collapse collapse" aria-labelledby="heading1-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Centro de Pesquisa</strong></p>
										<p>Local onde, usualmente, as atividades ligadas ao estudo são conduzidas. Ensaios Clínicos podem ser conduzidos em um único centro ou em vários centros simultaneamente (Estudos Multicêntricos).</p>
										<p><strong>Comitê de Coordenação</strong></p>
										<p>Comitê organizado pelo patrocinador para coordenar a condução de um estudo multicêntrico.</p>
										<p><strong>Comitê de Ética em Pesquisa (CEP)</strong></p>
										<p>Organização independente, multidisciplinar, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo, por meio da aprovação e revisão contínua do protocolo do estudo e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa.</p>
										<p><strong>Comitê de Ética Independente (IEC)</strong></p>
										<p>Uma organização independente (um conselho de revisão ou um comitê institucional, regional, nacional ou supranacional) constituído por profissionais da área médica/científica e membros pertencentes a outras áreas, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo e assegurar publicamente a sua proteção, através da revisão e aprovação/parecer favorável sobre o protocolo do estudo, adequação dos investigadores, recursos e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa, entre outras atividades. A situação legal, composição, função, operação e exigências regulatórias pertinentes ao Comitê de Ética Independente podem ser diferentes em cada país, mas devem permitir que ele atue em consonância com o Guia das BPC (ICH).</p>
										<p><strong>Comitê Independente de Monitoramento de Dados (IDMC)</strong></p>
										<p>Também conhecido como Conselho de Monitoramento de Dados e Segurança, Comitê de Monitoramento ou Comitê de Monitoramento de Dados. É um comitê independente de monitoramento de dados que, pode ser implementado pelo investigador, para avaliar periodicamente o desenvolvimento de um estudo clínico, os dados de segurança e os limites críticos de eficácia, além de recomendar ao patrocinador a continuidade, a modificação, ou o encerramento do estudo.</p>
										<p><strong>Comitê Institucional de Bioética Para Saúde (CIBS)</strong></p>
										<p>Entidade criada pelo Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique, com competências delegadas para avaliação de aspectos éticos de propostas de investigação em saúde a nível de uma ou mais instituições, e que apenas efetua avaliação de protocolos de investigação provenientes ou realizados em colaboração com as respectivas instituições.</p>
										<p><strong>Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique</strong></p>
										<p>Órgão independente multidisciplinar, que faz avaliação dos protocolos de investigação na área da saúde para aferir a aplicação dos princípios éticos na realização da pesquisa tendo em conta a proteção dos participantes. Assegura a proteção dos direitos, segurança e bem-estar dos participantes nos estudos. Faz também a tutela e monitoria da atividade dos Comités Institucionais de Bioética para a Saúde (CIBS). O CNBS e os CIBS avaliam os aspectos metodológicos de protocolos de investigação quando os Comitês Científicos das instituições proponentes de protocolos não estiverem em funcionamento, e sempre que houver aspectos metodológicos que impactem a Bioética.</p>
										<p><strong>CONEP</strong></p>
										<p>Comissão Nacional de Ética em Pesquisa, é uma instância colegiada, de natureza consultiva, deliberativa, normativa, educativa e independente, vinculada ao Conselho Nacional de Saúde/MS.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-i">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-i" aria-expanded="false" aria-controls="collapse1-i">I</button>
								</h2>
								<div id="collapse1-i" class="accordion-collapse collapse" aria-labelledby="heading1-i" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Instituição</strong></p>
										<p>Qualquer entidade, agência ou instalação médica ou odontológica onde sejam conduzidos estudos clínicos.</p>
										<p><strong>Investigador de Coordenação</strong></p>
										<p>Um investigador responsável pela coordenação de investigadores de diferentes centros participantes de um estudo multicêntrico.</p>
										<p><strong>Investigador/Investigador Principal/Pesquisador</strong></p>
										<p>Pessoa responsável por conduzir o estudo clínico em um centro de pesquisa. Pesquisador responsável ou Investigador Principal é o responsável legal pelo estudo, líder da equipe do estudo. Um médico qualificado (ou dentista, conforme o caso), que for um investigador ou um subinvestigador do ensaio, deve ser responsável por todas as decisões médicas (ou odontológicas) relacionadas ao ensaio.</p>
										<p><strong>Investigador/ Instituição</strong></p>
										<p>Expressão que significa “o investigador e/ou instituição”, quando e onde solicitada pelas exigências regulatórias aplicáveis.</p>
										<p><strong>Investigador-Patrocinador</strong></p>
										<p>Indivíduo que implementa e conduz, sozinho ou em grupo, um estudo clínico e sob cuja imediata direção o produto sob investigação é administrado, fornecido ou utilizado por um paciente. O termo não inclui qualquer pessoa que não um indivíduo (ex.: não inclui uma corporação ou uma agência). As responsabilidades de um investigador-patrocinador incluem tanto as do patrocinador como as do investigador.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-o">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-o" aria-expanded="false" aria-controls="collapse1-o">O</button>
								</h2>
								<div id="collapse1-o" class="accordion-collapse collapse" aria-labelledby="heading1-o" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Organização de Pesquisa Contratada (CRO)</strong></p>
										<p>Uma pessoa ou organização (comercial, acadêmica ou outra) contratada pelo patrocinador para realizar um ou mais de seus deveres e funções relativos a estudos clínicos.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-p" aria-expanded="false" aria-controls="collapse1-p">P</button>
								</h2>
								<div id="collapse1-p" class="accordion-collapse collapse" aria-labelledby="heading1-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Participante de Pesquisa</strong></p>
										<p>Pela regulamentação brasileira, indivíduo que, de forma esclarecida e voluntária, ou sob o esclarecimento e autorização de seu(s) responsável(eis) legal(ais), aceita ser pesquisado. Podem pertencer ao grupo dos que recebem o produto sob investigação ou ao grupo de controle. Além disso, podem ser portadores de alguma comorbidade/patologia ou indivíduos saudáveis.</p>
										<p><strong>Populações Vulneráveis</strong></p>
										<p>Indivíduos cuja vontade de participar do estudo possa ser indevidamente influenciada pela expectativa, justificada ou não, de benefícios associados à participação, ou de uma reação negativa, em caso de recusa, por parte de membros seniores de alguma hierarquia da qual façam parte ou à qual estejam submetidos. Exemplos são indivíduos pertencentes a grupos com uma estrutura hierárquica constituída, como estudantes de medicina, farmácia, odontologia e enfermagem, funcionários de hospitais e laboratórios, da indústria farmacêutica, membros das forças armadas e detentos. Outros participantes de pesquisa vulneráveis são aqueles portadores de doenças incuráveis ou que estejam em casas de repouso, pessoas desempregadas ou miseráveis, pacientes em situações de emergência, grupos étnicos minoritários, pessoas sem moradia, nômades, refugiados, menores e aqueles incapazes de atestar o próprio consentimento.</p>
										<p><strong>Patrocinador</strong></p>
										<p>Pessoa física ou jurídica, pública ou privada que apoia a pesquisa de variadas formas, seja com financiamento, infraestrutura, recursos humanos ou apoio institucional.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-r" aria-expanded="false" aria-controls="collapse1-r">R</button>
								</h2>
								<div id="collapse1-r" class="accordion-collapse collapse" aria-labelledby="heading1-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Representante legal</strong></p>
										<p>Pessoa física ou jurídica autorizada pela legislação aplicável para consentir, em nome do participante de pesquisa, sua participação em um estudo clínico.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-s">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-s" aria-expanded="false" aria-controls="collapse1-s">S</button>
								</h2>
								<div id="collapse1-s" class="accordion-collapse collapse" aria-labelledby="heading1-s" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Sub Investigador</strong></p>
										<p>Qualquer membro específico da equipe do estudo clínico, designado e supervisionado pelo investigador no centro de pesquisa para conduzir procedimentos essenciais e/ou tomar decisões importantes relacionadas ao estudo.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-t">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-t" aria-expanded="false" aria-controls="collapse1-t">T</button>
								</h2>
								<div id="collapse1-t" class="accordion-collapse collapse" aria-labelledby="heading1-t" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Testemunha Imparcial</strong></p>
										<p>Pessoa, não relacionada ao estudo, não sendo injustamente influenciada pelas pessoas nele envolvidas, que participe do processo de consentimento, inclusive registrando participação assinando o Termo de Consentimento Livre e Esclarecido (TCLE), caso o participante de pesquisa, ou seu responsável legal, não saiba ler e/ou escrever, garantindo assim que as informações redigidas destinadas aos participantes sejam as mesmas informadas verbalmente.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Segurança -->
					<div class="tab-pane fade" id="pills-seguranca" role="tabpanel" aria-labelledby="pills-seguranca-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-c" aria-expanded="true" aria-controls="collapse2-c">C</button>
								</h2>
								<div id="collapse2-c" class="accordion-collapse collapse" aria-labelledby="heading2-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Comparador (Produto)</strong></p>
										<p>Um produto sob investigação ou comercializado ou placebo, usado como referência em um estudo clínico.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-d">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-d" aria-expanded="false" aria-controls="collapse2-d">D</button>
								</h2>
								<div id="collapse2-d" class="accordion-collapse collapse" aria-labelledby="heading2-d" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Desvio de Protocolo</strong></p>
										<p>Qualquer não cumprimento dos procedimentos ou requisitos definidos na versão aprovada do protocolo, sem implicações maiores na integridade do ensaio, na qualidade dos dados ou nos direitos e segurança dos participantes.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-e" aria-expanded="false" aria-controls="collapse2-e">E</button>
								</h2>
								<div id="collapse2-e" class="accordion-collapse collapse" aria-labelledby="heading2-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Evento Adverso (EA)</strong></p>
										<p>Qualquer ocorrência médica inconveniente ou sinal desfavorável ou não planejado (incluindo achados laboratoriais anormais), sintoma, ou doença temporariamente associada com o uso de um produto farmacêutico sob investigação, relacionadas ou não ao produto farmacêutico sob investigação, e que não, necessariamente, tenha uma relação causal com o tratamento.</p>
										<p><strong>Evento Adverso Grave (EAG) / Evento Adverso Sério (EAS)</strong></p>
										<p>Qualquer ocorrência médica adversa que, em qualquer dose: - resulte em morte, - represente risco à vida, - implique em hospitalização ou prolongamento de uma hospitalização existente, - resulte em persistente inabilidade/incapacidade significativa, ou - cause anomalia congênita.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-p" aria-expanded="false" aria-controls="collapse2-p">P</button>
								</h2>
								<div id="collapse2-p" class="accordion-collapse collapse" aria-labelledby="heading2-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Placebo</strong></p>
										<p>Formulação sem efeito farmacológico, administrada ao participante do ensaio clínico com a finalidade de mascaramento ou de ser comparador.</p>
										<p><strong>Produto Investigacional (ou produto experimental)</strong></p>
										<p>Forma farmacêutica de um ingrediente ativo ou placebo que está sendo provada ou usada como referência em um estudo clínico (Ensaio Clínico). Incluindo produto com autorização prévia de comercialização, mas utilizado ou formulado ou empacotado de maneira diferente daquela aprovada.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-r" aria-expanded="false" aria-controls="collapse2-r">R</button>
								</h2>
								<div id="collapse2-r" class="accordion-collapse collapse" aria-labelledby="heading2-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Reação Adversa ao medicamento (RAM)</strong></p>
										<p>Qualquer resposta prejudicial ou indesejável, não intencional, a um medicamento, que ocorre nas doses usualmente empregadas para profilaxia, diagnóstico ou terapia de doenças. No conceito de RAM pode-se observar a existência de uma relação causal entre o uso do medicamento e a ocorrência do evento.</p>
										<p><strong>Reação Adversa Inesperada ao medicamento</strong></p>
										<p>Uma reação adversa, cuja natureza ou severidade não seja condizente com as informações aplicáveis ao produto (ex.: Brochura do Investigador para produtos sob investigação não aprovados ou bula/resumo das características do produto para os aprovados).</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-v">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-v" aria-expanded="false" aria-controls="collapse2-v">V</button>
								</h2>
								<div id="collapse2-v" class="accordion-collapse collapse" aria-labelledby="heading2-v" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Violação de protocolo de ensaio clínico</strong></p>
										<p>Desvio de protocolo de ensaio clínico que possa afetar a qualidade dos dados, que comprometa a integridade do estudo ou que possa afetar a segurança ou os direitos dos participantes do ensaio clínico.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Processos -->
					<div class="tab-pane fade" id="pills-processos" role="tabpanel" aria-labelledby="pills-processos-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-a" aria-expanded="true" aria-controls="collapse3-a">A</button>
								</h2>
								<div id="collapse3-a" class="accordion-collapse collapse" aria-labelledby="heading3-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Adesão (em relação aos estudos)</strong></p>
										<p>Seguir todas as exigências relativas ao estudo, às Boas Práticas Clínicas e às exigências regulatórias aplicáveis.</p>
										<p><strong>Acesso Direto</strong></p>
										<p>Permissão para examinar, analisar, verificar e reproduzir quaisquer registros e relatórios que sejam importantes para avaliar o estudo clínico. Qualquer parte (ex.: autoridades regulatórias nacionais e estrangeiras, auditores e monitores do patrocinador) com acesso direto deverá ter o devido cuidado, com as restrições estabelecidas pelas exigências regulatórias aplicáveis, para que se mantenha confidencialidade dos participantes de pesquisa e das informações de propriedade do patrocinador.</p>
										<p><strong>Assentimento livre e esclarecido</strong></p>
										<p>Anuência do participante da pesquisa – criança, adolescente ou indivíduos impedidos de forma temporária ou não de consentir, na medida de sua compreensão e respeitadas suas singularidades, após esclarecimento sobre a natureza da pesquisa, justificativa, objetivos, métodos, potenciais benefícios e riscos. A obtenção do assentimento não elimina a necessidade do consentimento do responsável.</p>
										<p><strong>Auditoria</strong></p>
										<p>Verificação independente e sistemática das atividades e documentos relativos ao estudo, a fim de determinar se o protocolo, os procedimentos operacionais padrões do patrocinador (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis estão sendo cumpridas.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-b">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-b" aria-expanded="false" aria-controls="collapse3-b">B</button>
								</h2>
								<div id="collapse3-b" class="accordion-collapse collapse" aria-labelledby="heading3-b" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Bem-estar (dos participantes de pesquisa)</strong></p>
										<p>Integridade física e mental dos indivíduos envolvidos em um estudo clínico.</p>
										<p><strong>Boas Práticas Clínicas (BPC)</strong></p>
										<p>Padrão de qualidade ética e científica para o planejamento, condução, registro e relato de estudos clínicos que envolvam a participação de seres humanos. O objetivo é assegurar a proteção dos direitos, integridade e confidencialidade dos participantes da pesquisa, assim como, a credibilidade dos dados e a precisão dos resultados.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-c" aria-expanded="false" aria-controls="collapse3-c">C</button>
								</h2>
								<div id="collapse3-c" class="accordion-collapse collapse" aria-labelledby="heading3-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Caráter Cego/Mascaramento</strong></p>
										<p>Procedimento no qual uma ou mais partes envolvidas no estudo é mantida desinformada sobre as indicações do tratamento. O caráter cego geralmente refere-se aos participantes de pesquisa. Caso o estudo seja duplo-cego, significa que não somente o participante, mas os investigadores, monitores e, em alguns casos, os analistas de dados são mantidos desinformados quanto ao tratamento.</p>
										<p><strong>Confidencialidade </strong></p>
										<p>Prevenir a divulgação para outros, que não os indivíduos autorizados, sobre a identidade de um participante de pesquisa ou de uma informação de propriedade do patrocinador.</p>
										<p><strong>Consentimento Livre e Esclarecido</strong></p>
										<p>Processo através do qual um participante confirma voluntariamente sua intenção de participar em um ensaio em particular, após ter sido informado de todos os aspectos do ensaio que forem relevantes para a decisão do participante de entrar no estudo.</p>
										<p><strong>Controle de Qualidade</strong></p>
										<p>Técnicas e atividades operacionais adotadas dentro do sistema de garantia de qualidade para assegurar que todas as exigências de qualidade relacionadas às atividades do estudo sejam atendidas.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-e" aria-expanded="false" aria-controls="collapse3-e">E</button>
								</h2>
								<div id="collapse3-e" class="accordion-collapse collapse" aria-labelledby="heading3-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Estudo Clínico</strong></p>
										<p>Qualquer investigação em seres humanos que pretenda descobrir ou verificar os efeitos clínicos, farmacêuticos e/ou outros efeitos farmacodinâmicos de um produto sob investigação; e/ou identificar quaisquer reações adversas a um produto sob investigação; e/ou estudar a absorção, distribuição, metabolismo e excreção de um produto sob investigação com o objetivo de apurar sua segurança e/ou eficácia.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-f">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-f" aria-expanded="false" aria-controls="collapse3-f">F</button>
								</h2>
								<div id="collapse3-f" class="accordion-collapse collapse" aria-labelledby="heading3-f" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Farmacocinética</strong></p>
										<p>Em geral, são todas as modificações que um sistema biológico produz em um princípio ativo. É o estudo da cinética (relação quantitativa entre a variável independente tempo e a variável dependente concentração) dos processos de absorção, distribuição, biotransformação e excreção dos medicamentos (princípios ativos e/ou seus metabolitos).</p>
										<p><strong>Farmacodinâmica</strong></p>
										<p>Modificações que um princípio ativo produz em um sistema biológico, ou seja, é o estudo dos efeitos bioquímicos e fisiológicos dos medicamentos e seus mecanismos de ação.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-g">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-g" aria-expanded="false" aria-controls="collapse3-g">G</button>
								</h2>
								<div id="collapse3-g" class="accordion-collapse collapse" aria-labelledby="heading3-g" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Garantia de Qualidade</strong></p>
										<p>Todas as ações planejadas e sistemáticas realizadas para garantir que o estudo seja desenvolvido e os dados sejam gerados, documentados, relatados e arquivados conforme as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-i">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-i" aria-expanded="false" aria-controls="collapse3-i">I</button>
								</h2>
								<div id="collapse3-i" class="accordion-collapse collapse" aria-labelledby="heading3-i" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Inspeção</strong></p>
										<p>Atividade de uma autoridade regulatória a fim de avaliar documentos, instalações, registros e quaisquer outros recursos que se considerem relacionados ao estudo clínico, os quais podem estar localizados na instituição onde está sendo conduzido o estudo, nas dependências do patrocinador e/ou nas organizações de pesquisa contratadas (CRO), ou em outros estabelecimentos tidos como apropriados pelas autoridades regulatórias.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-m">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-m" aria-expanded="false" aria-controls="collapse3-m">M</button>
								</h2>
								<div id="collapse3-m" class="accordion-collapse collapse" aria-labelledby="heading3-m" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Monitoria</strong></p>
										<p>Atividade de acompanhamento do progresso de um estudo clínico, garantindo que sua condução, registros e relatos sejam realizados de acordo com o protocolo, os Procedimentos Operacionais Padrão (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-r" aria-expanded="false" aria-controls="collapse3-r">R</button>
								</h2>
								<div id="collapse3-r" class="accordion-collapse collapse" aria-labelledby="heading3-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Randomização</strong></p>
										<p>Processo de designação aleatória dos participantes de pesquisa ao tratamento ou ao grupo-controle, de forma a reduzir parcialidades.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Documentos  -->
					<div class="tab-pane fade" id="pills-documentos" role="tabpanel" aria-labelledby="pills-documentos-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-a" aria-expanded="true" aria-controls="collapse4-a">A</button>
								</h2>
								<div id="collapse4-a" class="accordion-collapse collapse" aria-labelledby="heading4-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Aprovação (em relação às Instâncias Regulatórias)</strong></p>
										<p>É a decisão afirmativa de que o estudo clínico foi analisado e pode ser conduzido, seguindo as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis, observando as recomendações específicas de cada uma destas instâncias.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-b">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-b" aria-expanded="false" aria-controls="collapse4-b">B</button>
								</h2>
								<div id="collapse4-b" class="accordion-collapse collapse" aria-labelledby="heading4-b" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Brochura do Investigador</strong></p>
										<p>Documento que apresenta a compilação dos dados clínicos e não clínicos acerca dos produtos sob investigação, relevante para o estudo do(s) produto(s) sob investigação em seres humanos. No caso de medicamento já comercializado pode ser substituído pela Bula.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-c" aria-expanded="false" aria-controls="collapse4-c">C</button>
								</h2>
								<div id="collapse4-c" class="accordion-collapse collapse" aria-labelledby="heading4-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Certificado de Auditoria</strong></p>
										<p>Declaração de confirmação do auditor de que a auditoria foi realizada.</p>
										<p><strong>Código de Identificação do Participante</strong></p>
										<p>Código identificador exclusivo, designado pelo investigador (ou pelo patrocinador) para cada participante de pesquisa, com intuito de manter sua identidade em sigilo.</p>
										<p><strong>Contrato</strong></p>
										<p>Formato de documento que apresenta o acordo por escrito, datado e assinado entre duas ou mais partes envolvidas que estabeleça quaisquer determinações de delegação e distribuição de tarefas e obrigações e, se apropriado, sobre assuntos financeiros. O protocolo pode servir de base para o contrato.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-d">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-d" aria-expanded="false" aria-controls="collapse4-d">D</button>
								</h2>
								<div id="collapse4-d" class="accordion-collapse collapse" aria-labelledby="heading4-d" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Dados Fonte</strong></p>
										<p>Todas as informações dos registros originais, sendo cópias autenticadas de registros originais de achados clínicos, observações ou ainda outras atividades de uma pesquisa clínica necessárias para a reconstrução e avaliação do estudo. Os dados fonte estão contidos nos documentos fonte (registros originais ou cópias autenticadas).</p>
										<p><strong>Documentação</strong></p>
										<p>Todos os registros, sob qualquer forma (incluindo dados escritos, eletrônicos, magnéticos e ópticos, eletrocardiogramas, raios-X e demais exames de imagem, entre outros), que descrevem ou registram os métodos, condutas e/ou resultados de um estudo, os fatores que o afetaram e as ações realizadas.</p>
										<p><strong>Documentos Essenciais</strong></p>
										<p>Documentos que, individual ou coletivamente, permitem a avaliação da condução ética e da qualidade dos dados produzidos por um estudo clínico.</p>
										<p><strong>Documentos Fonte</strong></p>
										<p>Documentos, dados e registros originais (ex.: registros hospitalares, tabelas clínicas e administrativas, anotações laboratoriais, memorandos, diários de paciente ou checklists de avaliação, registros de prescrição farmacêutica, dados registrados por documentos automatizados, cópias ou transcrições autenticadas após verificação de sua precisão, microficha, negativos fotográficos, microfilmes ou registros magnéticos, raios-X, arquivos de pacientes e registros arquivados na farmácia, nos laboratórios e nos departamentos envolvidos no estudo clínico).</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-e" aria-expanded="false" aria-controls="collapse4-e">E</button>
								</h2>
								<div id="collapse4-e" class="accordion-collapse collapse" aria-labelledby="heading4-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Emenda ao Protocolo</strong></p>
										<p>Documento que descreve as alterações ou esclarecimentos formais feitos ao protocolo.</p>
										<p><strong>Exigências Regulatórias Aplicáveis</strong></p>
										<p>Quaisquer leis ou regulamentos sobre a condução de estudos que envolvem seres humanos, com produtos sob investigação ou não.</p>
										<p><strong>Ficha Clínica (Case Report Form - CRF)</strong></p>
										<p>Documento impresso, óptico ou eletrônico elaborado para registrar todas as informações exigidas pelo protocolo a serem relatadas ao patrocinador sobre cada participante de pesquisa.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-p" aria-expanded="false" aria-controls="collapse4-p">P</button>
								</h2>
								<div id="collapse4-p" class="accordion-collapse collapse" aria-labelledby="heading4-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Parecer</strong></p>
										<p>Documento que emite o resultado da análise em relação ao estudo submetido ao Comitê de Ética em Pesquisa (CEP).</p>
										<p><strong>Procedimentos Operacionais Padrão (POP)</strong></p>
										<p>Instruções escritas e detalhadas para a uniformidade de desempenho de uma determinada função.</p>
										<p><strong>Produto sob investigação</strong></p>
										<p>Forma de apresentação farmacêutica de um princípio ativo ou placebo sendo testado ou usado como referência em um estudo clínico, incluindo um produto com autorização comercial / de comercialização quando usado ou apresentado (formulado ou embalado) sob uma forma diferente da aprovada, ou usado para uma indicação não aprovada, ou quando usado para obter maiores informações sobre a forma aprovada.</p>
										<p><strong>Protocolo</strong></p>
										<p>Documento que descreve toda a base do estudo, contendo justificativa, objetivos, desenho, metodologia, considerações estatísticas e organização do estudo. No entanto, estas informações podem ser fornecidas, de forma mais detalhada, por outros documentos referenciados pelo protocolo. Considera-se o termo protocolo o documento em si e às emendas ao protocolo.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-r" aria-expanded="false" aria-controls="collapse4-r">R</button>
								</h2>
								<div id="collapse4-r" class="accordion-collapse collapse" aria-labelledby="heading4-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Relatório de Auditoria</strong></p>
										<p>Avaliação por escrito realizada pelo auditor do patrocinador sobre os resultados e impressões da auditoria.</p>
										<p><strong>Relatório de Estudo Clínico</strong></p>
										<p>Descrição por escrito do ensaio/estudo de qualquer agente terapêutico, profilático ou de diagnóstico conduzido em seres humanos, no qual as descrições clínicas e estatísticas, apresentações e análises estão plenamente integradas em um único relatório.</p>
										<p><strong>Relatório Interino do Estudo Clínico</strong></p>
										<p>Relatório contendo os resultados intermediários e sua avaliação baseada em análises realizadas no decorrer de um estudo.</p>
										<p><strong>Relatório de Monitoria</strong></p>
										<p>Relatório que descreve os achados e as impressões do monitor para o patrocinador, após cada visita de monitoria do estudo e/ou outros comunicados relacionados, de acordo com os POP do patrocinador.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-t">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-t" aria-expanded="false" aria-controls="collapse4-t">T</button>
								</h2>
								<div id="collapse4-t" class="accordion-collapse collapse" aria-labelledby="heading4-t" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Trilha de Auditoria</strong></p>
										<p>Documentação que permite a reconstrução do curso dos eventos e /ou achados.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`,
	},
};

// Get all buttons and links that have "modal" in the data-bs-toggle
const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

document.addEventListener('DOMContentLoaded', function (event) {
	//do work

	modalButtons.forEach(btn => {
		// Check if the modal exist
		const modalId = btn.getAttribute('data-bs-target').slice(1);

		const createdModalId = document.getElementById(modalId);

		if (!createdModalId) {
			// If don't exist create one
			createModal(modalId);
		}
	});
});

function createModal(id) {
	const newModal = document.createElement('div');
	const modalLabel = id.slice(6);

	newModal.classList.add('modal', 'fade');
	newModal.setAttribute('id', id);
	newModal.setAttribute('tabindex', '-1');
	newModal.setAttribute('aria-labelledby', modalLabel);
	newModal.setAttribute('aria-hidden', 'true');

	newModal.innerHTML = `
		<div class="modal-dialog ${modalInfos[modalLabel].modalSize}">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="${modalInfos[modalLabel].ariaLabel}">${modalInfos[modalLabel].modalTitle}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					${modalInfos[modalLabel].modalBody}
				</div>
				<div class="modal-footer">
					<button type="button" class="fio-button fio-button-primary" data-bs-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	`;

	document.body.appendChild(newModal);
}
