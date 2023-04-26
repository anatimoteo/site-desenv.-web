const text = {
  page1:
    "<h2>Todas as cores apresentam três importantes características:</h2><p><strong>Matiz</strong>: é o que define as tonalidades das cores, por exemplo, o amarelo, o verde e o roxo são matizes. Dessa forma, conclui-se que todas as cores são matizes, sejam primárias, secundárias ou terciárias.</p><p><strong>Tom</strong>: corresponde à quantidade de luz presente na cor, classificadas em tonalidades claras e escuras. Dessa forma, quando se acrescenta preto a um matiz, ela fica com uma tonalidade mais escura e do contrário, se acrescentarmos branco a uma cor, ela fica com uma tonalidade mais clara, por exemplo, quando misturamos o vermelho e o branco, atingimos uma tonalidade mais clara, ou a matiz rosa </p><p><strong>Intensidade</strong>: A intensidade determina a presença de brilho na cor e podem ser consideradas fracas (baixa) ou fortes (alta), por exemplo, a cor amarela possui uma tonalidade forte ou alta em comparação com a cor marrom, mais opaca, e, portanto, de fraca intensidade.</p>",

  page2:
    "<h2>As cores são classificadas em:</h2><p>Cores Primárias: As cores primárias, são chamadas de <q>cores puras</q>, pois não podem ser obtidas pela mistura de outras cores. São três as cores primárias, vermelho, amarelo e azul, das quais surgem as outras tonalidades.</p><p>Cores Secundárias: A união de duas cores primárias, representam as três cores secundárias: verde (azul e amarelo), laranja (amarelo e vermelho) e roxo ou violeta (vermelho e azul) </p><p> Cores Terciárias: As cores terciárias, surgem da mistura de uma cor primária e outra secundária. A partir disso, as cores terciárias são: vermelho-arroxeado (vermelho e roxo) e vermelho-alaranjado (vermelho e laranja); amarelo-esverdeado (amarelo e verde) e amarelo-alaranjado (amarelo e laranja); azul-arroxeado (azul e roxo) e azul-esverdeado (azul e verde) </p><h1>Círculo Cromático</h1>'<img src='imagens/circulo.webp' width='550px'/><h2>O Círculo Cromático ou Círculo de Cores é composto por doze cores onde:</h2><p>Cores Primárias<p><ul type='square'><li>Azul</li> <li>Amarelo</li><li>Vermelho</li></ul><p>Cores Secundárias</p><ul type='square'><li>Verde<li><li>Laranja<li><li>Roxo</li></ul><p>Cores Terciárias</p><ul type='square'><li>Vermelho-arroxeado</li> <li>Vermelho-alaranjado</li> <li>Amarelo-esverdeado</li> <li>Amarelo-alaranjado</li> <li>Azul-arroxeado</li><li>Azul-esverdeado<li></ul>",
};
let index = 1;
const divContent = document.getElementById("pageContent");

function onReturn() {
  if (index === 2) {
    index = 1;
  }
  return;
}
function onAdvance() {
  if (index === 1) {
    index = 2;
  }
  return;
}

divContent.innerHTML = text.page1;
