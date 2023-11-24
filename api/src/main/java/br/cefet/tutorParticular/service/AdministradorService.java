package br.cefet.tutorParticular.service;

import br.cefet.tutorParticular.dao.AdministradorDao;
import br.cefet.tutorParticular.model.Administrador;
import java.util.List;
import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

@Service
public class AdministradorService {
    
    private final AdministradorDao administradorDao;
    
    public AdministradorService(Jdbi jdbi){
        this.administradorDao = jdbi.onDemand(AdministradorDao.class);
    }
    
    public Administrador inserir(Administrador administrador){
        int idAdministrador = administradorDao.insert(administrador);
        administrador.setIdAdministrador(idAdministrador);
        return administrador;
    }
    
    public List<Administrador> consultarTodos(){
        return administradorDao.getAll();
    }
    
    public Administrador consultarPorId(int idAdministrador){
        return administradorDao.get(idAdministrador);
    }
    
    public void alterar(Administrador administrador){
        administradorDao.update(administrador);
    }
    
    public void excluir(int idAdministrador){
        administradorDao.delete(idAdministrador);
    }
    
    public Administrador autenticar(String email, String senha){
        return administradorDao.authenticate(email, senha);
    }
    
}
