import React from 'react';

export default class Form extends React.Component {
    state = {
        EventsName: '',
        EventsDate: '',
        Description: ''
    }
    constructor(props) {
        super(props);
        this.EventsNameRef = React.createRef();
        this.EventDateRef = React.createRef();
        this.DescriptionRef = React.createRef()
    };
    onSubmit = event => {
        event.preventDefault();
        console.log(this.EventsNameRef.current.value);
        console.log(this.EventDateRef.current.value);
        console.log(this.DescriptionRef.current.value)
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
                                <label className="font-weight-bold" htmlFor="event name">Events Name</label>

                                <input className='input form-control form-control-lg' placeholder='Events name'

                                    ref={this.EventsNameRef} />
                                <br />
                                <label className="font-weight-bold" htmlFor="event date">Events Date</label>
                                <input className='input form-control form-control-lg' placeholder='Event date'
                                    ref={this.EventDateRef} />
                                <br />
                                <label className="font-weight-bold" htmlFor="event description">Events Description</label>
                                <textarea className='textarea form-control form-control-lg' placeholder='Description'

                                    ref={this.DescriptionRef} rows="8"></textarea>
                                <br />
                                <button className="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }

}

