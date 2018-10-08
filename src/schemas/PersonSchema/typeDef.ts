export const typeDef = `
    extend type Query {
        getAllPersons: [Person]
        findPerson(id : ID!) : Person
    }

    extend type Mutation {
        createPerson(input: PersonInput): Person
        updatePerson(id: ID!, input: PersonInput): Person
    }

    input PersonInput {
        name: String,
        age: String,
        gender:String
        role_id:ID
    }

    type Person {
        id: ID,
        name: String,
        age: String,
        gender:String,
        role_id:ID,
        role : Role
    }
`;