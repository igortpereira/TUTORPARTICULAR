import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { Professor } from 'src/app/model/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { Disciplina } from 'src/app/model/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.page.html',
  styleUrls: ['./filtro.page.scss'],
})
export class FiltroPage implements OnInit {

  raioDistancia: number = 0;
  disciplinas: Disciplina[];
  formGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, private alunoService: AlunoService, private professorService: ProfessorService, private disciplinaService: DisciplinaService, private router: Router) { 

    this.disciplinas = [];

    this.formGroup = this.formBuilder.group(
      {
        'quantAlunos': [1, Validators.compose([
          Validators.required
        ])],
        'raioDistancia': [15, Validators.compose([
          Validators.required
        ])],
        'idDisciplina': ['', Validators.compose([
          Validators.required
        ])]
      }
    )

    this.formGroup.get('raioDistancia').valueChanges.subscribe(value => {
      // Atualize o valor em tempo real no template
      this.raioDistancia = value;
    });
  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.carregarDisciplinas();
  }

  async carregarDisciplinas(){
    await this.disciplinaService.listar().then((json)=>{
      this.disciplinas = <Disciplina[]> (json);
    });
  }

  filtrar() {
    // Obtenha os valores do formulário
    const quantAlunos = this.formGroup.get('quantAlunos').value;
    const raioDistancia = this.formGroup.get('raioDistancia').value;
    const idDisciplina = this.formGroup.get('idDisciplina').value;
  
    // Obtenha o ID do aluno a partir dos parâmetros da URL
    const idAluno = this.activatedRoute.snapshot.params['idAluno'];
  
    // Navegue para a página de pesquisa com os parâmetros
    this.router.navigate(['/pesquisar', idAluno], {
      queryParams: {
        quantAlunos,
        raioDistancia,
        idDisciplina
      }
    });
  }  

}
