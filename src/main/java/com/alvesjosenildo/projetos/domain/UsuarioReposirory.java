package com.alvesjosenildo.projetos.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioReposirory extends JpaRepository <Usuario, Long> {

}
