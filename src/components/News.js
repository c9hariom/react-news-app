import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor () {
    super();
    this.key='7ff22dbf91854124aaed0fd4670b0977';
    this.state = {
      articles: this.articles,
      loading: false,
      pageNo:1,
      totalPage:1,
      pageSize:9
    }
  }


  async componentDidMount(){
    //console.log('cdm')
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.key+'&pageSize='+this.state.pageSize+'&page=1';
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData.articles,typeof(parsedData.totalResults));
    this.setState({articles : parsedData.articles});
    this.setState({totalPage: Math.ceil(parsedData.totalResults/this.state.pageSize)});
    console.log(parsedData,this.state.totalPage);
  }

  handleClick = async (para)=>{
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.key+'&pageSize='+this.state.pageSize+'&page='+para;
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData.articles,typeof(parsedData.totalResults));
    this.setState({articles : parsedData.articles});
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
        <div className="container">
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary my-2 mx-2" type="button" onClick={()=>this.handleClick(1)}>&#8592; Previous</button>
            {
              this.state.totalPage>1 && Array.from({length: this.state.totalPage},(v,i)=>{
                return (
                  <button className="btn btn-primary my-2 mx-2" type="button" onClick={()=>this.handleClick(i+1)}>{i+1}</button>
                )
              })
            }
            <button className="btn btn-primary my-2 mx-2" type="button" onClick={()=>this.handleClick(this.state.totalPage)}>Next &rarr;</button>
</div>
        </div>
    </div>
    )
  }
}
