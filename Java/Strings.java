package Java;
import java.util.Scanner;
/**
 * Program to demonstrate the usage of string methods and string itself.
 */
public class Strings {
	public static void main(String[] args){
		Scanner input = new Scanner(System.in);

		String a = input.next();
		String b = input.next();

		System.out.println(a.length() + b.length());
		System.out.println(a.compareTo(b) > 0? "Yes" : "No");
		System.out.println(a.substring(0,1).toUpperCase() + a.substring(1, a.length()) + " " + b.substring(0,1).toUpperCase() + b.substring(1, b.length()) );
        
        input.close();
	}
}
