export const fetchItems = (token) => (dispatch) => {
	fetch('/api', {
		headers: {
			authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			res.json().then((data) => {
				dispatch({
					type: 'FETCH_ITEMS',
					data,
				});
			});
		})
		.catch((err) => console.log(err));
};

export const postItem = (token, data) => (dispatch) => {
	fetch('/api', {
		headers: {
			authorization: `Bearer ${token}`,
			'Content-Type': 'application/json; charset=utf-8',
		},
		method: 'POST',
		body: JSON.stringify(data),
	})
		.then((res) => {
			res.json().then((data) => {
				dispatch({
					type: 'POST_ITEM',
					data,
				});
			});
		})
		.catch((err) => console.log(err));
};

export const deleteItem = (token, id) => (dispatch) => {
	fetch(`/api/${id}`, {
		method: 'DELETE',
		headers: {
			authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			res.json().then((data) => {
				if (data.success) {
					dispatch({
						type: 'DELETE_ITEM',
						data: {_id: id},
					});
				}
			});
		})
		.catch((err) => console.log(err));
};
