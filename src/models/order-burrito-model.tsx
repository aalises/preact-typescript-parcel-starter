
interface validationResponse {
    success: boolean,
    errMsg: string
}

export enum AccessError {
    REQUIRED_FIELDS = "Please select the type and size of your burrito"
}
export class orderBurritoFormModel {
    size: string = '';
    type: string = '';
    toTakeAway: boolean = false;
    comments: string = '';

    static validate(model: orderBurritoFormModel): validationResponse {
        let validationObject = {
            success: false,
            errMsg: ''
        }
        if (!(model.size && model.type)) {
            validationObject.errMsg = AccessError.REQUIRED_FIELDS;
        } else {
            validationObject.success = true;
        }
        return validationObject;
    }
}