import DateTimePicker from "./DateTimePicker"
import BahnhofSelector from "./BahnhofSelector"
import SearchButton from "./SearchButton"

const RequestInput = () => {
    return (
        <div>
            <BahnhofSelector />
            <DateTimePicker />
            <SearchButton />
        </div>
    )
}

export default RequestInput