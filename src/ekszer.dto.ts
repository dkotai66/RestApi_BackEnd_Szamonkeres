import { IsDefined, IsInt, IsOptional, Min } from 'class-validator';

export default class NewEkszerDto {
  @Min(0)
  @IsInt({ message: 'az árnak teljes számnak kell lennie' })
  ar: number;

  @IsDefined({ message: 'Az anyag megadása kötelező!' })
  anyag: string;

  @IsDefined({ message: 'A típus megadása kötelező!' })
  tipus: string;

  @IsOptional()
  szin: string;

  @IsOptional()
  id: number;
}
