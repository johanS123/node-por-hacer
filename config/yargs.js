const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: false,
    desc: 'Marca como completado o pendiente'
  }

// definición de comandos
const argv = require('yargs')
                .command('crear', 'Crear un elemento por hacer', {
                  descripcion
                })
                .command('actualizar', 'Actualizar el estado completado de una tarea', {
                  descripcion,
                  completado
                })
                .command('borrar', 'Borra un elemento por hacer', {
                  descripcion
                })
                .help().argv;

module.exports = {
  argv
}
