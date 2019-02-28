import { RECEIVE_STORIES, RECEIVE_STORY, REMOVE_STORY } from "../actions/story_actions";


export const storiesReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_STORIES:
            return action.stories;
        case RECEIVE_STORY:
            return merge({}, state, {[action.story.id]: action.story});
        case REMOVE_STORY:
            let newState = state;
            delete newState[action.storyId];
            return newState
        default:
            return state;
    }
}