package br.cefet.tutorParticular.controller;

import br.cefet.tutorParticular.model.Disciplina;
import br.cefet.tutorParticular.service.DisciplinaService;
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
@RequestMapping("/api/tutorParticular/disciplina")
public class DisciplinaController {
    
    private final DisciplinaService disciplinaService;
    
    public DisciplinaController(DisciplinaService disciplinaService) {
        this.disciplinaService = disciplinaService;
    }
    
    @GetMapping({"/", ""})
    public List<Disciplina> consultarTodos () {
        List<Disciplina> disciplinaList = disciplinaService.consultarTodos();
        return disciplinaList;
    }
    
    @GetMapping("/{idDisciplina}")
    public Disciplina consultarDisciplina(@PathVariable("idDisciplina") int idDisciplina){
        Disciplina ret = disciplinaService.consultarPorId(idDisciplina);
        return ret;
    }
    
    @GetMapping("/professor/{idProfessor}")
    public List<Disciplina> getDisciplinaProfessor(@PathVariable("idProfessor") int idProfessor) {
        List<Disciplina> disciplinaList = disciplinaService.getDisciplinaProfessor(idProfessor);
        return disciplinaList;
    }
    
    @PostMapping({"", "/"})
    public Disciplina inserir(@RequestBody Disciplina disciplina) {
        Disciplina ret = disciplinaService.inserir(disciplina);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public Disciplina alterar(@RequestBody Disciplina disciplina) {
        disciplinaService.alterar(disciplina);
        return disciplina;
    }
    
    @DeleteMapping("/{idDisciplina}")
    public Disciplina alterar(@PathVariable("idDisciplina") int idDisciplina){
        Disciplina disciplina = disciplinaService.consultarPorId(idDisciplina);
        if(disciplina == null){
            throw new RuntimeException("Não existe disciplina com este id para ser excluída");
        }
        disciplinaService.excluir(idDisciplina);
        return disciplina;
    }
    
}
