import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './dados_uf.component.html',
  styleUrls: ['./app.component.css']
})
export class dados_ufComponent implements OnInit {
    id = 15
    uf: UF;
    samu: Dados[] = [];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufService.getUF(this.id).then((uf) => {
          this.uf = uf;
          this.samuService.getMunicipiosPorAno(this.uf).then(samu => this.samu = samu);
        });
    }
}
