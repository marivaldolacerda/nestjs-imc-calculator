import { Injectable } from '@nestjs/common';

@Injectable()
export class ImcCalculatorService {
  calcularImcCompleto(peso: number, altura: number) {
    const imc = peso / (altura * altura);
    return {
      peso,
      altura,
      imc: imc.toFixed(2),
      descricao: this.classificarImc(imc),
    };
  }

  classificarImc(imc: number): string {
    if (imc < 18.5) return 'Magreza';
    if (imc < 24.9) return 'Normal';
    if (imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  }

  calcularPesoIdeal(altura: number) {
    const min = 18.5 * altura * altura;
    const max = 24.9 * altura * altura;
    return {
      altura,
      pesoIdealMin: min.toFixed(2),
      pesoIdealMax: max.toFixed(2),
    };
  }
}
