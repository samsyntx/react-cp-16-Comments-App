import './index.css'

const CommentItem = () => (
  <li className="complete-comment-list-container">
    <div className="dp-and-name-comment-section">
      <p>R</p>
      <div className="name-and-comment-sec">
        <h1>Richard Branson</h1>
        <p>
          packages and web page editors now use Lorem Ipsum as their default //
          eslint-disable-next-line react/no-unescaped-entities model text, and a
          search for &apos;lorem ipsum&apos; will uncover many web sites still
          in their infancy.
        </p>
      </div>
    </div>
    <div className="like-and-delete-button">
      <button type="button" className="like-unlike">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
          alt="like unlike"
        />
      </button>
      <button type="button" className="like-unlike">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </button>
    </div>
    <hr className="horizontal-line-style" />
  </li>
)

export default CommentItem
