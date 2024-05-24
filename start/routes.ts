import Route from '@ioc:Adonis/Core/Route';

Route.group(()=>{
 
  Route.get('/', async () => {
    return { hello: 'Servidor funcionando corretamente' }
  });

  Route.group(() => {
    //index, show, store, update, destroy
    Route.resource("/users", "UsersController")
  })

}).prefix('/api')