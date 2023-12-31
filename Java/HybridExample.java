/**
 * Write a Program to show the Concept of Hybrid Inheritance.
 */

public class HybridExample {
    public static void main(String[] args) {
        E e = new E();

        // Accessing methods from class A
        e.displayA();

        // Accessing methods from class B
        e.displayB();

        // Accessing methods from class D
        e.displayD();

        // Accessing method from class E
        e.displayE();
    }
}
// Base class
class A {
    void displayA() {
        System.out.println("Class A");
    }
}

// Subclass extending A
class B extends A {
    void displayB() {
        System.out.println("Class B");
    }
}

// Another subclass extending A
class C extends A {
    void displayC() {
        System.out.println("Class C");
    }
}

// Interface
interface D {
    void displayD();
}

// Class implementing interface D and extending B
class E extends B implements D {
    public void displayD() {
        System.out.println("Interface D");
    }

    void displayE() {
        System.out.println("Class E");
    }
}