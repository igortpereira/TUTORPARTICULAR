import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tipo-cadastro',
    loadChildren: () => import('./pages/tipo-cadastro/tipo-cadastro.module').then( m => m.TipoCadastroPageModule)
  },
  {
    path: 'add-aluno',
    loadChildren: () => import('./pages/add-aluno/add-aluno.module').then( m => m.AddAlunoPageModule)
  },
  {
    path: 'add-aluno/:idAluno',
    loadChildren: () => import('./pages/add-aluno/add-aluno.module').then( m => m.AddAlunoPageModule)
  },
  {
    path: 'inicio-aluno/:idAluno',
    loadChildren: () => import('./pages/inicio-aluno/inicio-aluno.module').then( m => m.InicioAlunoPageModule)
  },
  {
    path: 'meus-dados-aluno/:idAluno',
    loadChildren: () => import('./pages/meus-dados-aluno/meus-dados-aluno.module').then( m => m.MeusDadosAlunoPageModule)
  },
  {
    path: 'pesquisar',
    loadChildren: () => import('./pages/pesquisar/pesquisar.module').then( m => m.PesquisarPageModule)
  },
  {
    path: 'add-professor',
    loadChildren: () => import('./pages/add-professor/add-professor.module').then( m => m.AddProfessorPageModule)
  },
  {
    path: 'add-professor/:idProfessor',
    loadChildren: () => import('./pages/add-professor/add-professor.module').then( m => m.AddProfessorPageModule)
  },
  {
    path: 'inicio-professor/:idProfessor',
    loadChildren: () => import('./pages/inicio-professor/inicio-professor.module').then( m => m.InicioProfessorPageModule)
  },
  {
    path: 'meus-dados-professor/:idProfessor',
    loadChildren: () => import('./pages/meus-dados-professor/meus-dados-professor.module').then( m => m.MeusDadosProfessorPageModule)
  },
  {
    path: 'dados-ensino/:idProfessor',
    loadChildren: () => import('./pages/dados-ensino/dados-ensino.module').then( m => m.DadosEnsinoPageModule)
  },
  {
    path: 'add-professor-disciplina/:idProfessor',
    loadChildren: () => import('./pages/add-professor-disciplina/add-professor-disciplina.module').then( m => m.AddProfessorDisciplinaPageModule)
  },
  {
    path: 'perfil-professor/:idProfessor',
    loadChildren: () => import('./pages/perfil-professor/perfil-professor.module').then( m => m.PerfilProfessorPageModule)
  },
  {
    path: 'inicio-admin/:idAdministrador',
    loadChildren: () => import('./pages/inicio-admin/inicio-admin.module').then( m => m.InicioAdminPageModule)
  },
  {
    path: 'meus-dados-admin/:idAdministrador',
    loadChildren: () => import('./pages/meus-dados-admin/meus-dados-admin.module').then( m => m.MeusDadosAdminPageModule)
  },
  {
    path: 'disciplina/:idAdministrador',
    loadChildren: () => import('./pages/disciplina/disciplina.module').then( m => m.DisciplinaPageModule)
  },
  {
    path: 'add-disciplina/:idAdministrador',
    loadChildren: () => import('./pages/add-disciplina/add-disciplina.module').then( m => m.AddDisciplinaPageModule)
  },
  {
    path: 'add-disciplina/:idAdministrador/:idDisciplina',
    loadChildren: () => import('./pages/add-disciplina/add-disciplina.module').then( m => m.AddDisciplinaPageModule)
  },
  {
    path: 'nivel-ensino/:idAdministrador',
    loadChildren: () => import('./pages/nivel-ensino/nivel-ensino.module').then( m => m.NivelEnsinoPageModule)
  },
  {
    path: 'add-nivel-ensino/:idAdministrador',
    loadChildren: () => import('./pages/add-nivel-ensino/add-nivel-ensino.module').then( m => m.AddNivelEnsinoPageModule)
  },
  {
    path: 'add-nivel-ensino/:idAdministrador/:idNivelEnsino',
    loadChildren: () => import('./pages/add-nivel-ensino/add-nivel-ensino.module').then( m => m.AddNivelEnsinoPageModule)
  },
  {
    path: 'formato-aula/:idAdministrador',
    loadChildren: () => import('./pages/formato-aula/formato-aula.module').then( m => m.FormatoAulaPageModule)
  },
  {
    path: 'add-formato-aula/:idAdministrador',
    loadChildren: () => import('./pages/add-formato-aula/add-formato-aula.module').then( m => m.AddFormatoAulaPageModule)
  },
  {
    path: 'add-formato-aula/:idAdministrador/:idFormatoAula',
    loadChildren: () => import('./pages/add-formato-aula/add-formato-aula.module').then( m => m.AddFormatoAulaPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
