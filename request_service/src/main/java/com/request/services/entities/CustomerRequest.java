package com.request.services.entities;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CustomerRequest {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String description;
    private String status;
    private String completedDate;
    private String comments;
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    
    public String getCompletedDate() {
		return completedDate;
	}
	public void setCompletedDate(String completedDate) {
		this.completedDate = completedDate;
	}
	
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	//    @Override
//    public String toString() {
//        return "Movie [author=" + author + ", id=" + id + ", rating=" + rating + ", title=" + title + "]";
//    }
    public CustomerRequest() {
    }
    public CustomerRequest(String title, String description, String status, String completeddate, String comments) {
        this.title = title;
        this.description = description;
        this.status = status;
        this.completedDate=completeddate;
        this.comments= comments;
    }
    public CustomerRequest(int id, String title, String description, String status, String completedDate,String comments) {
        this(title, description, status,completedDate,comments);
        this.id = id;
    }

}
