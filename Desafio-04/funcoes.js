function clicou() {

  var n1 = (window.prompt('Que produto você está comprando?'))

  var n2 = Number(window.prompt('Quanto custa ' + n1 + ' que você está comprando?'))

  var n3 = Number(window.prompt('Qual foi o valor que você deu para pagar ' + n1 + '?'))

  calculo = n3 - n2

  let = Number(window.alert('Você comprou ' + n1 + ' que custou ' + n2 + 
  ' Deu ' + n3 + ' em dinheiro e vai receber ' + calculo + ' de troco ' +
  'Volte sempre'))
}