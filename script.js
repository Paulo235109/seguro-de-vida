document.getElementById('formSimulador').addEventListener('submit', function (e) {
  e.preventDefault();

  let idade = parseInt(document.getElementById('idade').value);
  const plano = document.getElementById('plano').value;

  // Validação da idade
  if (isNaN(idade) || idade < 0 || idade > 110) {
    erroIdade.textContent = "Por favor, insira uma idade válida entre 0 e 110 anos.";
    erroIdade.style.display = 'block'; // Exibe a mensagem de erro
    return;
  } else {
    erroIdade.style.display = 'none'; // Oculta a mensagem de erro
  }
// escolha entre var

  let precoBase = 0;
  switch (plano) {
    case 'essencial':
      precoBase = 29.90;
      break;
    case 'completo':
      precoBase = 59.90;
      break;
    case 'premium':
      precoBase = 99.90;
      break;
  }
// alteraçao no valor de acordo com a idade
  let adicional = 0;
  if (idade > 40) adicional = 0.20 * precoBase;
  if (idade > 60) adicional = 0.50 * precoBase;


  
  const precoFinal = precoBase + adicional;

  document.getElementById('resultado').textContent = `Valor estimado: R$ ${precoFinal.toFixed(2)} por mês`;
});