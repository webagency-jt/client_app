import swagger from "#config/swagger";
import router from '@adonisjs/core/services/router';
import AutoSwagger from "adonis-autoswagger";

router.get('/', async () => {
  return {
    hello: 'world',
  };
});

const UsersController = () => import('#controllers/users_controller');
router.resource('users', UsersController).apiOnly();

// returns swagger in YAML
router.get("/swagger", async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger);
});

// Renders Swagger-UI and passes YAML-output of /swagger
router.get("/docs", async () => {
  return AutoSwagger.default.ui("/swagger", swagger);
  // return AutoSwagger.default.rapidoc("/swagger", swagger); to use RapiDoc instead
});