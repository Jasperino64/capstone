export function seededRandom(seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export function fetchAPI(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 9; i <= 20; i++) {
        let hour = i <= 12 ? i : i - 12;
        let period = i < 12 ? 'AM' : 'PM';

        if (random() < 0.5) {
            result.push(hour + ':00 ' + period);
        }
        if (random() < 0.5 && i !== 21) {
            result.push(hour + ':30 ' + period);
        }
    }

    return result;
};

export function submitAPI(formData) {
    return true;
};