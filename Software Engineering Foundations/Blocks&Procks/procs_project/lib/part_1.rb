def my_map(array, &prc)

  new_array = []

  array.each do |el|

    new_array << prc.call(el)
  end

  new_array
end

def my_select(array, &prc)
  new_array = []

  array.each do |el|
    if prc.call(el)
      new_array << el
    end
  end
  new_array

end

def my_count(array, &prc)
  counter = 0

  array.each do |el|
    if prc.call(el)
      counter += 1
    end
  end
  counter
end

def my_any?(array, &prc)
  array.each do |el|
    if prc.call(el) == true
      return true
    end
  end

  false
end


def my_all?(array, &prc)
  array.each do |el|
    if prc.call(el) == false
      return false
    end
  end
  true
end


def my_none?(array, &prc)
  array.each do |el|
    if prc.call(el) == true
      return false
    end
  end

  true
end


def reverser(string, &prc)
  prc.call(string.reverse)
end

def word_changer(string, &prc)
  new_str = []

  string.split(" ").each do |char|

    new_str << prc.call(char)

  end

  new_str.join(" ")
end


def greater_proc_value(number, prc_1, prc_2)

  first = prc_1.call(number)
  second = prc_2.call(number)

  if first > second
     return first
  else
     return  second
  end
end

def and_selector(array,  prc_1, prc_2)
  new_array = []

  array.each do |el|
    if prc_1.call(el) == true && prc_2.call(el) == true
       new_array << el
    end
  end

  new_array
end


def alternating_mapper(array, prc_one, prc_two)
  maper = []

  array.each_with_index do |el, idx|
    if idx.even?
      maper << prc_one.call(el)
    else
      maper << prc_two.call(el)
    end
  end

  maper
end

