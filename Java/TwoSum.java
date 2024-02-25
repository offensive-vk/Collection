
/**
 * Given an array of integers, write a Java method to find the two numbers that add up to a specific target sum. You may assume that each input has exactly one solution, and you cannot use the same element twice.
 */

import java.util.HashMap;
import java.util.Map;

public class TwoSum {

    public static int[] findTwoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }

        throw new IllegalArgumentException("No two sum solution");
    }

    public static void main(String[] args) {
        int[] nums = { 2, 7, 11, 15 };
        int target = 9;
        int[] result = findTwoSum(nums, target);
        System.out.println("Output: [" + nums[result[0]] + ", " + nums[result[1]] + "]");
    }
}
