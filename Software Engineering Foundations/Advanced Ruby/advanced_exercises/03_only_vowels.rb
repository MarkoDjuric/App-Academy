  # Write a method, `only_vowels?(str)`, that accepts a string as an arg.
  # The method should return true if the string contains only vowels.
  # The method should return false otherwise.


  def only_vowels?(string)

    string.split('').all? do |word|                        # moramo pretvoriti string u niz da bi primenili metod 'all?'
      word==='a'||word==='e'||word==='i'||word==='o'||word==='u'

    end

  end


p only_vowels?("aaoeee")  # => true
p only_vowels?("iou")     # => true
p only_vowels?("cat")     # => false
p only_vowels?("over")    # => false


