import { store } from '/src/store'
import { Provider } from '/src/adapters/react-redux'
import { Routes } from '/src/adapters/react-router-dom'

const App = () => {
	return (
		<Provider store={store}>
			<div>test</div>
			<div className='App'>
				<h1>Welcome to React Router!</h1>
				<Routes>
					{/* <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} /> */}
				</Routes>
			</div>
		</Provider>
	)
}

export default App
