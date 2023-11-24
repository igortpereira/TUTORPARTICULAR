import { Injectable } from '@angular/core';
import { NivelEnsino } from '../model/nivel-ensino';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NivelEnsinoService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url: string = 'http://localhost:8087/api/tutorParticular/nivelEnsino';

  constructor(private httpClient: HttpClient) { }

  async salvar(nivelEnsino: NivelEnsino){
    if(nivelEnsino.idNivelEnsino === 0) {
      return await this.httpClient.post(this.url, JSON.stringify(nivelEnsino), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(nivelEnsino), this.httpHeaders).toPromise();
    }
  }

  async buscarPorId(idNivelEnsino: number){
    let urlAuxiliar = this.url + "/" + idNivelEnsino;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async listar(){
    return await this.httpClient.get(this.url).toPromise();
  }

  async excluir(idNivelEnsino: number) {
    let urlAuxiliar = this.url + "/" + idNivelEnsino;
    return await this.httpClient.delete(urlAuxiliar).toPromise();
  }
}
