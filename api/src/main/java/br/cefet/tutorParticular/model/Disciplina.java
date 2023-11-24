package br.cefet.tutorParticular.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Disciplina {
    private int idDisciplina;
    private String nome;
    private String descricao;
    private int idAdministrador;
    
}
