import {Command, flags} from '@oclif/command'

export default class tellmeajoke extends Command {
  static description = 'this command take random joke from https://www.programmableweb.com/api/geek-joke'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(tellmeajoke)
var request = require('request');	
let options = {
    url: 'https://geek-jokes.sameerkumar.website/api',
    method: 'GET'
}

 request(options, (err, response, body) => {
    //if(!err && response.statusCode == 200)
      //  console.log(body)
	    this.log(body)
});
    
  }
}
