// straight up stolen from eevee's js article
export function* enumerate(iterable) {
    let i = 0;
    for (let value of iterable) {
        yield [i, value];
        i++;
    }
}
