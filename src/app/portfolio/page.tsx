import PortfolioCategory from "@/components/portfolio-item/PortfolioCategory";
import "./index.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-wrapper">
        <PortfolioCategory category="react" title="React"/>
        <PortfolioCategory category="javascript" title="JavaScript"/>
        <PortfolioCategory category="html" title="HTML"/>
        {/*  <div className="portfolio-category react-category">React</div> */}
        {/* {portfolioItemInfo.map((item) => {
          if (item.whatGroup === "react") {
            return (
              <PortfolioItem
                jsValue={item.jsValue}
                htmlValue={item.htmlValue}
                cssValue={item.cssValue}
                reactValue={item.reactValue}
                imgValue={item.imgValue}
                videoValue={item.videoValue}
                title={item.title}
                githubValue={item.githubValue}
              />
            );
          }
        })}
        <div className="portfolio-category javascript-category">JavaScript</div>
        {portfolioItemInfo.map((item) => {
          if (item.whatGroup === "javascript") {
            return (
              <PortfolioItem
                jsValue={item.jsValue}
                htmlValue={item.htmlValue}
                cssValue={item.cssValue}
                reactValue={item.reactValue}
                imgValue={item.imgValue}
                videoValue={item.videoValue}
                title={item.title}
                githubValue={item.githubValue}
              />
            );
          }
        })}
        <div className="portfolio-category html-category">HTML Layouts</div>
        {portfolioItemInfo.map((item) => {
          if (item.whatGroup === "html") {
            return (
              <PortfolioItem
                jsValue={item.jsValue}
                htmlValue={item.htmlValue}
                cssValue={item.cssValue}
                reactValue={item.reactValue}
                imgValue={item.imgValue}
                videoValue={item.videoValue}
                title={item.title}
                githubValue={item.githubValue}
              />
            );
          }
        })} */}
      </div>
    </section>
  );
};

export default Portfolio;
