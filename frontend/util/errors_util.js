export const ErrorType = errors => {
    if (!errors.responseJSON) {
        return errors.responseText;
    } else {
        return errors.responseJSON;
    }
}