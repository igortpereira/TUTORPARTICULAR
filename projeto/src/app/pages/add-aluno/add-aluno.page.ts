import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Aluno } from 'src/app/model/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.page.html',
  styleUrls: ['./add-aluno.page.scss'],
})
export class AddAlunoPage implements OnInit {

  aluno: Aluno;
  formGroup: FormGroup;

  constructor(private renderer: Renderer2, private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, private alunoService: AlunoService) { 
    this.aluno = new Aluno();

    this.formGroup = this.formBuilder.group(
      {
        'nome': [this.aluno.nome, Validators.compose([
          Validators.required
        ])],
        'cpf': [this.aluno.cpf, Validators.compose([
          Validators.required
        ])],
        'email': [this.aluno.email, Validators.compose([
          Validators.required
        ])],
        'senha': [this.aluno.senha, Validators.compose([
          Validators.required
        ])],
        'telefone': [this.aluno.telefone, Validators.compose([
          Validators.required
        ])],
        'uf': [this.aluno.uf, Validators.compose([
          Validators.required
        ])],
        'cep': [this.aluno.cep, Validators.compose([
          Validators.required
        ])],
        'cidade': [this.aluno.senha, Validators.compose([
          Validators.required
        ])],
        'bairro': [this.aluno.bairro, Validators.compose([
          Validators.required
        ])],
        'rua': [this.aluno.rua, Validators.compose([
          Validators.required
        ])],
        'numero': [this.aluno.numero, Validators.compose([
          Validators.required
        ])]
      }
    )
  }

  ngOnInit() {
  }

  salvar() {
    this.aluno.nome = this.formGroup.value.nome;
    this.aluno.cpf = this.formGroup.value.cpf;
    this.aluno.email = this.formGroup.value.email;
    this.aluno.senha = this.formGroup.value.senha;
    this.aluno.telefone = this.formGroup.value.telefone;
    this.aluno.uf = this.formGroup.value.uf;
    this.aluno.cep = this.formGroup.value.cep;
    this.aluno.cidade = this.formGroup.value.cidade;
    this.aluno.bairro = this.formGroup.value.bairro;
    this.aluno.rua = this.formGroup.value.rua;
    this.aluno.numero = this.formGroup.value.numero;

    this.alunoService.salvar(this.aluno).then((json) => {
      this.aluno = <Aluno>(json);
      if (this.aluno) {
        this.exibirMensagem("Cadastro realizado com sucesso!!!") ;
        this.navController.navigateRoot('/inicio-aluno/' + this.aluno.idAluno);
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
