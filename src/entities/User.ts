import { Entity, PrimaryKey, ManyToOne } from '@mikro-orm/core';
import { v7 } from 'uuid';

@Entity()
export class User {
    @PrimaryKey()
    id: string = v7();
}