import {Role} from './role';
import {Profile} from './profile';
import {Position} from './Position';
import {Document} from './Document';
import {Contacts} from './Contacts';
import {Additional} from './Additional';

export class User {
  id: number;
  username: string;
  password?: string;
  roles: Set<Role>;
  profile: Profile;
  documents?: Set<Document>;
  positions?: Position[];
  contacts: Contacts;
  additional: Additional;
}
