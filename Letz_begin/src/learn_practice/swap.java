package learn_practice;

import java.util.Scanner;

public class swap {
	public static void main(String[] args) {
		Scanner read = new Scanner(System.in);
		System.out.print("Enter 1st number : ");
		int a = read.nextInt();
		System.out.print("Enter 2nd number : ");
		int b = read.nextInt();
		
		a = a + b;
		b = a - b;
		a = a - b; 
		
		System.out.printf("After swapping \n1st number = %d and 2nd number = %d",a,b).println();
	}
}
