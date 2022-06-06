const { faker } = require('@faker-js/faker');
import UserModel, { UserDocument } from "../models/user.model";

export async function seedUsers() {
    let users = [];

    for (let i = 0; i < 10000; i++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();

        let user = {
            name: firstName + " " + lastName,
            email: faker.internet.email(firstName + "" + faker.datatype.number(1000), lastName + "" + faker.datatype.number(1000)),
            address: faker.address.streetAddress(),
            role: faker.name.jobTitle(),
            phoneNo: faker.phone.phoneNumber()
        };
        users.push(user);
    }

    await UserModel
    .insertMany(users)
    .then(() => {
        console.log("Database seeded successfully");
    }).catch((error) => {console.log(error)});
    
    return {
        Message: "Database seeded successfully",
    };
}