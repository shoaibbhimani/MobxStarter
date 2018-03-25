import { extendObservable, action } from 'mobx'
import devtools from 'mobx-remotedev/lib'

class Todos {
    constructor(){
        extendObservable(this,{
            todos:[],
            firstName:"Shoaib Bhimani",
            changeName:action('Change First Name',(newName) => {
              this.firstName = newName; 
            }),
            get getFirstName(){
              return this.firstName;
            }
        });
    }
}


export default devtools(new Todos()) 
