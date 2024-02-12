import { IoAddCircleOutline, IoAddOutline, IoRemoveCircleOutline, IoRemoveOutline } from "react-icons/io5";


interface Props {
    quantity: number;
}
export const QuantitySelector = ({quantity}: Props) => {
  return (
    <div className="flex items-center">
        <button>
            <IoRemoveCircleOutline size={ 30 }/>

        </button>

        <span className="w-24 mx-3 px-5 text-center bg-gray-200 h-6 rounded">
            {quantity}
        </span>

        <button>
            <IoAddCircleOutline size={ 30 }/>

        </button>

        
    </div>
  )
}
