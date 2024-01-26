
import { Sorted, Unsorted, Alpha } from 'Colors'


export default function* (size, items) {

    for (let i = 0; i < size - 1; i++) {

        let min = i;

        for (let j = size - 1; j > i; j--) {

            yield [Alpha, j]

            if (items[j] < items[min])
                min = j;

            yield [Unsorted, j]
        }

        [items[i], items[min]] = [items[min], items[i]];

        yield [Sorted, i]

        if (min != i)
            yield [Unsorted, min]
    }

    yield [Sorted, size - 1]
}
