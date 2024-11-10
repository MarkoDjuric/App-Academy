def  partition(array, num)
  new_1 = []
  new_2 = []
  array.each do |el|
    if num <= 0
      return [] << [] << array

    elsif el < num
      new_1 << el

    elsif el >= num
      new_2 << el

    end

  end

  return [] << new_1 << new_2
end



def merge(hash_1, hash_2)

  new_hash = {}


  hash_1.each do |key, val|
    if hash_2.has_key?(key)
      new_hash[key] = hash_2[key]
    else
      new_hash[key] = hash_1[key] = val
      new_hash[key] = hash_2[key] = val


    end

  end

  hash_2.each do |key, val|

    new_hash[key] = hash_1[key] = val
    new_hash[key] = hash_2[key] = val

  end

  return new_hash
end





def censor(sentence, curse_words)
  sentenced_array = sentence.downcase.split(" ")
  new = []

  sentenced_array.each_with_index do |el, i|
    if curse_words.include?(el)

      new << delete_vowels(el)
    else

      new << el

      new << ""
    end

  end

  ready = new.join("")


  if sentence[1..-1] == sentence[1..-1].downcase

    return p ready[0].upcase + ready[1..-1]

  elsif sentence[1..-1] == sentence[1..-1].upcase

    return p ready.upcase
  end

  return p new
end

#helpher function
def delete_vowels(el)
  vowels ='aeiou'
  deleted = []

  el.each_char do |w|

    if vowels.include?(w)
      deleted << '*'
    else
      deleted << w
    end

  end
  deleted << " "
  return   deleted
end



def power_of_two?(n)

  powered = true
  d = 0

  while n != 2 && n != 1

     d = n/2

    n = d
    if d.even?
      powered = true
    elsif n == 2
      return true
    else

      powered = false
    end
  end

  return powered
end
