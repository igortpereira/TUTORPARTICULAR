package br.cefet.tutorParticular.dao;

import br.cefet.tutorParticular.model.Administrador;
import java.util.List;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

@RegisterBeanMapper(Administrador.class)
public interface AdministradorDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into administrador (nome, email, senha) values (:nome, :email, :senha)")
    int insert(@BindBean Administrador administrador);
    
    @SqlQuery("select * " +
            " from administrador " +
            " where idAdministrador = :idAdministrador;")
    Administrador get(@Bind("idAdministrador") int idAdministrador);

    
    @SqlQuery("select * " +
            " from administrador " +
            " order by nome;")
    List<Administrador> getAll();

    
    @SqlQuery("select * " +
            " from administrador " +
            " where nome like :nome " +
            " order by nome;")
    List<Administrador> getAllByName(@Bind("nome") String nome);


    @SqlUpdate("update administrador " +
            " set nome = :nome, " +
            "     email = :email, " +
            "     senha = :senha " +
            " where idAdministrador = :idAdministrador;")
    int update(@BindBean Administrador administrador);

    
    @SqlUpdate("delete " +
            " from administrador " +
            " where idAdministrador = :idAdministrador;")
    int delete(@Bind("idAdministrador") int idAdministrador);
    
    @SqlQuery("SELECT * FROM administrador WHERE email = :email AND senha = :senha")
    Administrador authenticate(@Bind("email") String email, @Bind("senha") String senha);
    
}
