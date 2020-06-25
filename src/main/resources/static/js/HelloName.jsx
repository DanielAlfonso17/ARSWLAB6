//2) JSX
/* 
const name = 'Daniel Alfonso';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('one')
);*/


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Daniel',
  lastName: 'Alfonso'
};
/**
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
ReactDOM.render(
  element,
  document.getElementById('one')
);*/


function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const element2 = (
  <h1>
   	{getGreeting(user)}
  </h1>
);

ReactDOM.render(
  element2,
  document.getElementById('one')
);
//Indicar parametros literales entre comillas 
//const element = <div tabIndex="0"></div>;

//insertar como atributo expresion de java scritp 
//const element = <img src={user.avatarUrl}></img>;



/** 
Formas iguales 
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

Ambos crean un objeto asi:

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
*/ 