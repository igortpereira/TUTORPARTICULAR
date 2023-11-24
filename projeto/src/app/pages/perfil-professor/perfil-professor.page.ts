import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/model/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { Disciplina } from 'src/app/model/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-professor',
  templateUrl: './perfil-professor.page.html',
  styleUrls: ['./perfil-professor.page.scss'],
})
export class PerfilProfessorPage implements OnInit {

  professor: Professor;
  disciplinas: Disciplina[];
  idProfessor: number;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private professorService: ProfessorService, private disciplinaService: DisciplinaService, private loadingController: LoadingController) { 
    this.professor = new Professor();
    this.disciplinas = [];

    let idProfessor = this.activatedRoute.snapshot.params['idProfessor'];
    if(idProfessor != null) {
      this.professorService.buscarPorId(parseInt(idProfessor)).then((json)=>{
        this.professor = <Professor>(json);
      }); 
    }

    this.idProfessor = this.activatedRoute.snapshot.params['idProfessor'];
  }

  ngOnInit() {}

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

}
