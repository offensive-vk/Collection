# Program to Show the usage of Linked List in Python. (Like other languages.)

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def insert_at_end(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def delete_node(self, key):
        current = self.head

        # If the key is in the head
        if current and current.data == key:
            self.head = current.next
            current = None
            return

        # Search for the key to be deleted
        prev = None
        while current and current.data != key:
            prev = current
            current = current.next

        # If key is not present
        if not current:
            print(f"{key} not found in the list.")
            return

        # Unlink the node
        prev.next = current.next
        current = None

# Example usage
if __name__ == "__main__":
    # Create a linked list
    linked_list = LinkedList()

    # Insert some elements
    linked_list.insert_at_end(1)
    linked_list.insert_at_end(2)
    linked_list.insert_at_end(3)

    # Display the linked list
    print("Linked List:")
    linked_list.display()

    # Insert at the beginning
    linked_list.insert_at_beginning(0)
    print("\nLinked List after inserting at the beginning:")
    linked_list.display()

    # Delete a node
    linked_list.delete_node(2)
    print("\nLinked List after deleting node with value 2:")
    linked_list.display()
