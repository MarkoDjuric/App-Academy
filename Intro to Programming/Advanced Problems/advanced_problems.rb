
1.Map By Name
#Write a method map_by_name  that takes in an array of hashes and returns a new array containing the names of each hash.

def map_by_name(arr)
  
  new_arr = arr.map { |name| name['name']   }
  print new_arr
  puts

end


pets = [
  {"type"=>"dog", "name"=>"Rolo"},
  {"type"=>"cat", "name"=>"Sunny"},
  {"type"=>"rat", "name"=>"Saki"},
  {"type"=>"dog", "name"=>"Finn"},
  {"type"=>"cat", "name"=>"Buffy"}
]
print map_by_name(pets) #=> ["Rolo", "Sunny", "Saki", "Finn", "Buffy"]
puts

countries = [
 {"name"=>"Japan", "continent"=>"Asia"},
 {"name"=>"Hungary", "continent"=>"Europe"},
 {"name"=>"Kenya", "continent"=>"Africa"},
]
print map_by_name(countries) #=> ["Japan", "Hungary", "Kenya"]
puts



2.Map By Key
#Write a method map_by_key that takes in an array of hashes and a key string. 
#The method should returns a new array containing the values from each hash for the given key.


def map_by_key(arr, key)
  new_arr = arr.map { |k| k[key]  }
  print new_arr
end

locations = [
  {"city"=>"New York City", "state"=>"New York", "coast"=>"East"},
  {"city"=>"San Francisco", "state"=>"California", "coast"=>"West"},
  {"city"=>"Portland", "state"=>"Oregon", "coast"=>"West"},
]

print map_by_key(locations, "state") #=> ["New York", "California", "Oregon"]
puts
print map_by_key(locations, "city") #=> ["New York City", "San Francisco", "Portland"]
puts


3.Yell Sentence
#Write a method yell_sentence that takes in a sentence string and returns a new sentence where every word is yelled. 
#See the examples. Use map to solve this.


def yell_sentence(sent)
  
   array_word = sent.split(" ")
   
   sentence =  array_word.map { |word| word.upcase + "!"  }
  
   sentence.join(" ")
  
end

puts yell_sentence("I have a bad feeling about this") #=> "I! HAVE! A! BAD! FEELING! ABOUT! THIS!"


4.o Words
#Write a method o_words that takes in a sentence string and returns an array of the words that contain an "o".
#Use select in your solution!


def o_words(sentence)
  
  sentence_arr = sentence.split(" ")
  print sentence_arr
  puts
  
o_words = sentence_arr.select { |word| word.include?('o')   }

  print o_words
end

print o_words("How did you do that?") #=> ["How", "you", "do"]
puts



5.Last Index
#Write a method last_index that takes in a string and a character. 
#The method should return the last index where the character can be found in the string.


def last_index(str, char)
  rever_str =  str.reverse
  index = rever_str.index(char)
  rever_str.length-1 - index
end

puts last_index("octagon", "o")    #=> 5
puts last_index("programming", "m")#=> 7
puts last_index("abca", "a")       #=> 3
puts last_index("mississipi", "i") #=> 9


6.Most Vowels
#Write a method most_vowels that takes in a sentence string and returns the word of the sentence that contains the most vowels.


def most_vowels(word)
  base_count = 0
  vowels = "aeiou"
  str = ''
  splited = word.split(" ")

  
  splited.each_with_index do |char, i|
    calculated = numbers_of_vowels(char)
       if calculated > base_count
          base_count = calculated
          str = char
        end
      end
  
     return p str
   end


7.Most Vowels
#Write a method most_vowels that takes in a sentence string and returns the word of the sentence that contains the most vowels.


def most_vowels(word)
  base_count = 0
  vowels = "aeiou"
  str = ''
  splited = word.split(" ")

  
  splited.each_with_index do |char, i|
   calculated = numbers_of_vowels(char)
     if calculated > base_count
        base_count = calculated
        str = char
     end
   end
  
  return p str
