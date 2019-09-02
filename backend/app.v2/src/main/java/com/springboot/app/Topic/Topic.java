package com.springboot.app.Topic;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Evenimente")
public class Topic {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	(length=20)
	private int Eventid;
	@Column(length=200)
	private String Title;
	@Column (length=50)
	private String StartAt;
	@Column(length=50)
	private String EndAt;
	@Column(length=200)
	
	private String description;
	
	
	public Topic() {
		
	}
	public Topic(int Eventid, String Title,  String  StartAt, String  EndAt,String description) {
		super();
		this.Eventid = Eventid;
		this.Title = Title;
		this.StartAt = StartAt;
		this.EndAt = EndAt;
		this.description = description;
	}


	public int getEventid() {
		return Eventid;
	}
	public void setEventid(int eventid) {
		Eventid = eventid;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
	}
	public  String  getStartAt() {
		return StartAt;
	}
	public void setStartAt( String startAt) {
		StartAt = startAt;
	}
	public  String getEndAt() {
		return EndAt;
	}
	public void setEndAt( String  endAt) {
		EndAt = endAt;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	

	
	
}
