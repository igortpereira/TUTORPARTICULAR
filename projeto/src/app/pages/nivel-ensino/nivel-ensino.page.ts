import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController } from '@ionic/angular';
import { NivelEnsino } from 'src/app/model/nivel-ensino';
import { NivelEnsinoService } from 'src/app/services/nivel-ensino.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nivel-ensino',
  templateUrl: './nivel-ensino.page.html',
  styleUrls: ['./nivel-ensino.page.scss'],
})

export class NivelEnsinoPage implements OnInit {

  niveisEnsino: NivelEnsino[];
  idAdministrador: number;

  constructor(private toastController: ToastController, private navController: NavController, private nivelEnsinoService: NivelEnsinoService, private alertController: AlertController, private activatedRoute: ActivatedRoute, private loadingController: LoadingController) { 
    this.niveisEnsino = [];
    this.idAdministrador = this.activatedRoute.snapshot.params['idAdministrador'];
  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.carregarlista();
  }

  async carregarlista(){
    this.exibirLoader();
    await this.nivelEnsinoService.listar().then((json)=>{
      this.niveisEnsino = <NivelEnsino[]> (json);
    });
    this.fecharLoader();
  }

  exibirLoader(){
    this.loadingController.create({ 
      message: 'Carregando...'
    }).then((res)=>{
      res.present();
    })
  }

  fecharLoader(){
    setTimeout(()=>{
      this.loadingController.dismiss().then(()=>{
      }).catch((erro)=>{
        console.log('Erro: ', erro)
      });
    }, 500);
  }

  async excluir(nivelEnsino: NivelEnsino){
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: nivelEnsino.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            this.nivelEnsinoService.excluir(nivelEnsino.idNivelEnsino).then(()=>{
              this.carregarlista();
              this.exibirMensagem('Nível de ensino excluído com sucesso!!!');
            }).catch(()=>{
              this.exibirMensagem('Erro ao excluir o registro.');
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

}

