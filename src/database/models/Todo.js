import realm from '../realm';

const tableName = 'todos';

export default class Todo {
    static  getTableName() {
        return tableName;
    }
    constructor() {
            this.id = 1;
            this.created_at = new Date();
            this.updated_at = new Date();
    }
    save() {
        try {
            realm.write(()=>{
                realm.create(tableName,this,true);
            })
        }catch(e){
            console.error('Kayıt Hatası',e.message);
        }
    }

}

