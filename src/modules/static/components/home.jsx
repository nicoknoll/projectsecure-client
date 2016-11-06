import LayoutStatic from '../../static/components/layout';

import SectionIntro from './intro';
import SectionChallenges from '../../challenges/components/grid';
import SectionAbout from './about';
import SectionMentions from './mentions';

require('../styles/home.scss');

class Home extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LayoutStatic className="route-home">
				<SectionIntro />
				<SectionChallenges />
				<SectionAbout />
				<SectionMentions />
			</LayoutStatic>
		);
	}

}

export default Home;
