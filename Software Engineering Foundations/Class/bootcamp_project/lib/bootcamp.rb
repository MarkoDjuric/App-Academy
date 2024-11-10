class Bootcamp

  def initialize(name, slogan, student_capacity)
    @name = name
    @slogan = slogan
    @student_capacity = student_capacity
    @teachers = []
    @students = []
    @grades = Hash.new { |hash, k| hash[k] = [] }
  end

  def name
    @name
  end

  def slogan
    @slogan
  end

  def teachers
    @teachers
  end

  def students
    @students
  end

  def hire(string)
    @teachers << string
  end

  def enroll(student)

    if @students.length < @student_capacity
      @students << student
      return true
    else
      return false
    end

  end

  def enrolled?(student)
    @students.one? { |el| el == student }
  end

  def student_to_teacher_ratio
    ratio = @students.length / @teachers.length
    #ratio.round(1)
  end

  def add_grade(student, grade)


    if enrolled?(student)
      @grades[student]
      @grades[student] << grade
      return true
    else
      return false

    end


  end

  def num_grades(student)
    @grades[student].length
  end

  def average_grade(student)

    if  self.num_grades(student) > 0  && self.enrolled?(student)

      @grades[student].sum / @grades[student].length
    else

       nil
    end

  end


  end


