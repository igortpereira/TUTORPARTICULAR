import { Injectable } from '@angular/core';
import { FormatoAula } from '../model/formato-aula';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FormatoAulaService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url: string = 'http://localhost:8087/api/tutorParticular/formatoAula';

  constructor(private httpClient: HttpClient) { }

  async salvar(formatoAula: FormatoAula){
    if(formatoAula.idFormatoAula === 0) {
      return await this.httpClient.post(this.url, JSON.stringify(formatoAula), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(formatoAula), this.httpHeaders).toPromise();
    }
  }

  async buscarPorId(idFormatoAula: number){
    let urlAuxiliar = this.url + "/" + idFormatoAula;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async listar(){
    return await this.httpClient.get(this.url).toPromise();
  }

  async excluir(idFormatoAula: number) {
    let urlAuxiliar = this.url + "/" + idFormatoAula;
    return await this.httpClient.delete(urlAuxiliar).toPromise();
  }
}
