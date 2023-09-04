import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { Component } from 'react'
import NewsBox from './components/NewsBox';
import Footer from './components/Footer';
import SmCategoriesMenu from './components/SmCategoriesMenu';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: "light",
    };
  }

  changeMode = () => {
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark",
      });
      console.log(this.state.mode)
    }
    else {
      this.setState({
        mode: "light",
      })
      console.log(this.state.mode)

    }
    document.getElementById("mode-text").textContent = this.state.mode === "dark" ? "Light Mode" : "Dark Mode";
    document.body.style.backgroundColor = `${this.state.mode === "dark" ? "black" : "white"}`

  }

  articlesQuantity = 12;
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar mode={this.state.mode} changeMode={this.changeMode} />
          <Routes>
            <Route path='/' element={<NewsBox  key={"general"} articlesPerPage={this.articlesQuantity} country={"in"} category={'general'} />} />
            <Route path='/general' element={<NewsBox  key={"general2"} articlesPerPage={this.articlesQuantity} country={"in"} category={'general'} />} />
            <Route path='/entertainment' element={<NewsBox  key={"entertainment"} articlesPerPage={this.articlesQuantity} country={"in"} category={'entertainment'} />} />
            <Route path='/science' element={<NewsBox  key={"science"} articlesPerPage={this.articlesQuantity} country={"in"} category={'science'} />} />
            <Route path='/sports' element={<NewsBox  key={"sports"} articlesPerPage={this.articlesQuantity} country={"in"} category={'sports'} />} />
            <Route path='/technology' element={<NewsBox  key={"technology"} articlesPerPage={this.articlesQuantity} country={"in"} category={'technology'} />} />

            <Route path='/business' element={<NewsBox  key={"business"} articlesPerPage={this.articlesQuantity} country={"in"} category={'business'} />} /><Route path='/health' element={<NewsBox  articlesPerPage={this.articlesQuantity} country={"in"} category={'health'} />} />
          </Routes>

          <SmCategoriesMenu mode={this.state.mode} />

        </BrowserRouter>

        <Footer mode={this.state.mode} />
      </>


    )
  }
}

