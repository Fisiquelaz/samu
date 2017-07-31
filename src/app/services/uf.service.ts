import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): Promise<UF[]> {
    return Promise.resolve(UFs);
  }
  getUF(id:number): Promise<UF>{
    let uf:UF;
    for(let entrada of UFs)
    {
      if(entrada.id == id){
        uf = entrada;
        break;
      }
    }
    return Promise.resolve(uf);
  }
}
