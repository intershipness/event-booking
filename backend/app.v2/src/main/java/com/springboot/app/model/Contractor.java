package com.springboot.app.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "auth_Contractor")
public class Contractor {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "auth_Contractor_id")
	private int id;

	

	@Column(name = "first_name")
	private String name;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "email")
	private String email;
	@Column(name = "avatar")
	private String avatar;

	
	@Column(name = "password")
	private String password;

	@Column(name = "mobile")
	private String mobile;
	
	@Column(name = "nume_scena")
	private String numescena;
	
	@Column(name = "canal_youtube")
	private String canalyoutube;
	
	@Column(name = "Domeniu_activitate")
	private String domeniu;
	
	@Column(name = "stil_muzica")
	private String stilmuzica;

	@Column(name = "status")
	private String status;
	@Column(name = "descriere")
	private String descriere;

	

	@ManyToMany()
	@JoinTable(name = "auth_controcator_role", joinColumns = @JoinColumn(name = "auth_controcator_id"), inverseJoinColumns = @JoinColumn(name = "auth_role_id"))
	private Set<Role> roles;

	
	public Contractor() {
		
	}
	public Contractor(int id, String name, String lastName, String email,String avatar, String password, String mobile,
			String numescena, String canalyoutube, String domeniu, String stilmuzica, String status,String descriere, Set<Role> roles) {
		super();
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.avatar = avatar;
		this.password = password;
		this.mobile = mobile;
		this.numescena = numescena;
		this.canalyoutube = canalyoutube;
		this.domeniu = domeniu;
		this.stilmuzica = stilmuzica;
		this.status = status;
		this.descriere=descriere;
		this.roles = roles;
	}
	// 
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getNumescena() {
		return numescena;
	}
	public void setNumescena(String numescena) {
		this.numescena = numescena;
	}
	public String getCanalyoutube() {
		return canalyoutube;
	}
	public void setCanalyoutube(String canalyoutube) {
		this.canalyoutube = canalyoutube;
	}
	public String getDomeniu() {
		return domeniu;
	}
	public void setDomeniu(String domeniu) {
		this.domeniu = domeniu;
	}
	public String getStilmuzica() {
		return stilmuzica;
	}
	public void setStilmuzica(String stilmuzica) {
		this.stilmuzica = stilmuzica;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	public String getDescriere() {
		return descriere;
	}
	public void setDescriere(String descriere) {
		this.descriere = descriere;
	}
	public String getavatar() {
		return avatar;
	}
	public void setavatar(String avatar) {
		this.avatar =avatar;
	}
}