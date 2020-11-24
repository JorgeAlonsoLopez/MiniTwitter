import {User} from './User.interface'; 
export interface Tweet {
    id: number;
    mensaje: string;
    likes: User[];
    user: User;
}