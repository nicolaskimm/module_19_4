import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMBUP_COMMENT, THUMBDOWN_COMMENT} from './actions';

function comments (state = [], action) {
	switch (action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text,
				likes: 0
			}
			, ...state.comments];
		case DELETE_COMMENT:
			return state.comments.filter(comment => comment.id !== action.id);
		case EDIT_COMMENT:
			return state.comments.map(comment => comment.id === action.id ? comment.text: action.text : comment);
		case THUMBUP_COMMENT:
			return state.comments.map(comment => comment.id === action.id ? comment.likes++ : comment);
		case THUMBDOWN_COMMENT:
			return state.comments.map(comment => comment.id === action.id ? comment.likes-- : comment);
		default:
			return state.comments;
	}
}

export default comments;


