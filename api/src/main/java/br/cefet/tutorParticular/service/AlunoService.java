
package br.cefet.tutorParticular.service;

import br.cefet.tutorParticular.dao.AlunoDao;
import br.cefet.tutorParticular.model.Aluno;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class AlunoService {
    
    private final AlunoDao alunoDao;
    
    public AlunoService(Jdbi jdbi){
        this.alunoDao = jdbi.onDemand(AlunoDao.class);
    }
    
    public Aluno inserir(Aluno aluno){
        int idAluno = alunoDao.insert(aluno);
        aluno.setIdAluno(idAluno);
        return aluno;
    }
    
    public List<Aluno> consultarTodos(){
        return alunoDao.getAll();
    }
    
    public Aluno consultarPorId(int idAluno){
        return alunoDao.get(idAluno);
    }
    
    public void alterar(Aluno aluno){
        alunoDao.update(aluno);
    }
    
    public void excluir(int idAluno){
        alunoDao.delete(idAluno);
    }
    
    public Aluno autenticar(String email, String senha){
        return alunoDao.authenticate(email, senha);
    }
    
}
