import angular from 'angular';
console.log(angular);


// Import our controllers 

import { MainController} from './controllers/main.controller'
angular
   .module('app',[])
   .controller('MainController', MainController);