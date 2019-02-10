import { response } from './fixture';
import { decorate, observable, action } from 'mobx';

export class Store {
    post = {};

    getPost(id) {
        return Promise.resolve(response)
            .then(res => res.find(element => {
                return element.posts.id === +id
            }))
            .then(post => this.post = post);
    }
}

decorate(Store, {
    post: observable,
    getPost: action,
});
