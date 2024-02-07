import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor () {
    super();
    this.key='7ff22dbf91854124aaed0fd4670b0977';
    this.state = {
      articles: this.articles,
      loading: false
    }
  }


  async componentDidMount(){
    console.log('cdm')
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.key;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles);
    this.setState({articles : parsedData.articles})
  }

  render () {
    return (
      <div className='container'>
        <h3>c9News - Top Headlines</h3>
        <div className='row'>
          {this.state.articles && this.state.articles.map(article => {
                if(article.description && article.title && article.urlToImage){
                    return (
                        <div className='col-md-4 my-3' key={article['url']}>
                            <NewsItem
                            title={article.title?article['title'].slice(0,45)+"...":""}
                            description={article.description?article['description'].slice(0,60)+"...":""}
                            imageUrl={article['urlToImage']}
                            newsUrl={article.url}
                            />
                        </div>
                        )
                    }
                }
            )
          }
        </div>
      </div>
    )
  }
}
