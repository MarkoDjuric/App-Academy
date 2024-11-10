
def hipsterfy(word)

  reversed = word.reverse.split("")
  new = []
  vowels ='aeiou'


  reversed.each.with_index do |char, i|

    if vowels.include?(char)
      reversed.delete_at(i)
      return new.join("") << reversed.join("").reverse
    end

  end

  return word

  return new.reverse


end


def vowel_counts(string)
  counter = Hash.new(0)
  vowels ='aeiou'

  string.downcase.each_char do |char|
    if vowels.include?(char)
      counter[char]+=1
    end

  end

  return counter
end


def caesar_cipher(message, number)
  new_str = ""

  alphabet = ("a".."z").to_a


  message.each_char do |char|
    if alphabet.include?(char)
      old_idx = alphabet.index(char)
      new_idx = old_idx + number

     new_str += alphabet[new_idx % 26]
    else
      new_str += char
    end
  end
   new_str
end