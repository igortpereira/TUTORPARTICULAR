import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController } from '@ionic/angular';
import { FormatoAula } from 'src/app/model/formato-aula';
import { FormatoAulaService } from 'src/app/services/formato-aula.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formato-aula',
  templateUrl: './formato-aula.page.html',
  styleUrls: ['./formato-aula.page.scss'],
})

export class FormatoAulaPage implements OnInit {

  formatosAula: FormatoAula[];
  idAdministrador: number;

  constructor(private toastController: ToastController, private navController: NavController, private formatoAulaService: FormatoAulaService, private alertController: AlertController, private activatedRoute: ActivatedRoute, private loadingController: LoadingController) { 
    this.formatosAula = [];
    this.idAdministrador = this.activatedRoute.snapshot.params['idAdministrador'];
  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.carregarlista();
  }

  async carregarlista(){
    this.exibirLoader();
    await this.formatoAulaService.listar().then((json)=>{
      this.formatosAula = <FormatoAula[]> (json);
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

  async excluir(formatoAula: FormatoAula){
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: formatoAula.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            this.formatoAulaService.excluir(formatoAula.idFormatoAula).then(()=>{
              this.carregarlista();
              this.exibirMensagem('Formato de aula excluído com sucesso!!!');
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
