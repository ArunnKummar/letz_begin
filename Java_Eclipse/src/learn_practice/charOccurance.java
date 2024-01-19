package learn_practice;

import java.util.Scanner;

public class charOccurance {
	public static void main(String[] args) {
		Scanner read =  new Scanner(System.in);
		
		System.out.print("Enter a String : ");
		String name = read.nextLine();
		
		System.out.print("Enter a Character : ");
		String cha = read.nextLine(); 
		
		int len = name.length();
		System.out.println(len);
	}

}
