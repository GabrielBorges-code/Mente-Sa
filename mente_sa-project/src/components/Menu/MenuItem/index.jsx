import List from '@mui/material/List';
import { mainListItems, secondaryListItems } from '../MenuItemsList'
import Divider from '@mui/material/Divider';

function MenuItem() {
    return (
        <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
        </List>
    )
}

export default  MenuItem