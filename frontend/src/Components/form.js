import React from 'react';

export default class Form extends React.Component {
    state = {
        EventsName: '',
        EventsDate: '',
        Description: ' '
    }
    onSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form>
                <input placeholder='Events name'
                    value={this.state.EventsName}
                    onChange={e => this.setState({ EventsName: e.target.value })} />
                <br />
                <input placeholder='Event date'
                    value={this.state.EventsDate}
                    onChange={e => this.setState({ EventsDate: e.target.value })} />
                <br />

                <input placeholder='Description'
                    value={this.state.Description}
                    onChange={e => this.setState({ Description: e.target.value })} />
                <br />
                <button onClick={(e) => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }

}