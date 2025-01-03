import Card from "../utility/Card";
import About from "../pages/about/About";
import { categoriesBlog } from "../data";
import { useParams } from "react-router-dom";
import PageNotFound from "../pages/notfound/PageNotFound";

const CategoriesBlog = () => {
  const { category } = useParams();

  const categoryData = categoriesBlog.find(
    (item) => item.link == `/${category}`
  );

  if (!categoryData) {
    return <PageNotFound />;
  }

  return (
    <div className="blogpage">
      <About title={categoryData.name} des={categoryData.para} />

      <div className="blogpage-section">
        <Card
          img={categoryData.card.image}
          date={categoryData.card.date}
          heading={categoryData.card.title}
          para={categoryData.card.des}
          linkName={categoryData.card.linkName}
        />
      </div>
    </div>
  );
};

export default CategoriesBlog;
