import React, { Component } from 'react';
import { connect } from 'react-redux';

import { reserve } from '../redux/actions';

class Reserve extends Component {
  state = {
    first_name: '',
    last_name: '',
    phone_number: 0,
    phone_number_err: false,
    party_size: 0,
    party_size_err: false
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

  onSubmit = e => {
    e.preventDefault();

    this.props.reserve(
      this.state.first_name,
      this.state.last_name,
      this.state.phone_number,
      this.state.party_size
    )
  }

  render() {
    return (
      <div className='form-group'>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input type='text' name='first_name' className='form-control' required onChange={this.onChange} />
          </div>

          <div className='form-group'>
            <label>Last Name</label>
            <input type='text' name='last_name' className='form-control' required onChange={this.onChange} />
          </div>

          <div className='form-group'>
            <label>Phone Number (e.g. 1234567890)</label>
            <input type='number' name='phone_number' className='form-control' required onChange={this.onChange} />
          </div>
          <div className='form-group'>
            {this.state.phone_number_err && this.state.phone_number_err && <p className='alert alert-danger'>Invalid phone number</p>}
          </div>

          <div className='form-group'>
            <label>Party Size</label>
            <input type='number' name='party_size' className='form-control' required onChange={this.onChange} />
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
}

export default connect(null, { reserve })(Reserve);