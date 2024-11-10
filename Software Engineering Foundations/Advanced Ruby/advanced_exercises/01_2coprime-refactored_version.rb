

# Write a method, coprime?(num_1, num_2), that accepts two numbers as args.
# The method should return true if the only common divisor between the two numbers is 1.
# The method should return false otherwise. For example coprime?(25, 12) is true because
# 1 is the only number that divides both 25 and 12.

def coprime?(num_1, num_2)
    
    if num_1 % 2 === 0 && num_2 % 2 === 0
        
       return false
        
    elsif num_1 % 3 === 0 && num_2 % 3 === 0
        
      return false
    
    else
        
      return true
    end
    
 end

puts coprime?(25, 12)    # => true
puts coprime?(7, 11)     # => true
puts coprime?(30, 9)     # => false
puts coprime?(6, 24)     # => false



