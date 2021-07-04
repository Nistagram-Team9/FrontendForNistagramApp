import { Commercial } from "./commercial";
import { User } from "./user.model";

export class Campaign {
   id: number;
   commercials: [Commercial];
   isShortTerm: boolean;
   startDate: string;
   endDate: string;
   howManyTimesADay: number;
   sex: string;
   ageGroup: string;
   user: User;


}

