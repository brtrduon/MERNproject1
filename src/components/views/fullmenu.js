import React, { Component } from 'react';
import Sidebar from './sidebar';

class Fullmenu extends Component {
    render(){
        return (
            <div className='wrapper'>
                <div className='body'>
                    scan a page from a textbook and insert here
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Fullmenu;