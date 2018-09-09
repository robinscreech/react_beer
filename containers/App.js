import React from 'react';
import Beer from './Beer';

class App extends React.Component {

	constructor(props){
		super(props)

		this.state = {data: []}
	}

	getData(){
		const url = 'https://api.punkapi.com/v2/beers?per_page=6';
		fetch(url)
			.then(
				response => {
					response.json()
						.then(jsonResponse => {
							this.setState({data:jsonResponse})
							console.log(jsonResponse)
						})
				}
			)
	}

	componentDidMount(){
		this.getData()
	}

	render() {
		const card = this.state.data.map((d) => 
            	<Beer name={d.name} key={d.id} description={d.description} image_url={d.image_url}/>
        	)

        return (    	
		    <div className="container">
		    	{card}
		    </div>
		)
    }	
}

export default App;