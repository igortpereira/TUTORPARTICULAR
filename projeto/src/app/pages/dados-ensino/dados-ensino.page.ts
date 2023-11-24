import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/model/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ProfessorDisciplinaService } from 'src/app/services/professor-disciplina.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dados-ensino',
  templateUrl: './dados-ensino.page.html',
  styleUrls: ['./dados-ensino.page.scss'],
})
export class DadosEnsinoPage implements OnInit {

  disciplinas: Disciplina[];
  idProfessor: number;

  constructor(private toastController: ToastController, private navController: NavController, private disciplinaService: DisciplinaService, private professorDisciplinaService: ProfessorDisciplinaService, private alertController: AlertController, private activatedRoute: ActivatedRoute, private loadingController: LoadingController) { 
    this.disciplinas = [];
    this.idProfessor = this.activatedRoute.snapshot.params['idProfessor'];
  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.carregarlista();
  }

  async carregarlista(){
    this.exibirLoader();
    await this.disciplinaService.listarDisciplinaProfessor(this.idProfessor).then((json)=>{
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

  async excluirDisciplina(disciplina: Disciplina){
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
            this.professorDisciplinaService.excluir(this.idProfessor, disciplina.idDisciplina).then(()=>{
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
