import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [

            {id: 1, name: 'Holodzilnik'},
            {id: 2, name: 'Holodzilnik'},
            {id: 3, name: 'Holodzilnik'},


        ]
        this._brands = [

            {id:1, name : "Apple"},
            {id:2, name : "Apple"}


        ]
        this._devices = [
            {id:1,name: "A50",price: 25000, rating: 5, img:''},
            {id:1,name: "A51",price: 25000, rating: 3, img:''},
            {id:1,name: "A52",price: 25000, rating: 5, img:''},
            {id:2,name: "A53",price: 25000, rating: 2, img:''},
            {id:3,name: "A53",price: 25000, rating: 2, img:''},
            {id:1,name: "A53",price: 25000, rating: 2, img:''},
            {id:1,name: "A53",price: 25000, rating: 2, img:''},


        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}