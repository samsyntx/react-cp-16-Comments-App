/* eslint-disable no-unused-vars */
import {Component} from 'react'
import './index.css'
// eslint-disable-next-line no-unused-vars
import {v4 as uuidv4} from 'uuid'
// eslint-disable-next-line no-unused-vars
import {formatDistanceToNow} from 'date-fns'

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
        <div className="input-content-container-with-image">
          <div className="comment-input-section">
            <p>Say something about 4.0 Technologies</p>
            <input type="text" placeholder="Your Name" />
            <br />
            <textarea placeholder="Your comment" />
            <button type="button">Add Comment</button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />
        <div className="show-comment-list-section">
          <div className="comment-count-section">
            <p>0</p>
            <p>Comments</p>
          </div>
          <ul className="list-of-comments-container">
            <li>Hello</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
