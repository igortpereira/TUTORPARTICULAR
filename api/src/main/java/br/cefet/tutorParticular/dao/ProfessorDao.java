
package br.cefet.tutorParticular.dao;

import br.cefet.tutorParticular.model.Professor;
import java.util.List;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

@RegisterBeanMapper(Professor.class)
public interface ProfessorDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into professor (nome, cpf, email, senha, telefone, uf, cep, cidade, bairro, rua, numero, numMaxAlunos, apresentacao, mediaAvaliacao, foto) values (:nome, :cpf, :email, :senha, :telefone, :uf, :cep, :cidade, :bairro, :rua, :numero, :numMaxAlunos, :apresentacao, :mediaAvaliacao, :foto)")
    int insert(@BindBean Professor professor);
    
    @SqlQuery("select * " +
            " from professor " +
            " where idProfessor = :idProfessor;")
    Professor get(@Bind("idProfessor") int idProfessor);

    
    @SqlQuery("select * " +
            " from professor " +
            " order by nome;")
    List<Professor> getAll();

    
    @SqlQuery("select * " +
            " from professor " +
            " where nome like :nome " +
            " order by nome;")
    List<Professor> getAllByName(@Bind("nome") String nome);


    @SqlUpdate("update professor " +
            " set nome = :nome, " +
            "     cpf = :cpf, " +
            "     email = :email, " +
            "     senha = :senha, " +
            "     telefone = :telefone, " +
            "     uf = :uf, " +
            "     cep = :cep, " +
            "     cidade = :cidade, " +
            "     bairro = :bairro, " +
            "     rua = :rua, " +
            "     numero = :numero, " +
            "     numMaxAlunos = :numMaxAlunos, " +
            "     apresentacao = :apresentacao, " +
            "     mediaAvaliacao = :mediaAvaliacao, " +
            "     foto = :foto " +
            " where idProfessor = :idProfessor;")
    int update(@BindBean Professor professor);

    
    @SqlUpdate("delete " +
            " from professor " +
            " where idProfessor = :idProfessor;")
    int delete(@Bind("idProfessor") int idProfessor);
    
    @SqlQuery("SELECT * FROM professor WHERE email = :email AND senha = :senha")
    Professor authenticate(@Bind("email") String email, @Bind("senha") String senha);
    
}


