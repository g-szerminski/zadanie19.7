import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// ADD COMMENT
export const addComment = text => {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
};
//const boundAddComment = text => dispatch(addComment(text));

// EDIT COMMENT
export const editComment = (text, id) => {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
};
//const boundEditComment = (text, id) => dispatch(editComment(text, id));

// REMOVE COMMENT
export const removeComment = id => {
	return {
		type: REMOVE_COMMENT,
		id
	}
};
//const boundRemoveComment = id => dispatch(removeComment(id));

// THUMB UP COMMENT
export const thumbUpComment = (id, likes) => {
    return {
        type: THUMB_UP_COMMENT,
        id,
        //likes: ++likes
    }
};
//const boundThumbUpComment = (id, likes) => dispatch(thumbUpComment(id, likes));

// THUMB DOWN COMMENT
export const thumbDownComment = (id, dislikes) => {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        //dislikes: ++dislikes
    }
};
//const boundThumbDownComment = (id, likes) => dispatch(thumbDownComment(id, dislikes));

//export ADD_COMMENT;
//export addComment;