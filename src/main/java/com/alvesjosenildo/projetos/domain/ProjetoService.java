package com.alvesjosenildo.projetos.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ProjetoService {

    @Autowired
    private ProjetoReposirory rep;

    public Projeto findById(Long id) {
        return rep.findById(id).orElse(null);
    }

    public List<Projeto> findAll(Pageable pageable) {return rep.findAll(pageable).getContent(); }

    @Transactional
    public Projeto save(Projeto p){ return rep.save(p);  }

    @Transactional
    public Boolean deleteById(Long id){
        if(rep.findById(id).isPresent()){
            rep.deleteById(id);
            return true;
        }
        return false;

    }

    public List<Projeto> findAllByUsuario(Usuario u) {

        return rep.findAllByUsuario(u);

    }
}
