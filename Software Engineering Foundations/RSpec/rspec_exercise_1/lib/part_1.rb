def average(num, numsec)
  (num + numsec) / 2.0

end


def average_array(array)

   array.sum / (array.length * 1.0)

end


def repeat(str, num)
   str * num
end

def yell(string)
  string.upcase + "!"
end


def alternating_case(word)
  alter_str = word.split(" ")
  new = []


  i = 0
  c = 1
  while i < alter_str.length


    new << alter_str[i].upcase

    new << alter_str[c].downcase

    i += 2
    c += 2

  end

  return  new.join(" ")
end




