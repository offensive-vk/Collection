package Java;
import java.util.Scanner;

public class Series {
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);

		int T = sc.nextInt();

		for(int i = 0; i < T; i++){
			int a = sc.nextInt();
			int b = sc.nextInt();
			int n = sc.nextInt();

			int sum = a;
			for(int j = 0; j < n; j++){
				sum += (Math.pow(2, j) * b);
				System.out.print(sum + " ");
			}
			System.out.println();
		}
        sc.close();
	}
}
/*
 * Write a Java program that takes an integer 'T' as input, followed by 'T' sets of three integers 'a', 'b', and 'n'. The program should generate and print a series of numbers based on the following formula: 
 * a + 2^0 * b, a + 2^0 * b + 2^1 * b, a + 2^0 * b + 2^1 * b + ... + 2^(n-1) * b

 */