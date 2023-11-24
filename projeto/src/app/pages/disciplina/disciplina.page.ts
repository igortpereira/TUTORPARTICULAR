import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController } from '@ionic/angular';
import { Disciplina } from 'src/app/model/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.page.html',
  styleUrls: ['./disciplina.page.scss']
})

export class DisciplinaPage implements OnInit {

  disciplinas: Disciplina[];
  idAdministrador: number;

  constructor(private toastController: ToastController, private navController: NavController, private disciplinaService: DisciplinaService, private alertController: AlertController, private activatedRoute: ActivatedRoute, private loadingController: LoadingController) { 
    this.disciplinas = [];
    this.idAdministrador = this.activatedRoute.snapshot.params['idAdministrador'];
  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.carregarlista();
  }

  async carregarlista(){
    this.exibirLoader();
    await this.disciplinaService.listar().then((json)=>{
      this.disciplinas = <Disciplina[]> (json);
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

  async excluir(disciplina: Disciplina){
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: disciplina.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            this.disciplinaService.excluir(disciplina.idDisciplina).then(()=>{
              this.carregarlista();
              this.exibirMensagem('Disciplina excluída com sucesso!!!');
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

