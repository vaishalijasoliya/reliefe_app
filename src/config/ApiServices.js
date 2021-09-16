import Constants from './Constants';

const GetApiCall = async (url, header, showNoInternetMessage = true, manageApiResponse = true) => {

	const rawResponse = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: !!Constants.USER_DATA.token ? `Bearer ${Constants.USER_DATA.token}` : ''
		}
	})
		.then((r) => r.json())
		.catch((exc) => {
			return null;
		});

	if (!manageApiResponse) {
		return null;
	} else if (rawResponse === null) {
		return null;
	} else if (rawResponse.status_code === undefined) {
		return rawResponse;
	} else if (rawResponse.status_code === 200 || rawResponse.status_code === 101) {
		return rawResponse;
	} else {
		// manageApiResponseCode(rawResponse);
		return null;
	}
};

const PostApiCall = async (url, payLoad, header, showNoInternetMessage = true, manageApiResponse = true) => {

	if (!!payLoad && Object.keys(payLoad).length > 0) {
		debugger
		const rawResponse = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: !!Constants.USER_DATA.token ? `Bearer ${Constants.USER_DATA.token}` : '',
				'Content-Type' : 'application/json'
			},
			body: payLoad
		})
			.then((r) => {
				// console.log("Response = "+ JSON.stringify(r));
				return r.json();
			})
			.catch((exc) => {
				console.log(url+" = "+exc);
				return null;
			});
		if (!manageApiResponse) {
			return null;
		} else if (rawResponse === null) {
			return null;
		} else if (rawResponse.status_code === undefined) {
			return rawResponse;
		} else if (rawResponse.status_code === 200 || rawResponse.status_code === 101) {
			return rawResponse;
		} else {
			// manageApiResponseCode(rawResponse);
			return null;
		}
	} else {
		debugger
		const rawResponse = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: !!Constants.USER_DATA.token ? `Bearer ${Constants.USER_DATA.token}` : '',
				'Content-Type' : 'application/json'
			}
		})
			.then((r) => r.json())
			.catch((exc) => {
				console.log(url+" =  = "+exc)
				return null;
			});

		if (!manageApiResponse) {
			return null;
		} else if (rawResponse === null) {
			return null;
		} else if (rawResponse.status_code === undefined) {
			return rawResponse;
		} else if (rawResponse.status_code === 200 || rawResponse.status_code === 101) {
			return rawResponse;
		} else {
			// manageApiResponseCode(rawResponse);
			return null;
		}
	}
};

export default {
	GetApiCall,
	PostApiCall
};
