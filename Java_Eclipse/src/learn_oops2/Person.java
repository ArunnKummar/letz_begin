package learn_oops2;

public class Person {
	private String name;
	private int phone;
	private String email;
	
	/*
	public Person(String name, int phone, String email)
	{
		this.name = name;
		this.phone = phone;
		this.email = email;
	}
	*/
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPhone() {
		return phone;
	}

	public void setPhone(int phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
}
