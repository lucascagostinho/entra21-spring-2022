package br.com.entra21.backend.spring.projeto.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.Table;
import javax.persistence.InheritanceType;

@Entity
@Table(name = "programador")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)

public class Programador extends MaturidadeNivel3Richardson {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Integer id;
	private String nome;
	private Integer qtd_linguagem;
	
	public Programador() {
		super();
	}
	
	public Programador(Integer id, String nome, Integer qtd_linguagem) {
		super();
		this.id = id;
		this.nome = nome;
		this.qtd_linguagem = qtd_linguagem;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getQtd_linguagem() {
		return qtd_linguagem;
	}

	public void setQtd_linguagem(Integer qtd_linguagem) {
		this.qtd_linguagem = qtd_linguagem;
	}
	
	
	
}
