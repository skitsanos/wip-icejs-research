import React from 'react';

const userByIdPage = ({match}) =>
{
	const {params} = match;

	return <div>User ID: {params.id}</div>;
};

export default userByIdPage;