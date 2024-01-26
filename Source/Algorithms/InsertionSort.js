
import { Sorted, Alpha, Beta } from 'Colors'


export default function* (size, items) {

    for (let i = 0; i < size; i++) {

        let temp = items[i];

        yield [Beta, i]

        let j = i - 1;

        for (j = i - 1; j >= 0 && items[j] > temp; j--) {

            items[j + 1] = items[j];

            yield [Alpha, j]
            yield [Beta, j + 1]
            yield [Sorted, j + 1]
            yield [Sorted, j]
        }

        items[j + 1] = temp;

        yield [Beta, i]
        yield [Sorted, i]
        yield [Beta, j + 1]
        yield [Sorted, j + 1]
    }
}
