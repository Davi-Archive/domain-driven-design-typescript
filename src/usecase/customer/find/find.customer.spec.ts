/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Sequelize } from "sequelize";
import CustomerModel from "../../../infrastructure/customer/repository/sequelize/customer.model";
import FindCustomerUseCase from "./find.customer.usecase";

describe("Test find customer useCase", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true },
        });

        await sequelize.addModels([CustomerModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("should find customer", async () => {
        const customerRepository = new CustomerRepository();
        const useCase = new FindCustomerUseCase(customerRepository);

        const customer = new Customer("123", "John");
        const address = new Address("Street", 123, "city", "Zip");
        customer.changeAddress(address);

        const customerCreated = await customerRepository.create(customer);

        const input = {
            id: "123",
        }

        const output = {
            id: "123",
            name: "John",
            address: {
                street: "Street",
                number: 123,
                city: "city",
                zip: "Zip",
            }
        }

        const result = useCase.execute(input);

        expect(result).toEqual(output);

    });
});
