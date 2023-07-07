declare type ChatData = {
    user: User;
    receiver: Receiver;
    messages: Message[];
}

declare type Receiver = {
    name: string;
    bio: string;
    imageSrc: string;
} 

declare type User = {
    name: string,
    variant?: 'male-destruction' | 'female-destruction' | 'male-presevation' | 'female-presevation'
    imageSrc?: string
}

declare type Message = {
    isSender: boolean;
    message: string
}