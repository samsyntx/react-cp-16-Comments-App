/* eslint-disable no-unused-vars */
import {Component} from 'react'
import './index.css'
// eslint-disable-next-line no-unused-vars
import {v4 as uuidv4} from 'uuid'
// eslint-disable-next-line no-unused-vars
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {displayCommentsList: []}

  addCommentButton = event => {
    const {displayCommentsList} = this.state
    event.preventDefault()
    const commenterName = document.getElementById('yourName').value
    const userComment = document.getElementById('commentTextArea').value
    const settingDateLessThan = formatDistanceToNow(new Date())
    const uniqueIdForPerComment = uuidv4()

    const Newcomment = {
      id: uniqueIdForPerComment,
      name: commenterName,
      comment: userComment,
      dateTimeComment: settingDateLessThan,
    }

    const joiningNewList = [...displayCommentsList, Newcomment]
    this.setState({displayCommentsList: joiningNewList})
  }

  render() {
    const {displayCommentsList} = this.state
    return (
      <div className="main-container">
        <h1 className="comment-main-heading">Comments</h1>
        <div className="input-content-container-with-image">
          <img
            className="main-comment-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
          <form className="comment-input-section">
            <label htmlFor="yourName" className="comment-section-paragraph">
              Say something about 4.0 Technologies
            </label>
            <input
              className="input-style"
              id="yourName"
              type="text"
              placeholder="Your Name"
            />
            <br />
            <textarea
              id="commentTextArea"
              className="input-style text-area-input"
              placeholder="Your comment"
            />
            <button
              onClick={this.addCommentButton}
              className="add-comment-button"
              type="submit"
            >
              Add Comment
            </button>
          </form>
        </div>
        <hr className="horizontal-line-style" />
        <div className="show-comment-list-section">
          <p className="comment-count">
            <span className="comment-count-number">0</span> Comments
          </p>
          <ul className="list-of-comments-container">
            {displayCommentsList.map(eachComment => (
              <CommentItem id={eachComment.id} commentDetail={eachComment} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
