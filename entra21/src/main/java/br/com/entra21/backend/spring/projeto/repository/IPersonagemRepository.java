package br.com.entra21.backend.spring.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.entra21.backend.spring.projeto.model.Personagem;


public interface IPersonagemRepository extends JpaRepository<Personagem, Integer>{

}
