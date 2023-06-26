function MediaNotas(a, b, c, d, e, f, g) {
    let soma = a + b + c + d + e + f + g;
    let media = soma / 7;
    return media;
  }
  
  const numero1 = 10;
  const numero2 = 7;
  const numero3 = 8;
  const numero4 = 5;
  const numero5 = 6;
  const numero6 = 9;
  const numero7 = 4;

  const media = MediaNotas(numero1, numero2, numero3, numero4, numero5, numero6, numero7);
  console.log(`A média dos números é: ${media}`);
  