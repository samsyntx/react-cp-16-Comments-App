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

const commentList = []

class Comments extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="comment-main-heading">Comments</h1>
        <div className="input-content-container-with-image">
          <img
            className="main-comment-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
          <div className="comment-input-section">
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
              className="input-style text-area-input"
              placeholder="Your comment"
            />
            <button className="add-comment-button" type="button">
              Add Comment
            </button>
          </div>
        </div>
        <hr className="horizontal-line-style" />
        <div className="show-comment-list-section">
          <p className="comment-count">
            <span className="comment-count-number">0</span> Comments
          </p>
          <ul className="list-of-comments-container">
            <CommentItem />
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
