1.To Initials
#Write a method to_initials that takes in a person's name string and returns a string representing their initials.


def to_initials(name)
  str = ""
  
 name.split(" ").each { |ele|  str += ele[0] }
     
  return str
end

puts to_initials("Kelvin Bridges")      # => "KB"
puts to_initials("Michaela Yamamoto")   # => "MY"
puts to_initials("Mary La Grange")      # => "MLG"



25.First in Array
#Write a method first_in_array that takes in an array and two elements, 
#the method should return the element that appears earlier in the array.


def first_in_array(arr, el1, el2)

 pos1 = arr.index(el1)
 pos2 = arr.index(el2)
  
  if pos1 < pos2
    print el1
  else
    print el2
  end
end

puts first_in_array(["a", "b", "c", "d"], "d", "b"); # => "b"
puts first_in_array(["cat", "bird" ,"dog", "mouse" ], "dog", "mouse"); # => "dog"



2.Format Name
#Write a method format_name that takes in a name string and returns the name properly capitalized.
# Hint: use str.upcase and str.downcase
# "abc".upcase # => "ABC"


def format_name(str)
  name = []
  
  first_second_name = []
  
   name = str.split(" ")
  
   name[0][1..-1]
  
  end

puts format_name("chase WILSON") # => "Chase Wilson"
puts format_name("brian CrAwFoRd scoTT") # => "Brian Crawford Scott"


3.Is Valid Name
#Write a method is_valid_name that takes in a string and returns a boolean indicating whether 
#or not it is a valid name.

# A name is valid is if satisfies all of the following:
# - contains at least a first name and last name, separated by spaces
# - each part of the name should be capitalized

def is_valid_name(str)
  newStr = str.split(' ')
  valid = []
  
  newStr.each do |element|
 
  valid << element[0].upcase + element[1..-1].downcase

  end
  
   print valid.join(' ')
  
    if   newStr.length>1 && str ===  valid.join(' ')

  return true
      
    else
      
      return false
   end
end

puts is_valid_name("Kush Patel val")   # => true
puts is_valid_name("Daniel")           # => false
puts is_valid_name("Robert Downey Jr") # => true
puts is_valid_name("ROBERT DOWNEY JR") # => false



4.Is Valid Email
#Write a method is_valid_email that takes in a string and returns a boolean 
#indicating whether or not it is a valid email address.


# For simplicity, we'll consider an email valid when it satisfies all of the following:
# - contains exactly one @ symbol
# - contains only lowercase alphabetic letters before the @
# - contains exactly one . after the @


def is_valid_email(str) 
brojevi = ['1','2','3','4','5','6','7','8','9','0']

niz = str.split('')

asterix = 0
br = 0

niz.each do |elem|
if elem === '@' 
   asterix +=1

 elsif elem === '.' 
   br+=1
 end

end

if asterix === 1 && br === 1 
 
 seekedNumber = 0


niz.each do |elem|
  brojevi.each do |item|
    if elem === item
      seekedNumber+=1
    end
   end
end

  if seekedNumber>0
    return false
  else
    return true
  end

 else

 return false
end

end

puts is_valid_email("abc@xy.z")         # => true
puts is_valid_email("jdoe@gmail.com")   # => true
puts is_valid_email("jdoe@g@mail.com")  # => false
puts is_valid_email("jdoe42@gmail.com") # => false
puts is_valid_email("jdoegmail.com")    # => false
puts is_valid_email("az@email")         # => false



5.Reverse Words
#Write a method reverse_words that takes in a sentence string and returns the sentence 
#with the order of the characters in each word reversed. 
#Note that we need to reverse the order of characters in the words, do not reverse the order of words in the sentence.


