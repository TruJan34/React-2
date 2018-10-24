import React, {Component} from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.id = 0
        this.initialState = {
            name: '',
            job: '',
        };
        this.state = this.initialState;
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }
    submitForm = () => {
        let {name,job} = this.state;
        let id = this.id++;
        this.props.handleSubmit({name,job,id});
        this.setState(this.initialState);
    }
    render() {
        const {name, job} = this.state;
        return (
            <form>
                <label>Name</label>
                <input type="text" name="name" 
                    value={name} onChange={this.handleChange}/>
                
                <label>Job</label>
                <input type="text" name="job" 
                    value={job} onChange={this.handleChange}/>
                
                <input type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
    }
}
export default Form;