@notifs.each do |notification| 
    json.set! notification.id do 
        json.partial! 'show', notification: notification
    end
end