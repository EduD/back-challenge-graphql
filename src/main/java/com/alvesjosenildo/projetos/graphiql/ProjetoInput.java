package com.alvesjosenildo.projetos.graphiql;


import lombok.Data;

@Data
public class ProjetoInput {  // não é uma classe de Jpa serve apenas para usar como entrada no método da mutation


    private Long id;
    private String nome;
    private double valor;

    private Long usuarioId;

}
