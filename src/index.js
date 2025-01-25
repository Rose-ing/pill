import { AppRegistry } from 'react-native';
import App from './App';

// Registra la aplicación
AppRegistry.registerComponent('MedicineTracker', () => App);

// Inicia la aplicación web
AppRegistry.runApplication('MedicineTracker', {
  rootTag: document.getElementById('root')
});

// Añade estilos globales para web
const style = document.createElement('style');
style.textContent = `
  html, body, #root {
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1;
  }
  #root {
    flex-direction: column;
  }
`;
document.head.appendChild(style);

if (module.hot) {
  module.hot.accept();
} 