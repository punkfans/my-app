import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Blah Blah',
            select: 'option1'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleSubmit (event) {
        console.log(this.state.name + ' selected ' + this.state.select);
        event.preventDefault();
    }

    handleOnChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        let options = ['option1', 'option2', 'option3'];
        return (
            <div>
                <label>
                    Name:
                    <input name="name" type="text" value={this.state.name} onChange={this.handleOnChange} />
                </label>
                <select name="select" value={this.state.select} onChange={this.handleOnChange}>
                    {options.map((option, index) => {
                        return <option key={option + index} value={option}>{option}</option>
                    })}
                </select>

                <button id="submitButton" onClick={this.handleSubmit}>Submit!</button>
            </div>
        );
    }
}

export default Form;