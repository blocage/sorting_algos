
import { Sorted, Unsorted, Alpha, Beta } from 'Colors'


export default function* (size, items) {
    const counter = {}
    let max = -1,
        max_index = 0,
        min = 10e6,
        min_index = 0;

    for (let i = 0; i < size; i++) {
        yield [Alpha, i];
        if (items[i] > max) {
            max = items[i];
            max_index = i;
        }
        if (items[i] < min) {
            min = items[i];
            min_index = i;
        }
        if (items[i] in counter)
            counter[items[i]].push(i);
        else
            counter[items[i]] = [i];
    }

    yield [Beta, max_index]
    yield [Beta, min_index]
    let c = 0,
        replaced_index,
        old_items = [...items];
    for (let i = min; i <= max; i++) {
        if (!(i in counter)) continue;
        while (counter[i].length) {
            replaced_index = counter[i].pop();
            yield [Alpha, c];
            yield [Beta, replaced_index];
            yield [Unsorted, c];
            yield [Unsorted, replaced_index];
            [items[c], old_items[replaced_index]] = [old_items[replaced_index], items[c]];
            yield [Beta, replaced_index];
            yield [Sorted, c++];
        }
    }

    for (let i = 0; i < size; i++) {
        yield [Sorted, i];
    }

}
