import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/model/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { Aluno } from 'src/app/model/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { Disciplina } from 'src/app/model/disciplina';
import { ProfessorDisciplina } from 'src/app/model/professor-disciplina';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ProfessorDisciplinaService } from 'src/app/services/professor-disciplina.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.page.html',
  styleUrls: ['./pesquisar.page.scss'],
})
export class PesquisarPage implements OnInit {

  professores: Professor[];
  professoresFiltrados: Professor[];
  pesquisa: string = '';
  idAluno: number;
  quantDisciplina: number = 0;

  constructor(private toastController: ToastController, private navController: NavController, private professorService: ProfessorService, private alunoService: AlunoService, private disciplinaService: DisciplinaService, private professorDisciplinaService: ProfessorDisciplinaService, private alertController: AlertController, private activatedRoute: ActivatedRoute, private loadingController: LoadingController) {
    this.professores = [];
    this.professoresFiltrados = [];
    this.idAluno = this.activatedRoute.snapshot.params['idAluno'];
  }

  ngOnInit() {
    // Recupere os parâmetros da consulta
    this.activatedRoute.queryParams.subscribe(params => {
      const quantAlunos = params['quantAlunos'];
      const raioDistancia = params['raioDistancia'];
      const idDisciplina = params['idDisciplina'];

      // Faça o que for necessário com os parâmetros recuperados
      console.log('Quantidade de alunos:', quantAlunos);
      console.log('Raio de distância:', raioDistancia);
      console.log('ID da disciplina:', idDisciplina);

      // Chame a função para carregar a lista com base nos parâmetros
      this.filtrarProfessores(quantAlunos, raioDistancia, idDisciplina);
    });
  }

  async ionViewWillEnter() {
    this.carregarlista();
  }

  async carregarlista() {
    await this.professorService.listar().then((json) => {
      this.professores = <Professor[]>(json);
    });
    this.pesquisarProfessores();
  }

  pesquisarProfessores() {
    if (this.pesquisa.trim() === '') {
      this.professoresFiltrados = this.professores;
    } else {
      const termoFiltro = this.pesquisa.toLowerCase();
      this.professoresFiltrados = this.professores.filter(professor => {
        return (
          professor.nome.toLowerCase().includes(termoFiltro) ||
          professor.uf.toLowerCase().includes(termoFiltro) ||
          professor.cidade.toLowerCase().includes(termoFiltro) ||
          professor.numMaxAlunos.toString().includes(termoFiltro)
        );
      });
    }

    this.ngOnInit();
  }

  async filtrarProfessores(quantAlunos: number, raioDistancia: number, idDisciplina: number) {
    console.log('Filtrando professores...');
    console.log('Quantidade de alunos:', quantAlunos);
    console.log('Raio de distância:', raioDistancia);
    console.log('ID da disciplina:', idDisciplina);

    const resultados = await Promise.all(
      this.professores.map(async professor => {
        const temDisciplina = await this.carregarDisciplinasProfessor(professor.idProfessor, idDisciplina);
        return (professor.numMaxAlunos >= quantAlunos && (!idDisciplina || temDisciplina)) ? professor : null;
      })
    );

    this.professoresFiltrados = resultados.filter(p => p !== null);

    console.log('Professores filtrados:', this.professoresFiltrados);
  }


  async carregarDisciplinasProfessor(idProfessor: number, idDisciplina: number) {
    try {
      const json = await this.professorDisciplinaService.listarPorId(idProfessor, idDisciplina);
      let professorDisciplina: ProfessorDisciplina = json as ProfessorDisciplina;
      if (professorDisciplina) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Erro ao carregar disciplinas do professor:', error);
      return false;
    }
  }


  exibirLoader() {
    this.loadingController.create({
      message: 'Carregando...'
    }).then((res) => {
      res.present();
    })
  }

  fecharLoader() {
    setTimeout(() => {
      this.loadingController.dismiss().then(() => {
      }).catch((erro) => {
        console.log('Erro: ', erro)
      });
    }, 500);
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

}
