@bookmarks.each do |bookmark|
    json.set! bookmark.id do
        json.extract! bookmark, :id, :user_id, :story_id
    end
end