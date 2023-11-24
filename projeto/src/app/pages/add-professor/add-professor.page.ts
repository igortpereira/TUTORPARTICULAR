import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/model/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.page.html',
  styleUrls: ['./add-professor.page.scss'],
})
export class AddProfessorPage implements OnInit {

  professor: Professor;
  formGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, private professorService: ProfessorService) { 
    this.professor = new Professor();

    this.formGroup = this.formBuilder.group(
      {
        'nome': [this.professor.nome, Validators.compose([
          Validators.required
        ])],
        'cpf': [this.professor.cpf, Validators.compose([
          Validators.required
        ])],
        'email': [this.professor.email, Validators.compose([
          Validators.required
        ])],
        'senha': [this.professor.senha, Validators.compose([
          Validators.required
        ])],
        'telefone': [this.professor.telefone, Validators.compose([
          Validators.required
        ])],
        'uf': [this.professor.uf, Validators.compose([
          Validators.required
        ])],
        'cep': [this.professor.cep, Validators.compose([
          Validators.required
        ])],
        'cidade': [this.professor.senha, Validators.compose([
          Validators.required
        ])],
        'bairro': [this.professor.bairro, Validators.compose([
          Validators.required
        ])],
        'rua': [this.professor.rua, Validators.compose([
          Validators.required
        ])],
        'numero': [this.professor.numero, Validators.compose([
          Validators.required
        ])],
        'numMaxAlunos': [this.professor.numMaxAlunos, Validators.compose([
          Validators.required
        ])],
        'apresentacao': [this.professor.apresentacao, Validators.compose([
          Validators.required
        ])]
      }
    )
  }

  ngOnInit() {
  }

  salvar() {
    this.professor.nome = this.formGroup.value.nome;
    this.professor.cpf = this.formGroup.value.cpf;
    this.professor.email = this.formGroup.value.email;
    this.professor.senha = this.formGroup.value.senha;
    this.professor.telefone = this.formGroup.value.telefone;
    this.professor.uf = this.formGroup.value.uf;
    this.professor.cep = this.formGroup.value.cep;
    this.professor.cidade = this.formGroup.value.cidade;
    this.professor.bairro = this.formGroup.value.bairro;
    this.professor.rua = this.formGroup.value.rua;
    this.professor.numero = this.formGroup.value.numero;
    this.professor.numMaxAlunos = this.formGroup.value.numMaxAlunos;
    this.professor.apresentacao = this.formGroup.value.apresentacao;

    this.professorService.salvar(this.professor).then((json) => {
      this.professor = <Professor>(json);
      if (this.professor) {
        this.exibirMensagem("Cadastro realizado com sucesso!!!") ;
        this.navController.navigateRoot('/inicio-professor/' + this.professor.idProfessor);
      } else { 
        this.exibirMensagem('Erro ao realizar o cadastro!');
      }
    })
    .catch((erro) => {
      this.exibirMensagem('Erro ao realizar o cadastro! Erro: ' + erro['mensage']);
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
