package br.cefet.tutorParticular.controller;

import br.cefet.tutorParticular.model.ProfessorDisciplina;
import br.cefet.tutorParticular.service.ProfessorDisciplinaService;
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
@RequestMapping("/api/tutorParticular/professorDisciplina")
public class ProfessorDisciplinaController {
    
    private final ProfessorDisciplinaService professorDisciplinaService;
    
    public ProfessorDisciplinaController(ProfessorDisciplinaService professorDisciplinaService) {
        this.professorDisciplinaService = professorDisciplinaService;
    }
    
    
    @GetMapping({"/", ""})
    public List<ProfessorDisciplina> consultarTodos () {
        List<ProfessorDisciplina> professorDisciplinaList = professorDisciplinaService.consultarTodos();
        return professorDisciplinaList;
    }
    
    @GetMapping("/{idProfessor}/{idDisciplina}")
    public ProfessorDisciplina consultarProfessorDisciplina(@PathVariable("idProfessor") int idProfessor, @PathVariable("idDisciplina") int idDisciplina){
        ProfessorDisciplina ret = professorDisciplinaService.consultarPorId(idProfessor, idDisciplina);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public ProfessorDisciplina inserir(@RequestBody ProfessorDisciplina professorDisciplina) {
        ProfessorDisciplina ret = professorDisciplinaService.inserir(professorDisciplina);
        return ret;
    }
    
    /*
    @PutMapping({"", "/"})
    public Disciplina alterar(@RequestBody Disciplina disciplina) {
        disciplinaService.alterar(disciplina);
        return disciplina;
    }*/
    
    @DeleteMapping("/{idProfessor}/{idDisciplina}")
    public ProfessorDisciplina alterar(@PathVariable("idProfessor") int idProfessor, @PathVariable("idDisciplina") int idDisciplina){
        ProfessorDisciplina professorDisciplina = professorDisciplinaService.consultarPorId(idProfessor, idDisciplina);
        if(professorDisciplina == null){
            throw new RuntimeException("Não existe registro para ser excluída");
        }
        professorDisciplinaService.excluir(idProfessor, idDisciplina);
        return professorDisciplina;
    }
    
}
