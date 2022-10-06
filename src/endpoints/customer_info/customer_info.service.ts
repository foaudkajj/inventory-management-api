import { Injectable } from "@nestjs/common";
import { Customer_info } from "src/models";
import { CustomerInfoRepository } from "./customer_info.repository";

@Injectable()
export class CustomerInfoService{
    constructor(private customerinfoRepository: CustomerInfoRepository){}
    getAll(): Promise<Customer_info[]> {
        return this.customerinfoRepository.orm.find();
      }
    
      insert(row: Customer_info) {
        return this.customerinfoRepository.orm.insert(row);
      }
    
      update(row: Partial<Customer_info>, id: string) {
        return this.customerinfoRepository.orm.update({id: id}, row);
      }
    
      delete(id: string) {
        return this.customerinfoRepository.orm.delete({id: id});
      }
}
