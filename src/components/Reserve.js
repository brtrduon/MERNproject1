import React, { Component } from 'react';
import { connect } from 'react-redux';

import { reserve, getReservations, deleteReservation } from '../redux/actions';
import history from '../history';
import '../assets/index.css';

class Reserve extends Component {
  state = {
    first_name: '',
    last_name: '',
    phone_number: 0,
    phone_number_err: false,
    party_size: 0,
    party_size_err: false
  }

  componentDidMount() {
    this.props.getReservations();
  }

  renderForm = () => {
    return (
      <div id='form' className='form-group p-4 mt-5'>
        <form onSubmit={this.onFormSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input type='text' name='first_name' id="first_name" className='form-control' required onChange={this.onChange} />
          </div>

          <div className='form-group'>
            <label>Last Name</label>
            <input type='text' name='last_name' id="last_name" className='form-control' required onChange={this.onChange} />
          </div>

          <div className='form-group'>
            <label>Phone Number (e.g. 1234567890)</label>
            <input type='number' name='phone_number' id="phone_number" className='form-control' required onChange={this.onChange} />
          </div>
          <div className='form-group'>
            {this.state.phone_number_err && this.state.phone_number_err && <p className='alert alert-danger'>Invalid phone number</p>}
          </div>

          <div className='form-group'>
            <label>Party Size</label>
            <input type='number' name='party_size' id="party_size" className='form-control' required onChange={this.onChange} />
          </div>
          <div className='form-group'>
            {this.state.party_size_err && this.state.party_size_err && <p className='alert alert-danger'>Invalid party size</p>}
          </div>

            <button className='btn btn-primary' disabled={
              this.state.phone_number_err ||
              this.state.party_size_err ||
              !this.state.first_name||
              !this.state.last_name
            }>Reserve Now</button>
        </form>
      </div>
    )
  }

  renderReservationData = () => {
    const reserveData = this.props.reserveData;
    return (
      <div id='form' classname='p-4 mt-5'>
        <h3>Reservation on file</h3>
        <p>First Name: {reserveData['first_name']}</p>
        <p>Last Name: {reserveData['last_name']}</p>
        <p>Phone Number: {reserveData['phone_number']}</p>
        <p>Party size: {reserveData['party_size']}</p>
        <button onClick={this.deleteReservation}>Delete Reservation</button>
      </div>
    )
  }

  deleteReservation = () => {
    this.props.deleteReservation();
    history.push('/');
  }

  onChange = e => {
    if (e.target.name === 'phone_number') {
      if (e.target.value.length > 9 && !e.target.value.match('-')) {
        this.setState({
          phone_number_err: false
        })
      } else {
        this.setState({
          phone_number_err: true
        })
      }
    }

    if (e.target.name === 'party_size') {
      if (parseInt(e.target.value) > 0 && !e.target.value.match('-')) {
        this.setState({
          party_size_err: false
        })
      } else {
        this.setState({
          party_size_err: true
        })
      }
    }

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onFormSubmit = e => {
    e.preventDefault();
    const formValues = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_number: this.state.phone_number,
      party_size: this.state.party_size
    }
    this.props.reserve(formValues)
    history.push('/');
  }

  render() {
    return (
      <div id='reserve' className='p-5'>
        <div id='form' classname='p-4 mt-5'></div>
        {this.props.reserveData ? this.renderReservationData() : this.renderForm()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reserveData: state.reserveData
  }
};

export default connect(mapStateToProps, { reserve, getReservations, deleteReservation })(Reserve);