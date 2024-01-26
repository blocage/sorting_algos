
import { Sorted, Unsorted, Alpha, Beta } from 'Colors'


export default function* sort(size, items, start, end) {

    if (start > end) {
        yield [Sorted, start]
        return
    }

    if (start == end) {
        yield [Sorted, start]
        return
    }

    let pivot = items[start],
        tail = end + 1,
        head = start;

    while (head < tail) {

        do {

            yield [Alpha, head]
            yield [Unsorted, head]

            head++;

        } while (items[head] <= pivot);

        do {

            tail--;

            yield [Beta, tail]
            yield [Unsorted, tail]

        } while (items[tail] > pivot);

        if (head < tail)
            [items[head], items[tail]] = [items[tail], items[head]];
    }

    [items[start], items[tail]] = [items[tail], items[start]];

    yield [Sorted, tail]

    yield* sort(size, items, start, tail - 1);
    yield* sort(size, items, tail + 1, end);
}
