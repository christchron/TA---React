import React from 'react';
import moment from 'moment';

export function sortAscJSON(json,key){
	return _.sortBy(json,key);
}

export function sortDescJSON(json,key){
	return json.reverse(key);
}

export function getCategoryLabel(props){
	if (!props || props[0] == null){
		return [];
	}else{
		return props.map((post) => {return post.name});
	}
}

export function getCategoryTotalChat(props){
	if (!props || props[0] == null || props[0] == undefined){
		return [];
	}else{
		console.log("props",props[0])
		return props.map((post) => {return post.value});
	}
}

export function getPeakTimeData(props){
	if(props){
		if (!props.chatCounts){
			return [];
		}else{
			return props.chatCounts.map((post) => {return [new Date(post.periodStart), post.chatCount]});
		}
	}else{
		return [];
	}
}

export function getResponseDurationData(props){
	if(props){
		if (!props.responseDurations){
			return [];
		}else{
						
			return props.responseDurations.map((post) => {
				if (post.responseDuration != null){
					var hour = Math.floor(post.responseDuration / (1000*60*60));
					var minute = Math.floor((post.responseDuration/60000) % 60);
					var second = Math.floor((post.responseDuration/1000) % 60);
					return [new Date(post.chatSessionStartTime), [hour,minute,second]];
				}else{
					return [new Date(post.chatSessionStartTime), [0,0,0]];
				}
			});
		}
	}else{
		return [];
	}
}

export function getResolvedDurationData(props){
	if(props){
		if (!props.resolvedDurations){
			return [];
		}else{
						
			return props.resolvedDurations.map((post) => {
				if (post.resolvedDuration != null){
					var hour = Math.floor(post.resolvedDuration / (1000*60*60));
					var minute = Math.floor((post.resolvedDuration/60000) % 60);
					var second = Math.floor((post.resolvedDuration/1000) % 60);
					return [new Date(post.chatSessionStartTime), [hour,minute,second]];
				}else{
					return [new Date(post.chatSessionStartTime), [0,0,0]];
				}
			});
		}
	}else{
		return [];
	}
}

export function getChatCountData(props){
	if(props){
		if (!props.chatCounts){
			return [];
		}else{
			return props.chatCounts.map((post) => {
				if (post.chatCount != null && post.chatGrowth != null){
					return [new Date(post.periodStart), post.chatCount, post.chatGrowth];
				}else{
					return [new Date(post.periodStart), 0,0];
				}
			});
		}
	}else{
		return [];
	}
}