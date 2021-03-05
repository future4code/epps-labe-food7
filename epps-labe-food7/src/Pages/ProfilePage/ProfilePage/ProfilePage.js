import React, { useContext, useState } from 'react';
import GlobalStateContext from '../../../Global/GlobalStateContext';
import { Endereco, Div, H3, Img, DivEditar, Body, DivSup } from './style'
import { useHistory } from 'react-router-dom';


function ProfilePage() {
	const data = useContext(GlobalStateContext)
	const history = useHistory()

	
	return (
		<Body>
			<DivSup>
				<H3> Meu perfil </H3>
			</DivSup>
			<hr />
			<Div>
				<DivEditar>
					<p>{data.states.perfil.name}</p>
					<Img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/78F166E7-C366-4CF8-84DD-C5E788B588EB.svg" onClick={() => { history.push("EditarCadastro") }} />
				</DivEditar>
				<p>{data.states.perfil.email}</p>
				<p>{data.states.perfil.cpf}</p>
			</Div>
			<Endereco>
				<DivEditar>
					<p>Endereço cadastrado</p>
					<Img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/78F166E7-C366-4CF8-84DD-C5E788B588EB.svg" onClick={() => { history.push("Endereco") }} />
				</DivEditar>
				<h5>{data.states.endereco.street}, {data.states.endereco.number} - {data.states.endereco.neighbourhood}</h5>
			</Endereco>
			<Div>
				<p>Histórico de pedidos</p>
				<hr />
				<p>{data.states.historicoDeCompra.map(array => {
					const date = new Date(array.createdAt)
					const tempo = date.toLocaleDateString("pt-br")
					return <div key={array.createdAt}>
						<div>
							name={array.restaurantName}
							tempo={tempo}
							valorTotal={array.totalPrice}
						</div>
					</div>
				})}</p>
			</Div>
		</Body>
	)
}

export default ProfilePage;
