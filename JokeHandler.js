import { GetRandomJoke } from "./ChuckServise.js";
import { SendMail } from "./EmailSender.js";

function GetAndSendJoke(){
    GetRandomJoke().then(response => {
      SendMail(response);
    })
    .catch(error => {
      console.log(error);
    });
}

export { GetAndSendJoke }