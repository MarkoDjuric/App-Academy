class Dog

  def initialize(name, breed, age, bark, favorite_foods)
    @name = name
    @breed = breed
    @age = age
    @bark = bark
    @favorite_foods = favorite_foods

  end


  def name
    @name

  end


  def breed
    @breed

  end


  def age
    @age

  end


  def age=(number)
    @age = number

  end

  def bark
    if @age <= 3
      return  @bark.downcase
    else
      return @bark.upcase
    end

  end


  def favorite_foods
    @favorite_foods

  end

  def favorite_food?(str)
    @favorite_foods.map(&:downcase).include?(str.downcase)



  end

end


dog_1 = Dog.new('Rex','pitbull', 23,'avav',['meat','crackers']  )

 dog_1.age = 34

dog_1.favorite_food?('meat')