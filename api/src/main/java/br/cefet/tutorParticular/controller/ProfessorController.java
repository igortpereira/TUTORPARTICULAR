
package br.cefet.tutorParticular.controller;

import br.cefet.tutorParticular.model.Professor;
import br.cefet.tutorParticular.service.ProfessorService;
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
@RequestMapping("/api/tutorParticular/professor")
public class ProfessorController {
    
    private final ProfessorService professorService;
    
    public ProfessorController(ProfessorService professorService) {
        this.professorService = professorService;
    }
    
    @GetMapping({"/", ""})
    public List<Professor> consultarTodos () {
        List<Professor> professorList = professorService.consultarTodos();
        return professorList;
    }
    
    @GetMapping("/{idProfessor}")
    public Professor consultarProfessor(@PathVariable("idProfessor") int idProfessor){
        Professor ret = professorService.consultarPorId(idProfessor);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public Professor inserir(@RequestBody Professor professor) {
        Professor ret = professorService.inserir(professor);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public Professor alterar(@RequestBody Professor professor) {
        professorService.alterar(professor);
        return professor;
    }
    
    @DeleteMapping("/{idProfessor}")
    public Professor alterar(@PathVariable("idProfessor") int idProfessor){
        Professor professor = professorService.consultarPorId(idProfessor);
        if(professor == null){
            throw new RuntimeException("Não existe professor com este id para ser excluído");
        }
        professorService.excluir(idProfessor);
        return professor;
    }
    
    @GetMapping("/{email}/{senha}/autenticar")
    public Professor autenticar(@PathVariable("email") String email, @PathVariable("senha") String senha) {
        
        Professor professor = professorService.autenticar(email, senha);
        
        return professor;
    }
}
