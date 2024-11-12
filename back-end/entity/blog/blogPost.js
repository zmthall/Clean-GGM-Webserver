import { EntityError } from "../../utility/error-handling/EntityError.js";
import { creationDateValidation, idValidation, contentValidation } from "../../utility/validation/entityValidation.js";

export class BlogPost {
    constructor({ id, title, hook = null, content, image_url = null, tags = null, creation_date = (new Date()).toISOString() }) {
        if(idValidation(id)) this.id = id;
        if(contentValidation(title, 'Blog Post Title', 1, 100)) this.title = title;
        if(hook && contentValidation(hook, 'Blog Post Hook', 1, 500)) this.hook = hook;
        if(contentValidation(content, 'Blog Post Content', 1, 10000)) this.content = content;
        if(image_url && this.validateImageURL(image_url)) this.image_url = image_url;
        if(tags && this.validateTags(tags)) this.tags = tags;
        if(creationDateValidation(creation_date)) this.creation_date = creation_date;
    }

    // Image URL needs to be a URL class. Only 1 image allowed per post.
    validateImageURL(image_url) {
        if(!(image_url instanceof URL))
            throw new EntityError('Image URL must be an instance of the URL class.');

        return true;
    }

    // Tags need to be an array with all elements being of type string that cannot be empty or undefined.
    validateTags(tags) {
        if(!(Array.isArray(tags) && tags.every(tag => typeof tag === 'string' && tag.length > 0)))
            throw new EntityError('Tags needs to be an array. All elements need to be of type string and cannot be empty or undefined.');

        return true;
    }
}