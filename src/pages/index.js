import {Col, Row} from 'antd';
import React from 'react';

const page = () => <Row>
	<Col>
		<div>
			Hello from Ice.js
		</div>
	</Col>
</Row>;

page.pageConfig = {
	title: 'Home Page'
};

export default page;