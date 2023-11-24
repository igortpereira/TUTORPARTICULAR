import { Injectable } from '@angular/core';
import { Professor } from '../model/professor';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url: string = 'http://localhost:8087/api/tutorParticular/professor';

  constructor(private httpClient: HttpClient) { }

  async salvar(professor: Professor){
    if(professor.idProfessor === 0) {
      return await this.httpClient.post(this.url, JSON.stringify(professor), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(professor), this.httpHeaders).toPromise();
    }
  }

  async autenticar(email: string, senha: string){
    let urlAuxiliar = this.url + "/" + email + "/" + senha + '/autenticar';
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async listar(){
    return await this.httpClient.get(this.url).toPromise();
  }

  async buscarPorId(idProfessor: number){
    let urlAuxiliar = this.url + "/" + idProfessor;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

}
