import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './resumo.component.html',
  styleUrls: ['./app.component.css']
})
export class resumoComponent implements OnInit {
    ufs : UF[];
    dados_da_samu : Dados[];
    id = 15
    uf: UF;
    media: number;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.samuService.getAllMunicipiosAtendidosPorEstado().then(dados_da_samu => this.dados_da_samu = dados_da_samu);
        this.uf = this.ufService.getUF(this.id);
        this.media = this.samuService.geMediaMunicipios(this.id);
    }
}
