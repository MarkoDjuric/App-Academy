
def ana_array(array_1, array_2)


  array_1.each do |el|
    return false if !array_2.include?(el)
  end

  array_2.each do |el|
    return false if !array_1.include?(el)
  end


  true

end


def dupe_indicies(array)

end