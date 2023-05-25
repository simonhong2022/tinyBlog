export interface ISections {
    key: string,
    text: string,
    value: string
};

export const all: ISections[] =[{
    key: 'all',
    text: 'all',
    value: 'all',
}];

export const sections: ISections[] = [

    {
        key: 'american',
        text: 'american',
        value: 'american',
    },
    {
        key: 'french',
        text: 'french',
        value: 'french',
    },
    {
        key: 'history',
        text: 'history',
        value: 'history',
    },
    {
        key: 'crime',
        text: 'crime',
        value: 'crime',
    },
    {
        key: 'love',
        text: 'love',
        value: 'love',
    }

]
