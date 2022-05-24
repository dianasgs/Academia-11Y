import BackArrow from "../../../components/backarrow/backarrow";
import Header from "../../../components/header/header";
import styles from "./../lessonpage.module.css";
import Image from "next/image";
import GoToQuizBtn from "../../../components/gotoquizbtn/gotoquizbtn";

export default function LessonPage() {
  return (
    <>
      <BackArrow />
      <Header />
      <div className={`flex ${styles.main}`}>
        <h1>Lição 6 - Acessibilidade digital: o que é e pra quem?</h1>

        <h2>O que é acessibilidade?</h2>

        <p>
          A acessibilidade é definida pela Lei Brasileira de Inclusão como a
          “possibilidade e condição de alcance para utilização, com segurança e
          autonomia, de espaços, mobiliários, equipamentos urbanos, edificações,
          transportes, informação e comunicação, inclusive seus sistemas e
          tecnologias, bem como de outros serviços e instalações abertos ao
          público, de uso público ou privados de uso coletivo, tanto na zona
          urbana como na rural, por pessoa com deficiência ou com mobilidade
          reduzida.”{" "}
        </p>

        <p>
          A acessibilidade ajuda a garantir os direitos de todos os cidadãos,
          auxiliando na construção de uma sociedade mais equitativa. A
          acessibilidade tem aplicações em praticamente qualquer área que
          envolve pessoas, tanto no processo de criação quanto na utilização do
          produto final gerado. Exemplos comuns são adaptações feitas para
          pessoas com deficiência na arquitetura e na moda.
        </p>

        <Image
          src="/bancada_adaptada.jpg"
          alt="Uma mulher branca, de cabelos ruivos e cadeirante sorri enquanto prepara uma salada de frutas na bancada de sua cozinha, cuja altura é adaptada para pessoas em cadeiras de rodas."
          width={300}
          height={300}
        />

        <Image
          src="/uniformes_inclusivos.jpg"
          alt="Oito atletas paralímpicos de gêneros, raças e com deficiências diferentes usam os uniformes nas cores preta, azul e amarela da linha inclusiva criada pelo Comitê Paralímpico Brasileiro para os Jogos ParapanAmericanos de Lima 2019."
          width={300}
          height={300}
        />

        <h2>Acessibilidade Digital e Web</h2>
        <p>
          Na área de computação lidamos principalmente com os conceitos de
          acessibilidade digital e web. A acessibilidade digital, mais
          abrangente, é definida pela eliminação de barreiras de aplicações Web,
          Mobile e Desktop que impedem ou dificultam a interação entre o usuário
          e o sistema. Quando falamos de acessibilidade web, estamos tratando
          especificamente das barreiras presentes em sites na Internet. Essas
          barreiras ou obstáculos podem ser qualquer característica que impeça
          alguém de navegar pelo sistema, compreender totalmente seu conteúdo ou
          realizar operações e eliminá-las pode trazer benefícios para todo
          mundo, mas principalmente para pessoas com deficiência.
        </p>

        <h2>Quem se beneficia da acessibilidade digital?</h2>

        <h3>Pessoas com deficiência</h3>
        <p>
          No Brasil, cerca de 24% da população possui alguma deficiência ou grau
          de dificuldade em habilidades motoras, visuais, auditivas e cognitivas
          segundo censo de 2010 do IBGE. Este é o grupo mais beneficiado pela
          acessibilidade, já que algumas barreiras em sites ou aplicações podem
          impedir totalmente seu acesso ou navegação pelo conteúdo. Alguns
          exemplos de problemas de acessibilidade enfrentados são:
        </p>

        <ul>
          <li>
            <b>Pessoas com deficiência visual ou baixa visão: </b> pessoas cegas
            que utilizam leitores de tela tem a interação com a interface
            comprometida se os botões, links e outros elementos não são bem
            identificados; se a navegação por teclado não for possível, usuários
            com baixa visão que não utilizam mouse podem ser prejudicados;
            textos com baixo contraste entre as cores da fonte e do fundo podem
            tornar o conteúdo ilegível para pessoas daltônicas.
          </li>
          <li>
            <b>Pessoas surdas ou com baixa audição:</b> estes usuários podem ter
            acesso impedido a conteúdos em áudio que não possuam forma de
            consumo alternativa como vídeos sem legenda, podcasts sem
            transcrição ou palestras sem tradução em LIBRAS (Língua Brasileira
            de Sinais).
          </li>
          <li>
            <b>Pessoas com deficiências motoras ou mobilidade reduzida:</b>{" "}
            estes usuários podem ter dificuldade de executar tarefas que exijam
            precisão ou rapidez de movimento como jogos de tiro que não possuem
            opção de assistência para mira ou formulários que possuem um tempo
            máximo baixo para preenchimento. Também podem encontrar problemas ao
            utilizar o teclado ou tecnologias assistivas para navegar se botões
            e outros elementos interativos não puderem ser acessados dessa
            forma.
          </li>
          <li>
            <b>
              Pessoas com deficiências intelectuais ou transtornos cognitivos:
            </b>
            textos mal diagramados, com espaçamento ruim ou fontes com serifa
            podem atrapalhar a leitura de pessoas com dislexia; sons, animações
            e vídeos que não podem ser pausados e parágrafos muito longos podem
            causar estresse ou atrapalhar a compreensão do conteúdo de pessoas
            com autismo, TDAH (Transtorno do Déficit de Atenção com
            Hiperatividade) ou deficiência intelectual.
          </li>
          <li>
            <b>Pessoas com deficiências temporárias ou situacionais:</b>{" "}
            usuários com fratura no braço ou segurando uma criança de colo, por
            exemplo, podem ter precisão e rapidez de movimento comprometidos.
            Uma pessoa que realizou uma cirurgia ocular pode ter sensibilidade à
            luz, preferindo a utilização de cores mais escuras no sistema (modo
            escuro).
          </li>
        </ul>

        <Image
          src="/deficiencia_temporaria.jpg"
          alt="Ilustração de uma mulher negra com o braço direito engessado, sentada a uma mesa, tentando utilizar o mouse com a mão esquerda."
          width={300}
          height={300}
        />

        <h3>Pessoas com idade avançada</h3>
        <p>
          De acordo com o IBGE, em 2019, 15,7% da população brasileira tinha
          mais de 60 anos. Com a idade, as pessoas podem desenvolver problemas
          de visão, audição, motores e cognitivos. Manter interações simples,
          conteúdo de fácil compreensão, bom contraste e tamanho de fonte no
          texto pode melhorar a experiência desse público.
        </p>

        <h3>
          Pessoas que acessam a Internet pelo celular ou não possuem conexão
          estável
        </h3>

        <p>
          Segundo a pesquisa TIC Domicílios 2020, 58% dos brasileiros com acesso
          à Internet o fazem exclusivamente pelo celular. Se os sites ou
          aplicações não são responsivos (se adaptam a tamanhos de tela e
          dispositivos diferentes) ou não são otimizados, contendo imagens ou
          animações muito pesadas e consumindo muita memória, o acesso dessas
          pessoas é comprometido.
        </p>

        <h3>
          Pessoas com baixa escolaridade ou baixa experiência computacional
        </h3>

        <p>
          A utilização de jargões ou termos técnicos, interações muito
          complexas, informações disponibilizadas apenas em formato de texto,
          sem alternativas em áudio, vídeo ou imagem e ícones sem rótulos podem
          prejudicar a interação desse público. Um ícone de menu sanduíche (três
          linhas horizontais empilhadas) pode ser fácil de entender para quem já
          tem experiência prévia, mas usuários novos precisam de um rótulo que o
          identifique ao menos uma vez.
        </p>

        <h3>Pessoas em ambientes ou contextos não-ideais</h3>

        <p>
          Ambientes com luminosidade alta ou baixa demais, lugares com muito
          ruído ou em que é necessário fazer silêncio, situações estressantes
          como prazos curtos para executar uma tarefa podem interferir na
          experiência do usuário. Imagine alguém tentando pressionar um botão
          pequeno demais enquanto se equilibra em um ônibus em movimento ou
          alguém que não consegue ouvir o som de um vídeo em uma praça
          movimentada (e se beneficiaria do uso de legendas).
        </p>

        <h2>Atividade sugerida</h2>
        <p>
          Reflexão: você já enfrentou alguma das barreiras citadas? Já precisou
          de alguma adaptação para interagir com algum sistema, seja dando zoom
          em um texto pequeno, acionando o modo escuro para diminuir o cansaço
          da vista ou utilizando um leitor de telas, por exemplo? E as pessoas
          próximas a você? Que barreiras enfrentam e como lidam com elas?
        </p>

        <h2>Referências</h2>
        <a
          href="http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13146.htm"
          target="_blank"
          rel="noreferrer"
        >
          Lei Brasileira de Inclusão da Pessoa com Deficiência
        </a>

        <GoToQuizBtn id={6} />
      </div>
    </>
  );
}
