"use strict";
/**
 * Real World Example for the Builder design pattern
 *
 * Need: To have a User class with a lot of optional parameters and some complex
 * logic
 *
 * Solution: Create a new class that knows how to build the User by parts
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UserBuilder_user;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBuilder = exports.User = void 0;
/**
 * User concrete class
 */
class User {
    constructor() {
        this.gender = Gender.Undefined;
        this.isAdmin = false;
    }
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    setEmail(email) {
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            throw new Error('Invalid email format');
        }
        this.email = email;
    }
    setGender(gender) {
        this.gender = gender;
    }
    setAddress(streetName, number, city, zipCode, country) {
        this.address = `${streetName} ${number}, ${city} (${zipCode}) ${country}`;
    }
    setIsAdmin(isAdmin) {
        this.isAdmin = isAdmin;
    }
    setPhoneNumber(phoneNumber) {
        if (!/^[+]?[(]?\d{3})?[-\s.]?\d{3}[-\s.]?\d{4,6}$/.test(phoneNumber)) {
            throw new Error('Invalid phone number format');
        }
        this.phoneNumber = phoneNumber;
    }
}
exports.User = User;
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Undefined"] = "Undefined";
})(Gender || (Gender = {}));
/**
 * User concrete Builder
 */
class UserBuilder {
    constructor() {
        _UserBuilder_user.set(this, void 0);
        this.reset();
    }
    reset() {
        __classPrivateFieldSet(this, _UserBuilder_user, new User(), "f");
        return this;
    }
    getProduct() {
        const product = __classPrivateFieldGet(this, _UserBuilder_user, "f");
        this.reset();
        return product;
    }
    setName(name) {
        __classPrivateFieldGet(this, _UserBuilder_user, "f").setName(name);
        return this;
    }
    setSurname(surname) {
        __classPrivateFieldGet(this, _UserBuilder_user, "f").setSurname(surname);
        return this;
    }
    setEmail(email) {
        __classPrivateFieldGet(this, _UserBuilder_user, "f").setEmail(email);
        return this;
    }
    setMaleGender() {
        __classPrivateFieldGet(this, _UserBuilder_user, "f").setGender(Gender.Male);
        return this;
    }
    setFemaleGender() {
        __classPrivateFieldGet(this, _UserBuilder_user, "f").setGender(Gender.Female);
        return this;
    }
    setUndefinedGender() {
        __classPrivateFieldGet(this, _UserBuilder_user, "f").setGender(Gender.Undefined);
        return this;
    }
    setAddress(streetName, number, city, zipCode, country) {
        __classPrivateFieldGet(this, _UserBuilder_user, "f").setAddress(streetName, number, city, zipCode, country);
        return this;
    }
    setIsAdmin() {
        __classPrivateFieldGet(this, _UserBuilder_user, "f").setIsAdmin(true);
        return this;
    }
    setPhoneNumber(phoneNumber) {
        __classPrivateFieldGet(this, _UserBuilder_user, "f").setPhoneNumber(phoneNumber);
        return this;
    }
}
exports.UserBuilder = UserBuilder;
_UserBuilder_user = new WeakMap();
/**
 * The client can create as many users needed and with the parts needed with a
 * single builder
 */
const userBuilder = new UserBuilder();
const user1 = userBuilder
    .setName('Justin')
    .setSurname('Case')
    .setEmail('justin.case@gmail.com')
    .setMaleGender()
    .getProduct();
const user2 = userBuilder
    .setName('Pat')
    .setSurname('Roll')
    .setPhoneNumber('+34555989898')
    .setAddress('Corner Case', 7, 'LA', '08080', 'US')
    .getProduct();
const user3 = userBuilder
    .setEmail('hugo.first@gmail.com')
    .setIsAdmin()
    .getProduct();
