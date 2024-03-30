import { ItemCard, Menu_Cards } from "../../types/restaurantDetails.model"
import MenuItem from "../MenuItem/MenuItem"

const MenuList = ({menuItems}: {menuItems: Array<ItemCard>}) => {
  return (
    <div className="py-3">
            {
                menuItems?.map((item) => (
                  <div data-testid="menu-item" key={item.card.info.id}>
                    <MenuItem menuItemInfo={item.card.info}/>
                    <hr />
                  </div>
                ))
            }
    </div>
  )
}

export default MenuList