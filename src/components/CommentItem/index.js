import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetail, changeIsLikedStatus, deleteParticularComment} = props
  const {
    id,
    name,
    comment,
    dateTimeComment,
    isLiked,
    backgroundColorIndex,
  } = commentDetail

  const likedButtonClicked = () => {
    changeIsLikedStatus(id)
  }

  const deleteButtonClicked = () => {
    deleteParticularComment(id)
  }
  //   If Liked then this CSS will Apply
  const likeStyle = isLiked
    ? [
        'liked-color',
        'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png',
      ]
    : [
        'no-liked-style',
        'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png',
      ]

  return (
    <li className="complete-comment-list-container">
      <div className="dp-and-name-comment-section">
        <div className={`dp-section ${backgroundColorIndex}`}>
          <p>{name[0]}</p>
        </div>
        <div className="name-and-comment-sec">
          <div className="username-and-date-time">
            <p className="commenter-name-style">{name}</p>
            <p className="commenter-date-time-less">
              {formatDistanceToNow(dateTimeComment)} ago
            </p>
          </div>
          <p className="commenter-comment-style">{comment}</p>
        </div>
      </div>
      <div className="like-and-delete-button">
        <button
          onClick={likedButtonClicked}
          type="button"
          className="common-button like-unlike-button"
        >
          <img
            className="image-width-for-like-and-delete"
            src={likeStyle[1]}
            alt="like unlike"
          />
          <p className={`like-text-common ${likeStyle[0]}`}>Like</p>
        </button>
        <button
          data-testid="delete"
          type="button"
          className="common-button"
          onClick={deleteButtonClicked}
        >
          <img
            className="image-width-for-like-and-delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="horizontal-line-style" />
    </li>
  )
}

export default CommentItem
