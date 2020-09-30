def count_zeroes(arr):
	counter = 0
	for n in arr[::-1]:
		if n == 1:
			return counter
		else:
			counter += 1
	return counter

print(count_zeroes([1,1,1,1,0,0]))
print(count_zeroes([1,0,0,0,0]))
print(count_zeroes([0,0,0]))
print(count_zeroes([1,1,1,1]))