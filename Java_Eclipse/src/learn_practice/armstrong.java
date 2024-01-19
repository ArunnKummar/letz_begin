package learn_practice;

import java.util.Scanner;
import java.lang.Math;

public class armstrong {

	public static void main(String[] args) {
		Scanner read = new Scanner(System.in);
		
		System.out.print("Enter integer : ");
		int a = read.nextInt();
		int b = a;
		int c = a;
		
		int temp = 0;
		int count = 0;
		int sum = 0;
		
		while(b != 0)
		{
			temp = b / 10;
			count++;
			b = b / 10;
		}
		System.out.println("Number of digits in a integer : " + count);
		
		while(c != 0)
		{
			int s = c % 10;
			int r = (int)Math.pow(s,count);
			sum = sum + r;
			c = c / 10;
		}
		System.out.println(sum);
		
		if(a == sum)
		{
			System.out.println("It is an armstrong number");
		}
		else
		{
			System.out.println("It is not an armstrong number");
		}
		
	}
}
