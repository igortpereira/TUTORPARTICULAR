package br.cefet.tutorParticular.dao;

import br.cefet.tutorParticular.model.NivelEnsino;
import java.util.List;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

@RegisterBeanMapper(NivelEnsino.class)
public interface NivelEnsinoDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into nivelEnsino (nome, descricao, idAdministrador) values (:nome, :descricao, :idAdministrador)")
    int insert(@BindBean NivelEnsino nivelEnsino);
    
    @SqlQuery("select * " +
            " from nivelEnsino " +
            " where idNivelEnsino = :idNivelEnsino;")
    NivelEnsino get(@Bind("idNivelEnsino") int idNivelEnsino);

    
    @SqlQuery("select * " +
            " from nivelEnsino " +
            " order by nome;")
    List<NivelEnsino> getAll();

    
    @SqlQuery("select * " +
            " from nivelEnsino " +
            " where nome like :nome " +
            " order by nome;")
    List<NivelEnsino> getAllByName(@Bind("nome") String nome);


    @SqlUpdate("update nivelEnsino " +
            " set nome = :nome, " +
            "     descricao = :descricao " +
            " where idNivelEnsino = :idNivelEnsino;")
    int update(@BindBean NivelEnsino nivelEnsino);

    
    @SqlUpdate("delete " +
            " from nivelEnsino " +
            " where idNivelEnsino = :idNivelEnsino;")
    int delete(@Bind("idNivelEnsino") int idNivelEnsino);
    
}
