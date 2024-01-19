package learn_oops;

public class WhileNumberPlayer {
	private int players;
	
	public WhileNumberPlayer(int players) 
	{
		this.players = players;
	}
	
	public void printSquaresUpToLimit() 
	{
		int i = 1;
		int sum = 0;
		while(i*i < players)
		{
//			sum = ;
			System.out.print(i * i);
			System.out.print("\t");
			i++;
		}
		
	}
}
