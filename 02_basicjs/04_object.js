const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "kanishk raj"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "kanishkraj600@gamil.com",
    fullName:{
        userName:{
            firstname: "kanishk",
            lastName:"raj"
        }
    }
}

console.log(regularUser.fullName); //{ userName: { firstname: 'kanishk', lastName: 'raj' } }
console.log(regularUser.fullName.userName); //{ firstname: 'kanishk', lastName: 'raj' }
console.log(regularUser.fullName.userName.firstname);  // kanishk

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

const obj3 = { obj1, obj2}
console.log(obj3);   // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);  //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj5 = {...obj1, ...obj2}
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(tinderUser);  //{ id: '123abc', name: 'kanishk raj', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));  // [ '123abc', 'kanishk raj', false ]

console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'kanishk raj' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('name')); // ture




const course = {
    courceName: "js in Hindi",
    price: "999",
    courseInstructor: "Kansihk"
}

// course.courseInstructor

const { courseInstructor } = course
console.log(courseInstructor); // kanishk

const { courseInstructor: instructor } = course
console.log(instructor); // kanishk
