import './index.css'

const CommentItem = props => {
  const {commentDetail} = props
  const {name, comment, dateTimeComment} = commentDetail
  return (
    <li className="complete-comment-list-container">
      <div className="dp-and-name-comment-section">
        <div className="dp-section">
          <p>{name[0]}</p>
        </div>
        <div className="name-and-comment-sec">
          <div className="username-and-date-time">
            <p className="commenter-name-style">{name}</p>
            <p className="commenter-date-time-less">{dateTimeComment}</p>
          </div>
          <p className="commenter-comment-style">{comment}</p>
        </div>
      </div>
      <div className="like-and-delete-button">
        <button type="button" className="common-button like-unlike-button">
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
