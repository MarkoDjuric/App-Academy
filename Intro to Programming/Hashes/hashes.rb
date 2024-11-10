1.Get Full Name
#Write a method get_full_name that takes in a hash containing a first, last, and title. 
#The method should return a string representing the hash's full name.


def get_full_name(hash)
  
 return puts hash["first"]+" "+hash["last"]+ ", "+hash["title"]
   
end

hash1 = {"first"=>"Michael", "last"=>"Jordan", "title"=> "GOAT"}
puts get_full_name(hash1) # => "Michael Jordan, the GOAT"

hash2 = {"first"=>"Fido", "last"=>"McDog", "title"=> "Loyal"}
puts get_full_name(hash2) # => "Fido McDog, the Loyal"



2.Word Lengths
#Write a method word_lengths that takes in a sentence string and returns a hash where every key is a word of the sentence,
# and its' corresponding value is the length of that word.


def word_lengths(sentence)
  strArr = sentence.split(" ")

  noviObjekat = Hash.new(0)
  strArr.each do |elem|
    
    noviObjekat[elem] += elem.length
    
  end
  
  return noviObjekat
  
end

puts word_lengths("this is fun") #=> {"this"=>4, "is"=>2, "fun"=>3}
puts word_lengths("When in doubt, leave it out") #=> {"When"=>4, "in"=>2, "doubt,"=>6, "leave"=>5, "it"=>2, "out"=>3}


3.Retrieve Values
#Write a method retrieve_values that takes in two hashes and a key. 
#The method should return an array containing the values from the two hashes that correspond with the given key.


def retrieve_values(hash1, hash2, key)
  arrObj = []
  if key==='name'
    arrObj<< hash1["name"]
    arrObj<< hash2["name"]
  else
     arrObj<< hash1["color"]
    arrObj<< hash2["color"]
  end
   return [arrObj]
  end


4.Cat Builder
#Write a method cat_builder that takes in a name, color, and age. 
#The method should return a hash representing a cat with those values.


def cat_builder(name_str, color_str, age_num)
    return { "name"=>name_str, "color"=>color_str, "age"=>age_num }
end

print cat_builder("Whiskers", "orange", 3) #=> {"name"=>"Whiskers", "color"=>"orange", "age"=>3}
puts

print cat_builder("Salem", "black", 100) #=> {"name"=>"Salem", "color"=>"black", "age"=>100}
puts



5.Ae Count
#Write a method ae_count that takes in a string and returns a hash containing the number of a's and e's in the string.
#Assume the string contains only lowercase characters.


def ae_count(str)

  count = Hash.new(0)
  
  str.each_char do |char|
    if char === 'a'|| char === 'e'
    
    count[char]+=1
    end
  end
  
 return  count
end

puts ae_count("everyone can program") #=> {"a"=>2, "e"=>3}
puts ae_count("keyboard") #=> {"a"=>1, "e"=>1}


6.Element Count
#Write a method element_count that takes in an array and returns a hash representing the count of each element in the array.


def element_count(arr)
  count = Hash.new(0)
  
  arr.each do |elem|
     count[elem] += 1
  end
 return  count
end

puts element_count(["a", "b", "a", "a", "b"]) #=> {"a"=>3, "b"=>2}
puts element_count(["red", "red", "blue", "green"]) #=> {"red"=>2, "blue"=>1, "green"=>1}


7.Select Upcase Keys
#Write a method select_upcase_keys that takes in a hash and returns a new hash containing key-value pairs of the original hash that had uppercase keys. 
#You can assume that the keys will always be strings.


def select_upcase_keys(hash)
  obj=Hash.new(0)
  
  hash.each do |key, value|
   if key === key.upcase
    obj[key] = value
   end
  end
  return obj
end

print select_upcase_keys({"make"=> "Tesla", "MODEL"=> "S", "Year"=> 2018, "SEATS"=> 4}) # => {"MODEL"=>"S", "SEATS"=>4}
puts

print select_upcase_keys({"DATE"=>"July 4th","holiday"=> "Independence Day", "type"=>"Federal"}) # => {"DATE"=>"July 4th"}
puts


8..Hand Score
#Write a method hand_score that takes in a string representing a hand of cards and returns it's total score.
#You can assume the letters in the string are only A, K, Q, J. A is worth 4 points, K is 3 points, Q is 2 points, and J is 1 point. 
#The letters of the input string not necessarily uppercase.


def hand_score(hand)
  object = {
    'A' => 4,
    'a' => 4,
    'K' => 3,
    'k' => 3,
    'Q' => 2,
    'q' => 2,
    'J' => 1,
    'j' => 1
  }
  
counter=0
  hand.each_char do  |char| 
     counter += object[char] 
end
  return counter
end

puts hand_score("AQAJ") #=> 11
puts hand_score("jJka") #=> 9



9.Frequent Letters
#Write a method frequent_letters that takes in a string and returns an array containing the characters that appeared more than twice in the string


def frequent_letters(string)
  counter = Hash.new(0)
  arr = []
  
  string.each_char {  |char| counter[char] += 1 }

 s = counter.sort_by { |k,v| v }
  
 s.each do |el|
   
   if el[1] > 2
     
     arr << el[0]
     
   end
 end
  
  return arr
end

print frequent_letters('mississippi') #=> ["i", "s"]
puts
print frequent_letters('bootcamp') #=> []
puts


10.Unique Elements
#Write a method unique_elements that takes in an array and returns a new array where all duplicate elements are removed.
#Solve this using a hash.


def unique_elements(arr)
  hash_elements = {}
  
  arr.each { |ele| hash_elements[ele] = true }
  return hash_elements.keys
end

print unique_elements(['a', 'b', 'a', 'a', 'b', 'c']) #=> ["a", "b", "c"]
puts


11.Element Replace
#Write a method element_replace that takes in an array and a hash. 
#The method should return a new array where elements of the original array are replaced with their corresponding values in the hash.


def element_replace(arr, hash)
 new_arr=[]
  temp_arr =[]
  arr.each_with_index do |el, i|
    hash.each do  |key, val|
      if el == key 
        new_arr << val 
       elsif !hash.has_key?(el)
        if !new_arr.include?(el)
       new_arr << el
        end
      end
       
      end
    end
  
     
  return new_arr
  
end

arr1 = ["LeBron James", "Lionel Messi", "Serena Williams"]
hash1 = {"Serena Williams"=>"tennis", "LeBron James"=>"basketball"}
print element_replace(arr1, hash1) # => ["basketball", "Lionel Messi", "tennis"]
puts

arr2 = ["dog", "cat", "mouse"]
hash2 = {"dog"=>"bork", "cat"=>"meow", "duck"=>"quack"}
print element_replace(arr2, hash2) # => ["bork", "meow", "mouse"]
puts









