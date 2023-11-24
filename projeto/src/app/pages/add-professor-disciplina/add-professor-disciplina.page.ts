import { Component, OnInit } from '@angular/core';
import { ProfessorDisciplina } from 'src/app/model/professor-disciplina';
import { ProfessorDisciplinaService } from 'src/app/services/professor-disciplina.service';
import { Disciplina } from 'src/app/model/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-professor-disciplina',
  templateUrl: './add-professor-disciplina.page.html',
  styleUrls: ['./add-professor-disciplina.page.scss'],
})
export class AddProfessorDisciplinaPage implements OnInit {

  professorDisciplina: ProfessorDisciplina;
  formGroup: FormGroup;
  idProfessor: number;
  disciplinas: Disciplina[];

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private professorDisciplinaService: ProfessorDisciplinaService, private disciplinaService: DisciplinaService, private formBuilder: FormBuilder) {
    this.professorDisciplina = new ProfessorDisciplina();
    this.idProfessor = this.activatedRoute.snapshot.params["idProfessor"];
    this.professorDisciplina.idProfessor = this.idProfessor;
    this.disciplinas = [];

    this.formGroup = this.formBuilder.group({
      'idDisciplina':[this.professorDisciplina.idDisciplina, Validators.compose([
        Validators.required
      ])]
    })
  }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.carregarlista();
  }

  async carregarlista(){
    await this.disciplinaService.listar().then((json)=>{
      this.disciplinas = <Disciplina[]> (json);
    });
  }

  salvar() {

    this.professorDisciplina.idDisciplina = this.formGroup.value.idDisciplina;

    this.professorDisciplinaService.salvar(this.professorDisciplina).then((json) => {
      this.professorDisciplina = <ProfessorDisciplina>(json);
      if (this.professorDisciplina) {
        this.exibirMensagem("Registro salvo com sucesso!!!") ;
        this.navController.navigateBack('/dados-ensino/' + this.idProfessor);
      } else { 
        this.exibirMensagem('Erro ao salvar o registro!');
      }
    })
    .catch((erro) => {
      this.exibirMensagem('Erro ao salvar o registro! Erro: ' + erro['mensage']);
    });
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

}
