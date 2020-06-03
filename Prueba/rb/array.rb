class Max

  def sol(arr)

    max = arr[0]
    min = arr[0]

    for x in (0..4)
      
      if arr[x] > max
        max = arr[x]
      end

    end
    print max
  end


end

myArray = [13,2,4,35,35]

obj = Max.new
obj.sol(myArray)