const e={inicio:`
    <section class="intro" aria-labelledby="titulo">
      <div>
        <h1 id="titulo">Tecnologia faz mais sentido quando chega a todos.</h1>
        <p>A Conecta Comunidade \xE9 uma ONG fict\xEDcia dedicada \xE0 inclus\xE3o digital. Neste projeto acad\xEAmico, aprender, compartilhar conhecimentos e reaproveitar equipamentos aproximam pessoas da tecnologia.</p>
        <a class="button" href="projetos.html">Conhecer as iniciativas</a>
        <a class="text-link" href="cadastro.html">Quero ser volunt\xE1rio</a>
      </div>
      <figure>
        <img src="assets/images/conexao.svg" alt="Diagrama ligando aprendizagem, colabora\xE7\xE3o e acesso \xE0 tecnologia" width="600" height="450">
        <figcaption>Aprender. Compartilhar. Conectar.</figcaption>
      </figure>
    </section>
    <section aria-labelledby="missao">
      <h2 id="missao">Nossa proposta</h2>
      <p>Promover autonomia digital por meio de oficinas introdut\xF3rias, orienta\xE7\xE3o sobre seguran\xE7a na internet e colabora\xE7\xE3o entre quem deseja aprender e quem pode ensinar.</p>
      <div class="columns">
        <article><h3>Aprender com autonomia</h3><p>Conhecimentos b\xE1sicos para usar computadores, navegar na internet e reconhecer riscos digitais.</p></article>
        <article><h3>Compartilhar conhecimento</h3><p>Mentoria volunt\xE1ria com atividades pr\xE1ticas e linguagem acess\xEDvel, respeitando diferentes ritmos de aprendizagem.</p></article>
        <article><h3>Ampliar o acesso</h3><p>Uma proposta de reaproveitamento respons\xE1vel de equipamentos para apoiar espa\xE7os comunit\xE1rios de aprendizagem.</p></article>
      </div>
    </section>
    <section class="closing" aria-labelledby="participacao">
      <h2 id="participacao">Voc\xEA tamb\xE9m pode fazer parte</h2>
      <p>Explore as iniciativas demonstrativas e experimente o cadastro de volunt\xE1rios e apoiadores.</p>
      <a class="button" href="cadastro.html">Simular meu cadastro</a>
    </section>
  `,projetos:`
    <h1>Projetos sociais</h1>
    <p class="lead">Tr\xEAs propostas para aproximar pessoas da tecnologia. Todas as iniciativas desta p\xE1gina s\xE3o fict\xEDcias e integram uma atividade acad\xEAmica.</p>
    <section aria-labelledby="iniciativas">
      <h2 id="iniciativas">Conhe\xE7a as iniciativas</h2>
      <article class="project" id="primeiros-passos"><div><h3>Primeiros Passos Digitais</h3><p>Oficinas de uso b\xE1sico do computador, organiza\xE7\xE3o de arquivos, e-mail e navega\xE7\xE3o segura.</p><p><strong>P\xFAblico:</strong> pessoas que est\xE3o come\xE7ando a utilizar recursos digitais.</p><p><strong>Como colaborar:</strong> apoiar oficinas e preparar materiais did\xE1ticos acess\xEDveis.</p><a class="button" href="cadastro.html?projeto=primeiros-passos">Participar desta iniciativa</a></div><img src="assets/images/aprendizagem.svg" alt="Diagrama de uma trilha de aprendizagem: conhecer, praticar e compartilhar" width="600" height="320" loading="lazy"></article>
      <article class="project" id="mentoria"><div><h3>Mentoria em Programa\xE7\xE3o</h3><p>Introdu\xE7\xE3o \xE0 l\xF3gica, HTML, CSS e JavaScript com pequenos projetos orientados.</p><p><strong>P\xFAblico:</strong> jovens e adultos interessados em iniciar na programa\xE7\xE3o.</p><p><strong>Como colaborar:</strong> orientar exerc\xEDcios e revisar projetos de aprendizagem.</p><a class="button" href="cadastro.html?projeto=mentoria">Oferecer mentoria</a></div></article>
      <article class="project" id="reuso"><div><h3>Tecnologia em Circula\xE7\xE3o</h3><p>Proposta de triagem, reaproveitamento e destina\xE7\xE3o respons\xE1vel de computadores, priorizando a remo\xE7\xE3o segura de dados.</p><p><strong>P\xFAblico:</strong> espa\xE7os comunit\xE1rios de aprendizagem.</p><p><strong>Como colaborar:</strong> oferecer apoio t\xE9cnico ou indicar equipamentos para avalia\xE7\xE3o. Esta demonstra\xE7\xE3o n\xE3o recebe doa\xE7\xF5es reais.</p><a class="button" href="cadastro.html?projeto=reuso">Simular interesse em apoiar</a></div></article>
    </section>
    <section aria-labelledby="apoio"><h2 id="apoio">Outras formas de apoio</h2><p>Compartilhar materiais educativos, sugerir oficinas e colaborar com acessibilidade s\xE3o possibilidades previstas no projeto.</p><a href="cadastro.html">Preencher cadastro demonstrativo</a></section>
  `,cadastro:`
    <h1>Vamos conectar conhecimentos?</h1>
    <p class="lead">Experimente o cadastro de volunt\xE1rios e apoiadores. Use dados fict\xEDcios: este formul\xE1rio \xE9 uma demonstra\xE7\xE3o acad\xEAmica e n\xE3o efetiva uma inscri\xE7\xE3o.</p>
    <noscript><p>Ative o JavaScript para utilizar as m\xE1scaras e concluir a simula\xE7\xE3o. Nenhum cadastro ser\xE1 enviado sem ele.</p></noscript>
    <form id="cadastro" aria-describedby="orientacao">
      <p id="orientacao">Todos os campos marcados com \u201Cobrigat\xF3rio\u201D devem ser preenchidos. Seus dados n\xE3o ser\xE3o enviados a um servidor.</p>
      <fieldset><legend>Identifica\xE7\xE3o</legend><div class="form-grid">
        <div class="field wide"><label for="nome">Nome completo (obrigat\xF3rio)</label><input id="nome" name="nome" autocomplete="name" required minlength="3" maxlength="100"></div>
        <div class="field"><label for="email">E-mail (obrigat\xF3rio)</label><input id="email" name="email" type="email" autocomplete="email" required maxlength="254"></div>
        <div class="field"><label for="cpf">CPF (obrigat\xF3rio)</label><input id="cpf" name="cpf" inputmode="numeric" required pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" maxlength="14" aria-describedby="cpf-ajuda"><small id="cpf-ajuda">Formato: 000.000.000-00. Use um valor fict\xEDcio de teste.</small></div>
        <div class="field"><label for="telefone">Telefone (obrigat\xF3rio)</label><input id="telefone" name="telefone" type="tel" autocomplete="tel" inputmode="tel" required pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}" maxlength="15" aria-describedby="telefone-ajuda"><small id="telefone-ajuda">Inclua o DDD. Exemplo: (85) 90000-0000.</small></div>
        <div class="field"><label for="nascimento">Data de nascimento (obrigat\xF3rio)</label><input id="nascimento" name="nascimento" type="date" autocomplete="bday" required></div>
      </div></fieldset>
      <fieldset><legend>Endere\xE7o</legend><div class="form-grid">
        <div class="field"><label for="cep">CEP (obrigat\xF3rio)</label><input id="cep" name="cep" autocomplete="postal-code" inputmode="numeric" required pattern="[0-9]{5}-[0-9]{3}" maxlength="9" aria-describedby="cep-ajuda"><small id="cep-ajuda">Formato: 00000-000.</small></div>
        <div class="field wide"><label for="endereco">Logradouro e n\xFAmero (obrigat\xF3rio)</label><input id="endereco" name="endereco" autocomplete="address-line1" required maxlength="160"></div>
        <div class="field"><label for="bairro">Bairro (obrigat\xF3rio)</label><input id="bairro" name="bairro" required maxlength="80"></div>
        <div class="field"><label for="cidade">Cidade (obrigat\xF3rio)</label><input id="cidade" name="cidade" autocomplete="address-level2" required maxlength="80"></div>
        <div class="field"><label for="estado">Estado (obrigat\xF3rio)</label><select id="estado" name="estado" autocomplete="address-level1" required><option value="">Selecione</option><option>AC</option><option>AL</option><option>AP</option><option>AM</option><option>BA</option><option>CE</option><option>DF</option><option>ES</option><option>GO</option><option>MA</option><option>MT</option><option>MS</option><option>MG</option><option>PA</option><option>PB</option><option>PR</option><option>PE</option><option>PI</option><option>RJ</option><option>RN</option><option>RS</option><option>RO</option><option>RR</option><option>SC</option><option>SP</option><option>SE</option><option>TO</option></select></div>
      </div></fieldset>
      <fieldset><legend>Como deseja participar?</legend><div class="form-grid">
        <div class="field"><label for="perfil">Tipo de participa\xE7\xE3o (obrigat\xF3rio)</label><select id="perfil" name="perfil" required><option value="">Selecione</option><option value="voluntario">Volunt\xE1rio</option><option value="apoiador">Apoiador / doador de equipamentos</option></select></div>
        <div class="field"><label for="projeto">Projeto de interesse (obrigat\xF3rio)</label><select id="projeto" name="projeto" required><option value="">Selecione</option><option value="primeiros-passos">Primeiros Passos Digitais</option><option value="mentoria">Mentoria em Programa\xE7\xE3o</option><option value="reuso">Tecnologia em Circula\xE7\xE3o</option></select></div>
        <div class="field wide"><label for="mensagem">Como voc\xEA gostaria de colaborar? (opcional)</label><textarea id="mensagem" name="mensagem" rows="4" maxlength="1000"></textarea></div>
      </div></fieldset>
      <label class="check"><input type="checkbox" id="ciencia" name="ciencia" required> Entendo que este cadastro \xE9 fict\xEDcio e usarei somente dados de teste (obrigat\xF3rio).</label>
      <button class="button" type="submit" id="enviar" disabled>Concluir simula\xE7\xE3o</button>
      <p id="resultado" role="status" aria-live="polite"></p>
    </form>
  `};export{e as paginas};
