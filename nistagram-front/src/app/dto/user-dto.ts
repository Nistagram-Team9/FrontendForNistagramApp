export class UserDto  {
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

    constructor(){
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
        this.password= "";

    }
}


