package br.cefet.tutorParticular.dao;

import br.cefet.tutorParticular.model.ProfessorDisciplina;
import br.cefet.tutorParticular.model.Disciplina;
import java.util.List;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

@RegisterBeanMapper(ProfessorDisciplina.class)
public interface ProfessorDisciplinaDao {
    
    //@GetGeneratedKeys
    @SqlUpdate("insert into professorDisciplina (idProfessor, idDisciplina) values (:idProfessor, :idDisciplina)")
    int insert(@BindBean ProfessorDisciplina professorDisciplina);
    
    @SqlQuery("select * " +
            " from professorDisciplina " +
            " where idProfessor = :idProfessor and idDisciplina = :idDisciplina;")
    ProfessorDisciplina get(@Bind("idProfessor") int idProfessor, @Bind("idDisciplina") int idDisciplina);

    
    @SqlQuery("select * " +
            " from professorDisciplina;")
    List<ProfessorDisciplina> getAll();

    /*
    @SqlQuery("select * " +
            " from disciplina " +
            " where nome like :nome " +
            " order by nome;")
    List<Disciplina> getAllByName(@Bind("nome") String nome);


    @SqlUpdate("update disciplina " +
            " set nome = :nome, " +
            "     descricao = :descricao " +
            " where idDisciplina = :idDisciplina;")
    int update(@BindBean Disciplina disciplina);*/

    
    @SqlUpdate("delete " +
            " from professorDisciplina " +
            " where idProfessor = :idProfessor and idDisciplina = :idDisciplina;")
    int delete(@Bind("idProfessor") int idProfessor, @Bind("idDisciplina") int idDisciplina);
    
}
