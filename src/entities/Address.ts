import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/sqlite";
import { v7 } from "uuid";
import { User } from "./User.ts";

@Entity()
export class Address {
	@PrimaryKey()
	id: string = v7();

	@OneToMany({ entity: () => User, mappedBy: "address", orphanRemoval: true })
	users = new Collection<User>(this);

	@Property()
	street!: string;

	@Property()
	city!: string;
}
