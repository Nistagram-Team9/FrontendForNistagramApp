import { Authority } from './authority.model';
export class User  {
    id: number;
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
    sex: string;
    birthDate: string;
    username: string;
    website: string;
    biography: string;
    isPrivate: boolean;
    canBeTagged: boolean;
    isActive: boolean;
    password: string;
    authorities: Set<Authority>;
    followingUsers: Set<User>;
    followers: Set<User>;
    followRequests: Set<User>;
    mutedProfiles: Set<User>;
    blockedProfiles: Set<User>;
    blockedByProfiles: Set<User>;
    reportedProfiles: Set<User>;
    reportedByProfiles: Set<User>;
    iAmBlocked: Boolean;
    blocked: Boolean;
    following: Boolean;
    reported: Boolean;



    constructor(){
        this.id = -1,
        this.name = "",
        this.surname = "",
        this.email = "",
        this.phoneNumber = "",
        this.sex = "",
        this.birthDate = "",
        this.username = "",
        this.website = "",
        this.biography = "",
        this.isPrivate = false,
        this.canBeTagged= true,
        this.isActive= true,
        this.password= "",
        this.authorities = null,
        this.followingUsers = null,
        this.followers = null,
        this.followRequests = null,
        this.mutedProfiles = null,
        this.blockedProfiles = null,
        this.blockedByProfiles = null,
        this.reportedProfiles = null,
        this.reportedByProfiles = null,
        this.iAmBlocked = false,
        this.blocked = false,
        this.following = true,
        this.reported = true
    }
    
}

