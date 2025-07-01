import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ImcCalculatorModule } from './imc.calculator.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { ImcCalculatorModule } from './imc.calculator.module';

@Module({
  imports: [ImcCalculatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
