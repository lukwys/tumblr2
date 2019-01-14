import {response} from './fixture';

export class Store {
    post = null;

    getPost (id) {
        return Promise.resolve(response)
        .then(res => res.find(element => 
            {
                return element.posts.id === +id
            })
        )
        .then(post => this.post = post);
    }
}