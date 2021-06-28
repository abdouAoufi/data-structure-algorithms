class produit {
   constructor(prix , date ){
      this.prix = prix ;
      this.date = date ;
   }
   total(num){
      console.log(num * this.prix)
   }
}