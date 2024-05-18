/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.group(()=>{
 
  Route.get('/', async () => {
    return { hello: 'Servidor funcionando corretamente' }
  });

  Route.get('/users/list', 'UsersController.index');

  Route.get('/users/list/:id', 'UsersController.show');

  Route.post("/users/store","UsersController.store").middleware('ValidateUserDatum');

  Route.put('/users/update/:id', 'UsersController.update');

  Route.delete('/users/delete/:id', 'UsersController.destroy')

}).prefix('/api')