import { Component, OnInit } from '@angular/core';
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {DadoNome} from './types/modelonovo';
import {ModeloNovoService} from './services/modelonovo.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './todos_dados.component.html',
  styleUrls: ['./app.component.css']
})
export class todos_dadosComponent implements OnInit {
    dados: DadoNome[];

    constructor(private modeloNovoService: ModeloNovoService)
    { }

    ngOnInit(): void {
        this.modeloNovoService.mesclardados().then(dados => this.dados = dados);
    }
}
