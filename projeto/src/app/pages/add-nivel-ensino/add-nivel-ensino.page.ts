import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NivelEnsino } from 'src/app/model/nivel-ensino';
import { NivelEnsinoService } from 'src/app/services/nivel-ensino.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-nivel-ensino',
  templateUrl: './add-nivel-ensino.page.html',
  styleUrls: ['./add-nivel-ensino.page.scss'],
})

export class AddNivelEnsinoPage implements OnInit {

  nivelEnsino: NivelEnsino;
  formGroup: FormGroup;
  idAdministrador: number;

  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController, private navController: NavController, private nivelEnsinoService: NivelEnsinoService, private formBuilder: FormBuilder) {
    this.nivelEnsino = new NivelEnsino();
    this.idAdministrador = this.activatedRoute.snapshot.params["idAdministrador"];
    this.nivelEnsino.idAdministrador = this.idAdministrador;

    this.formGroup = this.formBuilder.group({
      'nome':[this.nivelEnsino.nome, Validators.compose([
        Validators.required
      ])],
      'descricao':[this.nivelEnsino.descricao, Validators.compose([
        Validators.required
      ])]
    })
    
    let idNivelEnsino = this.activatedRoute.snapshot.params["idNivelEnsino"];
    if(idNivelEnsino != null) {
      this.nivelEnsinoService.buscarPorId(parseInt(idNivelEnsino)).then((json)=>{
        this.nivelEnsino = <NivelEnsino>(json);
        this.formGroup.get('nome')?.setValue(this.nivelEnsino.nome);
        this.formGroup.get('descricao')?.setValue(this.nivelEnsino.descricao);
      }); 
    }
  }

  ngOnInit() {
  }

  salvar() {

    this.nivelEnsino.nome = this.formGroup.value.nome;
    this.nivelEnsino.descricao = this.formGroup.value.descricao;

    this.nivelEnsinoService.salvar(this.nivelEnsino).then((json) => {
      this.nivelEnsino = <NivelEnsino>(json);
      if (this.nivelEnsino) {
        this.exibirMensagem("Registro salvo com sucesso!!!") ;
        this.navController.navigateBack('/nivel-ensino/' + this.idAdministrador);
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
