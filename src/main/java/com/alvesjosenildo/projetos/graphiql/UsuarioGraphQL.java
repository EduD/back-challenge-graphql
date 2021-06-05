package com.alvesjosenildo.projetos.graphiql;

import com.alvesjosenildo.projetos.domain.Usuario;
import com.alvesjosenildo.projetos.domain.UsuarioService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UsuarioGraphQL implements GraphQLQueryResolver, GraphQLMutationResolver {

    @Autowired
    private UsuarioService usuarioService;

    public Usuario usuario(Long id) {
        return usuarioService.findById(id);
    }

    public List<Usuario> usuarios() { return usuarioService.findAll();}

    public Usuario saveUsuario(UsuarioInput input){
//        Usuario u = new Usuario();
//        u.setId(input.getId());
//        u.setNome(input.getNome());
//        u.setEmail(input.getEmail());
//        return usuarioService.save(u);

        ModelMapper m = new ModelMapper();
        Usuario u = m.map(input,Usuario.class);

        return usuarioService.save(u);

    }

    public Boolean deleteUsuario(Long id){ return usuarioService.deleteById(id);  }

}