end


def numbers_of_vowels(char)
  counter = 0
  vowels = 'aeiou'
  
  char.each_char do |w|
    if vowels.include?(w)
       counter += 1
    end
  end
  
  return counter
end

print most_vowels("what a wonderful life") #=> "wonderful"




8.Prime
#Write a method prime? that takes in a number and returns a boolean, indicating whether the number is prime.
#A prime number is only divisible by 1 and itself.

def prime?(num)
  
   if num < 2
     return false
   end

  (2...num).each do |factor|
     (2...num).each do |f|
    
        if factor*f == num
          return false
         
        end
     end
   end
  
  return true
 end


puts prime?(2)  #=> true
puts prime?(5)  #=> true
puts prime?(11) #=> true
puts prime?(4)  #=> false
puts prime?(9)  #=> false
puts prime?(-5) #=> false


9.Pick Primes
#Write a method pick_primes that takes in an array of numbers and returns a new array containing only the prime numbers.

def pick_primes(numbers) 
    
   return prime_nuimbers = numbers.select do |el| 
     
   prime?(el)
     
   end
end


def prime?(num)
  if num < 2
    return false
  end

  (2...num).each do |factor|
     (2...num).each do |f|
    
        if factor * f == num
          return false
        end
      
      end
   end
 
  return true
end

print pick_primes([2, 3, 4, 5, 6]) #=> [2, 3, 5]
puts
print pick_primes([101, 20, 103, 2017]) #=> [101, 103, 2017]
puts


10.Greatest Factor Array
#Write a method greatest_factor_array that takes in an array of numbers and returns a new array where every even number is replaced with it's greatest factor.
#A greatest factor is the largest number that divides another with no remainder. For example the greatest factor of 16 is 8. 
#(For the purpose of this problem we won't say the greatest factor of 16 is 16, because that would be too easy, ha)


def greatest_factor_array(arr)

 array_of_factors = []

 arr.each do |el|
  num = factors_array(el)
  array_of_factors << num
 end
   return array_of_factors
 end


def factors_array(el)
  arr = []
   
  (2...el).each do |n|
    if  el % 2 != 0 
     arr << el
    elsif el % n == 0
     arr << n
    end

  end
  return  arr[-1]
end

print greatest_factor_array([16, 7, 9, 14]) # => [8, 7, 9, 7]
puts
print greatest_factor_array([30, 3, 24, 21, 10]) # => [15, 3, 12, 21, 5]
puts


11.Triple Sequence
#Write a method triple_sequence that takes in two numbers, start and length. 
#The method should return an array representing a sequence that begins with start and is length elements long. 
#In the sequence, every element should be 3 times the previous element. Assume that the length is at least 1.


def triple_sequence(start, length)
  arr = []
  arr << start
  
 (length-1).times do 
   arr << arr[-1] * 3
   
   end 
  return arr
end

print triple_sequence(2, 4) # => [2, 6, 18, 54]
puts
print triple_sequence(4, 5) # => [4, 12, 36, 108, 324]
puts


12.Summation Sequence
#A number's summation is the sum of all positive numbers less than or equal to the number. 
#For example: the summation of 3 is 6 because 1 + 2 + 3 = 6, the summation of 6 is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21.
#Write a method summation_sequence that takes in a two numbers: start and length. The method should return an array containing length total elements. 
#The first number of the sequence should be the start number. At any point, to generate the next element of the sequence we take the summation of the previous element.
#You can assume that length is not zero.


def summation_sequence(start, length)
  arr = [start]
  
 (length-1).times do 
   s = arr[-1]
    sum = summing(s)
    arr << sum
 end
 return arr
end

def summing(s)
    v = 0
    (1..s).each do |num|
      v += num
    end
  
    return v
end


print summation_sequence(3, 4) # => [3, 6, 21, 231]
print summation_sequence(5, 3) # => [5, 15, 120]


