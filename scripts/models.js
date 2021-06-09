
    import { getModels, setModel } from "./database.js"

    
    document.addEventListener(
        "change",
        (event) => {
            if (event.target.name === "model") {
                setModel(parseInt(event.target.value))
            }
        }
        )
        
     export const Models = () => {
        
        const models = getModels()
        
        let html = "<ul>"
    
        const listItems = models.map(model => {
            return `<li>
                <input type="radio" name="model" value="${model.id}" /> ${model.type}
            </li>`
        })
    
        html += listItems.join("")
        html += "</ul>"
    
        return html
    }
    