import { useState } from "react";
import "./App.css";

function App() {
	const estadoInicial = { nombre: "", edad: "", genero: "", provincia: "" };

	const [datosFormulario, setDatosFormulrio] = useState(estadoInicial);
	const [errores, setErrores] = useState(estadoInicial);

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
	};
	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<h2>Formulario</h2>
				<label>
					Nombre
					<input
						type="text"
						name="nombre"
						value={datosFormulario.nombre}
						onChange={handleChange}
					></input>
				</label>
				<label>
					Edad
					<input
						type="number"
						name="edad"
						value={datosFormulario.edad}
						onChange={handleChange}
					></input>
				</label>
				<label>
					Genero:
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
						name="provincia"
						valua={datosFormulario.provincia}
						onChange={handleChange}
					>
						<option value="ba">BA</option>
						<option value="mza">Mendoza</option>
						<option value="cbs">Cordoba</option>
					</select>
				</label>
				<input type="submit" value="enviar" />
			</form>
		</div>
	);
}

export default App;
