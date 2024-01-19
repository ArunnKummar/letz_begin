package learn_oops2;

public class Employee extends Person{
	private String title;
	private String employerName;
	private String emoloyeeGrade;
	private int salary;
	
//	public Employee(String title, String employer, String emoloyeeGrade,int salary)
//	{
//		this.title = title;
//		this.employer = employer;
//		this.emoloyeeGrade = emoloyeeGrade;
//		this.salary = salary;
//	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getEmployerName() {
		return employerName;
	}

	public void setEmployerName(String employerName) {
		this.employerName = employerName;
	}

	public String getEmoloyeeGrade() {
		return emoloyeeGrade;
	}

	public void setEmoloyeeGrade(String emoloyeeGrade) {
		this.emoloyeeGrade = emoloyeeGrade;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}
	
	
	public String toString()
	{
		return super.toString() + title + " " + employerName + " " + emoloyeeGrade + " " + salary 
				; 
	}
	

}
