import { merge } from 'lodash';

import { 
    typeDef as Person,
    resolver as PersonResolver
} from './PersonSchema';

import {
    typeDef as Role
} from './RoleSchema';

const DefaultSchema = `
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

export const typeDefs = [DefaultSchema,Person,Role];
export const resolvers = merge(PersonResolver);
