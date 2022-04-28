import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

import Banner from '../../components/Banner/banner.component';
import Category from '../../components/Category/category.component';

const Home = () => {
    return (
        <Fragment>
            <Banner />
            <Category />
        </Fragment>
    );
}

export default Home;