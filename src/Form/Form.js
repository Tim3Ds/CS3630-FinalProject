import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            value: 'someting in input box'
        }
        
    };

    onChange(e){
        this.setState({
            value: e.target.value
        });
    };

    onSubmit(e){
        this.props.submitAction(this.state)
        this.setState({
            value: e.target.value
        });
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.onChange} value={this.state.value}/>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}

export default Form;