import { portfolioItemInfo } from "@/portfolio-data/data";
import { PortfolioItem } from "./PortfolioItem";

const PortfolioCategory = ({ category, title }: any) => {
  return (
    <>
      <div className={`portfolio-category ${category}-category`}>{title}</div>
      {portfolioItemInfo
        .filter((item) => item.whatGroup === category)
        .map((item) => (
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
        ))}
    </>
  );
};

export default PortfolioCategory;
