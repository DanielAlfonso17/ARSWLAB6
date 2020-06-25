/**
propiedades props
componente de funcion 
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
} es equivalente a 

componente de clase 
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
 */
/**
- Llamamos a ReactDOM.render() con el elemento <Welcome name="Sara" />.
- React llama al componente Welcome con {name: 'Sara'} como “props”.
- Nuestro componente Welcome devuelve un elemento <h1>Hello, Sara</h1> como resultado.
- React DOM actualiza eficientemente el DOM para que coincida con <h1>Hello, Sara</h1>.
<Welcome /> componente <div/> etiqueta en minuscula etiquetas mayus componente  
 */
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Daniel" />;
/** ReactDOM.render(
  element,
  document.getElementById('componente')
);*/
/** 
function App() {
  return (
    <div>
      <Welcome name="Daniel" />
      <Welcome name="Felipe" />
      <Welcome name="Alfonso" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('componente')
);
*/
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props){
	return (
		<img className="Avatar" 
		src={props.user.avatarUrl} 
		alt={props.user.name}/>
	);
}

function UserInfo(props){
	return (
		<div className="UserInfo">
        	<Avatar user={props.user}/>
        	<div className="UserInfo-name">
          		{props.user.name}
        	</div>
      	</div>
	);
}

function Comment(props) {
  return (
    <div className="Comment">
	  <UserInfo user = {props.author}/>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'Un poco costosa',
  author: {
    name: 'PinarelloDogma',
    avatarUrl: 'https://cdn.brujulabike.com/media/6646/conversions/sin-tituadflo-1000.jpg',
  },
};
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('componente')
);
