type userModel = {
    surname: string;
    name: string;
    fatherName?: string;
    telephone: string;
    email: string;
    password: string;
    birthdate: string;
    card: string;
}

export type varUserModel =
'surname' | 'name' |
'fatherName' | 'telephone' |
 'email' | 'password' |
  'birthdate' | 'card' | 'check' | 'none'
 
export default userModel