export interface IGeo {
    lat: number;
    lng: number;
}

export interface IAddtess {
    street: string;
    suite: string;
    city: string;
    geo: IGeo
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddtess
}

export interface ITodo {
    id: number;
    title: string;
    completed: boolean
}
