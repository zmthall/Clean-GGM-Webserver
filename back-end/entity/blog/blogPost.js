import { EntityError } from "../../utility/error-handling/EntityError.js";
import { creationDateValidation, idValidation, contentValidation } from "../../utility/validation/entityValidation.js";

export class BlogPost {
    constructor({ id, title, hook = null, content, image_url = null, tags = null, creation_date = (new Date()).toISOString() }, last_edited = null) {
        if(idValidation(id)) this.id = id;
        if(contentValidation(title, 'Blog Post Title', 5, 100)) this.title = title; // validating the title where the length is from 5 to 100 characters
        if(hook && contentValidation(hook, 'Blog Post Hook', 1, 500)) this.hook = hook; // validating the hook where the length is from 1 to 500 characters.
        if(contentValidation(content, 'Blog Post Content', 500, 10000)) this.content = content; // validating the content where the length is from 500 to 10000
        if(image_url && this.validateImageURL(image_url)) this.image_url = image_url;
        if(tags && this.validateTags(tags)) this.tags = tags;
        if(creationDateValidation(creation_date)) this.creation_date = creation_date; // Validating the creation date making sure that it is an IsoString
        if(last_edited && creationDateValidation(last_edited)) this.last_edited = last_edited;
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

    // any data that is being put towards editing a blog post cannot be empty and it cannot edit the ID or creation date
    validateEditData(editData) {
        const restrictedFields = ['id', 'creation_date'];
        if(!(Object.keys(editData).length > 0))
            throw new EntityError('Edit data must contain at least one valid field.');

        if(!(Object.keys(editData).some(key => restrictedFields.includes(key))))
            throw new EntityError(`Fields ${restrictedFields.join(', ')} cannot be modified.`);

        return true;
    }

    edit(newPostData) {
        if(this.validateEditData(newPostData)) {
            const updatedData = {
                ...this,
                ...newPostData,
                id: this.id,
                creation_date: this.creation_date,
                last_edited: (new Date()).toISOString()
            };
            
            return new BlogPost(updatedData);
        }
    }
}

export class ArchivedBlogPost extends BlogPost {
    constructor({ id, title, hook = null, content, image_url = null, tags = null, creation_date, archive_date = (new Date()).toISOString() }) {
        super({ id, title, hook, content, image_url, tags, creation_date});
        if(creationDateValidation(archive_date)) this.archive_date = archive_date;

        Object.freeze(this);
    }
}