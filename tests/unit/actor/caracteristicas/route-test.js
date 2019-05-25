import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | actor/caracteristicas', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:actor/caracteristicas');
    assert.ok(route);
  });
});
