//An exercise during FSM session....turn a 2D array into an object
let citiesInTheWorld = [
  ['Amsterdam', 'The Netherlands'], 
  ['Moscow', 'Russia'],
  ['Los Angeles', 'The United States'], 
  ['Seoul', 'Korea'], 
  ['Jakarta', 'Indonesia']
];

const cites = array =>{

  return array.reduce((obj,val)=> {

    const [key, value] = val

    obj[key] = value

    return obj
  },{})
    
}

console.log(cites(citiesInTheWorld))

