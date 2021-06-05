package com.alvesjosenildo.projetos.graphiql;

import com.alvesjosenildo.projetos.domain.Projeto;
import com.alvesjosenildo.projetos.domain.Usuario;
import com.alvesjosenildo.projetos.domain.UsuarioService;
import com.coxautodev.graphql.tools.GraphQLResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;



@Component
public class ProjetoResolver implements GraphQLResolver <Projeto>{

    @Autowired
    private UsuarioService usuarioService;

    public Usuario usuario(Projeto p) { return usuarioService.findById(p.getUsuario().getId()); }

}
