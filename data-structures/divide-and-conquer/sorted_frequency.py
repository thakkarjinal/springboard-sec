import math
def sorted_frequency(arr, n):
    first_occ = binary_search(arr, n)
    if first_occ == -1:
        return -1
    count = 1
    for i in range(first_occ + 1, len(arr)):
        if arr[i] == n:
            count += 1
        else:
            break
    return count
            
def binary_search(arr, n):
    left = 0
    right = len(arr) - 1
    while(left <= right):
        mid = math.floor((left + right) / 2)
        if(arr[mid] == n):
            while(arr[mid - 1] == n):
                mid -= 1
            return mid
        elif (arr[mid] < n):
            left = mid + 1
        else:
            right = mid - 1
    return -1

print(sorted_frequency([1,1,2,2,2,2,3],2))
print(sorted_frequency([1,1,2,2,2,2,3],3))
print(sorted_frequency([1,1,2,2,2,2,3],1))
print(sorted_frequency([1,1,2,2,2,2,3],4))