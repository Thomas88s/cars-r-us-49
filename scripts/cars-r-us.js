    import { Colors } from "./colors.js"
    import { Interiors } from "./interiors.js"
    import { Technology } from "./technology.js"
    import { Wheels } from "./wheels.js"
    import { Models } from "./models.js"
    import { Orders } from "./orders.js"
    import { addCustomOrder } from "./database.js"

    document.addEventListener(
        "click",
        (event) => {
            if (event.target.id === "orderButton") {
               addCustomOrder()
            }
        }
    )


    export const CarsRUs = () => {
        return `
            <h1 class="header">Cars R Us</h1>
            
            <article class="choices">
                <section class="choices__colors options">
                    <h2>Colors</h2>
                    ${Colors()}
                </section>
                <section class="choices__interiors options">
                    <h2>Interiors</h2>
                    ${Interiors()}
                </section>
                <section class="choices__technology options">
                    <h2>Technology</h2>
                    ${Technology()}
                </section>
                <section class="choices__wheels options">
                    <h2>Wheels</h2>
                    ${Wheels()}
                </section>
            </article>
            <article class="modelSelector">
                ${Models()}
            </article>
            <article>
                <button id="orderButton" class="button">Place Your Order</button>
            </article>    

            <article class="customOrders">
                <h2>Custom Car Orders</h2>
                ${Orders()}    
            </article>
            
            `
    }