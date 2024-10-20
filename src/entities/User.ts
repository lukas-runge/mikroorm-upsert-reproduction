import { Entity, ManyToOne, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { v7 } from "uuid";
import { Address } from "./Address.ts";

@Entity()
export class User {
	@PrimaryKey()
	id: string = v7();

	@Property()
	@Unique()
	email!: string;

	@ManyToOne()
	address!: Address;

	@Property()
	firstName!: string;

	@Property()
	lastName!: string;
}
