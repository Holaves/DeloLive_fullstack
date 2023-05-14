type createUser = {
    surname: string;
    name: string;
    fatherName?: string;
    telephone: string;
    email: string;
    password: string;
    birthdate: string;
    card: string;
}

export type varCreateUser =
'surname' | 'name' |
'fatherName' | 'telephone' |
 'email' | 'password' |
  'birthdate' | 'card' | 'none'
 
export default createUser