package Java;
import java.util.Scanner;
import java.math.BigInteger;

/**
 * Write a Java program that takes two input strings representing large integers 'a' and 'b', converts them into           BigInteger objects, and then performs addition and multiplication operations on these BigInteger objects. E
 */
public class BigInteger {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        String a = input.nextLine();
        String b = input.nextLine();
        input.close();
        
        System.out.println(new BigInteger(a).add(new BigInteger(b)));
        System.out.println(new BigInteger(a).multiply(new BigInteger(b)));
    }
}
