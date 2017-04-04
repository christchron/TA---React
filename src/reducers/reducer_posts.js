import {FETCH_ANALYTICS_DATA} from '../actions/index'
import Immutable from 'immutable'

const {Record} = Immutable

export const State = Record({
	all: []
})

const INITIAL_STATE	= new State()

export default function (state = INITIAL_STATE, action){
	switch (action.type){
		case FETCH_ANALYTICS_DATA:
			return state.set('all', action.payload)
		default:
			return state; 
	}
}