export interface RegistroResponse {
    token: string;
    username: string;
    email: string;
    role:string;
    photoUrl: string;
    created: Date;
    active: boolean;
}