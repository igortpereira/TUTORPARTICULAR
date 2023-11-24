import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'meus-dados-admin',
    loadChildren: () => import('./meus-dados-admin/meus-dados-admin.module').then( m => m.MeusDadosAdminPageModule)
  },
  {
    path: 'meus-dados-admin',
    loadChildren: () => import('./meus-dados-admin/meus-dados-admin.module').then( m => m.MeusDadosAdminPageModule)
  },
  {
    path: 'add-professor',
    loadChildren: () => import('./add-professor/add-professor.module').then( m => m.AddProfessorPageModule)
  },
  {
    path: 'inicio-professor',
    loadChildren: () => import('./inicio-professor/inicio-professor.module').then( m => m.InicioProfessorPageModule)
  },
  {
    path: 'add-aluno',
    loadChildren: () => import('./add-aluno/add-aluno.module').then( m => m.AddAlunoPageModule)
  },
  {
    path: 'inicio-aluno',
    loadChildren: () => import('./inicio-aluno/inicio-aluno.module').then( m => m.InicioAlunoPageModule)
  },
  {
    path: 'meus-dados-professor',
    loadChildren: () => import('./meus-dados-professor/meus-dados-professor.module').then( m => m.MeusDadosProfessorPageModule)
  },
  {
    path: 'dados-ensino',
    loadChildren: () => import('./dados-ensino/dados-ensino.module').then( m => m.DadosEnsinoPageModule)
  },
  {
    path: 'add-professor-disciplina',
    loadChildren: () => import('./add-professor-disciplina/add-professor-disciplina.module').then( m => m.AddProfessorDisciplinaPageModule)
  },
  {
    path: 'meus-dados-aluno',
    loadChildren: () => import('./meus-dados-aluno/meus-dados-aluno.module').then( m => m.MeusDadosAlunoPageModule)
  },
  {
    path: 'perfil-professor',
    loadChildren: () => import('./perfil-professor/perfil-professor.module').then( m => m.PerfilProfessorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
