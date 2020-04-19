import React, { Component, Fragment } from 'react';



export class Modal extends Component {
    state = {
        showPopup: false
    }

    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }



    render(props) {
        const { showPopup } = this.state;
        const { title, artist, className, onClick } = this.props;

        let text = 'Er du sikker på at du vil slette';
        let info = `${title} med ${artist}?`;

        return (
            <Fragment>
                <button className={className} onClick={this.togglePopup}>Slet</button>
                {showPopup ?
                    <div className='popup'>
                        <div className='popup_inner'>
                            <p>{text}</p>
                            <h1>{info}</h1>
                            <div className="modal-footer">
                                <button className="btn-primary" onClick={this.togglePopup}>Fortryd</button>
                                <button
                                    onClick={onClick}
                                    className="btn-danger">Ok</button>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </Fragment>
        );
    }
}