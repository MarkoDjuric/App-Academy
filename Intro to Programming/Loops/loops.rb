
6.Count E
#Write a method count_e(word) that takes in a string word 
#and returns the number of e's in the word


def count_e(word)
  counter = 0
  i = 0
  
  while i  < word.length
     if word[i] == 'e'
        counter += 1
      end
     i += 1
  end
  
  return counter
end

puts count_e("movie") # => 1
puts count_e("excellent") # => 3


7.Count A
#Write a method count_a(word) that takes in a string word and returns the number of a's in the word. 
#The method should count both lowercase (a) and uppercase (A)


def count_a(word)
  counter = 0
  i = 0
  
  while i  < word.length
     if word[i] == 'a' || word[i] == 'A' 
        counter += 1
      end
     i += 1
  end
  
  return counter
end

puts count_a("application")  # => 2
puts count_a("bike")         # => 0
puts count_a("Arthur")       # => 1
puts count_a("Aardvark")     # => 3


8.Count Vowels
#Write a method, count_vowels(word), that takes in a string word and returns the number of vowels in the word.
#Vowels are the letters a, e, i, o, u


def count_vowels(word)
 counter = 0
  i = 0
  while i  < word.length
     if word[i] == 'a' || word[i] == 'e' || word[i] == 'i'|| word[i] == 'o'|| word[i] == 'u'
        counter += 1
      end
     i += 1
  end
  return counter
end

puts count_vowels("bootcamp")  # => 3
puts count_vowels("apple")     # => 2
puts count_vowels("pizza")     # => 2


9.Sum Nums
#Write a method sum_nums(max) that takes in a number max and returns the sum of all numbers 
#from 1 up to and including max.


def sum_nums(max)
  counter = 0
  
  i = 1
  while i <=  max 
    counter += i
    i += 1
  end
return counter
end

puts sum_nums(6) # => 10, because 1 + 2 + 3 + 4 = 10
puts sum_nums(5) # => 15



10.Factorial
#Write a method factorial(num) that takes in a number num and returns the product of all numbers 
#from 1 up to and including num.


def factorial(num)
  counter = 1
  i = 1
  
  while i <= num
    factor = 0
    counter*=i
    i+=1
  end
   return counter
end

puts factorial(3) # => 6, because 1 * 2 * 3 = 6
puts factorial(5) # => 120, because 1 * 2 * 3 * 4 * 5 = 120


10.Reverse
#Write a method reverse(word) that takes in a string word and returns the word with its letters in reverse order.


def reverse(word)
  counter = ''
  
  
  i = 1
  while i <= word.length
    counter += word[word.length-i]
    
    i += 1
  end
  
  return counter
 end

puts reverse("cat")          # => "tac"
puts reverse("programming")  # => "gnimmargorp"
puts reverse("bootcamp")     # => "pmactoob"


10.Revese(SECOND SOLUTION)

def reverse(word)
  reversed = ""

  i = 0
  while i < word.length
    char = word[i]
    
    reversed = char + reversed  # put element at the end of string with each iteration, not at the start as usual.

    i += 1
  end

  return reversed
end

puts reverse("cat")          # => "tac"
puts reverse("programming")  # => "gnimmargorp"
puts reverse("bootcamp")     # => "pmactoob"


11.Is Palindrome
#Write a method is_palindrome(word) that takes in a string word and returns the true if the word is a palindrome, false otherwise.
#A palindrome is a word that is spelled the same forwards and backwards.


def is_palindrome(word)
  reversed = ''
  i = 1
  while i <= word.length 
    reversed += word[word.length-i]
    i+=1
  end
  if reversed == word
       return true 
  else return false
  end
end

puts is_palindrome("racecar")  # => true
puts is_palindrome("kayak")    # => true
puts is_palindrome("anaaaaad") # => false

