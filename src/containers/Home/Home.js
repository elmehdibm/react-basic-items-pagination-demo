import React, { Component } from 'react';
import { sayHello } from '../../actions/greeting';
import { connect } from 'react-redux';
import "./styles.scss";

class Home extends Component {
  componentWillMount(){
    const { dispatchHello } = this.props;
    dispatchHello("Hello React World !");
  }
  render() {
    const {children} = this.props;
    return (
      <div className="home_container"> 
        {children}
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  "dispatchHello": sayHello
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
