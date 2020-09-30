import math

class CircularArray:
    def __init__(self):
        self.array = []
        self.head = None
        self.head_index = 0
        self.rotate_by = 0
        self.orientation = None

    def add_item(self, value):
        self.array.append(value)
    
    def rotate(self, number):
        self.orientation = "left" if number < 0 else "right"
        self.rotate_by = int(math.fabs(number)) % len(self.array)
        self.head_index = len(self.array) - self.rotate_by if self.orientation == "left" else self.rotate_by

    def print_array(self):
        print("========Circular Array=========")
        for x in range(len(self.array)):
            index = (self.head_index + x) % len(self.array)
            print(self.array[index])

    def get_by_index(self, index):
        if index >= len(self.array):
            print("None")
            return
        rotated_index = (self.head_index + index) % len(self.array)
        print("index at {} is {}".format(index, self.array[rotated_index]))

ca = CircularArray()
ca.add_item(1)
ca.add_item(2)
ca.add_item(3)
ca.add_item(4)
ca.print_array()
ca.rotate(-11)
ca.print_array()
ca.get_by_index(2)
