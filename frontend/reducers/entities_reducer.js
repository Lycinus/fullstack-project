import { combineReducers } from 'redux';
import usersReducer from './users_reducer'
import storiesReducer from './stories_reducer';
import commentsReducer from './comments_reducer';
import bookmarksReducer from './bookmarks_reducer';
import likesReducer from './likes_reducer';
import followsReducer from './follows_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    stories: storiesReducer,
    comments: commentsReducer,
    bookmarks: bookmarksReducer,
    likes: likesReducer,
    follows: followsReducer,
    search: searchReducer
})

export default entitiesReducer