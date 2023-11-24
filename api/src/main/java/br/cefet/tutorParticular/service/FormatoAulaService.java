package br.cefet.tutorParticular.service;

import br.cefet.tutorParticular.dao.FormatoAulaDao;
import br.cefet.tutorParticular.model.FormatoAula;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class FormatoAulaService {
    
    private final FormatoAulaDao formatoAulaDao;
    
    public FormatoAulaService(Jdbi jdbi){
        this.formatoAulaDao = jdbi.onDemand(FormatoAulaDao.class);
    }
    
    public FormatoAula inserir (FormatoAula formatoAula){
        int idFormatoAula = formatoAulaDao.insert(formatoAula);
        formatoAula.setIdFormatoAula(idFormatoAula);
        return formatoAula;
    }
    
    public List<FormatoAula> consultarTodos(){
        return formatoAulaDao.getAll();
    }
    
    public FormatoAula consultarPorId(int idFormatoAula){
        return formatoAulaDao.get(idFormatoAula);
    }
    
    public void alterar(FormatoAula formatoAula){
        formatoAulaDao.update(formatoAula);
    }
    
    public void excluir(int idFormatoAula){
        formatoAulaDao.delete(idFormatoAula);
    }
    
}
