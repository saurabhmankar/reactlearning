import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getData, getData1 } from './action';

class App extends React.Component {

  componentWillMount() {
    this.props.getData1();
  }

  componentDidMount() {
    // Action
    this.props.getData();
  }

  componentWillReceiveProps(nextProps) {
    console.log("list : ", nextProps.list)
  }

  render() {

    const listItems = this.props.list.map((n, index) =>
      <div key={index}>
        {n.name}
      </div>
    );

    const listItems1 = this.props.prelist.map((n, index) =>
    <div key={index}>
      {n.name} - {n.country}
    </div>
  );

    return <div className="App">
      <header className="App-header">
        <div>Pre:{listItems1}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <div>Post:{listItems}</div>
      </header>
    </div>
  }
}

// Used for selecting the part of the data from the store.
function mapStateToProps(state) {
  return {
    list: state.app.list,
    prelist: state.app.prelist
  };
}

// Connects a React component to a Redux store.
export default connect(mapStateToProps, {
  getData,
  getData1
})(App);

