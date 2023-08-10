type userModel = {
    surname: string;
    name: string;
    fatherName?: string;
    telephone: string;
    email: string;
    password: string;
    birthdate: string;
    isMailing: boolean;
    card: string;
}

export type varUserModel =
'surname' | 'name' |
'fatherName' | 'telephone' |
'email' | 'password' |
'birthdate' | 'card' |
'check' | 'login'| 'loginPassword' |'none'
 
export default userModel