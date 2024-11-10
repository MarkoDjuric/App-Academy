# Write a method, compress_str(str), that accepts a string as an arg.
# The method should return a new str where streaks of consecutive characters are compressed.
# For example "aaabbc" is compressed to "3a2bc".


def compress_str(str)

  arr = str.split('')
  niz = []
  counter = 1

  (0..arr.length).each do |i|
    if arr[i] == arr[i+1]
      counter += 1

    elsif arr[i] != arr[i+1] && arr[i] == arr[i-1]
      niz << counter
      niz << arr[i]
      counter = 1
    elsif arr[i] == arr[i+1] && arr[i] != arr[i-1]
      niz << counter
      niz << arr[i-1]
    else
      niz << arr[i]
    end
  end
  return niz.join('')

end

p compress_str("aaabbc")        # => "3a2bc"
p compress_str("xxyyyyzz")      # => "2x4y2z"
p compress_str("qqqqq")         # => "5q"
p compress_str("mississippi")   # => "mi2si2si2pi"
