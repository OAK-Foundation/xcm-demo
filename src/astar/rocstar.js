import { TuringStaging, Rocstar } from '../config';
import AstarAutoCompound from './AstarAutoCompound';

const main = async () => {
    const astarAutoCompound = new AstarAutoCompound(TuringStaging, Rocstar);
    await astarAutoCompound.run();
};

main().catch(console.error).finally(() => {
    console.log('Reached the end of main() ...');
    process.exit();
});
