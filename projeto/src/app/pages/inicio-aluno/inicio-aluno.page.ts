import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-aluno',
  templateUrl: './inicio-aluno.page.html',
  styleUrls: ['./inicio-aluno.page.scss'],
})
export class InicioAlunoPage implements OnInit {

  aluno: Aluno;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private alunoService: AlunoService) { 
    this.aluno = new Aluno();

    let idAluno = this.activatedRoute.snapshot.params['idAluno'];
    if(idAluno != null) {
      this.alunoService.buscarPorId(parseInt(idAluno)).then((json)=>{
        this.aluno = <Aluno>(json);
      }); 
    }
  }

  public appPages = [
    { title: 'Meus dados', url: '/meus-dados-aluno/' + this.retornarId(), icon: 'person', color: "dark" },
    { title: 'Pesquisar professor', url: '/pesquisar/' + this.retornarId(), icon: 'search', color: "dark" },
    { title: 'Sair', url: '/login', icon: 'exit', color: "danger" }
  ];

  ngOnInit() {}

  retornarId(){
    let idAluno = this.activatedRoute.snapshot.params['idAluno'];
    return idAluno;
  }

}
