import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
//import { UFs } from './mock-ufs';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UFService {
  constructor(private http: Http) { }
  //getAll(): Promise<UF[]> {
    //return Promise.resolve(UFs);
  //}
  getUF(id:number): Promise<UF>{
    return this.http.get('/api/ufs')
    .toPromise()
    .then((response) => {
      let ufs = response.json().data as UF[];
      return ufs.find(uf => uf.id == id);
    });
  }
}
