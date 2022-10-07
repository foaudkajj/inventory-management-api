import { Injectable } from "@nestjs/common";
import { CustomerInfo } from "src/models";
import { CustomerInfoRepository } from "./customer-info.repository";

@Injectable()
export class CustomerInfoService{
    constructor(private customerinfoRepository: CustomerInfoRepository){}
    getAll(): Promise<CustomerInfo[]> {
        return this.customerinfoRepository.orm.find();
      }
    
      insert(row: CustomerInfo) {
        return this.customerinfoRepository.orm.insert(row);
      }
    
      update(row: Partial<CustomerInfo>, id: string) {
        return this.customerinfoRepository.orm.update({id: id}, row);
      }
    
      delete(id: string) {
        return this.customerinfoRepository.orm.delete({id: id});
      }
}
