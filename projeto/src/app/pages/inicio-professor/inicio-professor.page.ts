import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/model/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-professor',
  templateUrl: './inicio-professor.page.html',
  styleUrls: ['./inicio-professor.page.scss'],
})
export class InicioProfessorPage implements OnInit {

  professor: Professor;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private professorService: ProfessorService) { 
    this.professor = new Professor();

    let idProfessor = this.activatedRoute.snapshot.params['idProfessor'];
    if(idProfessor != null) {
      this.professorService.buscarPorId(parseInt(idProfessor)).then((json)=>{
        this.professor = <Professor>(json);
      }); 
    }
  }

  public appPages = [
    { title: 'Meus dados', url: '/meus-dados-professor/' + this.retornarId(), icon: 'person', color: "dark" },
    { title: 'Dados de ensino', url: '/dados-ensino/' + this.retornarId(), icon: 'layers', color: "dark" },
    { title: 'Sair', url: '/login', icon: 'exit', color: "danger" }
  ];

  ngOnInit() {}

  retornarId(){
    let idProfessor = this.activatedRoute.snapshot.params['idProfessor'];
    return idProfessor;
  }

}
