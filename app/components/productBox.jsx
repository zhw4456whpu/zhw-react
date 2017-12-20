var React = require('react');
//旧版本的写法，会有警告
/*var ProductBox = React.createClass({
    render: function() {
        return( 
            <div className = "productBox" >
                Hello World!
            </div>
        );
    }
});*/
//新版本的写法 推荐
/*class ProductBox extends React.Component {
    render() {
        return( 
            <div>Hello World!</div>
        )
    }
}
module.exports = ProductBox;*/

import {Component} from 'react';
class Hello extends Component {
    render(){
        var who = 'World';
        return(<div>My "'Hello {who}'"<myList /></div>)
    }
}
module.exports = Hello;