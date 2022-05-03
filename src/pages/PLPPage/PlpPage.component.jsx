import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProductListing from "../../components/productListing/productListing.component";
import ProductPage from "../productPage/productPage.component";
import { fetchProductsData } from "../../actions";

import "./PlpPage.styles.scss";

const PlpPage = (props) => {
  const dispatch = useDispatch();

  const productData = useSelector((state) => {
      return state.products.productsData;
    });

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [props, dispatch]);

  console.log(props);

  return (
    <div>
      <Route exact path={`${props.match.path}`} render={()=> <ProductListing productData={productData}></ProductListing>}></Route>
      <Route path={`${props.match.path}/:productId`} render={(routeProps)=> <ProductPage {...routeProps} productData={productData} {...props}></ProductPage>}></Route>      
    </div>
  );
};

export default withRouter(PlpPage);
