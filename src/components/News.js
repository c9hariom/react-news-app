import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';

export default class News extends Component {

  static defaultProps={
    country : 'us',
    category: 'general'
  }

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


  async updateNews(){
    this.setState({loading: true});
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.key+'&pageSize='+this.state.pageSize+'&page='+this.state.pageNo+'&country='+this.props.country+'&category='+this.props.category;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading: false});
    this.setState({articles : parsedData.articles});
    this.setState({totalPage: Math.ceil(parsedData.totalResults/this.state.pageSize)}); 
  }

  async componentDidMount(){
   this.updateNews();
  }

  handleClick = async (para)=>{
    if(para === 'prev' && this.state.pageNo>1){
      this.setState({pageNo: this.state.pageNo-1},()=>{this.updateNews()});
    } else if (para === 'next' && this.state.pageNo < this.state.totalPage){
      this.setState({pageNo: this.state.pageNo+1}, ()=>{ this.updateNews()});
    } else if(para !=='prev' && para!=='next') {
      this.setState({pageNo:para}, ()=>{this.updateNews()});
    }
  }

  render () {
    return (
      <div className='container'>
        <h3 className='text-center my-2'>{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1).toLowerCase()} - Top Headlines</h3>
        {this.state.loading?<Loading/>:""}
        <div className='row'>
          {!this.state.loading && this.state.articles && this.state.articles.map(article => {
                if(article.description && article.title && article.urlToImage){
                    return (
                        <div className='col-md-4 my-3' key={article['url']}>
                            <NewsItem
                            title={article.title?article['title'].slice(0,45)+"...":""}
                            description={article.description?article['description'].slice(0,60)+"...":""}
                            imageUrl={article['urlToImage']}
                            newsUrl={article.url} date={article.publishedAt} author={article.author}
                            newsAuthor={article.source.name}
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
            <button className="btn my-2 btn btn-primary" type="button" disabled={this.state.pageNo===1?true:false} onClick={()=>this.handleClick('prev')}>&#8592; Previous</button>
            {
              this.state.totalPage>1 && Array.from({length: this.state.totalPage},(v,i)=>{
                return (
                  <button disabled={this.state.pageNo===i+1?true:false} id={i+1} key={i+1} className="btn btn-primary my-2 mx-2" type="button" onClick={()=>this.handleClick(i+1)}>{i+1}</button>
                )
              })
            }
            <button className="btn btn-primary my-2 mx-2" type="button" disabled={this.state.pageNo===this.state.totalPage?true:false} onClick={()=>this.handleClick('next')}>Next &rarr;</button>
</div>
        </div>
    </div>
    )
  }
}
