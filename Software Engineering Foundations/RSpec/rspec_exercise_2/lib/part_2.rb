

def palindrome?(string)

  reversed = ""


  (0..string.length-1).each do |i|
    temp_word = string[i]


    reversed = temp_word += reversed

  end

  if reversed == string
    return true
  end

  false
end


def substrings(string)

  new = []

  (0..string.length).each do |counter|
    temp_string = string[counter..-1]

    temp_string.each_char.with_index do |char, index|
      new << temp_string[0..index]
    end


  end

  return new
end


def palindrome_substrings(string)
  substrings(string).select { |el| palindrome?(el) && el.length > 1}
end