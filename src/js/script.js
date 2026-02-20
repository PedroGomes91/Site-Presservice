document.addEventListener("DOMContentLoaded", () => {
  const conteudo = document.getElementById("conteudo-principal");

  const paginas = {
    home: `
      <div class="home">
        <div class="destaque">
            <div class="banner">
              <img src="./src/imagens/Banner.jpg" alt="Vista Urbana de Curitiba">
            </div>
            <div class="logo-banner">
              <img src="./src/imagens/Presservice-logo.png" alt="Logo Presservice">
            </div>
            <h1>SOMOS A ESCOLHA DEFINITIVA,</h1>
            <h2>PARA SÍNDICOS QUE NÃO PODEM ERRAR.</h2>
            <a href="#unidades" class="btn-unidades">Solicite Seu Orçamento!</a>
        </div>
      </div>
      <section class="cases-resumo" id="cases-resumo">
        <div class="cases-container">
          <div class="cases-item">
            <div class="numero-unidade">
              <h3 class="numero" data-valor="102">0</h3>
              <span class="unidade">Milhões de m²</span>
            </div>
            <p class="descricao">Em obras executadas</p>
          </div>
          <div class="cases-item">
            <div class="numero-unidade">
              <h3 class="numero" data-valor="25">0</h3>
              <span class="unidade">Anos</span>
            </div>
            <p class="descricao">De experiência</p>
          </div>
          <div class="cases-item">
            <div class="numero-unidade">
              <h3 class="numero" data-valor="157">0</h3>
              <span class="unidade">Obras</span>
            </div>
            <p class="descricao">Realizadas</p>
          </div>
        </div>
        <a href="#casesdesucesso" class="btn-cases">Veja nossos Cases de Sucesso</a>
      </section>
      <section class="servicos-resumo">
        <div class="servicos-container">
          <!-- SVGs corrigidos e completos aqui -->
          <div class="servico-item">
            <div class="icone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="icone-svg">
                <path d="M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z" fill="currentColor"/>
              </svg>
            </div>
            <p class="texto">Tratamento de manifestações patológicas</p>
          </div>
          <div class="servico-item">
            <div class="icone">
              <img src="./src/imagens/mosaic.png" alt="Mosaic">
            </div>
            <p class="texto">Recuperação de revestimentos</p>
          </div>
          <div class="servico-item">
            <div class="icone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icone-svg">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" fill="currentColor"/>
              </svg>
            </div>
            <p class="texto">Inspeção técnica</p>
          </div>
          <div class="servico-item">
            <div class="icone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4000 6000" class="icone-svg">
                <path d="M3040 5107 c-25 -7 -63 -21 -85 -32 -28 -12 -337 -315 -1012 -989 -780 -778 -978 -981 -1002 -1026 -73 -138 -62 -300 29 -422 l39 -51 -36 -40 c-19 -22 -47 -65 -62 -96 -23 -49 -26 -68 -26 -161 0 -126 20 -180 101 -276 l52 -61 -259 -374 c-143 -206 -266 -393 -275 -416 -22 -58 -15 -177 13 -225 l20 -34 -29 -50 c-53 -89 -130 -247 -166 -339 -66 -167 -45 -302 63 -410 70 -71 141 -99 245 -100 73 0 94 4 147 29 165 76 238 247 183 428 -12 40 -48 129 -81 197 -32 68 -59 128 -59 132 0 5 11 11 25 15 14 3 196 125 406 270 l381 263 61 -52 c97 -82 151 -102 277 -102 94 0 111 3 161 27 30 15 73 43 94 61 l39 34 56 -37 c80 -55 141 -73 235 -73 88 1 143 17 215 63 25 16 477 463 1006 992 1048 1050 990 986 1017 1129 14 76 -3 173 -44 249 -23 44 -174 200 -717 741 -642 641 -691 687 -751 713 -75 33 -191 43 -261 23z m165 -198 c34 -9 134 -105 707 -677 387 -386 675 -681 684 -701 48 -100 20 -181 -101 -301 l-75 -75 -782 783 -783 782 80 80 c114 115 168 137 270 109z m292 -1111 c425 -425 773 -777 773 -783 0 -6 -286 -296 -635 -645 l-635 -635 -782 783 -783 782 635 635 c349 349 639 635 645 635 5 0 358 -348 782 -772z m-1420 -1420 c425 -425 773 -778 773 -784 0 -16 -150 -159 -190 -180 -44 -23 -133 -23 -175 -1 -16 8 -332 319 -702 689 -577 578 -673 679 -682 713 -25 93 -7 139 98 248 46 48 89 87 95 87 6 0 359 -348 783 -772z m-428 -432 c543 -543 512 -504 427 -545 -46 -23 -118 -27 -163 -10 -33 12 -797 770 -820 813 -25 47 -19 108 18 176 17 33 35 60 38 60 3 0 228 -222 500 -494z m-143 -464 c-2 -2 -163 -113 -357 -248 -376 -260 -389 -267 -436 -222 -48 45 -42 58 224 443 l246 356 163 -162 c90 -90 162 -165 160 -167z m-730 -1040 c30 -79 31 -129 2 -172 -60 -88 -172 -92 -241 -10 -56 66 -45 124 61 335 l54 110 51 -100 c27 -55 60 -128 73 -163z"/>
                <path d="M2223 3798 c-484 -483 -483 -482 -450 -544 9 -16 276 -288 594 -605 616 -614 608 -608 670 -575 15 8 226 213 468 455 l440 441 0 45 0 45 -595 595 c-586 586 -596 595 -635 595 -39 0 -48 -8 -492 -452z m1132 -1138 l-355 -355 -497 497 -498 498 355 355 355 355 497 -497 498 -498 -355 -355z"/>
              </svg>
            </div>
            <p class="texto">Calafetação de esquadrias</p>
          </div>
          <div class="servico-item">
            <div class="icone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icone-svg">
                <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z" fill="currentColor"/>
              </svg>
            </div>
            <p class="texto">Reparo de trincas, fissuras e destacamentos</p>
          </div>
        </div>
        <div class="servicos-botao">
          <a href="#servicosmenu" class="btn-servicos">Veja nossos Serviços</a>
        </div>
      </section>
      <section class="fornecedores">
        <div class="fornecedores-titulo-container">
          <h1 class="fornecedores-titulo">Nossos Fornecedores</h1>
        </div>
        <div class="carrossel-fornecedores">
          <div class="faixa-fornecedores">
            <!-- suas marcas aqui (mantive como estava) -->
            <img src="./src/imagens/suvinil.jpg" alt="Logo da marca Suvinil">
            <img src="./src/imagens/sherwin-williams.jpg" alt="Logo da marca Sherwin Williams">
            <img src="./src/imagens/vedacit.jpg" alt="Logo da marca Vedacit">
            <img src="./src/imagens/quartzolit.png" alt="Logo da marca Quartzolit">
            <img src="./src/imagens/sika.jpg" alt="Logo da marca Sika">
            <img src="./src/imagens/bosch.png" alt="Logo da marca Bosch">
            <img src="./src/imagens/makita.png" alt="Logo da marca Makita">
            <img src="./src/imagens/dewalt.png" alt="Logo da marca Dewalt">
            <img src="./src/imagens/vonder.png" alt="Logo da marca Vonder">
            <img src="./src/imagens/3m.png" alt="Logo da marca 3M">
            <img src="./src/imagens/tigre.png" alt="Logo da marca Tigre">
            <img src="./src/imagens/viapol.jpg" alt="Logo da marca Viapol">
            <img src="./src/imagens/votorantim.png" alt="Logo da marca Votorantim">
            <img src="./src/imagens/gerdau.png" alt="Logo da marca Gerdau">
            <img src="./src/imagens/atlas.png" alt="Logo da marca Atlas">
            <!-- Duplicadas para loop -->
            <img src="./src/imagens/suvinil.jpg" alt="Logo da marca Suvinil">
            <img src="./src/imagens/sherwin-williams.jpg" alt="Logo da marca Sherwin Williams">
            <img src="./src/imagens/vedacit.jpg" alt="Logo da marca Vedacit">
            <img src="./src/imagens/quartzolit.png" alt="Logo da marca Quartzolit">
            <img src="./src/imagens/sika.jpg" alt="Logo da marca Sika">
            <img src="./src/imagens/bosch.png" alt="Logo da marca Bosch">
            <img src="./src/imagens/makita.png" alt="Logo da marca Makita">
            <img src="./src/imagens/dewalt.png" alt="Logo da marca Dewalt">
            <img src="./src/imagens/vonder.png" alt="Logo da marca Vonder">
            <img src="./src/imagens/3m.png" alt="Logo da marca 3M">
            <img src="./src/imagens/tigre.png" alt="Logo da marca Tigre">
            <img src="./src/imagens/viapol.jpg" alt="Logo da marca Viapol">
            <img src="./src/imagens/votorantim.png" alt="Logo da marca Votorantim">
            <img src="./src/imagens/gerdau.png" alt="Logo da marca Gerdau">
            <img src="./src/imagens/atlas.png" alt="Logo da marca Atlas">
          </div>
        </div>
      </section>
    `,
    quemsomos: `
      <section class="pagina-quemsomos">
        <div class="quemsomos-container">
          <div class="quemsomos-imagem">
            <img src="./src/imagens/Quem Somos.png" alt="Quem Somos">
          </div>
          <div class="quemsomos-introducao">
            <h1>Quem Somos</h1>
            <p class="quemsomos-subtitulo">Transformando a revitalização de fachadas prediais com tradição, inovação e responsabilidade</p>
            <p class="quemsomos-texto">A trajetória da PRESSERVICE MANUTENÇÃO PREDIAL começou em 2000, quando o engenheiro Edvaldo Santos iniciou sua trajetória profissional como pintor de fachadas prediais. A vivência prática no campo e o contato direto com os desafios das obras despertaram seu olhar técnico e a busca por soluções mais seguras e duradouras. Essa combinação entre experiência prática e formação em engenharia tornou-se a base da filosofia da empresa: unir conhecimento técnico e execução de excelência.</p>
            <p class="quemsomos-texto">Em 2014, consolidando anos de aprendizado, nasceu oficialmente a PRESSERVICE, em Curitiba (PR), com o propósito de elevar o padrão da manutenção e revitalização predial no Brasil. Desde então, a empresa tem se destacado pela aplicação de tecnologias de diagnóstico avançado, gestão de obras com controle técnico diário e rigor nas normas de segurança e qualidade.</p>
            <p class="quemsomos-texto">Em 2017, a PRESSERVICE introduziu o Sistema Retrofit, um modelo inovador voltado à modernização de fachadas, com foco em sustentabilidade, eficiência e valorização patrimonial. Esse marco consolidou a empresa como referência nacional em revitalização de fachadas prediais.</p>
            <p class="quemsomos-texto">Em 2025, a PRESSERVICE deu um passo importante em sua história com a expansão para São José dos Campos (SP), sob a direção da engenheira Kamila Santos, filha do fundador. Essa nova fase simboliza não apenas o crescimento geográfico da empresa, mas a continuidade de um legado familiar pautado em ética, confiança e comprometimento técnico.</p>
            <p class="quemsomos-texto">Hoje, com mais de 24 anos de experiência e milhões de metros quadrados revitalizados, a PRESSERVICE mantém o mesmo propósito que a originou: proteger, preservar e valorizar patrimônios com engenharia de confiança, entregando resultados que aliam tecnologia, segurança e longevidade.</p>
          </div>
        </div>
      </section>
      <section class="timeline-section">
        <h2 class="timeline-titulo">NOSSA HISTÓRIA</h2>
        <div class="timeline-container">
          <div class="timeline-vertical">
            <div class="timeline-item timeline-item-esquerda" data-year="2000">
              <div class="timeline-balao">
                <h3>2000</h3>
                <p>Início da trajetória do engenheiro Edvaldo Santos, que começa como pintor de fachadas prediais, adquirindo experiência prática e visão técnica que dariam origem à Presservice.</p>
              </div>
            </div>
            <div class="timeline-item timeline-item-direita" data-year="2014">
              <div class="timeline-balao">
                <h3>2014</h3>
                <p>Fundação da PRESSERVICE, em Curitiba (PR), com o propósito de elevar o padrão da manutenção e revitalização predial no país.</p>
              </div>
            </div>
            <div class="timeline-item timeline-item-esquerda" data-year="2017">
              <div class="timeline-balao">
                <h3>2017</h3>
                <p>Lançamento do Sistema Retrofit, consolidando a empresa como referência em modernização de fachadas, com foco em sustentabilidade e valorização de imóveis.</p>
              </div>
            </div>
            <div class="timeline-item timeline-item-direita" data-year="2019">
              <div class="timeline-balao">
                <h3>2019</h3>
                <p>Mesmo diante dos desafios da pandemia, a Presservice manteve suas operações, preservando empregos e reforçando sua gestão técnica e responsabilidade social.</p>
              </div>
            </div>
            <div class="timeline-item timeline-item-esquerda" data-year="2025">
              <div class="timeline-balao">
                <h3>2025</h3>
                <p>Expansão para São José dos Campos (SP), sob direção da engenheira Kamila Santos, filha do fundador, marcando a continuidade do legado familiar.</p>
              </div>
            </div>
            <div class="timeline-item timeline-item-direita" data-year="hoje">
              <div class="timeline-balao">
                <h3>Hoje</h3>
                <p>Com mais de 24 anos de experiência, a PRESSERVICE segue valorizando patrimônios com engenharia, tecnologia e confiança.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
    casesdesucesso: `
      <section class="cases-carrossel-section">
        <div class="cases-carrossel-container">
          <div class="cases-carrossel-track-wrapper">
            <div class="cases-carrossel-track" id="casesCarrossel">
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Wizz Iguaçu.jpg" alt="Wizz Iguaçu">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Camerâ Municipal de Curitiba.jpg" alt="Camerâ Municipal de Curitiba">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Chateu Lake Louise.png" alt="Chateu Lake Louise">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Cristhiane.jpg" alt="Cristhiane">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/De Bonna 1.jpg" alt="De Bonna 1">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/De Bonna.jpg" alt="De Bonna">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Ernesto Nazareth.jpg" alt="Ernesto Nazareth">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Green Wood Residence 1.jpg" alt="Green Wood Residence 1">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Green Wood Residence 2.jpg" alt="Green Wood Residence 2">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Green Wood Residence.jpg" alt="Green Wood Residence">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Ibéria.jpg" alt="Ibéria">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Miguel Bakun.jpg" alt="Miguel Bakun">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Mont Parnasse.jpg" alt="Mont Parnasse">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Montbrison 1.jpg" alt="Montbrison 1">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Montbrison.jpg" alt="Montbrison">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Residencial Tanguá A.jpg" alt="Residencial Tanguá A">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Rio São Francisco.jpg" alt="Rio São Francisco">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Santori.jpg" alt="Santori">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Santorini 1.jpg" alt="Santorini 1">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Solar do Sol.jpg" alt="Solar do Sol">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Torre Velaska 1.jpg" alt="Torre Velaska 1">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Torre Velaska 2.jpg" alt="Torre Velaska 2">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Torre Velaska.jpg" alt="Torre Velaska">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Vesuvio.jpg" alt="Vesuvio">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Wizz Iguaçu.jpg" alt="Wizz Iguaçu">
              </div>
              <div class="cases-carrossel-item">
                <img src="./src/imagens/cases/Camerâ Municipal de Curitiba.jpg" alt="Camerâ Municipal de Curitiba">
              </div>
            </div>
          </div>

          <div class="cases-carrossel-rodape">
            <p class="cases-carrossel-legenda" id="casesLegenda">Camerâ Municipal de Curitiba</p>
            <div class="cases-carrossel-botoes">
              <button class="cases-carrossel-botao cases-carrossel-anterior" id="casesAnterior" aria-label="Anterior">
                &lt;
              </button>
              <button class="cases-carrossel-botao cases-carrossel-proximo" id="casesProximo" aria-label="Próximo">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
    `,
    servicosmenu: `
      <div class="menu-servicos">
        <button class="botao-servico" onclick="window.location.hash='servicos/instalacao'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="icone-botao">
            <path d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z" fill="currentColor"/>
          </svg>
          Instalação de pontos de ancoragem
        </button>
        <button class="botao-servico" onclick="window.location.hash='servicos/laudos'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="icone-botao">
            <path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z" fill="currentColor"/>
          </svg>
          Laudos Técnicos de Fachada
        </button>
        <button class="botao-servico" onclick="window.location.hash='servicos/acompanhamento'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" class="icone-botao" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
              <path d="M2316 5105 c-53 -19 -103 -70 -125 -129 -15 -41 -25 -52 -52 -62 -19 -6 -70 -29 -114 -52 -80 -40 -81 -40 -104 -21 -57 46 -121 10 -121 -68 0 -46 -3 -51 -78 -129 -169 -174 -291 -415 -317 -627 l-7 -57 -85 0 c-118 0 -173 -30 -208 -113 -21 -50 -21 -214 0 -265 35 -83 87 -113 205 -120 l86 -5 -19 -56 c-68 -200 70 -426 288 -471 52 -11 55 -13 60 -48 31 -188 148 -394 284 -498 l51 -39 -3 -108 -2 -108 -510 -200 c-649 -253 -625 -242 -717 -312 -127 -95 -223 -234 -279 -402 -23 -69 -24 -78 -27 -555 -3 -544 -4 -539 68 -604 21 -19 56 -39 77 -45 53 -15 3733 -15 3786 0 49 13 105 63 128 114 16 34 19 68 19 227 l0 187 -26 20 c-30 24 -43 26 -77 10 -41 -18 -47 -49 -47 -224 0 -158 -1 -164 -22 -179 -19 -14 -63 -16 -280 -16 l-258 0 0 439 c0 428 0 439 -21 465 -26 33 -79 36 -109 6 -19 -19 -20 -33 -20 -465 l0 -445 -555 0 -555 0 0 555 c0 542 0 555 -20 575 -27 27 -81 26 -106 -1 -18 -20 -19 -46 -22 -575 l-2 -554 -550 0 -550 0 0 445 c0 432 -1 446 -20 465 -30 30 -83 27 -109 -6 -21 -26 -21 -37 -21 -465 l0 -439 -259 0 c-232 0 -261 2 -280 18 l-22 17 3 470 3 470 27 73 c14 40 45 102 69 138 49 76 158 180 220 211 24 12 187 78 362 146 l318 125 198 -247 c109 -135 207 -254 219 -264 30 -27 83 -36 125 -22 34 12 225 154 262 195 24 26 145 29 166 4 17 -21 217 -177 246 -192 40 -21 108 -15 142 13 16 14 116 133 221 265 106 132 197 240 203 240 23 0 663 -254 702 -278 64 -41 145 -123 190 -192 81 -128 105 -215 105 -388 0 -117 1 -124 25 -147 32 -32 74 -33 104 -1 23 24 23 29 18 178 -5 173 -17 231 -76 353 -72 152 -190 277 -325 346 -34 17 -302 124 -596 238 l-535 207 -3 106 -3 106 56 47 c140 120 250 315 280 497 5 34 8 37 55 47 120 26 219 102 272 208 46 93 49 180 13 299 -6 20 -2 21 77 26 164 11 218 73 218 253 0 183 -57 245 -223 245 l-85 0 -7 57 c-26 213 -143 444 -314 626 -77 81 -81 87 -81 131 0 77 -64 113 -121 67 -22 -18 -24 -18 -93 19 -39 21 -91 45 -116 54 -41 15 -48 23 -63 65 -20 58 -79 115 -134 130 -58 16 -429 13 -477 -4z m452 -151 l22 -15 0 -490 0 -489 -230 0 -230 0 0 489 0 490 22 15 c18 13 56 16 208 16 152 0 190 -3 208 -16z m-588 -589 l0 -405 -115 0 -115 0 0 343 1 342 25 19 c22 16 193 106 201 106 2 0 3 -182 3 -405z m842 369 c39 -20 89 -47 110 -61 l38 -26 0 -343 0 -344 -115 0 -115 0 0 405 c0 223 2 405 5 405 3 0 38 -16 77 -36z m-1227 -761 c-3 -10 -37 -13 -126 -13 l-121 0 7 48 c20 133 105 328 192 437 l48 60 3 -260 c1 -143 0 -265 -3 -272z m1605 437 c78 -115 147 -284 165 -403 l7 -48 -123 3 -124 3 -2 269 -2 269 21 -19 c12 -10 38 -44 59 -74z m474 -616 c3 -9 6 -49 6 -89 0 -63 -3 -76 -19 -85 -13 -6 -215 -10 -587 -10 l-568 0 -23 -22 c-41 -38 -26 -98 28 -117 20 -7 128 -11 292 -11 l259 0 -5 -272 c-5 -300 -11 -337 -71 -463 -88 -185 -246 -317 -446 -371 -96 -26 -262 -24 -365 5 -127 35 -209 84 -306 181 -69 68 -94 101 -127 170 -68 140 -74 171 -79 478 l-5 272 259 0 c164 0 272 4 292 11 54 19 68 75 29 116 l-21 23 -569 0 c-373 0 -576 4 -589 10 -16 9 -19 22 -19 85 0 40 3 80 6 89 6 14 131 16 1314 16 1183 0 1308 -2 1314 -16z m-2164 -528 l0 -195 -28 8 c-163 47 -224 224 -122 354 19 24 28 27 86 27 l64 0 0 -194z m1873 134 c53 -104 24 -222 -71 -285 -21 -14 -53 -30 -70 -35 l-32 -9 0 195 0 195 73 -3 72 -3 28 -55z m-1242 -1185 c184 -50 370 -39 555 32 11 4 14 -11 14 -73 0 -49 6 -89 14 -106 14 -27 12 -30 -142 -223 l-156 -195 -66 0 -66 0 -156 195 c-154 193 -156 196 -142 223 8 17 14 57 14 106 0 77 0 78 23 71 12 -4 61 -18 108 -30z m-132 -449 c83 -104 150 -190 149 -191 -46 -42 -185 -142 -190 -137 -41 43 -347 437 -341 440 4 1 51 20 103 41 52 22 102 39 112 38 9 -1 84 -87 167 -191z m975 152 c59 -23 106 -45 106 -50 0 -7 -296 -384 -334 -425 -11 -12 -59 20 -165 110 l-30 25 152 191 c84 105 155 191 159 191 4 0 54 -19 112 -42z"/>
              <path d="M1664 859 c-22 -11 -44 -48 -44 -73 0 -7 9 -25 21 -40 l20 -26 269 0 c264 0 270 0 290 22 25 27 26 69 1 99 -19 24 -19 24 -278 26 -166 1 -266 -2 -279 -8z"/>
              <path d="M2930 863 c-51 -19 -68 -85 -30 -123 19 -19 33 -20 284 -20 237 0 266 2 285 18 33 26 31 79 -3 109 -27 23 -29 23 -274 22 -136 0 -254 -3 -262 -6z"/>
            </g>
          </svg>
          Acompanhamento Técnico de Obras
        </button>
        <button class="botao-servico" onclick="window.location.hash='servicos/lavagem'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icone-botao">
            <path d="M304,320a16,16,0,1,0,16,16A16,16,0,0,0,304,320Zm32-96a16,16,0,1,0,16,16A16,16,0,0,0,336,224Zm32,64a16,16,0,1,0-16-16A16,16,0,0,0,368,288Zm-32,32a16,16,0,1,0-16-16A16,16,0,0,0,336,320Zm-32-64a16,16,0,1,0,16,16A16,16,0,0,0,304,256Zm128-32a16,16,0,1,0-16-16A16,16,0,0,0,432,224Zm-48,16a16,16,0,1,0,16-16A16,16,0,0,0,384,240Zm-16-48a16,16,0,1,0,16,16A16,16,0,0,0,368,192Zm96,32a16,16,0,1,0,16,16A16,16,0,0,0,464,224Zm32-32a16,16,0,1,0,16,16A16,16,0,0,0,496,192Zm-64,64a16,16,0,1,0,16,16A16,16,0,0,0,432,256Zm-32,32a16,16,0,1,0,16,16A16,16,0,0,0,400,288Zm-64,64a16,16,0,1,0,16,16A16,16,0,0,0,336,352Zm-32,32a16,16,0,1,0,16,16A16,16,0,0,0,304,384Zm64-64a16,16,0,1,0,16,16A16,16,0,0,0,368,320Zm21.65-218.35-11.3-11.31a16,16,0,0,0-22.63,0L350.05,96A111.19,111.19,0,0,0,272,64c-19.24,0-37.08,5.3-52.9,13.85l-10-10A121.72,121.72,0,0,0,123.44,32C55.49,31.5,0,92.91,0,160.85V464a16,16,0,0,0,16,16H48a16,16,0,0,0,16-16V158.4c0-30.15,21-58.2,51-61.93a58.38,58.38,0,0,1,48.93,16.67l10,10C165.3,138.92,160,156.76,160,176a111.23,111.23,0,0,0,32,78.05l-5.66,5.67a16,16,0,0,0,0,22.62l11.3,11.31a16,16,0,0,0,22.63,0L389.65,124.28A16,16,0,0,0,389.65,101.65Z" fill="currentColor"/>
          </svg>
          Lavagem de fachada
        </button>
        <button class="botao-servico" onclick="window.location.hash='servicos/pintura'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icone-botao">
            <path d="M416 128V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32zm32-64v128c0 17.67-14.33 32-32 32H256c-35.35 0-64 28.65-64 64v32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32v-32h160c53.02 0 96-42.98 96-96v-64c0-35.35-28.65-64-64-64z" fill="currentColor"/>
          </svg>
          Pintura de fachada
        </button>
        <button class="botao-servico" onclick="window.location.hash='servicos/textura'">
          <img src="./src/imagens/mosaic.png" alt="Textura" class="icone-botao-img">
          Textura e Revestimentos Cerâmicos
        </button>
        <button class="botao-servico" onclick="window.location.hash='servicos/correcao'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="icone-botao">
            <path d="M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z" fill="currentColor"/>
          </svg>
          Correção de Manifestações Patológicas
        </button>
        <button class="botao-servico" onclick="window.location.hash='servicos/revitalizacao'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icone-botao">
            <path d="M259.92 262.91L216.4 149.77a9 9 0 00-16.8 0l-43.52 113.14a9 9 0 01-5.17 5.17L37.77 311.6a9 9 0 000 16.8l113.14 43.52a9 9 0 015.17 5.17l43.52 113.14a9 9 0 0016.8 0l43.52-113.14a9 9 0 015.17-5.17l113.14-43.52a9 9 0 000-16.8l-113.14-43.52a9 9 0 01-5.17-5.17zM108 68L88 16 68 68 16 88l52 20 20 52 20-52 52-20-52-20zM426.67 117.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144l-69.33-26.67z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
          </svg>
          Revitalização de fachada
        </button>
      </div>
    `,
    nossosdiferenciais: `
<section class="comparativo">
  <h1 class="titulo-comparativo">Nossos Diferenciais</h1>

  <div class="diferenciais-grid">

    <!-- LINHA 1 -->
    <div class="cell img">
      <img src="./src/imagens/Presservice-logo-transparente.png" alt="Presservice">
    </div>
    <div class="cell vazio"></div>
    <div class="cell img">
      <img src="./src/imagens/PintorAutonomo.jpg" alt="Empresa X">
    </div>

    <!-- LINHA 2 -->
    <div class="cell nome">PRESSERVICE</div>
    <div class="cell vazio"></div>
    <div class="cell nome">EMPRESA X</div>

    <!-- LINHA 3 -->
    <div class="cell positivo">Realiza inspeções técnicas detalhadas com engenheiros especialistas.
</div>
    <div class="cell categoria">🔧</div>
    <div class="cell negativo">Identifica problemas de forma empírica, sem análise técnica aprofundada.</div>

    <!-- LINHA 4 -->
    <div class="cell positivo">Conta com profissionais qualificados, uniformizados e devidamente registrados.</div>
    <div class="cell categoria">🧱</div>
    <div class="cell negativo">Atua com mão de obra terceirizada e sem vínculo técnico comprovado.</div>

    <!-- LINHA 5 -->
    <div class="cell positivo">Fiscalização diária com engenheiro responsável e emissão de relatórios fotográficos.</div>
    <div class="cell categoria">📋</div>
    <div class="cell negativo">Acompanhamento eventual, sem controle sistemático das etapas.</div>

    <!-- LINHA 6 -->
    <div class="cell positivo">Trabalha com cronograma definido, controle de materiais e metodologia padronizada.</div>
    <div class="cell categoria">🕒</div>
    <div class="cell negativo">Executa conforme a demanda, sem planejamento documentado.</div>

    <!-- LINHA 7 -->
    <div class="cell positivo">Oferece três anos de garantia contratual e suporte técnico.</div>
    <div class="cell categoria">🧾</div>
    <div class="cell negativo">Limita-se ao prazo legal mínimo de garantia.</div>

    <!-- LINHA 8 -->
    <div class="cell positivo">Cumpre rigorosamente as normas NR-18 e NR-35, com seguro de equipe e EPI completo.</div>
    <div class="cell categoria">⚠️</div>
    <div class="cell negativo">Atua sem comprovação de segurança técnica ou seguro operacional.</div>

    <!-- LINHA 9 -->
    <div class="cell positivo">Utiliza drones, câmeras termográficas e relatórios digitais para inspeções e monitoramento.</div>
    <div class="cell categoria">🧠</div>
    <div class="cell negativo">Trabalha com métodos convencionais e sem registros técnicos.</div>

    <!-- LINHA 10 -->
    <div class="cell positivo">Realiza descarte controlado e reaproveitamento de materiais, priorizando soluções ecológicas.</div>
    <div class="cell categoria">🌿</div>
    <div class="cell negativo">Não adota práticas sustentáveis ou gestão ambiental.</div>

    <!-- LINHA 11 -->
    <div class="cell positivo">Possibilita parcelamento direto e não exige pagamento de entrada.</div>
    <div class="cell categoria">💰</div>
    <div class="cell negativo">Exige adiantamentos e oferece poucas opções de pagamento.</div>

    <!-- LINHA 12 -->
    <div class="cell positivo">Mantém comunicação transparente e acompanhamento digital em todas as etapas</div>
    <div class="cell categoria">🤝</div>
    <div class="cell negativo">Comunicação reativa, sem acompanhamento estruturado.</div>

  </div>
</section>
`,

    contato: `
      <section class="unidades" id="unidades">
        <div class="imagem-bloco">
          <div class="imagem-wrapper unidade-curitiba">
            <img class="imagem-fundo" src="./src/imagens/Curitiba.jpg" alt="Cidade de Curitiba - Paraná">
            <span class="unidade-label">
              <div class="unidade-nome">Curitiba</div>
              <div class="unidade-contatos">
                <div class="unidade-contato-item">
                  <strong>WhatsApp:</strong>
                  <a href="https://wa.me/5541996536631" target="_blank" style="color: #fff; text-decoration: none;">(41) 99653-6631</a>
                </div>
                <div class="unidade-contato-item">
                  <strong>Email:</strong>
                  <a href="mailto:presservicemanutencaopredial@gmail.com" style="color: #fff; text-decoration: none;">presservicemanutencaopredial@gmail.com</a>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div class="imagem-bloco">
          <div class="imagem-wrapper unidade-sjc">
            <img class="imagem-fundo" src="./src/imagens/São José dos Campos.jpg" alt="Ponte Estaiada de São José dos Campos">
            <span class="unidade-label">
              <div class="unidade-nome">São José dos Campos</div>
              <div class="unidade-contatos">
                <div class="unidade-contato-item">
                  <strong>WhatsApp:</strong>
                  <a href="https://wa.me/5512991592590" target="_blank" style="color: #fff; text-decoration: none;">(12) 99159-2590</a>
                </div>
                <div class="unidade-contato-item">
                  <strong>Email:</strong>
                  <a href="mailto:presservicesp@gmail.com" style="color: #fff; text-decoration: none;">presservicesp@gmail.com</a>
                </div>
              </div>
            </span>
          </div>
        </div>
      </section>
      <section class="pagina-contato">
        <div class="contato-container">
          <div class="contato-info">
            <h1>Entre em Contato</h1>
            <p>Ficou com dúvidas? Preencha o formulário abaixo e nossa equipe entrará em contato com você em breve.</p>
          </div>
          <form class="formulario-contato" action="https://api.web3forms.com/submit" method="POST">
            <!-- Chave de acesso (obrigatória) -->
            <input type="hidden" name="access_key" value="3cc93c11-e001-4626-8bb1-63b626a60d82">
            
            <!-- Honeypot anti-spam (escondido) -->
            <input type="text" name="botcheck" style="display: none;">
            
            <!-- Assunto do e-mail -->
            <input type="hidden" name="_subject" value="Nova mensagem do site - Contato">

            <div class="form-group">
              <label for="nome">Nome <span class="obrigatorio">*</span></label>
              <input 
                type="text" 
                id="nome" 
                name="name" 
                placeholder="Digite seu nome completo" 
                required
              >
            </div>

            <div class="form-group">
              <label for="email">E-mail <span class="obrigatorio">*</span></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="seuemail@exemplo.com" 
                required
              >
            </div>

            <div class="form-group">
              <label for="telefone">Telefone</label>
              <input 
                type="tel" 
                id="telefone" 
                name="telefone" 
                placeholder="(XX) 9XXXX-XXXX"
              >
            </div>

            <div class="form-group">
              <label for="mensagem">Sua Mensagem <span class="obrigatorio">*</span></label>
              <textarea 
                id="mensagem" 
                name="message" 
                rows="6" 
                placeholder="Escreva sua mensagem aqui..." 
                required
              ></textarea>
            </div>

            <button type="submit" class="btn-enviar">Enviar Mensagem</button>
          </form>
        </div>
      </section>
    `,
  };

  const servicos = [
    "instalacao", "laudos", "acompanhamento", "lavagem", "pintura", "textura", "correcao", "revitalizacao"
  ];

  const servicosDetalhados = {
    instalacao: {
      titulo: 'Instalação de Pontos de Ancoragem',
      descricao: 'Sistemas permanentes para trabalho em altura, conforme normas técnicas NR-35, garantindo acesso seguro e contínuo à fachada. Nossa equipe especializada instala pontos de ancoragem que permitem inspeções, limpeza, manutenção e reparos com total segurança. Utilizamos materiais de alta qualidade e seguimos rigorosamente os padrões internacionais de engenharia.',
      imagem: './src/imagens/Ancoragem.jpeg'
    },
    laudos: {
      titulo: 'Laudos Técnicos de Fachada',
      descricao: 'Avaliação técnica especializada das condições da fachada predial, com diagnóstico claro e recomendações objetivas de intervenção. Nossos engenheiros realizam inspeções visuais detalhadas, utilizam drones e câmeras termográficas para identificar manifestações patológicas, problemas estruturais e recomendações de reparo. Os laudos são emitidos com fotodocumentação completa.',
      imagem: './src/imagens/Laudos.png'
    },
    acompanhamento: {
      titulo: 'Acompanhamento Técnico de Obras',
      descricao: 'Supervisão profissional de obras em fachadas, assegurando conformidade técnica, segurança e execução correta dos serviços. Nosso engenheiro responsável acompanha todas as etapas da obra, realiza inspeções diárias, emite relatórios fotográficos e garante que os procedimentos sigam as normas técnicas e o cronograma estabelecido.',
      imagem: './src/imagens/Acompanhamento.png'
    },
    lavagem: {
      titulo: 'Lavagem de Fachadas',
      descricao: 'Limpeza controlada, adequada a cada tipo de revestimento, preservando materiais e recuperando a aparência original. Utilizamos técnicas de pressão variável, limpeza química segura e equipamentos de última geração. Cada projeto é avaliado individualmente para determinar o melhor método de limpeza conforme o material e grau de sujidade.',
      imagem: './src/imagens/Lavagem.png'
    },
    pintura: {
      titulo: 'Pintura de Fachadas',
      descricao: 'Preparação e pintura de superfícies externas, com foco em proteção, durabilidade e padronização visual do edifício. Nossa equipe realiza limpeza profunda, reparos preliminares, aplicação de primer e pintura com tintas de excelente qualidade. Garantimos acabamento uniforme e proteção prolongada contra intempéries.',
      imagem: './src/imagens/Pintura.png'
    },
    textura: {
      titulo: 'Textura e Revestimentos Cerâmicos',
      descricao: 'Aplicação de sistemas de textura e revestimentos cerâmicos em fachadas, voltados à proteção e desempenho da edificação. Oferecemos diferentes tipos de textura e acabamentos cerâmicos que melhoram a estética, aumentam a resistência da fachada e reduzem a infiltração de água. Todos os materiais são selecionados para máxima durabilidade.',
      imagem: './src/imagens/texturas.jpg'
    },
    correcao: {
      titulo: 'Correção de Manifestações Patológicas de Fachada',
      descricao: 'Tratamento de trincas, fissuras, desplacamentos, falhas de revestimento e outros problemas estruturais, restabelecendo segurança e vida útil da fachada. Realizamos diagnóstico técnico para identificar a causa raiz, aplicamos tratamentos específicos e garantimos que a correção seja duradoura e conforme as normas vigentes.',
      imagem: './src/imagens/Manifestações.jpeg'
    },
    revitalizacao: {
      titulo: 'Revitalização de Fachadas',
      descricao: 'Intervenções integradas para renovação técnica e estética da fachada, valorizando o imóvel e prolongando sua durabilidade. Combinamos limpeza profunda, reparos estruturais, aplicação de revestimentos modernos e pintura de alta qualidade. A revitalização resulta em um edifício que recupera sua beleza original e ganha proteção adicional contra o tempo.',
      imagem: './src/imagens/Revitalização.jpeg'
    }
  };

  servicos.forEach((s) => {
    const servico = servicosDetalhados[s];
    paginas[`servicos/${s}`] = `
      <section class="pagina-servico-detalhado">
        <div class="servico-detalhado-container">
          <div class="servico-detalhado-imagem">
            <img src="${servico.imagem}" alt="${servico.titulo}">
          </div>
          <div class="servico-detalhado-conteudo">
            <h1>${servico.titulo}</h1>
            <p>${servico.descricao}</p>
            <a href="#contato" class="btn-servico-cta">Solicite Seu Orçamento!</a>
          </div>
        </div>
      </section>
    `;
  });

  function carregarPagina() {
    const hash = window.location.hash.slice(1).toLowerCase() || "home";
    conteudo.classList.remove("fade-in");
    conteudo.innerHTML = paginas[hash] || paginas.home;
    window.scrollTo(0, 0);
    void conteudo.offsetWidth; // força reflow para reiniciar animação
    conteudo.classList.add("fade-in");
    iniciarCarrossel();
  }

  function iniciarCarrossel() {
    document.querySelectorAll(".imagens").forEach((container) => {
      const imagens = container.querySelectorAll("img");
      if (imagens.length <= 1) return;

      let indice = 0;
      const indicadores = document.createElement("div");
      indicadores.classList.add("indicadores");
      container.parentElement.appendChild(indicadores);

      imagens.forEach((_, i) => {
        const bolinha = document.createElement("div");
        bolinha.classList.add("bolinha");
        if (i === 0) bolinha.classList.add("ativa");
        bolinha.addEventListener("click", () => {
          imagens[indice].classList.remove("ativo");
          indicadores.children[indice].classList.remove("ativa");
          indice = i;
          imagens[indice].classList.add("ativo");
          indicadores.children[indice].classList.add("ativa");
        });
        indicadores.appendChild(bolinha);
      });

      setInterval(() => {
        imagens[indice].classList.remove("ativo");
        indicadores.children[indice].classList.remove("ativa");
        indice = (indice + 1) % imagens.length;
        imagens[indice].classList.add("ativo");
        indicadores.children[indice].classList.add("ativa");
      }, 10000);
    });
  }

  // Animação dos contadores na seção cases-resumo
  function inicializarCarrosselCases() {
    const btnAnterior = document.getElementById('casesAnterior');
    const btnProximo = document.getElementById('casesProximo');
    const track = document.getElementById('casesCarrossel');
    const items = document.querySelectorAll('.cases-carrossel-item');
    const legenda = document.getElementById('casesLegenda');

    if (!btnAnterior || !btnProximo || !track || items.length === 0) return;

    let indiceAtual = 1; // Começa em 1 porque o índice 0 é a cópia da última
    const totalReal = 24; // Número real de imagens
    
    const nomesCases = [
      'Camerâ Municipal de Curitiba',
      'Chateu Lake Louise',
      'Cristhiane',
      'De Bonna 1',
      'De Bonna',
      'Ernesto Nazareth',
      'Green Wood Residence 1',
      'Green Wood Residence 2',
      'Green Wood Residence',
      'Ibéria',
      'Miguel Bakun',
      'Mont Parnasse',
      'Montbrison 1',
      'Montbrison',
      'Residencial Tanguá A',
      'Rio São Francisco',
      'Santori',
      'Santorini 1',
      'Solar do Sol',
      'Torre Velaska 1',
      'Torre Velaska 2',
      'Torre Velaska',
      'Vesuvio',
      'Wizz Iguaçu'
    ];

    function atualizarCarrossel(comTransicao = true) {
      // Remover classe ativo de todos
      items.forEach(item => item.classList.remove('ativo'));
      
      // Adicionar classe ativo ao item atual
      items[indiceAtual].classList.add('ativo');
      
      // Atualizar legenda (usando módulo para mapear ao nome correto)
      const indiceNome = ((indiceAtual - 1) % totalReal);
      legenda.textContent = nomesCases[indiceNome];
      
      // Calcular deslocamento
      const wrapperWidth = track.parentElement.offsetWidth;
      const itemWidth = items[indiceAtual].offsetWidth;
      const gap = 12;
      const padding = 20;
      
      // Calcular posição esquerda do item ativo
      let posicaoItem = padding;
      for (let i = 0; i < indiceAtual; i++) {
        posicaoItem += items[i].offsetWidth + gap;
      }
      
      // Deslocamento para centralizar
      const deslocamento = posicaoItem - (wrapperWidth / 2) + (itemWidth / 2);
      
      // Aplicar ou remover transição
      if (comTransicao) {
        track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)';
      } else {
        track.style.transition = 'none';
      }
      
      track.style.transform = `translateX(-${deslocamento}px)`;
    }

    // Inicializar
    atualizarCarrossel(false);

    // Botão anterior
    btnAnterior.addEventListener('click', () => {
      indiceAtual--;
      atualizarCarrossel(true);
      
      // Se chegou no início (cópia da última), voltar para a última real
      if (indiceAtual === 0) {
        setTimeout(() => {
          indiceAtual = totalReal;
          atualizarCarrossel(false);
        }, 500);
      }
    });

    // Botão próximo
    btnProximo.addEventListener('click', () => {
      indiceAtual++;
      atualizarCarrossel(true);
      
      // Se chegou no final (cópia da primeira), voltar para a primeira real
      if (indiceAtual === totalReal + 1) {
        setTimeout(() => {
          indiceAtual = 1;
          atualizarCarrossel(false);
        }, 500);
      }
      
      // Reiniciar automação
      reiniciarAutomacao();
    });

    // Automação do carrossel a cada 7 segundos
    let intervalAutomacao;

    function iniciarAutomacao() {
      intervalAutomacao = setInterval(() => {
        indiceAtual++;
        atualizarCarrossel(true);
        
        // Se chegou no final (cópia da primeira), voltar para a primeira real
        if (indiceAtual === totalReal + 1) {
          setTimeout(() => {
            indiceAtual = 1;
            atualizarCarrossel(false);
          }, 500);
        }
      }, 7000); // 7 segundos
    }

    function reiniciarAutomacao() {
      clearInterval(intervalAutomacao);
      iniciarAutomacao();
    }

    // Pausar automação ao clicar em anterior
    btnAnterior.addEventListener('click', () => {
      reiniciarAutomacao();
    });

    // Iniciar automação
    iniciarAutomacao();
  }
  
  function iniciarAnimacaoContadores() {
    const casesSection = document.querySelector('.cases-resumo');
    if (!casesSection) return;

    let animacaoJaFeita = false;

    const observador = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animacaoJaFeita) {
          animacaoJaFeita = true;
          animarNumeros();
        }
      });
    }, { threshold: 0.5 });

    observador.observe(casesSection);
  }

  function animarNumeros() {
    const elementos = document.querySelectorAll('.cases-item .numero');
    const duracao = 4000; // 4 segundos
    const tempoInicio = Date.now();

    function atualizar() {
      const tempoDecorrido = Date.now() - tempoInicio;
      const progresso = Math.min(tempoDecorrido / duracao, 1);

      elementos.forEach((elemento) => {
        const valorFinal = parseInt(elemento.getAttribute('data-valor'));
        const valorAtual = Math.floor(progresso * valorFinal);
        elemento.textContent = valorAtual;
      });

      if (progresso < 1) {
        requestAnimationFrame(atualizar);
      }
    }

    atualizar();
  }

  // Scroll Reveal da Timeline - Balões aparecem conforme rolam
  function iniciarAnimacaoTimelineScroll() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length === 0) return; // Se não houver timeline, sai
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-visible');
          // Opcional: desobservar após ter sido visto
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach(item => {
      observer.observe(item);
    });
  }

  // Chamar a função quando a página carrega
  setTimeout(() => {
    iniciarAnimacaoContadores();
    inicializarCarrosselCases();
    iniciarAnimacaoTimelineScroll();
  }, 100);

  // Timeline Interativa - Quem Somos
  function inicializarTimeline() {
    console.log('Inicializando Timeline');
    const botoes = document.querySelectorAll('.timeline-botao');
    const items = document.querySelectorAll('.timeline-item');

    console.log('Botões encontrados:', botoes.length);
    console.log('Items encontrados:', items.length);

    if (!botoes.length || !items.length) {
      console.log('Timeline não encontrada, retornando');
      return;
    }

    // Limpar qualquer classe ativo anterior
    botoes.forEach(botao => botao.closest('.timeline-evento').classList.remove('ativo'));
    items.forEach(item => item.classList.remove('ativo'));

    // Adicionar event listeners a cada botão
    botoes.forEach((botao, index) => {
      console.log('Adicionando listener ao botão', index);
      botao.addEventListener('click', function(e) {
        e.preventDefault();
        const year = this.closest('.timeline-evento').getAttribute('data-year');
        console.log('Clicou em:', year);
        
        // Remover ativo de todos os botões e itens
        document.querySelectorAll('.timeline-evento').forEach(evento => {
          evento.classList.remove('ativo');
        });
        document.querySelectorAll('.timeline-item').forEach(item => {
          item.classList.remove('ativo');
        });
        
        // Adicionar ativo ao botão clicado
        this.closest('.timeline-evento').classList.add('ativo');
        
        // Mostrar o item correspondente
        const itemAtivo = document.querySelector(`.timeline-item[data-year="${year}"]`);
        console.log('Item ativo procurado:', itemAtivo);
        if (itemAtivo) {
          itemAtivo.classList.add('ativo');
          console.log('Classe ativo adicionada ao item');
        }
      });
    });
  }

  // Renicia quando há mudança de hash (navegação)
  const originalCarregarPagina = carregarPagina;
  window.carregarPagina = function() {
    originalCarregarPagina.call(this);
    setTimeout(() => {
      iniciarAnimacaoContadores();
      inicializarTimeline();
      inicializarCarrosselCases();
      iniciarAnimacaoTimelineScroll();
      // Reorganizar apenas em mobile
      if (window.innerWidth <= 768) {
        reorganizarDiferenciaisEmMobile();
      }
    }, 100);
  };

  // Função para reorganizar diferenciais em mobile
  window.reorganizarDiferenciaisEmMobile = function() {
    const grid = document.querySelector('.diferenciais-grid');
    if (!grid) return;

    const allCells = Array.from(grid.querySelectorAll('.cell'));
    
    // Processar cada linha de comparação (trio de células)
    // Começar do índice 6 (primeira comparação, após linhas 1-2)
    // Processar de trás para frente para não afetar os índices posteriores
    for (let i = allCells.length - 3; i >= 6; i -= 3) {
      const positivo = allCells[i];
      const categoria = allCells[i + 1];
      const negativo = allCells[i + 2];

      if (positivo && categoria && negativo) {
        // Reordenar para: categoria, positivo, negativo
        // Move categoria para antes de positivo
        grid.insertBefore(categoria, positivo);
        // Move negativo para depois de positivo
        grid.insertBefore(negativo, positivo.nextSibling);
      }
    }
  };

  // Trocar cores do SVG WhatsApp no hover (verde ↔ branco)
  const btnWhatsapp = document.querySelector('.btn-whatsapp-flutuante');
  if (btnWhatsapp) {
    const svgElement = btnWhatsapp.querySelector('svg');
    
    if (svgElement) {
      // Salvar cores originais
      const elementData = [];
      svgElement.querySelectorAll('path').forEach((element) => {
        const fill = element.getAttribute('fill');
        if (fill) {
          elementData.push({
            element: element,
            originalFill: fill
          });
        }
      });

      // Mapa de troca de cores
      const colorMap = {
        '#40c351': '#ffffff',  // Verde para branco
        '#fff': '#40c351',     // Branco para verde
        '#cfd8dc': '#40c351'   // Cinza para verde
      };

      // Função para trocar cores
      const swapColors = (swap = true) => {
        // Trocar background do botão
        if (swap) {
          btnWhatsapp.style.background = '#ffffff';
          btnWhatsapp.style.borderColor = '#40c351';
        } else {
          btnWhatsapp.style.background = '#25d366';
          btnWhatsapp.style.borderColor = '#ffffff';
        }

        // Trocar cores do SVG
        elementData.forEach(({element, originalFill}) => {
          if (swap) {
            if (colorMap[originalFill]) {
              element.setAttribute('fill', colorMap[originalFill]);
            }
          } else {
            element.setAttribute('fill', originalFill);
          }
        });
      };

      btnWhatsapp.addEventListener('mouseenter', () => swapColors(true));
      btnWhatsapp.addEventListener('mouseleave', () => swapColors(false));
    }
  }

  window.addEventListener("hashchange", window.carregarPagina);
  window.carregarPagina();
});