def reverse_words(str)
  reversedString = ''

   i=1
  
   while i <= str.length
       reversedString += str[str.length-i]
  
      i+=1
   end
  
  arrNew = reversedString.split(' ')
  
  reversedString2 = []
  
    z = 1
  
    while z <= arrNew.lengt
      reversedString2 << arrNew[arrNew.length-z
        
      z+=1
    end

  return reversedString2.join(' ')
end

puts reverse_words('keep coding') # => 'peek gnidoc'
puts reverse_words('simplicity is prerequisite for reliability') # => 'yticilpmis si etisiuqererp rof ytilibailer'


  
5(b).Reverse Words (SECOND SOLUTION)
#Write a method reverse_words that takes in a sentence string and returns the sentence 
#with the order of the characters in each word reversed. 
#Note that we need to reverse the order of characters in the words, do not reverse the order of words in the sentence.  


def reverse_words(sent)
     array =  sent.split(" ")
     string = []
  
  
     array.each_with_index  do |word, i|
        reversed =  reversed_arr(word)
        string << reversed
     end
  
  return p string.join(" ")
end

  def reversed_arr(word)
    str=""
    
     word.each_char do |el|
      str = el + str
     end
    
    return str
  end

puts reverse_words('keep coding') # => 'peek gnidoc'
puts reverse_words('simplicity is prerequisite for reliability') # => 'yticilpmis si etisiuqererp rof ytilibailer'
 
  
  
6.Rotate Array
#Write a method rotate_array that takes in an array and a number. The method should return the array after rotating the elements the specified number of times. 
#A single rotation takes the last element of the array and moves it to the front.

  
def rotate_array(arr, num)
  v = " "
  
sliced = arr[-num..-1].join(" ")
 
sl = arr[0...-num].join(" ")

v += sliced +" "+ sl
  
 arr =  v.split(" ")
  
 return p arr
end
  
print rotate_array([ "Matt", "Danny", "Mashu", "Matthias" ], 1) # => [ "Matthias", "Matt", "Danny", "Mashu" ]
puts
print rotate_array([ "a", "b", "c", "d" ], 2) # => [ "c", "d", "a", "b" ]
puts  
  
    
  
7.Pig Latin Word
#Write a method pig_latin_word that takes in a word string and translates the word into pig latin.  
   
# Pig latin translation uses the following rules:
# - for words that start with a vowel, add 'yay' to the end
# - for words that start with a nonvowel, move all letters before the first vowel to the end of the word and add 'ay'

def pig_latin_word(word)
  a = word[0]
  str=""
  
vowels = 'aeiou'

  if vowels.include?(a)
    return word + 'yay'
  else
    word.each_char.with_index  do |el,i|
      if vowels.include?(el)
      return  word[i..-1] + word[0...i] + 'ay'
      end
    end
  end

end

puts pig_latin_word("apple")   # => "appleyay"
puts pig_latin_word("eat")     # => "eatyay"
puts pig_latin_word("banana")  # => "ananabay"
puts pig_latin_word("trash")   # => "ashtray"  
  
  
  
8.Combinations
#Write a method combinations that takes in an array of unique elements, 
#the method should return a 2D array representing all possible combinations of 2 elements of the array.  
  

  def combinations(arr)
  array = []
  
  arr.each_with_index  do |el, i|
    arr.each_with_index do |char, idx|
      if idx > i
      array << [el , char ]
      end
    end
  end
  return array
end

print combinations(["a", "b", "c"]); # => [ [ "a", "b" ], [ "a", "c" ], [ "b", "c" ] ]
puts

print combinations([0, 1, 2, 3]); # => [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
puts  


9.Opposite Count
#Write a method opposite_count that takes in an array of unique numbers. 
#The method should return the number of pairs of elements that sum to 0.


def opposite_count(nums)
    counter = 0
  
  nums.each_with_index do |num1, idx1|
    nums.each_with_index do |num2, idx2| 
      
      if idx2 > idx1 && num1 === -1 * num2
         counter += 1
        
      end
      
    end
  end
  
 return counter
end

puts opposite_count([ 2, 5, 11, -5, -2, 7 ]) # => 2
puts opposite_count([ 21, -23, 24 -12, 23 ]) # => 1


10.Two D Sum
#Write a method two_d_Sum that takes in a two dimensional array and returns the sum of all elements in the array.


def two_d_sum(arr)
  counter = 0
  
  arr.each_with_index do |arr1, idx1|
    arr1.each_with_index do |arr2, idx2|
      
      counter += arr2
      
    end
  end
  
return counter
end


puts two_d_sum([ [4, 5],[1, 3, 7, 1]])    # => 21
puts two_d_sum([[3, 3],[2],[2, 5]])   # => 15


11.Two D Translate
#Write a method two_d_translate that takes in a 2 dimensional array and translates it into a 1 dimensional array. 
#You can assume that the inner arrays always have 2 elements. See the examples.


def two_d_translate(arr)
    str = []

   arr.each do |el| 
     el[-1].times do
        str << el[0]
     end
     
  end
  
 return str
end
  
 
print two_d_translate([['boot', 3],['camp', 2],['program', 0]]) # => [ 'boot', 'boot', 'boot', 'camp', 'camp' ]
puts
print two_d_translate([['red', 1],['blue', 4]]) # => [ 'red', 'blue', 'blue', 'blue', 'blue' ]
puts


11.Two D Translate(SECOND SOLUTION)
#Write a method two_d_translate that takes in a 2 dimensional array and translates it into a 1 dimensional array. 
#You can assume that the inner arrays always have 2 elements. See the examples.

def two_d_translate(arr)
  new_array = []
  
  arr.each_with_index do |el, idx|
    
    str = el[0]
    repeat = el[1]
 
    repeat.times do |e|
      new_array << str
    end
    
 end 
  
 return new_array
end

arr_1 = [
  ['boot', 3],
  ['camp', 2],
  ['program', 0]
]

print two_d_translate(arr_1) # => [ 'boot', 'boot', 'boot', 'camp', 'camp' ]
puts

arr_2 = [
  ['red', 1],
  ['blue', 4]
]

print two_d_translate(arr_2) # => [ 'red', 'blue', 'blue', 'blue', 'blue' ]
puts

  
  
  
  
