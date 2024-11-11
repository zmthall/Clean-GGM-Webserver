// Blog Entities
import { BlogPost } from "./blog/blogPost";

// Command Entities
import { Command } from "./command/command";

// Contact Entities
import { Application } from "./contact/application";
import { ContactFormMessage } from "./contact/contactFormMessage";
import { File } from "./contact/file";
import { Lead } from "./contact/lead";
import { Message } from "./contact/message";
import { RideRequest } from "./contact/rideRequest";

// Event Entities
import { Event } from "./event/event";

// User Entities
// import { User } from "./user/user"; // This has not been implemented yet.

export const entities = {
    BlogPost,
    Command,
    Application,
    ContactFormMessage,
    File,
    Lead,
    Message,
    RideRequest,
    Event
    // User
};