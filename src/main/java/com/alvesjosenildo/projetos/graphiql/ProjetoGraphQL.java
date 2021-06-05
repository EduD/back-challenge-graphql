package com.alvesjosenildo.projetos.graphiql;

import com.alvesjosenildo.projetos.domain.Projeto;
import com.alvesjosenildo.projetos.domain.ProjetoService;
import com.alvesjosenildo.projetos.domain.UsuarioService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProjetoGraphQL implements GraphQLQueryResolver, GraphQLMutationResolver {

    @Autowired
    private ProjetoService service;

    @Autowired
    private UsuarioService usuarioService;


    public Projeto projeto(Long id) {
        return service.findById(id);
    }


    public List<Projeto> getProjetos(int page, int size) {
        Pageable pageable = PageRequest.of(page,size, Sort.by("valor").descending());
        return service.findAll(pageable);
    }



    public Projeto saveProjeto(ProjetoInput input) {
        ModelMapper m = new ModelMapper();
        Projeto p = m.map(input,Projeto.class);


        p.setUsuario(usuarioService.findById(input.getUsuarioId()));

        return service.save(p);
    }

    public Boolean deleteProjeto(Long id) {
        return service.deleteById(id);
    }
}
