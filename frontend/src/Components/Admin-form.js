import React from 'react';

export default class Form extends React.Component {
    state = {
        EventsName: '',
        EventsDate: '',
        Description: ' '
    }
    onSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <div className='form-group'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <br />
                                <br />
                                <label className="font-weight-bold" for="event name">Events Name</label>

                                <input className='input form-control form-control-lg' placeholder='Events name'
                                    value={this.state.EventsName}
                                    onChange={e => this.setState({ EventsName: e.target.value })} />
                                <br />
                                <label className="font-weight-bold" for="event date">Events Date</label>
                                <input className='input form-control form-control-lg' placeholder='Event date'
                                    value={this.state.EventsDate}
                                    onChange={e => this.setState({ EventsDate: e.target.value })} />
                                <br />
                                <label className="font-weight-bold" for="event description">Events Description</label>
                                <textarea className='textarea form-control form-control-lg' placeholder='Description'

                                    value={this.state.Description}
                                    onChange={e => this.setState({ Description: e.target.value })} rows="8"></textarea>
                                <br />
                                <button class="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }

}

