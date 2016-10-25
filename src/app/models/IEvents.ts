import {IEvent} from './IEvent';
export interface IEvents {
    data: IEvent[];
    total: number;
    limit: number;
    offset: number;
}
