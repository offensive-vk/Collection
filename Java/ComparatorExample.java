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
public class ComparatorExample {
    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));
        people.add(new Person("Charlie", 35));

        // Using a Comparator to sort by age
        Collections.sort(people, new Comparator<Person>() {
            @Override
            public int compare(Person p1, Person p2) {
                return Integer.compare(p1.getAge(), p2.getAge());
            }
        });

        // Display the sorted list
        for (Person person : people) {
            System.out.println(person.getName() + ", " + person.getAge() + " years old");
        }
    }
}