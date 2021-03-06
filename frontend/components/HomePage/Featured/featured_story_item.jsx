import React from 'react';
import { Link } from 'react-router-dom'

const FeaturedStoryItem = ({story}) => {
    if (story) {
        const storyDate = new Date(story.publishDate);
        const storyDateString = storyDate.toDateString();
        return (
            <div className="featured-story-item">
                <div className="homepage-image">
                    <img src={story.imageUrl}/>
                </div>
                <Link to={`/stories/${story.id}`}>
                    <h3>{
                        story.titlePreview.length > 100 ? 
                            story.titlePreview.slice(0, 75) + "..." :
                        story.titlePreview                        
                        }</h3>
                </Link>
                <p>{story.bodyPreview.slice(0, 100) + "..."}</p>
                <div>
                    <Link 
                        to={`/users/${story.authorId}`}
                        className="author-link">
                        {story.authorName}
                    </Link>
                    <p>{storyDateString.slice(3)}</p>
                </div>
            </div>
        )} else {
            return <div></div>
        }
    }

export default FeaturedStoryItem