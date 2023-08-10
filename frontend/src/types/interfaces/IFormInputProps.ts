import { varUserModel } from "../UserModel";
import ValidationType from "../Validation";


interface IFormInputProps{
    field: varUserModel;
    placeholder: string;
    title: string;
    errorMessage?: string;
    isPassword?: boolean;
    isInfo?: boolean;
    isTel?: boolean;
    isCard?: boolean;
    checkPassword?: boolean;
    validation?: ValidationType;
    date?: boolean;
    width?: 'normal' | 'small' | 'large';
    isLogin?: boolean;
    indexOne?: true;
    inputType?: string;
}

export default IFormInputProps