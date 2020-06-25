/** function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>Son las: {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('ciclovida')
  );
}

setInterval(tick, 1000);*/
/** componente a clase 
Crear una clase ES6 con el mismo nombre que herede de React.Component.
Agregar un único método vacío llamado render().
Mover el cuerpo de la función al método render().
Reemplazar props con this.props en el cuerpo de render().
Borrar el resto de la declaración de la función ya vacía.
 */
/**
class Clock extends React.Component {
	constructor(props){
		//Añadir un constructor de clase que asigne el this.state inicial:
		super(props);
		this.state = {date: new Date()}; 
	}
	//metodo que se ejecuta, cada vez que un componente se monta (metodos de ciclo de vida)
	//se ejecuta después que la salida del componente ha sido renderizada en el DOM. Este es un buen lugar para configurar un temporizador:
	componentDidMount(){
		this.timerID = setInterval(
			() => this.tick(),
    		1000
    );
	}
	
	componentWillUnmount(){
		clearInterval(this.timerID);
	}
	//para programar actualizaciones al estado local del componente.
	tick(){
		this.setState({
			date: new Date()
		});
	}
	
	//Reemplazar this.props.date con this.state.date en el método render():
	render (){
		return(
			<div>
				<h1>Hellooo, clock </h1>
				<h2>son las: {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}
ReactDOM.render(
	<Clock />,
	document.getElementById('ciclovida')
);*/
//No modificar directamente, usar setState	
// Incorrecto
//this.state.comment = 'Hello';
// Correcto
//this.setState({comment: 'Hello'});


/**
React puede agrupar varias invocaciones a setState() en una sola actualización para mejorar el rendimiento.
Debido a que this.props y this.state pueden actualizarse de forma asincrónica, no debes confiar en sus valores para 
calcular el siguiente estado.
Por ejemplo, este código puede fallar en actualizar el contador:

 */
// Incorrecto
//this.setState({
//  counter: this.state.counter + this.props.increment,
//});

// Correcto
//this.setState((state, props) => ({
//  counter: state.counter + props.increment
//}));

// Correcto
//this.setState(function(state, props) {
//  return {
//  counter: state.counter + props.increment
//  };
//});

/**
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
 */

/**
Ni los componentes padres o hijos pueden saber si un determinado componente tiene o no tiene estado y 
no les debería importar si se define como una función o una clase.
Por eso es que el estado a menudo se le denomina local o encapsulado. No es accesible desde otro 
componente excepto de aquel que lo posee y lo asigna.
Un componente puede elegir pasar su estado como props a sus componentes hijos:

<FormattedDate date={this.state.date} />

El componente FormattedDate recibiría date en sus props y no sabría si vino del estado de Clock, de los props de Clock, o si se escribió manualmente:
 */

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
/**
ReactDOM.render(
  <Clock />,
  document.getElementById('ciclovida')
); */

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('ciclovida')
);
