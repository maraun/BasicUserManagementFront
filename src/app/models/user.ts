import {Role} from './role';
import {Profile} from './profile';

export class User {
  id?: number;
  email?: string;
  username: string;
  password: string;
  roles?: Set<Role>;
  profile?: Profile;
}
