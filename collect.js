/**
 * Created by nathaliesicard on 9/24/16.
 */
var fs = require('fs');
const arr = require('fs').readdirSync('./public/img/culturales');
for (let i = 0; i < arr.length; i++) {
  console.log('<img src="/img/culturales/'+arr[i]+'" alt="Evento Cultural Concepto3" data-caption="Evento">');
}