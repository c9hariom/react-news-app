import React, { Component } from 'react'

export default class NewsItem extends Component {
  render () {
    
    let {title,description,imageUrl,newsUrl,date,author,newsAuthor} = this.props;

    return (
      <div className=''>
        <div className='card position-relative' >
          <span className="badge bg-danger position-absolute translate-right top-0 end-0">{this.props.newsAuthor}</span>
          <img src={this.props.imageUrl} className='card-img-top' alt='' />
          <div className='card-body'>
            <h5 className='card-title'>{this.props.title}</h5>
            <p className='card-text'>
              {this.props.description}
            </p>
            <p className='card-text'>
              <b>By</b> {this.props.author && !this.props.author.includes('<')?this.props.author:'unknown'} <b>On</b> {new Date(this.props.date).toLocaleTimeString()}
            </p>
            <a href={this.props.newsUrl} className='btn btn-sm btn-primary'>
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}
