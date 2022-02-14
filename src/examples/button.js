import {Client} from "eris"
import Button from "../structures/Button.js"
const client = new Client("The bot token here")

client.on("messageCreate", message => {
    if (message.content.toLowerCase() === '!button') {
        const button = new Button()
        button.setStyle("LINK")
        button.setLabel("OMG, click this")
        button.setURL("https://discord.gg/7UeV8jFz6m")

        message.channel.createMessage({
            content: "Click this",
            components: [button]
        })
    }
})

client.connect().then(console.log("Bot ready!"))