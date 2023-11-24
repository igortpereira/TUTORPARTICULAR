import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/model/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { Disciplina } from 'src/app/model/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.page.html',
  styleUrls: ['./pesquisar.page.scss'],
})
export class PesquisarPage implements OnInit {

  professores: Professor[];

  constructor(private toastController: ToastController, private navController: NavController, private professorService: ProfessorService, private disciplinaService: DisciplinaService, private alertController: AlertController, private activatedRoute: ActivatedRoute, private loadingController: LoadingController) { 
    this.professores = [];
  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.carregarlista();
  }

  async carregarlista(){
    this.exibirLoader();
    await this.professorService.listar().then((json)=>{
      this.professores = <Professor[]> (json);
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

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

}
