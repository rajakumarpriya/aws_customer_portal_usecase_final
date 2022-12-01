package com.login.app.models;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private CRole name;

	public Role() {

	}

	public Role(CRole name) {
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public CRole getName() {
		return name;
	}

	public void setName(CRole name) {
		this.name = name;
	}
}