
import { Sorted, Alpha, Beta } from 'Colors'
const { floor, random } = Math

export default function* (size, items) {
    while (!items.slice(1).every((item, i) => items[i] <= item)) {
        yield* shuffle(size, items)
    }
    yield* colorize_bars(size, Alpha)
    yield* colorize_bars(size, Beta)
    yield* colorize_bars(size, Sorted)
}

function* shuffle(size, items) {
    for (let i = 0; i < size; i++) {
        var random_index = floor(random() * size);
        [items[i], items[random_index]] = [items[random_index], items[i]];
        yield [Alpha, i]
        yield [Beta, random_index]
    }
}

function* colorize_bars(size, color) {
    for (let i = 0; i < size; i++)
        yield [color, i]
}
