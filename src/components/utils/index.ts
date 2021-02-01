/**
 * calculateInterest - Function to calculate user intesrest 
 * 
 */
export const calculateInterest = (tags: []): string => {
    let mf = 1;
    let m = 0;
    let item = '';
    for (let i = 0; i < tags.length; i++) {
        for (let j = i; j < tags.length; j++) {
            if (tags[i] == tags[j])
                m++;
            if (mf < m) {
                mf = m;
                item = tags[i];
            }
        }
        m = 0;
    }
    console.log(">>item",item)
    return item;
}