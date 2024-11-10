def select_even_nums(array)

  array.select(&:even?)
end



def reject_puppies(array)

  array.reject { |obj|  obj["age"]   <= 2  }
end




def count_positive_subarrays(array)

  array.count { |subbaray| subbaray.sum > 0}
end



def aba_translate(str)
  vowels = "aeiou"
  new_str = ""


  str.each_char.with_index do |char, i|
    

    if vowels.include?(char)
      new_str += char + "b"
      new_str += str[i]
    else
      new_str += char

    end

  end
  
  new_str
end




def aba_array(array)

  array.map { |el| aba_translate(el) }

end