import { dropdownSections } from "@/type/type";
import { Dropdown } from "semantic-ui-react";

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