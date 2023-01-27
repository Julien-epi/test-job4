import { Injectable } from '@nestjs/common';
import { Address } from './address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,

  ) {}

  // async create(dto: ArticleClassificationDto): Promise<any> {
  //   let article = await this.repository.create(dto);
  //   article = await this.repository.save(article);
  //   const classifications = await this.classificationRepository.findByIds(article.classification, {relations: ['articles']});
  //   return this.classificationRepository.save(classifications);
  // }

  async create(args: CreateAddressDto): Promise<Address> {
    const result = await this.addressRepository.save({
      ...args,
    });
    //console.log(result.user[].id);
    return result;
  }

  // async addAddress(
  //   userId: number,
  //   CreateAddressDto: CreateAddressDto,
  // ): Promise<Address> {
  //   const user = await this.userRepository.findOne({ where: { id: userId } });

  //   const address = new Address();
  //   address.city = "test";
  //   address.country = "test";
  //   address.postalCode = 896089;
  //   address.street ="test";
  //   address.phone = 68989;

  //   user.address = [...user.address, address];
  //   console.log("🚀 ~ file: address.service.ts:31 ~ AddressService ~ user.address", user.address)

  //   await this.addressRepository.save(address);

  //   await this.userRepository.save(user);

  //   return address;
  // }

  findAll() {
    return `This action returns all address`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
