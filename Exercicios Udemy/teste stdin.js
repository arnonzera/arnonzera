
process.stdout.write("Manda ae um número:\n");
process.stdin.on('data', data => {
    var alguma_coisa = data.toString().replace('\n','');
    process.stdout.write('Seu número é: ' + alguma_coisa + '\n');
    process.exit();
})

