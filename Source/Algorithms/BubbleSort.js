
import { Sorted, Unsorted, Alpha, Beta } from 'Colors'


export default function* (size, items) {

    for (let i = 0; i < size - 1; i++) {

        for (let j = 0; j < size - i - 1; j++) {

            yield [Alpha, j]
            yield [Beta, j + 1]

            if (items[j] > items[j + 1]) {

                [items[j], items[j + 1]] = [items[j + 1], items[j]];

                yield [Beta, j]
                yield [Alpha, j + 1]
            }

            yield [Unsorted, j]
            yield [Unsorted, j + 1]
        }

        yield [Sorted, size - 1 - i]
    }

    yield [Sorted, 0]
}
