import { Injectable } from '@nestjs/common';
import { metrics } from './tracer';
import { log } from './infra/logger';

@Injectable()
export class AppService {
  getHello(): string {
    const meter = metrics.getMeter('obs-app');
    const successMeter = meter.createCounter('success_requests');
    successMeter.add(1);
    log.info('Cheguei aqui!');
    return 'Hello World!';
  }

    getMetrics(): string {
    const meter = metrics.getMeter('obs-app');
    const errorMeter = meter.createCounter('error_requests');
    errorMeter.add(1);
    const histogram = meter.createHistogram('request_duration');
    histogram.record(1000);
    return 'Metrics World!';
  }
}
