    /**
 * Created by raunak on 3/6/17.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import fetchWeather from '../actions/index'
import {connect} from 'react-redux'

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state ={term:""};
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term)
    }


    onInputChange(event){
        this.setState({term:event.target.value})
    }

    render(){
        return(
            <form className='input-group' onSubmit={this.onFormSubmit}>
                <input className="form-control" value={this.state.term} onChange={this.onInputChange}/>
                <span className="input-group-btn"><button className="btn btn-secondary" type="Submit">Search</button></span>
            </form>

        )
    }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather:fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);