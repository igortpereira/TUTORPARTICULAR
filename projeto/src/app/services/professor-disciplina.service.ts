import { Injectable } from '@angular/core';
import { ProfessorDisciplina } from '../model/professor-disciplina';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorDisciplinaService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url: string = 'http://localhost:8087/api/tutorParticular/professorDisciplina';

  constructor(private httpClient: HttpClient) { }

  async salvar(professorDisciplina: ProfessorDisciplina){
    return await this.httpClient.post(this.url, JSON.stringify(professorDisciplina), this.httpHeaders).toPromise();
  }

  async excluir(idProfessor: number, idDisciplina: number) {
    let urlAuxiliar = this.url + "/" + idProfessor + "/" + idDisciplina;
    return await this.httpClient.delete(urlAuxiliar).toPromise();
  }
}
