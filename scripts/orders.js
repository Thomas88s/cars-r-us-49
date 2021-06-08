
    import { getOrders, getColors, getInteriors, getTechnology, getWheels } from "./database.js"
    

    // const orders = getOrders()
    const colors = getColors()
    const interiors = getInteriors()
    const technology = getTechnology()
    const wheels = getWheels()
    const order = getOrders()
    
    
    const buildOrderListItem = (order) => {
        
        const foundColor = colors.find(
            (color) => {
                return color.id === order.colorId     
            }  
        ) 
        
        const foundInterior = interiors.find(
            (interior) => {
                return interior.id === order.interiorId       
            } 
        )
        const foundTechnology = technology.find(
            (technology) => {
                return technology.id === order.technologyId            
            } 
        )
        const foundWheels = wheels.find(
            (wheel) => {
                return wheel.id === order.wheelsId               
            }   
        )
                        
        const totalCost = foundColor.price + foundInterior.price + foundTechnology.price + foundWheels.price
                        
       
                        
        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })




        return `<li>
            Order #${order.id} was placed on ${order.timestamp} and has a total cost of ${costString}
        </li>`
    }
    
    export const Orders = () => {
        /*
            Can you explain why the state variable has to be inside
            the component function for Orders, but not the others?
        */
        const orders = getOrders()
    
        let html = "<ul>"
    
        const listItems = orders.map(buildOrderListItem)
    
        html += listItems.join("")
        html += "</ul>"
    
        return html
    }
    