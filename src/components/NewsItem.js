import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <>

                <div className="news-item cursor-pointer relative overflow-hidden h-[400px] border-2 border-gray-600 bg-gray-300 rounded-[10px] ">
                    <div className="image h-[50%]">
                        <img src={imageUrl} alt="Noo" className="news-img w-full h-full " />
                    </div>


                    <div className="news-info h-[50%] bg-gray[100] px-3  
                    ">
                        <h3 className="news-title font-bold text-center text-2xl pb-1">
                            {title}
                        </h3>
                        <p className="description pb-3">{description}</p>

                    </div>
                    <a href={newsUrl}>

                        <button className="button absolute right-0 mr-[1px] bottom-0 bg-black text-white py-2 px-[3vw] rounded-md " >
                            Read More
                        </button>
                    </a>
                </div>

            </>
        )
    }
}
