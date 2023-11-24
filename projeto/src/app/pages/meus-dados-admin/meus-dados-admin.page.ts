import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/model/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meus-dados-admin',
  templateUrl: './meus-dados-admin.page.html',
  styleUrls: ['./meus-dados-admin.page.scss'],
})
export class MeusDadosAdminPage implements OnInit {

  senhaVisivel = false;
  administrador: Administrador;
  formGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formBuilder: FormBuilder, private administradorService: AdministradorService) { 
    this.administrador = new Administrador();

    this.formGroup = this.formBuilder.group(
      {
        'nome': [this.administrador.nome, Validators.compose([
          Validators.required
        ])],
        'email': [this.administrador.email, Validators.compose([
          Validators.required
        ])]
        ,
        'senha': [this.administrador.senha, Validators.compose([
          Validators.required
        ])]
      }
    )

    let idAdministrador = this.activatedRoute.snapshot.params['idAdministrador'];
    if(idAdministrador != null) {
      this.administradorService.buscarPorId(parseInt(idAdministrador)).then((json)=>{
        this.administrador = <Administrador>(json);
        this.formGroup.get('nome')?.setValue(this.administrador.nome);
        this.formGroup.get('email')?.setValue(this.administrador.email);
        this.formGroup.get('senha')?.setValue(this.administrador.senha);
      }); 
    }
  }

  ngOnInit() {
  }

  togglePassword() {
    this.senhaVisivel = !this.senhaVisivel;
  }

  salvar() {

    this.administrador.nome = this.formGroup.value.nome;
    this.administrador.email = this.formGroup.value.email;
    this.administrador.senha = this.formGroup.value.senha;

    this.administradorService.salvar(this.administrador).then((json) => {
      this.administrador = <Administrador>(json);
      if (this.administrador) {
        this.exibirMensagem("Dados atualizados com sucesso!!!") ;
        this.navController.navigateBack('/inicio-admin/' + this.administrador.idAdministrador);
      } else { 
        this.exibirMensagem('Erro ao atualizar dados!');
      }
    })
    .catch((erro) => {
      this.exibirMensagem('Erro ao atualizar dados! Erro: ' + erro['mensage']);
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
