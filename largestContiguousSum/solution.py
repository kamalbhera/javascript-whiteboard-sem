def largest_contiguous_sum(arr):
    current_sum = 0
    maximum = -1000000

    for num in arr:
        current_sum += num
        if current_sum > maximum:
            maximum = current_sum        
        if current_sum < 0:
            current_sum = 0
    return maximum


# Tests
print(largest_contiguous_sum([5, -9, 6, -2, 3]))           # should print 7
print(largest_contiguous_sum([1, 23, 90, 0, -9]))          # should print 114
print(largest_contiguous_sum([2, 3, -8, -1, 2, 4, -2, 3])) # should print 7