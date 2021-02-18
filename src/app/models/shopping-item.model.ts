//ShoppingItem model

export class ShoppingItem{
    /* In this example we are using a shortcut from Typescript that allow us to represent what would normally be
    export class ShoppingItem{
        public name: String
        public amount: Number
        public unit: String

        constructor(name: String, amount: Number, unit: String){
            this.name = name
            this.amount = amount
            this.unit = unit
        }
    }

    into this
    */
    
    constructor(
        public name: String,
        public amount: Number,
        public unit: String) {}
}