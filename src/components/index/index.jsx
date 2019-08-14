import React, { Component } from 'react';
import Footer from '../footer/footer.jsx'
import Swipe from '../swipe/swipe.jsx'
import MvList from '../mvList/mvList.jsx'

import './index.css'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="index">
                <Swipe></Swipe>
                <MvList></MvList>
                <Footer></Footer>
            </div>
        );
    }
}

export default index;