package Java;
import java.util.Scanner;
/**
 * What is the purpose of the given Java program, and how does it determine the data type that a long integer can be fitted into? 
 */

public class DataTypes{
	public static void main(String[] args){
		Scanner input = new Scanner(System.in);

		int T = input.nextInt();

		for(int i = 0; i < T; i++){
			try{
				long a = input.nextLong();
				System.out.println(a + " can be fitted in:");
				if(a >= -128 && a <= 127)
					System.out.println("* byte");
				if(a >= -Math.pow(2, 15) && a <= Math.pow(2, 15) - 1)
					System.out.println("* short");
				if(a >= -Math.pow(2, 31) && a <= Math.pow(2, 31) - 1)
					System.out.println("* int");
				if(a >= -Math.pow(2, 63) && a <= Math.pow(2, 63) - 1)
					System.out.println("* long");
			}catch(Exception e){
				System.out.println(input.next() + " can't be fitted anywhere.");
			}
		}
        input.close();
	}
}