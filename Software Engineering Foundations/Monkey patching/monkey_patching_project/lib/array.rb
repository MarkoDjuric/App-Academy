# Monkey-Patch Ruby's existing Array class to add your own custom methods
class Array

  def span

    if self.length > 0
      return self.max - self.min
    end

    nil
  end

end

class Array

  def average

    if self.length > 0
      return self.sum / (self.length * 1.0)
    end

    nil
  end

end


class Array
  def median
    self.each_with_index do |el, idx|

      if self.length.odd?
        idx = self%self.length
        return  self[idx]
      elsif self.length.even?
        return self[self.length/2]
      else
        return false
      end
    end
  end
end