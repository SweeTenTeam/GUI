export interface Message {
    id: number;
    content: string;
    date: Date;
    isUser: boolean;
    hasFile?: boolean;
}