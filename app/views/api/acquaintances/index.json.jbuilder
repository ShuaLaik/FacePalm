arr = Array.new()
@acquaintances.each do |aq|
    arr << aq.id
end

json.acqauintances arr