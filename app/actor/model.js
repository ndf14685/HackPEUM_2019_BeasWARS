import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    nombre: DS.attr('string'),
    edad: DS.attr('number'),
    aniosExperiencia: DS.attr('number')
});
