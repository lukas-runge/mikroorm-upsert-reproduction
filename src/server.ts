import { MikroORM } from "@mikro-orm/core";
import { User } from "./entities/User.ts";

const orm = await MikroORM.init();

await orm.getSchemaGenerator().refreshDatabase();

const em = orm.em.fork();

const user = em.create(User, {
	firstName: "John",
	lastName: "Doe",
	email: "johndoe@london.co.uk",
	address: {
		street: "Baker Street 221B",
		city: "London"
	}
});

console.log(user.id);

await em.flush();

console.log(await em.findOne(User, { email: "johndoe@london.co.uk" }));

await em.upsert(User, {
	email: "johndoe@london.co.uk",
	firstName: "Max",
	lastName: "Mustermann",
	address: { street: "Baker Street 221C", city: "London" }
});

console.log(await em.findOne(User, { email: "johndoe@london.co.uk" }));
