import { useState } from "react";
import "./App.css";

function App() {
	//initialState
	const estadoInicial = { nombre: "", edad: "", genero: "", provincia: "" };

	const [datosFormulario, setDatosFormulrio] = useState(estadoInicial);
	const [errors, setErrors] = useState({ estadoInicial });

	const handleChange = (e) => {
		const valorImput = e.target.value;
		const nombreDelInput = e.target.name;
		setDatosFormulrio({
			...datosFormulario,
			[nombreDelInput]: valorImput,
			//[e.target.value]: e.target.name
		});
	};

	const handleSubmit = (e) => {
		e.preventDesault();

		//clase 117
		let errores = { ...estadoInicial };
		Object.keys(datosFormulario).map((key) => {
			if (datosFormulario[key] == "") {
				errores = { ...errores, [key]: `El campo ${key} no puede estar vacio` };
			}
		});
		setErrors({ ...errores });
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<h2>Formulario</h2>
				<label>
					Nombre
					<input
						className={errors.nombre ? "rojo" : "input"}
						type="text"
						name="nombre"
						value={datosFormulario.nombre}
						onChange={handleChange}
					></input>
					{errors.nombre && <h4>{errors.nombre} </h4>}
				</label>
				<label>
					Edad
					<input
						className={errors.edad ? "rojo" : "input"}
						type="number"
						name="edad"
						value={datosFormulario.edad}
						onChange={handleChange}
					></input>
				</label>
				<label>
					<p className={errors.genero ? "rojo" : "input"}>Genero</p>
					<p>Indistinto</p>
					<input
						type="radio"
						value="indistinto"
						name="genero"
						checked={datosFormulario.genero === "indistinto"}
						onChange={handleChange}
					/>
					<p>Masculino</p>
					<input
						type="radio"
						name="genero"
						value="masculino"
						checked={datosFormulario.genero === "masculino"}
						onChange={handleChange}
					/>
					<p>Femenino</p>
					<input
						type="radio"
						name="genero"
						value="femenino"
						checked={datosFormulario.genero === "femenino"}
						onChange={handleChange}
					/>
				</label>
				<label>
					Provincia:
					<select
						className={errors.provincia ? "rojo" : "input"}
						name="provincia"
						valua={datosFormulario.provincia}
						onChange={handleChange}
					>
						<option value="ba">BA</option>
						<option value="mza">Mendoza</option>
						<option value="cbs">Cordoba</option>
					</select>
				</label>
				<input type="submit" value="Enviar" />
			</form>
		</div>
	);
}

export default App;

// Clase 17.
//Objet.keys (saca la clave del objeto, es decir, nombre,edad, provincia)
//Objet.value(saca el valor del objeto, es decir, sofia, 28, cordoba)
//Ponemos en un map.

//comportamientp puede ocurrir cuando aprienta enviar sino cuando sale de foco

//en el estado de error podemos chequemos muchas cosas. Entonces
// Objets.keys pasa a array y seria un for adentro de otro for
