import React from 'react'
import history from '../../history'

class Reserve extends React.Component {
    constructor() {
        super();
        this.state = {
            fireRedirect: false,
            first_name: '',
            last_name: '',
            phone_number: '',
            party_size: '',
            date: '',
            time: '',
        }
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            fireRedirect: true,
            first_name: '',
            last_name: '',
            phone_number: '',
            party_size: '',
            date: '',
            time: '',
        });
        history.push('/confirmation')
    };

    render() {
        return (
            <div className='body'>
                <p className='title'>RESERVATIONS</p>
                <p>
                    *You may also place a reservation via telephone.
                </p>
                <p>
                    Our dining hall sits up to 100 guests at any given time. We take our seating accomodations very seriously and, thus, we only allow guest reservations a 10-minute gap before and after their reservation time. A reservation is considered to be forfeited if no seats are claimed after 10 minutes from the reservation time.
                </p>
                <form className='form'>
                    <label>First Name</label>
                    <input className='form-control' placeholder='First Name' value={this.state.first_name} onChange={e => this.setState({ first_name: e.target.value })} />
                    <br></br>
                    <label>Last Name</label>
                    <input className='form-control' placeholder='Last Name' value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })} />
                    <br></br>
                    <label>Phone Number</label>
                    <input className='form-control' placeholder='Phone Number' value={this.state.phone_number} onChange={e => this.setState({ phone_number: e.target.value })} />
                    <br></br>
                    <label>Party Size</label>
                    <input className='form-control' placeholder='Party Size' type='number' value={this.state.party_size} onChange={e => this.setState({ party_size: e.target.value })} />
                    <br></br>
                    <label>Date</label>
                    <input className='form-control' placeholder='Date' type='date' value={this.state.date} onChange={e => this.setState({ date: e.target.value })} />
                    <br></br>
                    <label>Time</label>
                    <input className='form-control' placeholder='Time' type='time' value={this.state.time} onChange={e => this.setState({ time: e.target.value })} />
                    <br></br>
                    <button onClick={e => this.onSubmit(e)}>Place Reservation</button>
                </form>
            </div>
        );
    }
}

export default Reserve