import { ManyToOne, PrimaryKey } from '@mikro-orm/sqlite';
import { v7 } from 'uuid';


export class Address {
    @PrimaryKey()
    id: string = v7();
}