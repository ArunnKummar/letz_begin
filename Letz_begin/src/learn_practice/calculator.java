package learn_practice;

import java.util.Scanner;

public class calculator {

	public static void main(String[] args) {
		
		Scanner read = new Scanner(System.in);
		
		System.out.println("Welcome to Calculator");
		
		System.out.print("Enter 1st numbers : ");
		int a = read.nextInt();
		System.out.print("Enter 2nd numbers : ");
		int b = read.nextInt();
		System.out.println(a);
		System.out.println(b);

		System.out.println("Select the operator :");
		System.out.println("1 = + \n"
				+ "2 = - \n"
				+ "3 = * \n"
				+ "4 = / \n"
				+ "5 = %");
		
		int c = read.nextInt();
		System.out.println("The operator number is " + c);
		if(c == 1)
		{
			int result = a + b;
			System.out.println("The operation is '+' and the result is " + result);
		}
		else if(c == 2)
		{
			int result = a - b;
			System.out.println("The operation is '-' and the result is " + result);
		}
		else if(c == 3)
		{
			int result = a * b;
			System.out.println("The operation is '*' and the result is " + result);
		}
		else if(c == 4)
		{
			int result = a / b;
			System.out.println("The operation is '/' and the result is " + result);
		}
		else
		{
			int result = a % b;
			System.out.println("The operation is '%' and the result is " + result);
		}
	}

}
