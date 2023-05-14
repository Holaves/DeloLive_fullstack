type ValidationType = {
    minLength: number;
    maxLength: number;
    onlyNums?: boolean;
    password?: boolean;
    email?: boolean;
    birthday?: boolean;
    card?: boolean;
    other?: any;
}

export default ValidationType