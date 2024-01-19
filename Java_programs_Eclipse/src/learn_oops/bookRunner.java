package learn_oops;

public class bookRunner {
	public static void main(String[] args) {
		book artOfComputerProgramming = new book();
		book effectiveJava = new book();
		book cleanCode = new book();
		
		artOfComputerProgramming.bookOne();
		effectiveJava.bookTwo();
		cleanCode.bookThree();
	}
}
