import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Preview1 from "../../assets/portfolio/project01/preview.gif";
import Preview2 from "../../assets/portfolio/project02/preview.gif";
import Preview3 from "../../assets/portfolio/project03/preview.png";
import Preview4 from "../../assets/portfolio/project04/preview.png";
import Preview5 from "../../assets/portfolio/project05/preview.gif";
import Preview6 from "../../assets/portfolio/project06/preview.gif";
import Preview7 from "../../assets/portfolio/project07/preview.gif";
import Preview8 from "../../assets/portfolio/project08/preview.gif";
import Preview9 from "../../assets/portfolio/project09/preview.png";
import Preview10 from "../../assets/portfolio/project10/preview.gif";
import Preview11 from "../../assets/portfolio/project11/preview.gif";
import Preview12 from "../../assets/portfolio/project12/preview.gif";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Preview1,
          title: "Interface with Ionic Framework",
          tag: "Mobile",
        },
        {
          id: "2",
          preview: Preview2,
          title: "Mobile App with React Native",
          tag: "Mobile",
        },
        {
          id: "3",
          preview: Preview3,
          title: "React Frontend with API",
          tag: "React",
        },
        {
          id: "4",
          preview: Preview4,
          title: "CRUD app with React",
          tag: "React",
        },
        {
          id: "5",
          preview: Preview5,
          title: "Full Stack Blog",
          tag: "FullStack",
        },
        {
          id: "6",
          preview: Preview6,
          title: "Whack a Mole Game",
          tag: "JavaScript",
        },
        {
          id: "7",
          preview: Preview7,
          title: "Todo List",
          tag: "JavaScript",
        },
        {
          id: "8",
          preview: Preview8,
          title: "Four in a Row Game",
          tag: "JavaScript",
        },
        {
          id: "9",
          preview: Preview9,
          title: "Meme Generator",
          tag: "React",
        },
        {
          id: "10",
          preview: Preview10,
          title: "Weather App",
          tag: "JavaScript",
        },
        {
          id: "11",
          preview: Preview11,
          title: "Book Rating App",
          tag: "FullStack",
        },
        {
          id: "12",
          preview: Preview12,
          title: "Contact Cards",
          tag: "FullStack",
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST",
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({
      filterResult: result,
      pickedFilter: target,
      pickedFilterDropdown: "NEWEST",
    });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if (event) {
      this.setState({ filterMenuActive: true });
    } else {
      this.setState({ filterMenuActive: false });
    }
  };

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result });
  };

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox
          preview={project.preview}
          key={project.id}
          title={project.title}
          tag={project.tag}
        />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if (this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("NEWEST")}
          >
            NEWEST
          </p>
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("OLDEST")}
          >
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="My Portfolio" />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul>
                  <li
                    className={
                      this.state.pickedFilter === "all"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("all")}
                  >
                    ALL
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "JavaScript"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("JavaScript")}
                  >
                    JavaScript
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "React"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("React")}
                  >
                    React
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "FullStack"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("FullStack")}
                  >
                    FullStack
                  </li>

                  <li
                    className={
                      this.state.pickedFilter === "Mobile"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("Mobile")}
                  >
                    Mobile
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div
                className="portfolio__filter"
                onMouseEnter={() => this.filterMenuHover(true)}
                onMouseLeave={() => this.filterMenuHover(false)}
              >
                <p className="font12">
                  {this.state.pickedFilterDropdown} FIRST
                </p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          <Masonry
            breakpointCols={portfolioBreakpoints}
            className="my-masonry-grid"
            columnClassName="mint__gallery"
          >
            {projectsRender}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default Portfolio;
