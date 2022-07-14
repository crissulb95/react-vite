import { store } from '/src/store'
import { Provider } from '/src/adapters/react-redux'
import { Routes, Route } from '/src/adapters/react-router-dom'
import SignIn from '/src/modules/auth/login/views'

const App = () => {
	return (
		<Provider store={store}>
			<div>test</div>
			<div className='App'>
				<h1>Welcome to React Router!</h1>
				<Routes>
					<Route path='/' element={<SignIn />} />
					{/* 
          <Route path="about" element={<About />} /> */}
				</Routes>
			</div>
		</Provider>
	)
}

export default App
