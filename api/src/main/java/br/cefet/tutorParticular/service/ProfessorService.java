
package br.cefet.tutorParticular.service;

import br.cefet.tutorParticular.dao.ProfessorDao;
import br.cefet.tutorParticular.model.Professor;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class ProfessorService {
    
    private final ProfessorDao professorDao;
    
    public ProfessorService(Jdbi jdbi){
        this.professorDao = jdbi.onDemand(ProfessorDao.class);
    }
    
    public Professor inserir (Professor professor){
        int idProfessor = professorDao.insert(professor);
        professor.setIdProfessor(idProfessor);
        return professor;
    }
    
    public List<Professor> consultarTodos(){
        return professorDao.getAll();
    }
    
    public Professor consultarPorId(int idProfessor){
        return professorDao.get(idProfessor);
    }
    
    public void alterar(Professor professor){
        professorDao.update(professor);
    }
    
    public void excluir(int idProfessor){
        professorDao.delete(idProfessor);
    }
    
    public Professor autenticar(String email, String senha){
        return professorDao.authenticate(email, senha);
    }
    
}
