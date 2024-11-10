# Write a method, coprime?(num_1, num_2), that accepts two numbers as args.
# The method should return true if the only common divisor between the two numbers is 1.
# The method should return false otherwise. For example coprime?(25, 12) is true because
# 1 is the only number that divides both 25 and 12.



def coprime?(num_1,num_2)
    arrsec = []
    arr = []
    counter = 0
      (1..num_1).each do |n|
        if num_1 % n == 0
         arr << n
        end
       
       end

    arrsec = []
      (1..num_2).each do |n|
        if num_2 % n == 0
         arrsec << n
        end
          
       end
    arr.each do |el|
     if arrsec.include?(el)
      counter += 1
     end
    
    end
    
      return false if counter > 1
    
      return true
    end
    
    
    p coprime?(25,12)    # => true
    p coprime?(7, 11)     # => true
    p coprime?(30, 9)     # => false
    p coprime?(6, 24)     # => false
    
    
    
    