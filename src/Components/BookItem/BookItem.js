/**
 * Created by ansarimofid on 03/03/18.
 */

import React from 'react'

class BookItem extends React.Component {

  constructor(props) {
    super(props);
  }

  handleShelfChange(e) {
    let shelf = e.target.value;
    this.props.bookData.shelf = shelf;
    this.props.handleShelfChange(this.props.bookData, shelf);
  }

  render() {
    let shelf = this.props.bookData.shelf ? this.props.bookData.shelf : 'none';
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.bookData.imageLinks ? this.props.bookData.imageLinks.thumbnail : ' '})`
            }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.handleShelfChange.bind(this)} value={shelf}>
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.bookData.title}</div>
          <div className="book-authors">
            {
              this.props.bookData.authors ? this.props.bookData.authors.join(',') : 'Unknown Author'
            }
          </div>
        </div>
      </li>
    )
  }
}
;

export default BookItem