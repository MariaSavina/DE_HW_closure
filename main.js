///// 1 /////

// function tickets(person) {
// let cash=0
// for(let i=0; i<person.length; i++){

//     if(typeof person[i] == 'string'){
//         person[i] = Number(person[i])
//     }
//     else if(typeof person[i] !== 'number'){
//         return 'error'
//     }

//     if(person[i]-cash == 25 || person[i]-cash == 0){
//         cash +=25 
//     }
//     else return `No. Vasya will not have enough money to give change to ${person[i]} dollars`

// }
// if(person.length*25 == cash){
//     return true
// }
// else return 'No'
// }}

function tickets(person) {
    if(Array.isArray(person)){
        console.log('fghnxfgb')
    
    let cash=0
    let res=''

    function calcCash(counter){
        
            if(counter>=person.length){
                // console.log(cash)
                    return res='yes'
            }
            else{
                if(person[counter]-cash == 25 || person[counter]-cash == 0){
                    cash+=25
                    calcCash(counter+1)
                }
                else{
                    return res=`No. Vasya will not have enough money to give change to ${person[counter]} dollars`
                }
            }
        }
           
    calcCash(0)
    
    return res 
    }
    else return 'error'  
}
    
console.log(tickets([25, 25, 50]))
console.log(tickets([25, 100]))
console.log(tickets([25, 25, 50, 100]))
console.log(tickets([25, 50, 100]))
console.log(tickets(['25', '25', '50', '100']))
console.log(tickets(['25', '50', '100']))



///// 2 /////

let arr=[
    ['0','1','2','3','4','5','6','7','8','9'],                  //0
    ['1','2','3','4','5','6','7','8','9','10'],                 //1
    ['2','3','4','5','6','7','8','9','10','11'],                //2
    ['3','4','5','6','7','8','9','10','11','12'],               //3
    ['4','5','6','7','8','9','10','11','12','13'],              //4
    ['5','6','7','8','9','10','11','12','13','14'],             //5
    ['6','7','8','9','10','11','12','13','14','15'],            //6
    ['7','8','9','10','11','12','13','14','15','16'],           //7
    ['8','9','10','11','12','13','14','15','16','17'],          //8
    ['9','10','11','12','13','14','15','16','17','18']          //9
]
function getSum(a='0',b='0'){

    if(a.length < b.length){
        var i = 0
        while(a.length <b.length){
            a='0'+a
            i++
        }
    }
    else{
        var i = 0
        while(b.length <a.length){
            b='0'+b
            i++
        }
    }
    // console.log(a)
    // console.log(b)

    let newArr=[]
    function countdown(i) {
        if (i <= 0) {
            return newArr;  
        } else {   
                newArr.unshift(arr[a[i-1]][b[i-1]])
                countdown(i-1)
        }
    }

    countdown(a.length);
    for(let j=0; j<newArr.length;j++){
        if(newArr[j].length==2){
            if(newArr[j-1]==undefined){
                newArr.unshift(newArr[j][0])
                newArr.splice(j+1,1,newArr[j+1][1])
            }
            else{
                newArr.splice(j-1,1,arr[newArr[j-1]][1])
                newArr.splice(j,1,newArr[j][1])
            }
        }
    }
    return newArr.join('')
}

console.log(getSum('123','324'))            //447
console.log(getSum('999','999'))            //1998
console.log(getSum('21123','329'))            //21452
console.log(getSum('21123','929'))            //22052


///// 3 /////

let listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }

]

function getQuntityPostsByAuthor (obj, author) {
    // let resPosts=0
    // let resComments=0
    // for(let i=0;i<obj.length;i++){
    //     if(obj[i].author==author){
    //         resPosts+=1
    //     }
    //     if(obj[i].hasOwnProperty('comments')){
    //         for(let j=0; j<obj[i].comments.length;j++){
    //                 if(obj[i].comments[j].author == author){
    //                     resComments+=1
    //                 }
    //             }
    //     }
    // }
    // return `${author} has ${resPosts} posts and ${resComments}`
    if(typeof obj !="object" || typeof author != 'string'){
        return 'error'
    }
    let resPosts=0
    let resComments=0
    function countPost(i){
        if(i>=obj.length){
            return resPosts
        }
        else{
            if(obj[i].author==author){
                resPosts += 1    
            }    
            if(obj[i].hasOwnProperty('comments')){
                for(let j=0; j<obj[i].comments.length;j++){
                    if(obj[i].comments[j].author == author){
                        resComments+=1
                    }
                }
            }
            countPost(i+1)
        }
    }

    countPost(0)
    return `${author} has ${resPosts} posts and ${resComments} comments`
}

// result -> post -1, comments – 3
console.log(getQuntityPostsByAuthor(listOfPosts2,'Rimus'))

///// 4 /////

function complexFunction(arg1, arg2) {
    return arg1 + arg2;
  }
  
  function cache(func) {
    var cache = [];
  
    return function (arg1, arg2) {
      for (var i = 0; i < cache.length; i++) {
        if (arguments[0] === cache[i].arg1 && arguments[1] === cache[i].arg2) {
          return cache[i].result;
        }
      }
      var result = func(arg1, arg2);
      cache.push({ arg1: arguments[0], arg2: arguments[1], result });
      return result;
    };
  }
  var cachedFunc = cache(complexFunction);

console.log(cachedFunc('foo', 'bar')) // complexFunction должна выполнится
console.log(cachedFunc('foo', 'bar')) // complexFunction не должна выполняться  				// снова,должен вернуться кеш
console.log(cachedFunc('foo', 'baz')) // complexFunction должна выполнится
//потому что метод не вызывался раньше с этими аргументами

module.exports = {tickets, getSum, getQuntityPostsByAuthor, cache, complexFunction}