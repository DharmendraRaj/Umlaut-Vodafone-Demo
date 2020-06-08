package com.umlaut.umlautdemobackend;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

	private long id;
	private String firstname;
	private String lastname;
	private String emailId;

	public Employee() {
	}

	public Employee(String firstname, String lastname, String emailId) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.emailId = emailId;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name ="first_name" , nullable = false)
	public String getFirstName() {
		return firstname;
	}
	
	public void setFirstName(String firstname) {
		this.firstname = firstname;
	}
	
	@Column(name ="last_name" , nullable = false)
	public String getLastName() {
		return lastname;
	}
	
	public void setLastName(String lastname) {
		this.lastname = lastname;
	}
	
	@Column(name ="email_address" , nullable = false)
	public String getEmailAddress() {
		return emailId;
	}
	
	public void setEmailAddress(String emailId) {
		this.emailId = emailId;
	}

	@Override
	public String toString() {
		return "employee [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", emailId=" + emailId
				+ "]";
	}
	
	
	
}