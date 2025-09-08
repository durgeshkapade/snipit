export interface PasteInterface {
    id: string;
    content: string;
    expiresAt: Date;
}

export interface IPaste extends Document {
    id: string;
    content: string;
    expiresAt: Date;
}