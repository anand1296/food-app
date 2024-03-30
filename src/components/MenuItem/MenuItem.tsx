import { useState } from "react"
import { DishInfo } from "../../types/restaurantDetails.model"
import "./MenuItem.css";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/store/cart.slice";


const MenuItem = ({menuItemInfo}: {menuItemInfo: DishInfo}) => {
    const itemImg = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${menuItemInfo.imageId}`;
    const [itemCount, setItemCount] = useState(0);
    const dispatch = useDispatch();

    const updateItemCount = (operation: "ADD" | "REMOVE") => {
        if(operation === "ADD") {
            setItemCount((prev) => prev+1);
            dispatch(addItem({
                id: menuItemInfo.id,
                name: menuItemInfo.name,
                price: menuItemInfo.price || menuItemInfo.defaultPrice
            }));
        }
        else {
            setItemCount((prev) => prev > 0 ? prev-1 : 0);
            dispatch(removeItem({id: menuItemInfo.id}));
        }
    }

  return (
    <div className="w-full flex justify-between py-3 h-[200px]" style={{height: '200px'}}>
        <div className="dish item-details flex flex-col gap-2 w-9/12" style={{width: '75%'}}>
            <img className="pref-icon" src="" alt="" />
            <h3 className="name text-lg font-semibold">{menuItemInfo.name}</h3>
            <h5 className="price font-medium">{menuItemInfo.price ? (menuItemInfo.price/100).toFixed(2) : menuItemInfo.defaultPrice ? (menuItemInfo.defaultPrice/100).toFixed(2) : '--'}</h5>
            <p className="desc font-light">{menuItemInfo.description}</p>
        </div>
        <div className="item-img relative h-[110px]">
            <img src={itemImg} alt="" className="w-[118px] h-[96px] object-cover rounded-md shadow-lg"/>
            <div className="action-btns flex justify-center absolute bottom-0 w-full">
                { (itemCount === 0) ? <button className="dish add-item border rounded-md py-1 px-8 text-orange-300 font-semibold text-lg shadow-md bg-white" onClick={() => updateItemCount("ADD")}>Add</button> :
                <div className="add-remove-items flex border rounded-md py-1 px-3 w-auto text-orange-300 shadow-md bg-white">
                    <button className="decrese-item-btn text-lg font-semibold text-red-600" onClick={() => updateItemCount("REMOVE")}>-</button>
                    <span className="item-count mx-2 px-4 text-lg font-semibold">{itemCount}</span>
                    <button className="increase-item-btn text-lg font-semibold text-green-600" onClick={() => updateItemCount("ADD")}>+</button>
                </div>
            }
            </div>
        </div>
    </div>
  )
}

export default MenuItem