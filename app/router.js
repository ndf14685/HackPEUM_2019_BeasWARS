import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('director', function() {
    this.route('castings');
    this.route('sugerencias');
  });
  this.route('espectador');
  this.route('actor', function() {
    this.route('perfil');
    this.route('castings');
  });
});

export default Router;
