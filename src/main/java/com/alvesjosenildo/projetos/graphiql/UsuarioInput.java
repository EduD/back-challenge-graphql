package com.alvesjosenildo.projetos.graphiql;


import lombok.Data;

@Data
public class UsuarioInput {  // não é uma classe de Jpa serve apenas para usar como entrada no método da mutation

    private Long id;
    private String nome;
    private String email;

}
