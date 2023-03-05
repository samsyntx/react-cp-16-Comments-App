import './index.css'

const CommentItem = props => {
  const {commentDetail, changeIsLikedStatus} = props
  const {id, name, comment, dateTimeComment, isLiked} = commentDetail
  console.log(isLiked)
  const likedButtonClicked = () => {
    changeIsLikedStatus(id)
  }

  return (
    <li className="complete-comment-list-container">
      <div className="dp-and-name-comment-section">
        <div className="dp-section">
          <p>{name[0]}</p>
        </div>
        <div className="name-and-comment-sec">
          <div className="username-and-date-time">
            <p className="commenter-name-style">{name}</p>
            <p className="commenter-date-time-less">{dateTimeComment} ago</p>
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
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like unlike"
          />
          <p className="like-text-nochange">Like</p>
        </button>
        <button type="button" className="common-button">
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
