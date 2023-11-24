import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/model/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';
import { Aluno } from 'src/app/model/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { Professor } from 'src/app/model/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formGroup: FormGroup;
  email: string;
  senha: string;
  administrador: Administrador;
  aluno: Aluno;
  professor: Professor;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, private administradorService: AdministradorService, private alunoService: AlunoService, private professorService: ProfessorService) { 
    this.email = "";
    this.senha = "";
    this.administrador = new Administrador();
    this.aluno = new Aluno();
    this.professor = new Professor();

    this.formGroup = this.formBuilder.group(
      {
        'email': ["", Validators.compose([
          Validators.required
        ])],
        'senha': ["", Validators.compose([
          Validators.required
        ])]
      }
    )
  }

  ngOnInit() {
  }

  autenticar() {

    this.email = this.formGroup.value.email;
    this.senha = this.formGroup.value.senha;

    this.administradorService.autenticar(this.email, this.senha).then((json) => {
      this.administrador = <Administrador>(json); 
      if(this.administrador) {
        this.navController.navigateRoot('/inicio-admin/' + this.administrador.idAdministrador);
      } else {
        this.verificarAluno();
      }
    }).catch((erro) => {
      this.exibirMensagem('Erro ao autenticar usuário! Erro: ' + erro['mensage']);
    });
  }

  verificarAluno(){
    this.alunoService.autenticar(this.email, this.senha).then((json) => {
      this.aluno = <Aluno>(json); 
      if(this.aluno) {
        this.navController.navigateRoot('/inicio-aluno/' + this.aluno.idAluno);
      } else {
        this.verificarProfessor();
      }
    }).catch((erro) => {
      this.exibirMensagem('Erro ao autenticar usuário! Erro: ' + erro['mensage']);
    });
  }

  verificarProfessor(){
    this.professorService.autenticar(this.email, this.senha).then((json) => {
      this.professor = <Professor>(json); 
      if(this.professor) {
        this.navController.navigateRoot('/inicio-professor/' + this.professor.idProfessor);
      } else {
        this.exibirMensagem('E-mail ou senha inválidos!!');
      }
    }).catch((erro) => {
      this.exibirMensagem('Erro ao autenticar usuário! Erro: ' + erro['mensage']);
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
