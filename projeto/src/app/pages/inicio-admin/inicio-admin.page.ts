import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Administrador } from 'src/app/model/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.page.html',
  styleUrls: ['./inicio-admin.page.scss'],
})
export class InicioAdminPage implements OnInit {

  administrador: Administrador;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private administradorService: AdministradorService) { 
    this.administrador = new Administrador();

    let idAdministrador = this.activatedRoute.snapshot.params['idAdministrador'];
    if(idAdministrador != null) {
      this.administradorService.buscarPorId(parseInt(idAdministrador)).then((json)=>{
        this.administrador = <Administrador>(json);
      }); 
    }
  }

  public appPages = [
    { title: 'Meus dados', url: '/meus-dados-admin/' + this.retornarId(), icon: 'person', color: "dark" },
    { title: 'Sair', url: '/login', icon: 'exit', color: "danger" }
  ];

  ngOnInit() {}

  retornarId(){
    let idAdministrador = this.activatedRoute.snapshot.params['idAdministrador'];
    return idAdministrador;
  }

}
