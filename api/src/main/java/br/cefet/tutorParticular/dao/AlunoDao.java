package br.cefet.tutorParticular.dao;

import br.cefet.tutorParticular.model.Aluno;
import java.util.List;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

@RegisterBeanMapper(Aluno.class)
public interface AlunoDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into aluno (nome, cpf, email, senha, telefone, uf, cep, cidade, bairro, rua, numero, foto) values (:nome, :cpf, :email, :senha, :telefone, :uf, :cep, :cidade, :bairro, :rua, :numero, :foto)")
    int insert(@BindBean Aluno aluno);
    
    @SqlQuery("select * " +
            " from aluno " +
            " where idAluno = :idAluno;")
    Aluno get(@Bind("idAluno") int idAluno);

    
    @SqlQuery("select * " +
            " from aluno " +
            " order by nome;")
    List<Aluno> getAll();

    
    @SqlQuery("select * " +
            " from aluno " +
            " where nome like :nome " +
            " order by nome;")
    List<Aluno> getAllByName(@Bind("nome") String nome);


    @SqlUpdate("update aluno " +
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
            "     foto = :foto " +
            " where idAluno = :idAluno;")
    int update(@BindBean Aluno aluno);

    
    @SqlUpdate("delete " +
            " from aluno " +
            " where idAluno = :idAluno;")
    int delete(@Bind("idAluno") int idAluno);
    
    @SqlQuery("SELECT * FROM aluno WHERE email = :email AND senha = :senha")
    Aluno authenticate(@Bind("email") String email, @Bind("senha") String senha);
    
}