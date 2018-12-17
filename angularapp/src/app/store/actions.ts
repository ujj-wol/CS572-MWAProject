import { IPost } from './ipost';

export const ADD_POST = 'ADD_POST';

export function addPostAction(postData : IPost) {
    return {
        type: ADD_POST,
        payload: postData
    }
}
