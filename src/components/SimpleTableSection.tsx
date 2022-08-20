import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";
import Table, {TableProps} from "./Table";

interface Props {
    icon: IconDefinition;
    titleKey: string;
    table: TableProps;
}

function SimpleTableSection({
   icon,
   titleKey,
   table,
}: Props) {

    const { t } = useTranslation();

    return (
        <div className="section-background">
            <div className="section-title">
                <FontAwesomeIcon icon={icon} /> { t(titleKey) }
            </div>
            <div className="section-content mx-4">
                <Table columnHeaders={table.columnHeaders} rows={table.rows} emptyState={table.emptyState}/>
            </div>
        </div>
    );
}

export default SimpleTableSection;
