
    const database = {
        
        orderBuilder: {
            colorId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelsId: 1,
            modelId: 1
        },

        colors: [
            {id: 1, name: "Silver", price: 1250},
            {id: 2, name: "Midnight Blue", price: 1150},
            {id: 3, name: "Firebrick Red", price: 1150},
            {id: 4, name: "Spring Green", price: 1100},
        ],

        interiors: [
            {id: 1, type: "Beige Fabric", price: 800},
            {id: 2, type: "Charcoal Fabric", price: 800},
            {id: 3, type: "White Leather", price: 1200},
            {id: 4, type: "Black Leather", price: 1200},
        ],
        
        technology: [
            {id: 1, package: "Basic Package (basic sound system)", price: 700},
            {id: 2, package: "Navigation Package (includes integrated navigation controls)", price: 1000},
            {id: 3, package: "Visibility Package (includes side and rear cameras)", price: 1000},
            {id: 4, package: "Ultra Package (includes navigation and visibility packages)", price: 1900},
        ],
        
        wheels: [
            {id: 1, description: "17-inch Pair Radial", price: 1000},
            {id: 2, description: "17-inch Pair Radial Black", price: 1000},
            {id: 3, description: "18-inch Pair Spoke Silver", price: 1200},
            {id: 4, description: "18-inch Pair Spoke Black", price: 1200},
        ],

        models: [
            {id:1, type: "Sedan"},
            {id:2, type: "SUV"},
            {id:3, type: "Truck"},
            {id:4, type: "Sport"}
        ],
        
        customOrders: [ 
            {
            id: 1,
            colorId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelsId: 1,
            modelId: 1,
            timestamp: 1341123414190
            }
        ]    
    }        


    export const getColors = () => {
        return database.colors.map(color => ({...color}))
    }

    export const getInteriors = () => {
        return database.interiors.map(interior => ({...interior}))
    }

    export const getTechnology = () => {
        return database.technology.map(tech => ({...tech}))
    }

    export const getWheels = () => {
        return database.wheels.map(wheel => ({...wheel}))
    } 
    
    export const getModels = () => {
        return database.models.map(model => ({...model}))
    } 
    

    export const getOrders = () => {
        return database.customOrders.map(order => ({...order}))
    }

    export const setColor = (id) => {
        database.orderBuilder.colorId = id
    }

    export const setInterior = (id) => {
        database.orderBuilder.interiorId = id
    }

    export const setTechnology = (id) => {
        database.orderBuilder.technologyId = id
    }

    export const setWheels = (id) => {
        database.orderBuilder.wheelsId = id
    }
    export const setModel = (id) => {
        database.orderBuilder.modelId = id
    }

    export const addCustomOrder = () => {

        const newOrder = {...database.orderBuilder}

        const lastIndex = database.customOrders.length -1
        newOrder.id = database.customOrders[lastIndex].id + 1

        newOrder.timestamp = Date.now()

        database.customOrders.push(newOrder)

        database.orderBuilder = {}

        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
