import {render} from 'react-dom';
import {compose} from 'react-komposer';
import {browserHistory} from 'react-router';

import userActions from '../actions/user';

import component from '../components/login';
import actions from '../actions/login';

const composer = (props, onData) => {

	if(props.location.query.logout) {

		actions.logout().then(() => {
			browserHistory.push('/login/');
		});

	} else {
		userActions.checkAuth().then(() => {

			browserHistory.push('/dashboard/');

		}).catch(() => {

			let componentData = {
				actions,
				onLogin: (data) => {
					actions.login(data).then(() => {
						browserHistory.push('/dashboard/');
					}).catch(({error, response}) => {
						componentData.error = {
							details: error,
							message: `Oh, es scheint so, als sei ein Fehler aufgetreten.`,
							fields: response.body
						};
						onData(null, componentData);
					});
				}
			};

			onData(null, componentData);

		});
	}
};

export default compose(composer)(component);
