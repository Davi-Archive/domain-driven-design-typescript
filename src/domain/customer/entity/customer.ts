class Customer {

    _id: string;
    _name: string;
    _address = "";
    _active = false;

    constructor(id: string, name: string, active: boolean) {
        this._id = id;
        this._name = name;
        this._active = active;

        this.validate();
    }

    validate(): void {
        if (this._name.length === 0) {
            throw new Error("Name cannot be empty");
        }
        if (this._address.length === 0) {
            throw new Error("Address cannot be empty");
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (this._address.length === 0) {
            throw new Error("Address is mandatory to activate customer");
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }
}