import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from '../../shared/button/button';
import { getCategory } from "../../redux/category/actionCreator";

import "./category.styles.scss";
// import { withRouter } from "react-router-dom";

const Category = ({ history, match }) => {
    const dispatch = useDispatch();

    const categoryData = useSelector((state) => state.getCatDetail.category);

    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);

  return (
    <div className="category_section">
        {categoryData.map((category) =>
            category.enabled ? (
            <div className="category" key={category.key}>
                <div className="category_image">
                <img src={category.imageUrl} alt={category.name} />
                </div>

                <div className="category_container">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <Button
                    onClick={() => history.push(`${match.url}PLP/${category.id}`)}
                >
                    {category.name}
                </Button>
                </div>
            </div>
            ) : null
        )}
    </div>
  );
};

export default Category;
