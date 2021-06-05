package com.alvesjosenildo.projetos.graphiql;


import com.alvesjosenildo.projetos.domain.Projeto;
import com.alvesjosenildo.projetos.domain.ProjetoService;
import com.alvesjosenildo.projetos.domain.Usuario;
import com.coxautodev.graphql.tools.GraphQLResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UsuarioResolver implements GraphQLResolver <Usuario>{

    @Autowired
    private ProjetoService projetoService;

    public List<Projeto> projetos (Usuario u){

        return  projetoService.findAllByUsuario(u);


    }


}
