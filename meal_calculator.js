console.log("This is the meal calculator");

function Diner(name){
    this.name = name;
    this.drinks;
    this.appetizer;
    this.entree;
    this.dessert;
    this.totalCost;
    this.totalCostWTax;
    this.tip;
};

var dinnerPartyNames = ['Chad','Rosa','Jose','David','Marcia','Emily'];
var dinnerPartyBill = [];

//Create a table of guests and take their orders
function createTable(guestArrayName, guestArrayBill){
    for(var guestNum = 0; guestNum< guestArrayName.length; guestNum++){
        
        //Create a new dinner object in array
        guestArrayBill[guestNum] = new Diner(guestArrayName[guestNum]);
        
        //Calculate Drinks(If Any)
        var willDrink = Math.random() >= 0.5 ? true : false;
        if(willDrink)
            guestArrayBill[guestNum].drinks = Math.round((Math.random() * 5) * 100) / 100;
        else
            guestArrayBill[guestNum].drinks = 0.0;
        
        //Calculate Appetizer
        guestArrayBill[guestNum].appetizer = (Math.round((Math.random() * 5 + 5) * 100) / 100);
        
        //Calculate Entree
        guestArrayBill[guestNum].entree = (Math.round((Math.random() * 5 + 10) * 100) / 100);
        
        //Calculate Dessert(If Any)
        var willDessert = Math.random() >= 0.5 ? true : false;
        if(willDessert)
            guestArrayBill[guestNum].dessert = Math.round((Math.random() * 5) * 100) / 100;
        else
            guestArrayBill[guestNum].dessert = 0.0;
    };
};
createTable(dinnerPartyNames,dinnerPartyBill);

//Total up each diner's bill and assign it to them
function totalBill(guestArrayBill){
    guestArrayBill.forEach(function(dinner){
        
        //total bill
        dinner.totalCost = round(dinner.drinks + dinner.appetizer + dinner.entree + dinner.dessert, 2);
        
        //total bill with tax
        var taxRate = 7; //in terms of percent
        dinner.totalCostWTax = round((dinner.totalCost * 7 / 100) + dinner.totalCost, 2);
        
        //tip
        var tipRate = 15; //in terms of percent
        dinner.tip = round(dinner.totalCostWTax * tipRate / 100, 2);
        dinner.tip = Math.round(dinner.tip);//round tip up
    });
};
totalBill(dinnerPartyBill);

//Calculate table's total bill
var tableBillTotal = 0.0;

function tableBill(guestArrayBill){
  guestArrayBill.forEach(function(dinner){
      tableBillTotal += dinner.totalCostWTax;
  }); 
  tableBillTotal = round(tableBillTotal, 2);
};
tableBill(dinnerPartyBill);

//Bill print out
console.log("Total cost for the entire table is: $"+ tableBillTotal);
console.log("\n");
dinnerPartyBill.forEach(function(dinner){
    console.log(dinner.name + "'s breakdown is");
    console.log("Drinks: $" + dinner.drinks);
    console.log("Appetizer: $" + dinner.appetizer);
    console.log("Entree: $" + dinner.entree);
    console.log("Dessert: $" + dinner.dessert);
    console.log("-------------------------------");
    console.log("Total Cost: $" + dinner.totalCost);
    console.log("Total Cost W/Tax: $" + dinner.totalCostWTax);
    console.log("Suggested Tip: $"+ dinner.tip);
    console.log("\n");
});

//helper function
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};