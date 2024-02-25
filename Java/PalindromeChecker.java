
/**
 * Implement a function to check if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.
*/
package Java;

public class PalindromeChecker {

    public static boolean isPalindrome(String s) {
        // Remove non-alphanumeric characters and convert to lowercase
        String cleanedString = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        
        // Check if the cleaned string is a palindrome
        int left = 0;
        int right = cleanedString.length() - 1;
        
        while (left < right) {
            if (cleanedString.charAt(left) != cleanedString.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
    
    public static void main(String[] args) {
        String input = "A man, a plan, a canal, Panama!";
        boolean result = isPalindrome(input);
        System.out.println("Output: " + result);
    }
}

