
import { Sorted, Unsorted, Alpha, Beta } from 'Colors'


export default function* (size, items) {

    let index = 0;

    while (index < size) {

        if (items[index] >= items[index - 1] || index == 0) {

            yield [Alpha, index]
            yield [Sorted, index]

            index++;

        } else {

            [items[index], items[index - 1]] = [items[index - 1], items[index]];

            yield [Beta, index]
            yield [Unsorted, index + 1]

            index--;
        }
    }
}
