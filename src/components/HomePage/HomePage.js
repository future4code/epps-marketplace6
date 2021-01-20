import React from 'react';
import CategoryCard from './CategoryCard';

class HomePage extends React.Component {

	render(){

		return (
			<div>
                <CategoryCard goToJobViewPage={this.props.goToJobViewPage}/>
				
            </div>
		)
	}
}

export default HomePage