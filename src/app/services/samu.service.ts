import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
//import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { UF } from '../types/uf';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SamuService {
  private samuUrl = 'api/VALORES';

  constructor(private http: Http) { }

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return this.http.get(this.samuUrl)
    .toPromise()
    .then(response => response.json().data as Dados[])
    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
  console.error('Houve um erro', error);
  return Promise.reject(error.message || error);
}
  geMediaMunicipios(dados: Dados[]): Promise<number>{
    let soma = 0;
    dados.forEach(dado => soma+= dado.valor);
    return Promise.resolve(Math.round(soma/dados.length));
  }
  getMunicipiosPorAno(uf: UF): Promise<Dados[]>{
     return this.http.get(this.samuUrl)
      .toPromise()
      .then((response) => {
        let dados = response.json().data as Dados[];
        let resumo = dados.filter(dado => dado.uf_id == uf.id);
        return resumo;
      })
      .catch(this.handleError);
  }
}
