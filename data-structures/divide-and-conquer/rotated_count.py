import math
def rotated_count(arr):
    if len(arr) == 1 or arr[0] < arr[len(arr) - 1]:
        return 0
    left = 0
    right = len(arr) - 1
    while(left <= right):
        mid = math.floor((left + right) / 2)
        if(arr[mid] > arr[mid + 1]):
            return mid + 1
        elif (arr[left] > arr[mid]):
            right = mid - 1
        else:
            left = mid + 1

print(rotated_count([15, 18, 2, 3, 6, 12]))
print(rotated_count([7, 9, 11, 12, 5]))
print(rotated_count([7, 9, 11, 12, 15]))