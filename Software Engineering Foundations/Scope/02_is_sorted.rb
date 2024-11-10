# Write a method, is_sorted(arr), that accepts an array of numbers as an arg.
# The method should return true if the elements are in increasing order, false otherwise.
# Do not use the built-in Array#sort in your solution :)
def is_sorted(arr)




  (0...arr.length-1).all? do |idx|  # metod je dobar jer nema if sa return koji onda zaustavlja petlju cim uslov bude ispunjen
    arr[idx] <= arr[idx+1]
  end
end

#drugi nacin, return ide ispred if da ne bi zaustavio petlju na prvom zadovoljenom uslovu

#second solution :

 def is_sorted2(arr)
    (0...arr.length-1).each do |idx|
      return false if arr[0] > arr[idx + 1]

    end

     true
   end


p is_sorted([1, 4, 10, 13, 15])       # => true
p is_sorted([1, 4, 10, 10, 13, 15])   # => true
p is_sorted([1, 2, 5, 3, 4 ])         # => false
