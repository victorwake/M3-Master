const commands = require('./commands/index.js');

const done = function (output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

process.stdout.write('prompt > ');//this is the prompt

// El evento stdin 'data' se dispara cuando el usuario ingresa datos a través del teclado
process.stdin.on('data', (data) => {
    const args = data.toString().trim().split(' '); // echo hola victor --> ['echo', 'hola', 'victor']
    const cmd = args.shift(); // 'echo' --> ['hola', 'victor']


    if(commands[cmd]){//si el comando existe en el objeto commands
        commands[cmd](args, done);//ejecuta la función asociada al comando
    }else{
        done(`${cmd} no es un comando válido`);
    }

    // process.stdout.write('\nprompt > ');//imprime el prompt
});