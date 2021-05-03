import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''}

    onInputChange = (event) => {  //callback method with event object
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) =>{
        event.preventDefault();
        
        // TODO: Make sure we call
        // callvack from parent component
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className='fomr ui'>
                    <div className='field'>
                    <div class="ui action input">
                        <input onChange={this.onInputChange} value={this.state.term} type="text" placeholder="Search..."/>
                        <button class="ui button ">Video Search</button>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar