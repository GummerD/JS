// иммутабельным называется объект состояние которого не может быть изменено после создания
// результатом изменения такого объекта, является создание нового объекта,
// при том что изначальный объект остается прежним

let array = [11,22,33,44,55,66,77,88,99,100,101,102];
let imm = 0;

console.log(`Представлен изначальный массив  - array: [${array}]`);
console.log('метод - array.pop() измнеяет изначальный масси array, по этому он является мутабельным методом (pop удаляет последний элемент массива) ')
console.log(array.pop() + ' - pop удалил из массива последний элемент, возвратив его, изначальный массив будет изменен')
console.log('Метод slice(0,-1), который позволяет оставить неизмененным изначальный массив данных, является иммутабельным')
console.log(array.slice(0,-1) + ' - получили массив на основе метода slice(), это изначальный массив после метода pop : ' + array);
imm = array.slice(0,-1);
console.log(imm);
console.log('Еще один мутабельный метод - push, он изменяет исходный объект, добавляя в массив один элемент');
console.log('Добавим в изначальный массив array 102 через метод push: '+array.push(102) + 'array.push(102)');
console.log('Получили array: ' +  array);
console.log('как мы видим меод push является мутабельным, и чnобы не менять изначльаный масси можно воспользовать такой конструкцией imm = [...array, 103]');
inn = [...array, 103]
console.log('Изначальный массив array: ' + array + ' массив полученный через спред ' + inn);
console.log('Еще один мутабельный метод - shift, удаляя первый элемент массива, тем самым изменяя его');
console.log(array.shift() + ' - shift удалил из массива первый элемент: ' + array + ' - 11');
let item ;
console.log([item, ...imm] = array);
console.log('Для переноса и удаления из изначального массива первого элемента воспользумеся слудющей конструкцией - [item, ...imm] = array');
console.log('item = ' + item + ' imm = ' + imm + ' array = ' + array);
console.log('Метод unshift, добавляет в массив первый элемент изменяя его, пусть это снова будет 11 (массив из ' + array.unshift(11) + 'элементов - array');
console.log(array);
console.log('как видно изначальный массив изменился, для того чтобы не изменять массив воспользуемся методом imm = [11, ...array]');
imm = [10, ...array];
console.log('imm = ' + imm + ' array = ' + array);
console.log('реверсирование массива - revers, тоже является мутабельным методом, изменяющим состояние объекта');
console.log(array.reverse() + ' как видно массв - array изменился');
console.log(array.reverse());
console.log('чтобы массив не менялся применем следующую конструкцию imm = [...[array]].reverse()');
imm = [...array].reverse()
console.log('imm = ' + imm + ' array = ' + array);
console.log('как мы видим, основной массив не был затронут, изменился только imm')
