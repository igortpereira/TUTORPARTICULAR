package br.cefet.tutorParticular.controller;

import br.cefet.tutorParticular.model.Administrador;
import br.cefet.tutorParticular.service.AdministradorService;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tutorParticular/administrador")
public class AdministradorController {
    
    private final AdministradorService administradorService;
    
    public AdministradorController(AdministradorService administradorService) {
        this.administradorService = administradorService;
    }
    
    @GetMapping({"/", ""})
    public List<Administrador> consultarTodos() {
        List<Administrador> administradorList = administradorService.consultarTodos();
        return administradorList;
    }
    
    @GetMapping("/{idAdministrador}")
    public Administrador consultarAdministrador(@PathVariable("idAdministrador") int idAdministrador){
        Administrador ret = administradorService.consultarPorId(idAdministrador);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public Administrador inserir(@RequestBody Administrador administrador) {
        Administrador ret = administradorService.inserir(administrador);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public Administrador alterar(@RequestBody Administrador administrador) {
        administradorService.alterar(administrador);
        return administrador;
    }
    
    @DeleteMapping("/{idAdministrador}")
    public Administrador alterar(@PathVariable("idAdministrador") int idAdministrador){
        Administrador administrador = administradorService.consultarPorId(idAdministrador);
        if(administrador == null){
            throw new RuntimeException("Não existe administrador com este id para ser excluído");
        }
        administradorService.excluir(idAdministrador);
        return administrador;
    }
    
    @GetMapping("/{email}/{senha}/autenticar")
    public Administrador autenticar(@PathVariable("email") String email, @PathVariable("senha") String senha) {
        
        Administrador administrador = administradorService.autenticar(email, senha);
        
        /*if (administrador == null) {
            throw new RuntimeException("Falha na autenticação"); 
        }*/
        
        return administrador;
    }
    
}
