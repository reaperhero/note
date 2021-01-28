

# basic

interface Person {
  firstName: string
  lastName: string
}

function greeter (person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = {  // 实现接口时候只要保证包含了接口要求的结构就可以
  firstName: 'Yee',
  lastName: 'Huang'
}

console.log(greeter(user))