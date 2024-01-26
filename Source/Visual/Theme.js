
import { byId } from 'Document'


const { values } = Object;


const sheets = values(document.styleSheets);

const findSheet = (name) =>
    sheets.find((sheet) => sheet.href?.endsWith(`${name}.css`));


const
    lightStyle = findSheet('Light'),
    darkStyle = findSheet('Dark');

const
    light = byId('light'),
    dark = byId('dark');

light.addEventListener('click', () => enableDark(false));
dark.addEventListener('click', () => enableDark(true));


function enableDark(state) {

    lightStyle.disabled = state;
    dark.visible(state);

    darkStyle.disabled = !state;
    light.visible(!state);
}

enableDark(true);
