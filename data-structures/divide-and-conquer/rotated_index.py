import math
def rotated_index(arr, n):
    start_index = find_start_index(arr)
    # print(start_index)
    if start_index == -1:
        return start_index
    if arr[0] <= n:
        return binary_search(arr, 0, start_index - 1, n)
    else:
        return binary_search(arr, start_index, len(arr) - 1, n)

def find_start_index(arr):
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
    return -1

def binary_search(arr, left, right, n):
    while(left <= right):
        mid = math.floor((left + right) / 2)
        if(arr[mid] == n):
            return mid
        elif (arr[mid] < n):
            left = mid + 1
        else:
            right = mid - 1
    return -1

print(rotated_index([3,4,1,2],1))
print(rotated_index([16, 17, 18, 9, 10, 12, 13, 14], 12))
print(rotated_index([6, 7, 8, 9, 1, 2, 3, 4], 3))
print(rotated_index([37,44,66,102,10,22],14))
print(rotated_index([6, 7, 8, 9, 1, 2, 3, 4], 12))