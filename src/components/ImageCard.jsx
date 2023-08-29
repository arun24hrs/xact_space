import React from 'react'
import "../App.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'


const ImageCard = ({item}) => {
    
    const [likes, setLikes] = React.useState(0);
    const handleLikes = () => {
        setLikes((prev) => prev+1)
    }
  return (
    <div className='cardContainer'>
        <img src={item.download_url} alt={item.author} className='art'/>
        <p> <b>Author:</b> {item.author}</p>
        <div>
        <FontAwesomeIcon icon={faThumbsUp} className="likeBtn" onClick={handleLikes} />
        <span className='likeCount'>{likes!==0 ? likes : null}</span>
        </div>
    </div>
  )
}

export default ImageCard