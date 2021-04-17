import https from "https";

const url = "https://api.chucknorris.io/jokes/random";

function GetRandomJoke(){
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      res.setEncoding('utf8');
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const joke = JSON.parse(data).value;
          resolve(joke);
        } catch (e) {
          reject(e.message);
        }
      });
    }).on('error', (e) => {
      reject("Error: " + e.message);
    });
  });
}

export { GetRandomJoke };