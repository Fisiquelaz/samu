import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
    ufs : UF[];
    dados_da_samu : Dados[];
    id = 15
    uf: UF;
    media: number;
    samu: Dados[];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
    }
}
