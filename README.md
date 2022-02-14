## English 🇺🇸
  - This repository is for those who want to make components in eris easier, without having to install packages or create the JSON component.
## Portuguese 🇧🇷
  - Este repositório é para quem deseja fazer componentes no eris de forma mais fácil, sem precisar ficar instalando pacotes ou criando os componentes em JSON.
## Installation
```
npm i eris
```

~~~javascript
import Button from "./src/structures/Button.js"
import {Client} from "eris"
import SelectMenu from "./src/structures/SelectMenu.js"
const client = new Client("The bot token here")

client.on("messageCreate", message => {
    switch(message.content.toLowerCase()) {
        case "!button": {
            const button = new Button()
            button.setStyle("LINK")
            button.setLabel("OMG, click this")
            button.setURL("https://discord.gg/7UeV8jFz6m")
    
            message.channel.createMessage({
                content: "Click this",
                components: [button]
            })
        }
        break
        case "!selectmenu": {
            const menu = new SelectMenu()
            menu.setPlaceholder("Select this")
            menu.addOption("Oh, click this", "Click this for select", "option value", "🔥")
            menu.addOption("Another option", "Click this for select", "option value 2", "💧")
            menu.setCustomID("select")
    
            message.channel.createMessage({
                content: "Click this",
                components: [menu]
            })
        }
    }
})

client.connect().then(console.log("Bot ready!"))
~~~