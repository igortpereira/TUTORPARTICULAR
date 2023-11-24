package br.cefet.tutorParticular.service;

import br.cefet.tutorParticular.dao.NivelEnsinoDao;
import br.cefet.tutorParticular.model.NivelEnsino;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class NivelEnsinoService {
    
    private final NivelEnsinoDao nivelEnsinoDao;
    
    public NivelEnsinoService(Jdbi jdbi){
        this.nivelEnsinoDao = jdbi.onDemand(NivelEnsinoDao.class);
    }
    
    public NivelEnsino inserir(NivelEnsino nivelEnsino){
        int idNivelEnsino = nivelEnsinoDao.insert(nivelEnsino);
        nivelEnsino.setIdNivelEnsino(idNivelEnsino);
        return nivelEnsino;
    }
    
    public List<NivelEnsino> consultarTodos(){
        return nivelEnsinoDao.getAll();
    }
    
    public NivelEnsino consultarPorId(int idNivelEnsino){
        return nivelEnsinoDao.get(idNivelEnsino);
    }
    
    public void alterar(NivelEnsino nivelEnsino){
        nivelEnsinoDao.update(nivelEnsino);
    }
    
    public void excluir(int idNivelEnsino){
        nivelEnsinoDao.delete(idNivelEnsino);
    }
    
}
