package com.alvesjosenildo.projetos.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioReposirory rep;

    public Usuario findById(Long id) {
        return rep.findById(id).orElse(null);
    }

    public List<Usuario> findAll() { return rep.findAll(); }

    @Transactional
    public Usuario save(Usuario u){ return rep.save(u); }

    @Transactional
    public Boolean deleteById(Long id){

        if(rep.findById(id).isPresent()){
            rep.deleteById(id);
            return true;
        }
        return false;

    }
}
