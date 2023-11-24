import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Administrador } from '../model/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  url: string = 'http://localhost:8087/api/tutorParticular/administrador';

  constructor(private httpClient: HttpClient) { }

  async salvar(administrador: Administrador){
    if(administrador.idAdministrador === 0) {
      return await this.httpClient.post(this.url, JSON.stringify(administrador), this.httpHeaders).toPromise();
    }else{
      return await this.httpClient.put(this.url, JSON.stringify(administrador), this.httpHeaders).toPromise();
    }
  }

  async autenticar(email: string, senha: string){
    let urlAuxiliar = this.url + "/" + email + "/" + senha + '/autenticar';
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }

  async buscarPorId(idAdministrador: number){
    let urlAuxiliar = this.url + "/" + idAdministrador;
    return await this.httpClient.get(urlAuxiliar).toPromise();
  }
}
