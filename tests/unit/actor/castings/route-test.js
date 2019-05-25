import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | actor/castings', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:actor/castings');
    assert.ok(route);
  });
});
