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
public class Professor {
    private int idProfessor;
    private String nome;
    private String cpf;
    private String email;
    private String senha;
    private String telefone;
    private String uf;
    private String cep;
    private String cidade;
    private String bairro;
    private String rua;
    private int numero;
    private int numMaxAlunos;
    private String apresentacao;
    private double mediaAvaliacao;
    private String foto;
}

