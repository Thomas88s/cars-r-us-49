    import { Colors } from "./colors.js"
    import { Interiors } from "./interiors.js"
    import { Technology } from "./technology.js"
    import { Wheels } from "./wheels.js"




    export const CarsRUs = () => {
        return `
            <h1>Cars R Us</h1>
            
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
            
            <article>
                <button id="orderButton">Place Your Order</button>
            </article>
            
            `
    }