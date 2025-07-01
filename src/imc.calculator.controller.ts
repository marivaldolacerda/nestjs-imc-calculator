import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ImcCalculatorService } from './imc.calculator.service';

@Controller('imc')
export class ImcCalculatorController {
  constructor(private readonly imcService: ImcCalculatorService) {}

  @Post()
  calcularImc(@Body() body: { peso: number; altura: number }) {
    return this.imcService.calcularImcCompleto(body.peso, body.altura);
  }

  @Get('peso-ideal')
  calcularPesoIdeal(@Query('altura') altura: number) {
    return this.imcService.calcularPesoIdeal(Number(altura));
  }
}
