package com.springboot.app.Topic;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity

public class Topic {
	
	@Id 
	private String id;
	private String firstname;
	private String lastname;
	private String description;
	
	public Topic() {
		
	}
	public Topic(String id, String firstname, String lastname, String description) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.description = description;
	}


	
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}
