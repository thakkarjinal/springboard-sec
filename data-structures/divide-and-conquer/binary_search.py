import math
def binary_search(arr, n):
    left = 0
    right = len(arr) - 1
    while(left <= right):
        mid = math.floor((left + right) / 2)
        if(arr[mid] == n):
            return mid
        elif (arr[mid] < n):
            left = mid + 1
        else:
            right = mid - 1
    return -1

print(binary_search([0,1,2,3,4,5,6], 1))
print(binary_search([0,2,4,34,44,52,61], 61))
print(binary_search([0,2,4,34,44,52,61], 0))
print(binary_search([0,2,4,34,44,52,61], 62))


