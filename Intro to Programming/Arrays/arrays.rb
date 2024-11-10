

1.Yell

 def yell(words)

  concated_word = []
  
  i = 0
  while i < words.length
    concated_word << words[i] + '!'
    i+=1
  end
   return concated_word
  end

print yell(["hello", "world"]) # => ["hello!", "world!"]
puts
print yell(["code", "is", "cool"]) # => ["code!", "is!", "cool!"]


2.Element Times Index
#Write a method element_times_index(nums) that takes in an array of numbers 
#and returns a new array containing every number of the original array multiplied with its index.


def element_times_index(numbers)
    concated_numbers = []
  
  i = 0
  while i < numbers.length
     concated_numbers << numbers[i]* i
     i+=1
 end
  
  return concated_numbers
end

print element_times_index([4, 7, 6, 5])       # => [0, 7, 12, 15]
puts
print element_times_index([1, 1, 1, 1, 1, 1]) # => [0, 1, 2, 3, 4, 5]


3.Even Nums
#Write a method even_nums(max) that takes in a number max 
#and returns an array containing all even numbers from 0 to max.


def even_nums(max)
  even_array = []
  
  i = 0
  while i <= max
    
    if i % 2 == 0
      even_array << i
    end
    
    i+=1
   end
  
  return even_array
end

print even_nums(10) # => [0, 2, 4, 6, 8, 10]
puts
print even_nums(5)  # => [0, 2, 4]


4.Range
#Write a method range(min, max) that takes in two numbers min and max. 
#The function should return an array containing all numbers from min to max inclusive.


def range(min, max)
  array = []
  i = 0
  
  while i <= max - min  

    array << min+i
    
    i+=1
    
  end
  return array 
end

print range(2, 7)   # => [2, 3, 4, 5, 6, 7]
puts
print range(13, 20) # => [13, 14, 15, 16, 17, 18, 19, 20]


5.Odd Range
#Write a method odd_range(min, max) that takes in two numbers min and max. 
#The method should return an array containing all odd numbers from min to max (inclusive).


def odd_range(min, max)

   array = []
  i = 0
  while min <= max   
    
if min % 2 != 0
    array << min
    
end   
    min+=1
    i+=1
  end
  return array 
end

print odd_range(11, 18) # => [11, 13, 15, 17]
puts
print odd_range(3, 7)   # => [3, 5, 7]



6.Reverse Range
#Write a method reverse_range(min, max) that takes in two numbers min and max. 
#The function should return an array containing all numbers from min to max in reverse order. 
#The min and max should be excluded from the array.


def reverse_range(min, max)
   reversed_array = []
  
  i = max - 1
  while i > min
     reversed_array << i
    
    i -= 1
  end
  
  return reversed_array
end

print reverse_range(10, 17) # => [16, 15, 14, 13, 12, 11]
puts
print reverse_range(1, 7)   # => [6, 5, 4, 3, 2]



7.Factors Of
#Write a method factors_of(num) that takes in a num and returns an array of all positive numbers 
#less than or equal to num that can divide num.


def factors_of(num)
  
  array_positive = []
  
  i = 1
  
  while i <= num
    
    if num % i == 0 
     array_positive << i
    end
    i+=1
  end
  
  return  array_positive
end

print factors_of(3)   # => [1, 3]
puts
print factors_of(4)   # => [1, 2, 4]
puts
print factors_of(8)   # => [1, 2, 4, 8]
puts
print factors_of(9)   # => [1, 3, 9]
puts
print factors_of(16)  # => [1, 2, 4, 8, 16]


8.Select Odds
#Write a method select_odds(numbers) that takes in an array of numbers and 
#returns a new array containing the odd numbers of the original array.


def select_odds(numbers)
  
  array_odds = []
  
  i = 0
  
  while i < numbers.length
    
    if numbers[i] % 2 != 0
      array_odds << numbers[i]
    end
    
     i+=1
   end
  
  return  array_odds
 end

print select_odds([13, 4, 3, 7, 6, 11]) # => [13, 3, 7, 11]
puts
print select_odds([2, 4, 6])            # => []


9.Select Long Words
#Write a method select_long_words(words) that takes in an array of words 
#and returns a new array containing all of the words of the original array that are longer than 4 characters.


def select_long_words(words)

  four_caracters = []
  
  i = 0
   
  while i < words.length
    if words[i].length > 4
       four_caracters << words[i]
    end
    
    i+=1
  end
  
   return four_caracters
end

print select_long_words(["what", "are", "we", "eating", "for", "dinner"]) # => ["eating", "dinner"]
puts
print select_long_words(["keep", "coding"])                               # => ["coding"]


10.Sum Elements
#Write a method sum_elements(arr1, arr2) that takes in two arrays. 
#The method should return a new array containing the results of adding together corresponding elements of the original arrays. You can assume the arrays have the same length.


def sum_elements(arr1, arr2)
  
  sum_array = []
  
  i = 0
  
  while i < arr1.length
    
   sum_array << arr1[i] + arr2[i]
    
    i+=1
    
  end
  
 return sum_array
  
end

print sum_elements([7, 4, 4], [3, 2, 11]) # => [10, 6, 15]
puts
print sum_elements(["cat", "pizza", "boot"], ["dog", "pie", "camp"]) # => ["catdog", "pizzapie", "bootcamp"]


11.Fizz Buzz
#Write a method fizz_buzz(max) that takes in a number max and returns an array 
#containing all numbers greater than 0 and less than max that are divisible by either 4 or 6, but not both


def fizz_buzz(max)
  
  new_array = []
  
  i = 1
 
 while i < max
    
    if ((i % 4 == 0 || i % 6== 0) && (!(i % 4 == 0 && i % 6== 0 )))
    new_array << i
  
    end
     i+=1
  end  
 return new_array
end

print fizz_buzz(20) # => [4, 6, 8, 16, 18]
puts
print fizz_buzz(15) # => [4, 6, 8]





