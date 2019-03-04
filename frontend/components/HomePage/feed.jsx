import React from 'react';
import FeedItem from './feed_item'

class Feed extends React.Component {
    
    constructor(props) {
        super(props);
        this.renderStoriesList = this.renderStoriesList.bind(this)
    }

    componentDidMount() {
        this.props.fetchStories()
    }

    renderStoriesList() {
        /**
        * Randomly shuffle an array
        * https://stackoverflow.com/a/2450976/1293256
        * @param  {Array} array The array to shuffle
        * @return {String}      The first item in the shuffled array
        */
        var shuffle = function (array) {
    
            var currentIndex = array.length;
            var temporaryValue, randomIndex;
    
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
    
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
    
        return array;
    
        };
        const storiesList = Object.values(this.props.stories).map( story => <FeedItem story={story}/>)
        return shuffle(storiesList)

    }

    render() {
        if (!this.props.stories) {
            return <div></div>
        } else {
            return (
                <div className="home-page-section">
                    {this.renderStoriesList()}
                </div>
            ) 
        }
    }
}
    

export default Feed