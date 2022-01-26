class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

      def parse_time(t, type)
        time = t.to_s
        y = time[0...4]
        case time[5..6]
            when '01'
                m = "January"
            when '02'
                m = "February"
            when '03'
                m = "March"
            when '04'
                m = "April"
            when '05'
                m = "May"
            when '06'
                m = "June"
            when '07'
                m = "July"
            when '08'
                m = "August"
            when '09'
                m = "September"
            when '10'
                m = "October"
            when '11'
                m = "November"
            when '12'
                m = "December"
        end
        if time[8..9].to_i < 10
            d = time[9]
        else
            d = time[8..9]
        end
        if type == 1
            if time[11..12].to_i > 12
                h = time[11..12].to_i - 12
                am = "pm"
            elsif time[11..12].to_i == 0
                h = "12"
                am = "am"
            elsif time[11] == '0'
                h = time[12]
                am = "am"
            end
            min = time[14..15]
            return "#{m} #{d}, #{y} #{h}:#{min}#{am}"
        else
            return "#{m} #{d}, #{y}"
        end
    end
end
