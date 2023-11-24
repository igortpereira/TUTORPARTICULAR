package br.cefet.tutorParticular.dao;

import br.cefet.tutorParticular.model.FormatoAula;
import java.util.List;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

@RegisterBeanMapper(FormatoAula.class)
public interface FormatoAulaDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into formatoAula (nome, descricao, idAdministrador) values (:nome, :descricao, :idAdministrador)")
    int insert(@BindBean FormatoAula formatoAula);
    
    @SqlQuery("select * " +
            " from formatoAula " +
            " where idFormatoAula = :idFormatoAula;")
    FormatoAula get(@Bind("idFormatoAula") int idFormatoAula);

    
    @SqlQuery("select * " +
            " from formatoAula " +
            " order by nome;")
    List<FormatoAula> getAll();

    
    @SqlQuery("select * " +
            " from formatoAula " +
            " where nome like :nome " +
            " order by nome;")
    List<FormatoAula> getAllByName(@Bind("nome") String nome);


    @SqlUpdate("update formatoAula " +
            " set nome = :nome, " +
            "     descricao = :descricao " +
            " where idFormatoAula = :idFormatoAula;")
    int update(@BindBean FormatoAula formatoAula);

    
    @SqlUpdate("delete " +
            " from formatoAula " +
            " where idFormatoAula = :idFormatoAula;")
    int delete(@Bind("idFormatoAula") int idFormatoAula);
    
}
