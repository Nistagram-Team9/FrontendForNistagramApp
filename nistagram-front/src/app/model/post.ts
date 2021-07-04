import { User } from "./user.model";

export class Post  {
    id: number;
    description: string;
    picture: string;
    user: User;
    likedBy: [User];
    dislikedBy: [User];
    savedBy: [User];
    reportedBy: [User];
    postComments: [Comment];
    taggedUsers: [User];
    photo



}
