import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './components/app';
import ShowChatCount from './components/chat_count';
import ShowConversation from './components/conversation';
import ShowTopTenCategory from './components/category';
import ShowTopTenNetizen from './components/nitizen';
import ShowPeakTime from './components/peak_time';
import ShowResponseDuration from './components/response_duration';
import ShowResolvedDuration from './components/resolved_duration';
import Home from './components/home';

export default (
	<Route path="/" component={App}>
		<IndexRoute component = {Home} />
		<Route path="register" component = {Home} />
		<Route path="login" component = {Home} />
		<Route path="produk" component = {Home} />
		<Route path="search" component = {Home} />
		<Route path="chat_count" component = {ShowChatCount} />
		<Route path="conversation" component = {ShowConversation} />
		<Route path="conversation" component = {ShowConversation} />
		<Route path="category" component = {ShowTopTenCategory} />
		<Route path="netizen" component = {ShowTopTenNetizen} />
		<Route path="peak_time" component = {ShowPeakTime} />
		<Route path="response_duration" component = {ShowResponseDuration} />
		<Route path="resolved_duration" component = {ShowResolvedDuration} />
	</Route>
);

