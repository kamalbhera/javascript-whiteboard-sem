''' Naive solution with O(n^2) time complexity'''

# def productOfAllOtherNumbers(arr):
#     new_arr = []
#     starting_num = 1

#     for i in range(len(arr)):
#         for num in arr:
#             if num != arr[i]:
#                 starting_num *= num
#         new_arr.append(starting_num)
#         starting_num = 1
#     return new_arr


'''Solution that makes use of division time complexity - O(2n)'''
def productOfAllOtherNumbers(arr):
    if len(arr) < 2:
        return None

    temp = 1
    new_arr = []
    for num in arr:
        temp *= num
    # print(temp)
    for i in range(len(arr)):
        new_arr.append(temp // arr[i])
    return new_arr        


''''Advanced solution with O(2n) time complexity'''
# def productOfAllOtherNumbers(arr):
#     if len(arr) < 2:
#         return None

#     temp = 1
#     product_so_far = [1 for i in range(len(arr))]

#     for i in range(len(arr)):
#         product_so_far[i] *= temp
#         temp *= arr[i]
    
#     temp = 1
#     for i in range(len(arr) - 1, -1, -1):
#         product_so_far[i] *= temp
#         temp *= arr[i]

#     return product_so_far    

# arr1 = [1, 7, 3, 4]
# arr2 = [1, 2, 3, 4, 5]

# print(productOfAllOtherNumbers(arr1))
# print(productOfAllOtherNumbers(arr2))

print(productOfAllOtherNumbers( [1, 2, 3, 4, 5] ))   
# should print [120, 60, 40, 30, 24]

print(productOfAllOtherNumbers( [9, 90] ))   
# should print [90, 9]

print(productOfAllOtherNumbers( [50] ))   
# should print None
