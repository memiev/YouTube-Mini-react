import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';


class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async (term) =>{
        const response = await youtube.get('/search', {
            param: {
                q : term 
            }
        });

        this.setState({ videos: response.data.items });
    };

    render(){
        return (
            <div className='ui container'> 
                <SearchBar callParentSubmit={this.onTermSubmit}/>      {/* как идва тук  от SearchBar*/}
            </div>
        );
    }
}

export default App;