import { MikroORM } from "@mikro-orm/core";

const orm = await MikroORM.init();

await orm.getSchemaGenerator().refreshDatabase();

// const em = orm.em.fork();

