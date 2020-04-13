/* eslint-disable */


export default function () {

  // 1) Hello wold
  console.log("Hello World!!!!!!")

  // 2) Variables
  // debugger
  // var firstName = "Ivo"
  // var age = 34
  // var isMale = true

  // var something = null
  // var a

  // var person = {
  //   name: "Ivo",
  //   lastname: "Vosahlik"
  // }

  // 3) Functions

  // var person = {
  //   name: "Ivo",
  //   lastName: "Vosahlik"
  // }

  // var person1 = {
  //   name: "Michaela",
  //   lastName: "Vosahlikova"
  // }

  // console.log(person.name)
  // console.log(person['name'])

  // function printUserInfo(user) {
  //   console.log('Hello')
  //   console.log('Hello ' + user.name + ' ' + user.lastName)
  // }
  // debugger
  // printUserInfo(person)
  // printUserInfo(person1)


  // Objects

  // const person = {
  //   firstName: "Ivo",
  //   lastName: "Vosahlik",
  //   age: 34,
  //   printUserInfo() {
  //     console.log(`Hellooo ${this.firstName} ${this.lastName} ${this.age}`)
  //   },
  //   printSomething(callback) {
  //     callback()
  //   },
  //   helpers: {
  //     helperVar: "testing",
  //     helperVar2: "testing 2",
  //     helperFunc: function () {
  //       console.log(this.helperVar)
  //     }
  //   }
  // }

  // person.printUserInfo()
  // person.helpers.helperFunc()

  // console.log('--------')
  // var key = "printUserInfo"
  // var key1 = "printSomething"
  // person[key1](function () {
  //   console.log('Hello World')
  // })


  // Array

  const personList = [{
      firstName: "ivo",
      lastName: "vosahlik"
    },
    {
      firstName: "aaaaa",
      lastName: "vosahlikddd"
    },
    {
      firstName: "ssss",
      lastName: "vosahlikdddsss"
    },
    {
      firstName: "dddd",
      lastName: "vosahlikdddrrrr"
    },
  ]

  // personList.forEach(function (person) {
  //   console.log(person.lastName)
  // })

  // personList.forEach(person => {
  //   console.log(person.firstName)
  // })

  // const personMap = personList.map(person => person.firstName)
  // console.log(personMap)


  // const personFilter = personList.filter(person => person.lastName !== "vosahlik")
  // console.log(personFilter)

  // const persons = personList
  //   .map(person => person.firstName)
  //   .filter(name => name.length > 4)

  // const persons = personList.map(person => person.lastName)

  // console.log(persons)


  const dog = {
    breed: "german shepard",
    age: 5,
    children: 3,
    idAfterInjury: true,
    vacination: {
      vacination1: true,
      vacination2: false
    },
    testFunction: () => "test value 1",
    testFunction1: () => console.log("test value 2")
  }

  const {
    breed,
    age
  } = dog

  console.log(breed)
  console.log(age)


}