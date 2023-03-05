import './index.css'

const CommentItem = () => (
  <li className="complete-comment-list-container">
    <div className="dp-and-name-comment-section">
      <div className="dp-section">
        <p>R</p>
      </div>
      <div className="name-and-comment-sec">
        <p className="commenter-name-style">Richard Branson</p>
        <p className="commenter-comment-style">
          packages and web page editors now use Lorem Ipsum as their default //
          eslint-disable-next-line react/no-unescaped-entities model text, and a
          search for &apos;lorem ipsum&apos; will uncover many web sites still
          in their infancy.
        </p>
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

export default CommentItem
