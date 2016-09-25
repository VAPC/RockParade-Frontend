import {ILink} from "./ILinks";
export interface IEvent {
    id: string;
    date: string;
    name: string;
    description: string;
    place: string;
    creator: string;
    images: string[],
    links: ILink[];
}

