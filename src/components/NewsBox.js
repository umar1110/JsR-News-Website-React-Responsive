import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';
import Loading from './Loading';
export default class NewsBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [], // Initialize with an empty array
            loading: true,
            articleStartIndex: 0,
            articleEndIndex: 0,
            totalArticles: 0,


        };
        this.name = "umar"
        this.newsPerPage = null;
        document.title = `JsR-NewS-${this.props.category}`
    }

    static defaultProps = {
        country: "in",
        articlesPerPage: 20,
        category: 'general',
    }
    static propTypes = {

        country: PropTypes.string,
        articlesPerPage: PropTypes.number,
        category: PropTypes.string,
    }


    async componentDidMount() {
        document.querySelector("#categories-menu").classList.add("hidden");
        this.setState({
            loading: true,
        })
        console.log(this.name)
        try {
            const response = await fetch(
                `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a37c4f460bd1445990794a8b1101c846`
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            this.setState({
                loading: true,
            })
            const data = await response.json();
            this.setState({
                articles: data.articles,
                loading: false,
                totalArticles: this.state.articles.length,
                articleEndIndex: this.newsPerPage - 1,

            });
        }
        catch (error) {
            console.error('Error fetching articles: ' + error);
            this.setState({
                loading: false,
            });
        }
    }

    handlePrevPageBtnClick = () => {
        let newStartIndex = this.state.articleStartIndex;
        let newEndIndex = this.state.articleEndIndex;

        if (newStartIndex > 0) {

            if (newEndIndex === this.state.totalArticles) {

                this.setState({
                    articleEndIndex: (this.state.articleStartIndex + this.newsPerPage - 1) - this.newsPerPage,
                    articleStartIndex: this.state.articleStartIndex - this.newsPerPage,
                })
            }
            else {
                this.setState({
                    articleStartIndex: this.state.articleStartIndex - this.newsPerPage,
                    articleEndIndex: this.state.articleEndIndex - this.newsPerPage,
                })
            }

        }





    }



    handleNextPageBtnClick = () => {


        if (this.state.articleEndIndex !== this.state.totalArticles - 1) {

            if (this.state.articleEndIndex + (this.newsPerPage - 1) < this.state.totalArticles) {
                this.setState({
                    articleStartIndex: this.state.articleEndIndex + 1,
                    articleEndIndex: this.state.articleEndIndex + this.newsPerPage,
                })
                console.log("end+20 < total")

            }
            else {

                this.setState({
                    articleStartIndex: this.state.articleEndIndex + 1,
                    articleEndIndex: this.state.totalArticles - 1,
                })
                console.log(" else of end+20 < total")

            }
        }
        console.log(this.state)

    }

    
    render() {
        this.newsPerPage = this.props.articlesPerPage;
        return (

            <>

                {

                    this.state.loading &&
                    <div className="loader  text-center bg-transparent flex justify-center items-center py-14">
                        <Loading />
                    </div>
                }


                <div className="news-box grid mx-auto  grid-cols-1 sml:grid-cols-2 lg:grid-cols-3 mt-10 md:w-[96%] w-[90%] gap-x-5 gap-y-5 ">

                    {
                        this.state.articles.slice(this.state.articleStartIndex, this.state.articleEndIndex + 1).map((e) => {

                            return <NewsItem key={this.state.articles.indexOf(e)} title={e.title ? e.title.length > 46 ? e.title.slice(0, 46) + "...." : e.title : "No title Available"} description={e.description ? e.description.length > 150 ? e.description.slice(0, 150) + "..." : e.description : "No discription available"} imageUrl={e.urlToImage ? e.urlToImage : "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Northern-Lights-Solar-Storm-0_1693745820565_1693745843636.jpg"} newsUrl={e.url} />
                        })

                    }
                </div>

                <div className="buttons flex justify-center space-x-2">
                    <button disabled={this.state.articleStartIndex === 0} className={`${this.state.articleStartIndex === 0 ? 'bg-gray-600' : 'bg-black'} p-3 my-2 text-white`} onClick={this.handlePrevPageBtnClick}>Previous</button>
                    <button disabled={this.state.articleEndIndex === this.state.totalArticles - 1} className={`${this.state.articleEndIndex === this.state.totalArticles - 1 ? "bg-gray-600" : "bg-black"} py-3 my-2 px-7 text-white`} onClick={this.handleNextPageBtnClick}>Next</button>
                </div>
            </>
        )
    }
}

NewsBox.defaultProps = {
    articlesPerPage: 20, // Default value
};