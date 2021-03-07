import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (routeName, params) => {
	navigationRef.current?.navigate(routeName, params);
};

export const changeStack = (stackName) => {
	resetRoot(stackName);
};

const resetRoot = (routeName) => {
	console.log(navigationRef.current?.resetRoot, { name:routeName });
	navigationRef.current?.resetRoot({
		index: 0,
		routes: [ { name: routeName } ],
	});
};
