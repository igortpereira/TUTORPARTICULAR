package br.cefet.tutorParticular.service;

import br.cefet.tutorParticular.dao.ProfessorDisciplinaDao;
import br.cefet.tutorParticular.model.ProfessorDisciplina;
import br.cefet.tutorParticular.model.Disciplina;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class ProfessorDisciplinaService {
    private final ProfessorDisciplinaDao professorDisciplinaDao;
    
    public ProfessorDisciplinaService(Jdbi jdbi){
        this.professorDisciplinaDao = jdbi.onDemand(ProfessorDisciplinaDao.class);
    }
    
    public ProfessorDisciplina inserir (ProfessorDisciplina professorDisciplina){
        professorDisciplinaDao.insert(professorDisciplina);
        return professorDisciplina;
    }
    
    public List<ProfessorDisciplina> consultarTodos(){
        return professorDisciplinaDao.getAll();
    }
    
    public ProfessorDisciplina consultarPorId(int idProfessor, int idDisciplina){
        return professorDisciplinaDao.get(idProfessor, idDisciplina);
    }
    /*
    public void alterar(Disciplina disciplina){
        disciplinaDao.update(disciplina);
    }*/
    
    public void excluir(int idProfessor, int idDisciplina){
        professorDisciplinaDao.delete(idProfessor, idDisciplina);
    }
}
