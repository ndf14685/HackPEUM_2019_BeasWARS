import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return [
            {
                nombre: 'david',
                habilidad: 'drama',
                aniosDeExperiencia: 10,                
            },
            {
                nombre: 'manu',
                habilidad: 'terror',
                aniosDeExperiencia: 10,
            }
    ]
    }
});
