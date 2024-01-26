
const
    steps = ['/', '-', '\\', '|'],
    text = 'Sorting';


export default function* animation() {

    let progress = 0;

    while (true) {

        const chars = [...text];

        chars[progress % text.length] = steps[progress % 4];

        yield chars.join('');

        progress++;
    }
}
