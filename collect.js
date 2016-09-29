/**
 * Created by nathaliesicard on 9/24/16.
 */
var fs = require('fs');
const arr = require('fs').readdirSync('./public/img/sociales');
for (let i = 0; i < arr.length; i++) {
  console.log('<img src="/img/sociales/'+arr[i]+'" alt="Eventos Sociales Concepto3">');
}