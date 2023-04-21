import { Response } from 'express';
import { Controller, Get, Res } from '@decorators/express';

@Controller('/test')
export class TestController {
  @Get('/')
  public async ok(@Res() res: Response): Promise<void> {
    res.sendStatus(200);
  }
}
