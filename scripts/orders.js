
    import { getOrders, getColors, getInteriors, getTechnology, getWheels } from "./database.js"
    

    const orders = getOrders()
    const colors = getColors()
    const interiors = getInteriors()
    const technology = getTechnology()
    const wheels = getWheels()

    const foundColor = colors.find(
        (color) => {
            for (let order of orders) {
                 return color.id === order.colorId
            } 
        }  
    ) 
    const foundInterior = interiors.find(
        (interior) => {
            for (let order of orders) {
                 return interior.id === order.interiorId
            } 
        } 
    )
    const foundTechnology = technology.find(
        (technology) => {
            for (let order of orders) {
                 return technology.id === order.technologyId
            } 
        } 
    )
    const foundWheels = wheels.find(
        (wheel) => {
            for (let order of orders) {
             
                 return wheel.id === order.wheelsId
            
            } 
        }
        
    )
    
  
    const colorCost = foundColor.price 
    const interiorCost = foundInterior.price
    const technologyCost = foundTechnology.price
    const wheelsCost = foundWheels.price    

    const totalCost = colorCost + interiorCost + technologyCost + wheelsCost

    console.log(totalCost)

    const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
    })

    const buildOrderListItem = (order) => {
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
    