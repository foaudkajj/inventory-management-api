import { Injectable } from "@nestjs/common";
import { Currency } from "src/models";
import { CurrencyRepository } from "./currency.repository";

@Injectable()
export class CurrencyService {
    constructor(private currencyRepository: CurrencyRepository){}
    getAll(): Promise<Currency[]> {
        return this.currencyRepository.orm.find();
      }
    
      insert(row: Currency) {
        return this.currencyRepository.orm.insert(row);
      }
    
      update(row: Partial<Currency>, id: string) {
        return this.currencyRepository.orm.update({id: id}, row);
      }
    
      delete(id: string) {
        return this.currencyRepository.orm.delete({id: id});
      }
}
