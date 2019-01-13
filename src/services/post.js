import {response} from '../fixture';

export const postService = {
    findById(id) {
        return Promise.resolve(response).then(res => res.find(element => {
                return element.posts.id === +id
            })
        )
    }
}
