class GuessingGame

  def initialize(min, max)
    @secret_num = random(min, max)
    @num_attempts = 0
    @game_over = false

  end

  def random(min, max)
    return rand(min..max)
  end

  def num_attempts
    @num_attempts
  end

  def game_over?
    @game_over
  end

  def check_num(num)

    if num == @secret_num
      @num_attempts += 1
      @game_over = true

    puts "you win"

    elsif num > @secret_num
          puts "too big"
          @num_attempts += 1

    else
         puts "too small"
         @num_attempts += 1


    end

    def ask_user
      puts "enter a number"

      message = gets.chomp.to_i
      p message

      check_num(message)


    end

    end







end
