import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReservations } from '../redux/actions';

class Header extends Component {
  componentDidMount() {
    this.props.getReservations();
  }

  render() {
    return <div>Header</div>
  };
};

const mapStateToProps = state => {
  return {
    reserveData: state.reserveData
  }
}

export default connect(mapStateToProps, { getReservations })(Header);