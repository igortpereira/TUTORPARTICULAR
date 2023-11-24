import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aluno } from '../model/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url: string = 'http://localhost:8087/api/tutorParticular/aluno';

  constructor(private httpClient: HttpClient) { }

  async salvar(aluno: Aluno){
    if(aluno.idAluno === 0) {
      return await this.httpClient.post(this.url, JSON.stringify(aluno), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(aluno), this.httpHeaders).toPromise();
    }
  }

  async autenticar(email: string, senha: string){
    let urlAuxiliar = this.url + "/" + email + "/" + senha + '/autenticar';
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async buscarPorId(idAluno: number){
    let urlAuxiliar = this.url + "/" + idAluno;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

}
