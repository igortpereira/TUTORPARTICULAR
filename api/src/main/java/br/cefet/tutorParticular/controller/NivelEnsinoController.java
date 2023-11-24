package br.cefet.tutorParticular.controller;

import br.cefet.tutorParticular.model.NivelEnsino;
import br.cefet.tutorParticular.service.NivelEnsinoService;
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
@RequestMapping("/api/tutorParticular/nivelEnsino")
public class NivelEnsinoController {
    
    private final NivelEnsinoService nivelEnsinoService;
    
    public NivelEnsinoController(NivelEnsinoService nivelEnsinoService) {
        this.nivelEnsinoService = nivelEnsinoService;
    }
    
    @GetMapping({"/", ""})
    public List<NivelEnsino> consultarTodos() {
        List<NivelEnsino> nivelEnsinoList = nivelEnsinoService.consultarTodos();
        return nivelEnsinoList;
    }
    
    @GetMapping("/{idNivelEnsino}")
    public NivelEnsino consultarNivelEnsino(@PathVariable("idNivelEnsino") int idNivelEnsino){
        NivelEnsino ret = nivelEnsinoService.consultarPorId(idNivelEnsino);
        return ret;
    }
    
    @PostMapping({"", "/"})
    public NivelEnsino inserir(@RequestBody NivelEnsino nivelEnsino) {
        NivelEnsino ret = nivelEnsinoService.inserir(nivelEnsino);
        return ret;
    }
    
    @PutMapping({"", "/"})
    public NivelEnsino alterar(@RequestBody NivelEnsino nivelEnsino) {
        nivelEnsinoService.alterar(nivelEnsino);
        return nivelEnsino;
    }
    
    @DeleteMapping("/{idNivelEnsino}")
    public NivelEnsino alterar(@PathVariable("idNivelEnsino") int idNivelEnsino){
        NivelEnsino nivelEnsino = nivelEnsinoService.consultarPorId(idNivelEnsino);
        if(nivelEnsino == null){
            throw new RuntimeException("Não existe nível de ensino com este id para ser excluído");
        }
        nivelEnsinoService.excluir(idNivelEnsino);
        return nivelEnsino;
    }
}
