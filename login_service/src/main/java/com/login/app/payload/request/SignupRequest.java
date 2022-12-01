package com.login.app.payload.request;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.*;

import com.login.app.models.Role;
 
public class SignupRequest {
//    @NotBlank
//    @Size(min = 3, max = 20)
//    private String username;
// 
//    @NotBlank
//    @Size(max = 50)
//    @Email
//    private String email;
	
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
	
//	

	
    
   

	private Set<String> role;
	//private Set<CustomerRole> customerroles = new HashSet<>();

    
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
  
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
    
    public Set<String> getRole() {
      return this.role;
    }
    
    public void setRole(Set<String> role) {
      this.role = role;
    }
}
