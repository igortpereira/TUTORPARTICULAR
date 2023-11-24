package br.cefet.tutorParticular.service;

import br.cefet.tutorParticular.dao.DisciplinaDao;
import br.cefet.tutorParticular.model.Disciplina;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class DisciplinaService {
    
    private final DisciplinaDao disciplinaDao;
    
    public DisciplinaService(Jdbi jdbi){
        this.disciplinaDao = jdbi.onDemand(DisciplinaDao.class);
    }
    
    public Disciplina inserir (Disciplina disciplina){
        int idDisciplina = disciplinaDao.insert(disciplina);
        disciplina.setIdDisciplina(idDisciplina);
        return disciplina;
    }
    
    public List<Disciplina> consultarTodos(){
        return disciplinaDao.getAll();
    }
    
    public Disciplina consultarPorId(int idDisciplina){
        return disciplinaDao.get(idDisciplina);
    }
    
    public List<Disciplina> getDisciplinaProfessor(int idProfessor) {
        return disciplinaDao.getDisciplinaProfessor(idProfessor);
    }
    
    public void alterar(Disciplina disciplina){
        disciplinaDao.update(disciplina);
    }
    
    public void excluir(int idDisciplina){
        disciplinaDao.delete(idDisciplina);
    }
    
}
