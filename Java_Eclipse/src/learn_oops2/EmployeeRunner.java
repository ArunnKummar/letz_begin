package learn_oops2;

public class EmployeeRunner {
	
	public static void main(String[] args) {
		
		Employee emp = new Employee();
		emp.setTitle("Mr");
		emp.setEmployerName("Arun");
		emp.setEmoloyeeGrade("A");
		emp.setSalary(350000);
		
		System.out.print(emp);
		
	}
}
