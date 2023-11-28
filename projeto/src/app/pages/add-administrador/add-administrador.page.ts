import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Administrador } from 'src/app/model/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-administrador',
  templateUrl: './add-administrador.page.html',
  styleUrls: ['./add-administrador.page.scss'],
})
export class AddAdministradorPage implements OnInit {

  administrador: Administrador;
  formGroup: FormGroup;

  constructor(private renderer: Renderer2, private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, private administradorService: AdministradorService) { 
    this.administrador = new Administrador();

    this.formGroup = this.formBuilder.group(
      {
        'nome': [this.administrador.nome, Validators.compose([
          Validators.required
        ])],
        'email': [this.administrador.email, Validators.compose([
          Validators.required
        ])],
        'senha': [this.administrador.senha, Validators.compose([
          Validators.required
        ])],
      }
    )
  }

  ngOnInit() {
  }

  salvar() {
    this.administrador.nome = this.formGroup.value.nome;
    this.administrador.email = this.formGroup.value.email;
    this.administrador.senha = this.formGroup.value.senha;

    this.administradorService.salvar(this.administrador).then((json) => {
      this.administrador = <Administrador>(json);
      if (this.administrador) {
        this.exibirMensagem("Cadastro realizado com sucesso!!!") ;
        this.navController.navigateRoot('/inicio-admin/' + this.administrador.idAdministrador);
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
