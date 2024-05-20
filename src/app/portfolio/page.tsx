// import PortfolioCategory from "@/components/portfolio-item/PortfolioCategory";
// import "./index.css";

// const Portfolio = async () => {
//   // await new Promise((resolve) => setTimeout(resolve, 3000));
//   return (
//     <section className="portfolio">
//       <div className="portfolio-wrapper">
//         <PortfolioCategory category="react" title="React" />
//         <PortfolioCategory category="javascript" title="JavaScript" />
//         <PortfolioCategory category="html" title="HTML" />
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
"use client";
import { useState, useEffect } from "react";
import PortfolioCategory from "@/components/portfolio-item/PortfolioCategory";
import Loading from "./loading";
import "./index.css";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="portfolio">
      <div className="portfolio-wrapper">
        <PortfolioCategory category="react" title="React" />
        <PortfolioCategory category="javascript" title="JavaScript" />
        <PortfolioCategory category="html" title="HTML" />
      </div>
    </section>
  );
};

export default Portfolio;
