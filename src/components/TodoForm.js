import React, { Component } from 'react';

class TodoForm extends Component {
	constructor(){
		super();
		this.state = {
			title: '',
			responsable: '',
			description: '',
			priority: ''
		};
		
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(e) {
		const { value, name } = e.target;
		this.setState({
			[name]: value
		})
		console.log(this.state);
	}

	handleSubmit(e) {
		e.preventDefault(); //para evitar refrescar la pagina
		this.props.onAddTodo(this.state);
		console.log("Enviando los datos...");

	}

	render(){
		return (
			<div className="card">
				<form className="card-body" onSubmit={ this.handleSubmit }>
					<div className="form-group">
						<input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Titulo"/>
					</div>
					<div className="form-group">
						<input type="text" name="responsable" onChange={this.handleInput} className="form-control" placeholder="Responsable"/>
					</div>
					<div className="form-group">
						<input type="text" name="description" onChange={this.handleInput} className="form-control" placeholder="Descripcion"/>
					</div>
					<div className="form-group">
						<select name="priority" onChange={this.handleInput} className="form-control">
							<option>low</option>
							<option>medium</option>	
							<option>high</option>
						</select>
					</div>
						<button type="submit" className="btn btn-primary">
						Agregar
						</button>
				</form>	
			</div>
		)
	}
}

export default TodoForm;