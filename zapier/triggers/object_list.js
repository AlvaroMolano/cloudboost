const config = require('../config');

const triggerObject = (z, bundle) => {
	const tableName = bundle.inputData.table;
	const responsePromise = z.request({
		method: 'POST',
		url: `${config.cloudboostUrl}/data/${bundle.authData.appId}/${tableName}/find`,
		body: {
			key: bundle.authData.appKey,
			sort: {
				createdAt: -1
			}
		}
	});
	return responsePromise
		.then(response => {
			return JSON.parse(response.content).map(obj => {
				return Object.assign({}, { id: obj._id }, obj);
			});
		});
};

module.exports = {
	key: 'object_list',
	noun: 'ObjectList',

	display: {
        label: 'Objects List',
        hidden: true,
		description: 'Triggers list of object in a selected table.'
	},

	operation: {
		inputFields: [
			{
				key: 'table',
				label: 'Table',
				required: true,
				dynamic: 'table.name.name'
			}
		],
		perform: triggerObject,
		sample: {
			id: '_op990p'
		}
	}
};