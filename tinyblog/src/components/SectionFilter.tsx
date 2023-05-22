import { Dropdown } from "semantic-ui-react";

export const dropdownSections = [
    {
        key: 'all',
        text: 'all',
        value: 'all',
    },
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

type SectionFilterProps = {
    filterChanged: (value: string) => void
}

export default function SectionFilter(props: SectionFilterProps) {

    const { filterChanged } = props;

    return (
        <Dropdown
            placeholder='Select Section'
            fluid
            selection
            options={dropdownSections}
            onChange={(e, data) => {
                const filterValue = data.value as string;
                filterChanged(filterValue);
            }}

        />

    )

}