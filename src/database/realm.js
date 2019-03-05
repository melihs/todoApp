import Realm from 'realm';

class TodoTable extends Realm.Object {
    static schema = {
        name       : 'todos',
        primaryKey : 'id',
        properties :{
            id : {type : 'string', indexed : true},
            job : 'string',
            completed : { type : 'bool', default : false},
            created_at : 'date',
            updated_at : 'date',
        },
    };
}
export default new Realm({
    schema : [
        TodoTable
    ],
})