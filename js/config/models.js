import Realm from 'realm';

const FavesSchema = {
  name: "Faves",
  primaryKey: "id",
  properties: {
    id: "string",
    faved_on: "date"
  }
}
const realm = new Realm({schema: [FavesSchema]});

console.log('realm path: ',realm.path);

export default realm;

export const createFave = session_id =>{
  realm.write(()=>{
    realm.create("Faves", {
      id: session_id,
      faved_on: new Date(),
    })
  })

}


export const queryFave = () =>{
  return realm.objects("Faves");

}


export const deleteFave = id =>{
  realm.write(()=>{

    let fave= realm.objects("Faves").filtered("id==$0", id);
    realm.delete(fave);
  })
}


