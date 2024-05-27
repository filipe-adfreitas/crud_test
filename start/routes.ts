import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
  // Página inicial
  Route.get('/', async () => {
    return { hello: 'Servidor funcionando corretamente' }
  });

  // Rotas de usuários
  Route.group(() => {
    // index, show, store, update, destroy
    Route.resource("/users", "UsersController")
  })

  // Rota de login
  Route.post('/login', 'AutenticationsController.login')

}).prefix('/api')