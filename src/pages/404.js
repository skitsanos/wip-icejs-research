import {Result} from 'antd';
import React from 'react';

const NotFound = () => <Result status={'404'}
                               title={'Not found'}
                               subTitle={'Page you are looking for can not be found'}/>;

NotFound.pageConfig = {
	title: 'Page not found'
};

export default NotFound;