13.Fibonacci
#The fibonacci sequence is a sequence of numbers whose first and second elements are 1. 
#To generate further elements of the sequence we take the sum of the previous two elements. 
#For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8. 
#Write a method fibonacci that takes in a number length and returns the fibonacci sequence up to the given length.


def fibonacci(length)
  fibonacci_array = []
  counter = 1
  
  if length < 1
    
    return []
    
  elsif length == 1
    
    return  fibonacci_array << 1 
    
  elsif length > 1
    
     fibonacci_array << 1 << 1
    
       (1...length-1).each do |num|
       
         last =  fibonacci_array[-1] + fibonacci_array[-2]
       
          fibonacci_array << last
        end
   end
      
    return   fibonacci_array
  end
  
print fibonacci(0) # => []
puts
print fibonacci(1) # => [1]
puts
print fibonacci(6) # => [1, 1, 2, 3, 5, 8]
puts
print fibonacci(8) # => [1, 1, 2, 3, 5, 8, 13, 21]
puts


14.Caesar Cipher
#Write a method caesar_cipher that takes in a string and a number. 
#The method should return a new string where every character of the original is shifted num characters in the alphabet


# Feel free to use this variable:
# alphabet = "abcdefghijklmnopqrstuvwxyz"

def caesar_cipher(str, num)
   final_str = ''
  
   alphabet = "abcdefghijklmnopqrstuvwxyz"

   alphastr = alphabet[alphabet.index('y')..-1] + alphabet[0..-1]

  
str.each_char.with_index do |el, idx|
  final_str +=   alphastr[alphastr.index(el) + num]
  end

  return  final_str 
end

puts caesar_cipher("apple", 1)    #=> "bqqmf"
puts caesar_cipher("bootcamp", 2) #=> "dqqvecor"
puts caesar_cipher("zebra", 4)    #=> "difve"


15.Double Letter Count
#Write a method that takes in a string and returns the number of times that the same letter repeats twice in a row.
  


def double_letter_count(string)
  p arr = string.split("")
  
   counter = 0
   arr.each_with_index do |char, i|
  
      if char == arr[i+1]
        counter += 1
       
      end
    
        i += 1
   end
 
   return counter
end

puts double_letter_count("the jeep rolled down the hill") #=> 3
puts double_letter_count("bootcamp") #=> 1



16.Adjacent Sum
#Write a method adjacent_sum that takes in an array of numbers and returns a new array containing the sums of adjacent numbers in the original array. See the examples.



def adjacent_sum(arr)
  con = 0
  counter = []
  
  arr.each_with_index do |num, i|
     f = arr[i]
     s = arr[i+1]
    
    if con < arr.length-1
       counter <<  f + s
       con +=1
    end
 
  end 
  
   return counter
end

print adjacent_sum([3, 7, 2, 11]) #=> [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
puts
print adjacent_sum([2, 5, 1, 9, 2, 4]) #=> [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]
puts


Pyramid Sum
#Write a method pyramid_sum that takes in an array of numbers representing the base of a pyramid. 
#The function should return a 2D array representing a complete pyramid with the given base. 
#To construct a level of the pyramid, we take the sum of adjacent elements of the level below.



# For example, the base [1, 4, 6] gives us the following pyramid
#     15
#   5   10
# 1   4    6

def pyramid_sum(arr)
   pyramid_arr = []
   pyramid_arr << arr

   refresh = 0

  while refresh < arr.length-1
   
       first = 0
       second = 1
       sum = []

      i = 0
    while i < arr.length-1
  
    
     sum << summning(arr[first..second])
     
     i+=1
     first +=1
     second +=1

    end
    
     arr = sum
 
     pyramid_arr << sum
  end
  
   refresh +=1

  return  pyramid_arr.reverse 
end


def summning(el)

  return  el[0] + el[1]
end


print pyramid_sum([1, 4, 6]) #=> [[15], [5, 10], [1, 4, 6]]
puts

print pyramid_sum([3, 7, 2, 11]) #=> [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]
puts


