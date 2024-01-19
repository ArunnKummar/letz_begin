package learn_array;

public class daysOfWeeks {
	public static void main(String[] args) {
		String[] week = {"Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"};
		int a = week.length;
		System.out.println(a + "\n");
		
		
		String dayWithMostChars = " ";                       /*I am not understanding this loop part*/
		for(String day:week)                                 /*of most char in a string array*/
		{
			if(day.length()>dayWithMostChars.length())
			{
				dayWithMostChars = day;
			}
		}
		System.out.println("Day with most string is " +dayWithMostChars + "\n");
		
		for(int i = week.length-1; i>=0;i--)
		{
			System.out.println(week[i]);
		}
	}

}
