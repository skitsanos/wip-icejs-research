import {Layout} from 'antd';
import {Link} from 'ice';
import React from 'react';

const {Header, Footer, Content} = Layout;

const layout = props =>
{
	const {children} = props;

	return <Layout>
		<Header>
			<h1 style={{color: '#fff'}}>icejs[APP]</h1>
		</Header>
		<Content>
			content goes here
			{children}
		</Content>
		<Footer>
			Copyright &copy; skitsanos.com | <Link to={'/'}>Home</Link>
		</Footer>
	</Layout>;
};

layout.pageConfig = {
	title: 'Demo App',
	errorBoundary: true
};

export default layout;