
package br.cefet.tutorParticular.controller;

import br.cefet.tutorParticular.model.Aluno;
import br.cefet.tutorParticular.service.AlunoService;
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
@RequestMapping("/api/tutorParticular/aluno")
public class AlunoController {
    
    private final AlunoService alunoService;
    
    public AlunoController(AlunoService alunoService) {
        this.alunoService = alunoService;
    }
    
    @GetMapping({"/", ""})
    public List<Aluno> consultarTodos() {
        List<Aluno> alunoList = alunoService.consultarTodos();
        return alunoList;
    }
    
    @GetMapping("/{idAluno}")
    public Aluno consultarAluno(@PathVariable("idAluno") int idAluno){
        Aluno ret = alunoService.consultarPorId(idAluno);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public Aluno inserir(@RequestBody Aluno aluno) {
        Aluno ret = alunoService.inserir(aluno);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public Aluno alterar(@RequestBody Aluno aluno) {
        alunoService.alterar(aluno);
        return aluno;
    }
    
    @DeleteMapping("/{idAluno}")
    public Aluno alterar(@PathVariable("idAluno") int idAluno){
        Aluno aluno = alunoService.consultarPorId(idAluno);
        if(aluno == null){
            throw new RuntimeException("Não existe aluno com este id para ser excluído");
        }
        alunoService.excluir(idAluno);
        return aluno;
    }
    
    @GetMapping("/{email}/{senha}/autenticar")
    public Aluno autenticar(@PathVariable("email") String email, @PathVariable("senha") String senha) {
        
        Aluno aluno = alunoService.autenticar(email, senha);
        
        return aluno;
    }
}
