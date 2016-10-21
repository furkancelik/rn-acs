// Action import ediliyor.
import listAction from '../Action/List.js';

// Actiondaki data değeri ve
// actiondaki tüm fonksiyonlar (metodlar)
// List Değişkenine aktarılıyor ki
// bu List değişkenide propslar ile tüm
// sayfalarda taşınacak ve tüm sayfalard
// bu değerlere erişmemiz sağlanmış olacak.

export const List = {
  store:listAction.data,
  action:listAction,
}
