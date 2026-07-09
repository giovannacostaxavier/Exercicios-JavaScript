/*FORMATE UM NÚMERO DE PEDIDO COMO "00042" (SEMPRE 5 DÍGITOS COM ZEROS À ESQUERDA). DEPOIS CRIE UM SEPARADOR VISUAL DO TIPO "=== PEDIDO 00042 ===" ONDE OS = SÃO GERADOS COM REPEAT E O NÚMERO FORMATADO COM PADSTART.*/

let pedido = '42'
let novoPedido = pedido.padStart(5,'0')
console.log(`${'='.repeat(3)} PEDIDO ${novoPedido} ${'='.repeat(3)}`);
