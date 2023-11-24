package br.cefet.tutorParticular.controller;

import br.cefet.tutorParticular.model.FormatoAula;
import br.cefet.tutorParticular.service.FormatoAulaService;
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
@RequestMapping("/api/tutorParticular/formatoAula")
public class FormatoAulaController {
    
    private final FormatoAulaService formatoAulaService;
    
    public FormatoAulaController(FormatoAulaService formatoAulaService) {
        this.formatoAulaService = formatoAulaService;
    }
    
    @GetMapping({"/", ""})
    public List<FormatoAula> consultarTodos () {
        List<FormatoAula> formatoAulaList = formatoAulaService.consultarTodos();
        return formatoAulaList;
    }
    
    @GetMapping("/{idFormatoAula}")
    public FormatoAula consultarFormatoAula(@PathVariable("idFormatoAula") int idFormatoAula){
        FormatoAula ret = formatoAulaService.consultarPorId(idFormatoAula);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public FormatoAula inserir(@RequestBody FormatoAula formatoAula) {
        FormatoAula ret = formatoAulaService.inserir(formatoAula);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public FormatoAula alterar(@RequestBody FormatoAula formatoAula) {
        formatoAulaService.alterar(formatoAula);
        return formatoAula;
    }
    
    @DeleteMapping("/{idFormatoAula}")
    public FormatoAula alterar(@PathVariable("idFormatoAula") int idFormatoAula){
        FormatoAula formatoAula = formatoAulaService.consultarPorId(idFormatoAula);
        if(formatoAula == null){
            throw new RuntimeException("Não existe formato de aula com este id para ser excluído");
        }
        formatoAulaService.excluir(idFormatoAula);
        return formatoAula;
    }
    
}
