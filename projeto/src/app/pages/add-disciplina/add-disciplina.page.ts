import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Disciplina } from 'src/app/model/disciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-disciplina',
  templateUrl: './add-disciplina.page.html',
  styleUrls: ['./add-disciplina.page.scss'],
})

export class AddDisciplinaPage implements OnInit {

  disciplina: Disciplina;
  formGroup: FormGroup;
  idAdministrador: number;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private disciplinaService: DisciplinaService, private formBuilder: FormBuilder) {
    this.disciplina = new Disciplina();
    this.idAdministrador = this.activatedRoute.snapshot.params["idAdministrador"];
    this.disciplina.idAdministrador = this.idAdministrador;

    this.formGroup = this.formBuilder.group({
      'nome':[this.disciplina.nome, Validators.compose([
        Validators.required
      ])],
      'descricao':[this.disciplina.descricao, Validators.compose([
        Validators.required
      ])]
    })
    
    let idDisciplina = this.activatedRoute.snapshot.params["idDisciplina"];
    if(idDisciplina != null) {
      this.disciplinaService.buscarPorId(parseInt(idDisciplina)).then((json)=>{
        this.disciplina = <Disciplina>(json);
        this.formGroup.get('nome')?.setValue(this.disciplina.nome);
        this.formGroup.get('descricao')?.setValue(this.disciplina.descricao);
      }); 
    }
  }

  ngOnInit() {
  }

  salvar() {

    this.disciplina.nome = this.formGroup.value.nome;
    this.disciplina.descricao = this.formGroup.value.descricao;

    this.disciplinaService.salvar(this.disciplina).then((json) => {
      this.disciplina = <Disciplina>(json);
      if (this.disciplina) {
        this.exibirMensagem("Registro salvo com sucesso!!!") ;
        this.navController.navigateBack('/disciplina/' + this.idAdministrador);
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

