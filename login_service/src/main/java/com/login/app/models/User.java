package com.login.app.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(	name = "users", 
		uniqueConstraints = { 
			@UniqueConstraint(columnNames = "firstName"),
			@UniqueConstraint(columnNames = "emailaddress") 
		})
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 20)
	private String firstName;
	
	@NotBlank
	@Size(max = 20)
	private String lastName;
	
	@NotBlank
	@Size(max = 400)
	private String address;
	
	@NotBlank
	@Size(max = 120)
	private String state;
	
	
	@NotBlank
	@Size(max = 120)
	private String country;

	@NotBlank
	@Size(max = 50)
	@Email
	private String emailAddress;
	
	@NotBlank
	@Size(max = 15)
	private String pan;
	
	@NotBlank
	@Size(max = 15)
	private String contactNo;
	
	@NotBlank
	@Size(max = 20) //mobile number
	private String contactPreference;
	

	@NotBlank
	@Size(max = 120)
	private String password;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> customerroles = new HashSet<>();

	public User() {
	}

	public  User(String firstName, String lastName, String address, 
			String state, String country, String emailAddress, String pan, String contactNo
			, String contactPreference, String password) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.state = state;
		this.country = country;
		this.emailAddress = emailAddress;
		this.pan = pan;
		this.contactNo = contactNo;
		this.contactPreference = contactPreference;
		this.password = password;
	}

	


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getContactPreference() {
		return contactPreference;
	}

	public void setContactPreference(String contactPreference) {
		this.contactPreference = contactPreference;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getRoles() {
		return customerroles;
	}

	public void setRoles(Set<Role> customerroles) {
		this.customerroles = customerroles;
	}
}
