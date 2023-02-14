import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Ekszer } from './ekszer.entity';
import NewEkszerDto from './ekszer.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('/ekszer')
  adatok() {
    const ekszerRepo = this.dataSource.getRepository(Ekszer);
    return ekszerRepo.find();
  }

  @Delete('/ekszer/:id')
  ekszerTorles(@Param('id') id: number) {
    const ekszerRepo = this.dataSource.getRepository(Ekszer);
    ekszerRepo.delete(id);
  }

  @Post('/ekszer')
  ujEkszer(@Body() ekszer: NewEkszerDto){
    ekszer.id = undefined;
    const ekszerRepo = this.dataSource.getRepository(Ekszer);
    ekszerRepo.save(ekszer);
  }
}
