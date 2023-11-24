import { Injectable } from '@angular/core';
import { Disciplina } from '../model/disciplina';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DisciplinaService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url: string = 'http://localhost:8087/api/tutorParticular/disciplina';

  constructor(private httpClient: HttpClient) { }

  async salvar(disciplina: Disciplina){
    if(disciplina.idDisciplina === 0) {
      return await this.httpClient.post(this.url, JSON.stringify(disciplina), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(disciplina), this.httpHeaders).toPromise();
    }
  }

  async buscarPorId(idDisciplina: number){
    let urlAuxiliar = this.url + "/" + idDisciplina;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async listar(){
    return await this.httpClient.get(this.url).toPromise();
  }

  async listarDisciplinaProfessor(idProfessor: number){
    let urlAuxiliar = this.url + "/professor/" + idProfessor;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async excluir(idDisciplina: number) {
    let urlAuxiliar = this.url + "/" + idDisciplina;
    return await this.httpClient.delete(urlAuxiliar).toPromise();
  }
}

