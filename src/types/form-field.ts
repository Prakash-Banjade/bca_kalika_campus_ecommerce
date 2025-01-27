export enum EInputType {
    TEXT = 'text',
    PASSWORD = 'password',
    EMAIL = 'email',
    FILE = 'file',
    CHECKBOX = 'checkbox',
    RADIO = 'radio',
    DATE = 'date',
    TEL = 'tel',
    TEXTAREA = 'textarea',
    NUMBER = 'number'
}

type TInputType = 'text' | 'email' | 'password' | 'file' | 'checkbox' | 'radio' | 'date' | 'number'

export type TFormField<T> = ({
    type: TInputType;
} | {
    type: 'select';
    option: {
        label: string;
        value: string;
    }[],
}) & {
    label: string;
    placeholder?: string;
    name: keyof T;
    required: boolean;
    description?: string;
}