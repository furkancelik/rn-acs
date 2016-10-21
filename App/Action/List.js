// Singleton Patter için inst değeri eklendi
let inst = null;
// ListAction Sınıfı (Singleton)
class ListAction  {
  constructor() {
   if(!inst){ inst = this; }
   // veriler burada tutuluyor
   // fetch ile alınan veriler bu değişkene
   // aktarılarak tüm sayfalarda erişilebilir
   // duruma getiriliyor.
   this.data = {lists:[]};
   // instance değerini geri döndürüyor singleton sınıf oluşması için.
   return inst;
  }

  // Action için oluşturulacak metodlar
  // Ekleme Silme vs gibi işlemler için
  addList(value){
    this.data.lists.push(value);
  }

  removeList(index){
    this.data.lists.splice(index, 1);
  }
}

export default listAction = new ListAction();
