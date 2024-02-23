interface Config{
    endpoint: String;
    apiKey: String;
}

const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
}

//showing error cause it's a read onlyp property
config.endpoint = "fdfd"