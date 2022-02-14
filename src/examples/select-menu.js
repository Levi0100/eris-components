import {Client} from "eris"
import SelectMenu from "../structures/SelectMenu.js"
const client = new Client("The bot token here")

client.on("messageCreate", message => {
    if (message.content.toLowerCase() === '!selectmenu') {
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
})

client.connect().then(console.log("Bot ready!"))