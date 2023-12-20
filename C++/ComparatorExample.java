/**
 * In Java, the Comparator interface is similar to Comparable in that it is used for comparing objects, but it provides a more flexible way to define custom ordering for classes that may not have a natural order or when you want to define multiple ways to order objects.

 * The compare method compares its two arguments for order, and it returns a negative integer, zero, or a positive integer as the first argument is less than, equal to, or greater than the second.
 */

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}