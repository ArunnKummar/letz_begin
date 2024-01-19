package learn_practice;

import java.util.Scanner;

public class integerPallindrome {

	public static void main(String[] args) {
		Scanner read = new Scanner(System.in);
		System.out.print("Enter a integer : ");
		int a = read.nextInt();
		System.out.println("The integer is : " + a);
		int sum = 0;
		
		while(a != 0) {	
			int temp = a % 10;
			sum = sum * 10 + temp;
			a = a / 10;
		}	
		System.out.println(sum);
		
		if(a != sum)
		{
			System.out.println("Integer is not pallindrome");
		}
		else
		{
			System.out.println("Integer is pallindrome");
		}
	}

}
