import { ApiProperty } from '@nestjs/swagger/dist';
import { MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
    @MinLength(4)
    @IsNotEmpty()
    @ApiProperty({
      example: '4 rue Grande',
    })
    street: string;
  
    @IsNotEmpty()
    @ApiProperty({
      example: 'Paris',
    })
    city: string;
  
    @IsNotEmpty()
    @ApiProperty({
      example: 94800,
    })
    postalCode: number;

    @IsNotEmpty()
    @ApiProperty({
      example: 'France',
    })
    country: string;

    @IsNotEmpty()
    @ApiProperty({
      example: 9480,
    })
    phone: number;

}
