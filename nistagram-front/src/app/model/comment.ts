import { Post } from "./post";
import { User } from "./user.model";

export class Comment {
    id: number;
    user: User;
    post: Post;
    content: String;
    taggedUsers: [User];
}