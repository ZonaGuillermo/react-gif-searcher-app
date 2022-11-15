module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFiles: ['./jest.setup.js']  // Solo para usar Fetch API en versiones anteriores a Node 18
}