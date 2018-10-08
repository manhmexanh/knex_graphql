import { PersonModel } from '../../models/person';

export const resolver = {
    Query: {
        getAllPersons: () => PersonModel.getAllPersons(),
        findPerson: (_, { id }) => PersonModel.findPerson(id)
    },
    Mutation: {
        createPerson(_, { input }) {
            return PersonModel.createPerson(input);
        },
        updatePerson(_, { id, input }) {
            if (id) {
                return PersonModel.updatePerson(id, input);
            }
            return null;
        },

    }
}
