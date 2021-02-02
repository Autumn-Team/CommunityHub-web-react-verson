export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    }
}

export const checkValidity = (value, rules, CValue1, CValue2) => {
    let isValid = true;

    if (rules.required){
        isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.min) {
        isValid = value >= rules.min && isValid;
    }
    if (rules.max) {
        isValid = value <= rules.max && isValid;
    }
    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }
    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }
    if (rules.comparedPass){
        isValid = (value === CValue1) && isValid
    }
    if (rules.comparedCPass && CValue2 !== ''){
        isValid = (value === CValue2) && isValid
    }

    return isValid;
}
