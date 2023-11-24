package br.cefet.tutorParticular.dao;

import br.cefet.tutorParticular.model.Disciplina;
import java.util.List;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

@RegisterBeanMapper(Disciplina.class)
public interface DisciplinaDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into disciplina (nome, descricao, idAdministrador) values (:nome, :descricao, :idAdministrador)")
    int insert(@BindBean Disciplina disciplina);
    
    @SqlQuery("select * " +
            " from disciplina " +
            " where idDisciplina = :idDisciplina;")
    Disciplina get(@Bind("idDisciplina") int idDisciplina);

    
    @SqlQuery("select * " +
            " from disciplina " +
            " order by nome;")
    List<Disciplina> getAll();

    
    @SqlQuery("select * " +
            " from disciplina " +
            " where nome like :nome " +
            " order by nome;")
    List<Disciplina> getAllByName(@Bind("nome") String nome);
    
    @SqlQuery("SELECT disciplina.* " +
            "FROM disciplina " +
            "INNER JOIN professorDisciplina ON disciplina.idDisciplina = professorDisciplina.idDisciplina " +
            "WHERE professorDisciplina.idProfessor = :idProfessor")
    List<Disciplina> getDisciplinaProfessor(@Bind("idProfessor") int idProfessor);

    @SqlUpdate("update disciplina " +
            " set nome = :nome, " +
            "     descricao = :descricao " +
            " where idDisciplina = :idDisciplina;")
    int update(@BindBean Disciplina disciplina);

    
    @SqlUpdate("delete " +
            " from disciplina " +
            " where idDisciplina = :idDisciplina;")
    int delete(@Bind("idDisciplina") int idDisciplina);
    
}
