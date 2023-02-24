class Address{

    _street="";
    _number=0;
    _zip="";
    _city="";

    constructor(street: string, number: number, city: string,zip: string){
        this._street=street;
        this._number=number;
        this._zip=zip;
        this._city=city;

        this.validate();
    }

    validate() {
        if (this._street.length === 0) {
            throw new Error("Street is required");
        }
        if (this._zip.length === 0) {
            throw new Error("Street cannot be empty");
        }
        if (this._number === 0) {
            throw new Error("Number cannot be negative");
        }
        if(this._city.length===0){
            throw new Error("City cannot be empty");
        }
    }
}