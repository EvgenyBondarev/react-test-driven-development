import React from 'react'
import ReactDOM from 'react-dom'
import Appointment from '../src/Appointment'

describe('Appointment', () => {
	let container
	let customer
	let name

	beforeEach(() => {
		container = document.createElement('div')
	})

	const render = (component) => ReactDOM.render(component, container)

	it('renders the client first name', () => {
		name = 'Ashley'
		customer = { firstName: name }
		render(<Appointment customer={customer} />)
		expect(container.textContent).toMatch(name)
	})

	it('renders another client first name', () => {
		name = 'Jordan'
		customer = { firstName: name }
		render(<Appointment customer={customer} />)
		expect(container.textContent).toMatch(name)
	})
})
