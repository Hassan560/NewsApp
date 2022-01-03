import React, { Component } from "react";
import { Container,CircularProgress } from "@mui/material";
import Newsitems from "./Newsitems";

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: <CircularProgress/>,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=dd5def165fdb46c398a5d946efc326dc";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      loading: <CircularProgress/>,
      articles: parsedData.articles,
    });
  }


  render() {
    return (
      <div style={{ margin: "30px" }}>
        <Container>
          <h1 style={{ textAlign: "center" }}>News - Top Headlines</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {this.state.articles.map((elem, id) => {
              return (
                <div style={{ marginTop: "10px" }} key={id}>
                  <Newsitems
                    title={elem.title ? elem.title.slice(0, 45) : ""}
                    description={
                      elem.description ? elem.description.slice(0, 88) : ""
                    }
                    urlImage={elem.urlToImage}
                    url={elem.url}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default News;
