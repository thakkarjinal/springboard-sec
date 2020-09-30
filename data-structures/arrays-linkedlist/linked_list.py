import math

class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def push(self, value):
        node = Node(value)
        if self.head == None:
            self.head = self.tail = node
            return
        self.tail.next = node
        self.tail = node

    def unshift(self, value):
        node = Node(value)
        if self.head == None:
            self.head = self.tail = node
            return
        node.next = self.head
        self.head = node

    def pop(self):
        if self.tail == None:
            raise "The Linked List is empty"
        current_node = self.head
        while current_node.next != self.tail:
            current_node = current_node.next

        return_val = self.tail.value
        self.tail = current_node
        self.tail.next = None
        print("Popped value is: {}".format(return_val))
        return return_val

    def shift(self):
        if self.head == None:
            raise "The Linked List is empty"

        return_val = self.head.value
        self.head = self.head.next
        return return_val
    
    def __check_valid_index(self, index):
        if self.head == None:
            return False
        current = self.head
        length = 1
        while current != self.tail:
            length += 1
            current = current.next
        if not math.isnan(index) and ( 0 <= index  and index < length ):
            return True
        return False
    
    def get_at(self, index):
        if not self.__check_valid_index(index):
            raise Exception("Invalid Index, please provide valid index")
        current = self.head
        count = 0
        while index != count:
            current = current.next
            count += 1
        return current.value

    def set_at(self, index, value):
        """
        Here assuming that the value can be set at already existing index, 
        i.e if the length is 5, we cannot set a value at index 5
        """
        if not self.__check_valid_index(index):
            raise Exception("Invalid Index, please provide valid index")
        current = self.head
        count = 0
        while index != count:
            current = current.next
            count += 1
        current.value = value

    def insert_at(self, index, value):
        if not self.__check_valid_index(index):
            raise Exception("Invalid Index, please provide valid index")
        if index == 0:
            self.unshift(value)
            return
        count = 0
        current = self.head
        while index - 1 != count:
            current = current.next
            count += 1
        new_node = Node(value)
        new_node.next = current.next
        current.next = new_node

    def remove_at(self, index):
        if not self.__check_valid_index(index):
            raise Exception("Invalid Index, please provide valid index")
        if index == 0:
            self.shift()
            return
        count = 0
        current = self.head
        while index - 1 != count:
            current = current.next
            count += 1
        return_value = current.next.value
        current.next = current.next.next
        return return_value

    def print_list(self):
        current = self.head
        print("=======LinkedList=======")
        while current != None:
            print(current.value)
            current = current.next

    def average(self):
        count = 0
        sum = 0
        current = self.head
        while current != None:
            sum += current.value 
            current = current.next
            count += 1
        return round(sum/count, 2)

    def reverse(self, node):
        if node.next == None:
            self.head = node
            return
        else:
            self.reverse(node.next)
            node.next.next = node
            node.next = None
        

list = LinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(10)
list.push(12)
list.push(21)
list.push(5)
list.print_list()
# list.unshift(14)
# list.print_list()
# list.pop()
# list.print_list()
# list.shift()
# list.print_list()
# print(list.get_at(5))
# list.set_at(5, 23)
# list.print_list()
# list.insert_at(0, 32)
# list.print_list()
# list.remove_at(7)
# list.print_list()
# print(list.average())
list.reverse(list.head)
list.print_list()

