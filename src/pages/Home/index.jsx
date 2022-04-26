import {Button, Col, Row} from 'antd';
import {useAuth, useHistory} from 'ice';
import React from 'react';

const page = () =>
{
	const [setAuth] = useAuth();

	const history = useHistory();

	return <Row>
		<Col>
			<div>
				Hello from home

				<div>
					<Button type={'link'}
					        onClick={() =>
					        {
						        setAuth({authorized: true});
						        history.push('/');
					        }}>Login</Button>
				</div>
			</div>
		</Col>
	</Row>;
};

export default page;