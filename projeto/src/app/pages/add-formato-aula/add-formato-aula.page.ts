import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormatoAula } from 'src/app/model/formato-aula';
import { FormatoAulaService } from 'src/app/services/formato-aula.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-formato-aula',
  templateUrl: './add-formato-aula.page.html',
  styleUrls: ['./add-formato-aula.page.scss'],
})

export class AddFormatoAulaPage implements OnInit {

  formatoAula: FormatoAula;
  formGroup: FormGroup;
  idAdministrador: number;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private formatoAulaService: FormatoAulaService, private formBuilder: FormBuilder) {
    this.formatoAula = new FormatoAula();
    this.idAdministrador = this.activatedRoute.snapshot.params["idAdministrador"];
    this.formatoAula.idAdministrador = this.idAdministrador;

    this.formGroup = this.formBuilder.group({
      'nome':[this.formatoAula.nome, Validators.compose([
        Validators.required
      ])],
      'descricao':[this.formatoAula.descricao, Validators.compose([
        Validators.required
      ])]
    })
    
    let idFormatoAula = this.activatedRoute.snapshot.params["idFormatoAula"];
    if(idFormatoAula != null) {
      this.formatoAulaService.buscarPorId(parseInt(idFormatoAula)).then((json)=>{
        this.formatoAula = <FormatoAula>(json);
        this.formGroup.get('nome')?.setValue(this.formatoAula.nome);
        this.formGroup.get('descricao')?.setValue(this.formatoAula.descricao);
      }); 
    }
  }

  ngOnInit() {
  }

  salvar() {

    this.formatoAula.nome = this.formGroup.value.nome;
    this.formatoAula.descricao = this.formGroup.value.descricao;

    this.formatoAulaService.salvar(this.formatoAula).then((json) => {
      this.formatoAula = <FormatoAula>(json);
      if (this.formatoAula) {
        this.exibirMensagem("Registro salvo com sucesso!!!") ;
        this.navController.navigateBack('/formato-aula/' + this.idAdministrador);
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
