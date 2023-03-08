import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
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
    event.preventDefault()
    const commenterName = document.getElementById('yourName').value
    const userComment = document.getElementById('commentTextArea').value
    const settingDateLessThan = new Date()
    const uniqueIdForPerComment = uuidv4()
    const backgroundColorIndex =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]

    const newComment = {
      id: uniqueIdForPerComment,
      name: commenterName,
      comment: userComment,
      dateTimeComment: settingDateLessThan,
      isLiked: false,
      backgroundColorIndex,
    }
    const {displayCommentsList} = this.state
    const joiningNewList = [...displayCommentsList, newComment]
    this.setState({displayCommentsList: joiningNewList})
    document.getElementById('yourName').value = ''
    document.getElementById('commentTextArea').value = ''
  }

  changeIsLikedStatus = uniqueId => {
    const {displayCommentsList} = this.state
    const changeIsLikedStatus = displayCommentsList.map(eachComment => {
      if (eachComment.id === uniqueId) {
        return {...eachComment, isLiked: !eachComment.isLiked}
      }
      return {...eachComment}
    })
    this.setState({displayCommentsList: changeIsLikedStatus})
  }

  deleteParticularComment = uniqueId => {
    const {displayCommentsList} = this.state
    const deleteThatId = displayCommentsList.filter(
      eachCom => eachCom.id !== uniqueId,
    )
    this.setState({displayCommentsList: deleteThatId})
  }

  render() {
    const {displayCommentsList} = this.state

    const lengthOfComments = displayCommentsList.length
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
            <p htmlFor="yourName" className="comment-section-paragraph">
              Say something about 4.0 Technologies
            </p>
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
            <span className="comment-count-number">{lengthOfComments}</span>{' '}
            Comments
          </p>
          <ul className="list-of-comments-container">
            {displayCommentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetail={eachComment}
                changeIsLikedStatus={this.changeIsLikedStatus}
                deleteParticularComment={this.deleteParticularComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
