import { knex } from '../connectors';
import * as promise from 'bluebird';
class Person {
    getAllPersons() {
        return knex('roles').innerJoin('persons', function() {
            this.on('roles.id', '=', 'persons.role_id')
          }).select();
    }


    findPerson(id: number) {
        if (id) {
            return knex('persons').where('id', id).first();
        }
        return null
    }

    createPerson(input: object) {
        if (input) {
            return knex('persons').insert(input).then(function (result) {
                return knex('persons').where('id', result[0]).first();
            });
        }
        return null;
    }

    deletePerson(id: number) {
        if (id) {
            return knex('persons').where('id', id).del();
        }
        return false;
    }

    updatePerson(id: number, input: object) {
        if (id) {
            return knex('persons').where('id', id).update(input).then(function (){
                return knex('persons').where('id', id).first();
            });
        }
        return null;
    }

    insertPerson(persons: object[]) {
        return knex.transaction((trans) => {
            promise.map(persons, (person) => {
                return knex.insert(person).into('persons').transacting(trans);
            })
                .then(trans.commit)
                .catch(trans.rollback);
        })
            .then(function (inserts) {
                console.log(inserts.length);
            })
            .catch(function (error) {
                console.log("rollback db");
                console.error(error);
                return false;
            });
    }
}


export const PersonModel = new Person();