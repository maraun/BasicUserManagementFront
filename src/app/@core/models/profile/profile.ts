import {Nationality} from './Nationality';
import {Citizenship} from './Citizenship';
import {Gender} from './Gender';
import {MaritalStatus} from './MaritalStatus';

export class Profile {
  id: number;
  firstname: string;
  lastname: string;
  middlename: string;
  previouslastname: string;
  iin: string;
  birthdate: Date;
  nationality: Nationality;
  citizenship: Citizenship;
  gender: Gender;
  maritalStatus: MaritalStatus;
  registrationPlace: string;
  livingPlace: string;
  photoname?: string;

}
